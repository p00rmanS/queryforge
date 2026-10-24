/* Queryforge core: utilities, persistent store, derived data, router. */
(function () {
  var QF = window.QF;

  /* ---------- utilities ---------- */
  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  QF.esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); };
  QF.fmt = function (s) {
    return QF.esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  };
  /* Renders an array of strings; consecutive "::" lines become one <pre>. */
  QF.blocks = function (arr) {
    var out = [], pre = [];
    function flush() { if (pre.length) { out.push('<pre><code>' + QF.esc(pre.join('\n')) + '</code></pre>'); pre = []; } }
    (arr || []).forEach(function (t) {
      if (t.indexOf('::') === 0) pre.push(t.slice(2));
      else { flush(); out.push('<p>' + QF.fmt(t) + '</p>'); }
    });
    flush();
    return out.join('');
  };
  QF.dur = function (m) {
    var h = Math.floor(m / 60), r = m % 60;
    return h ? h + 'h' + (r ? ' ' + r + 'm' : '') : r + 'm';
  };
  QF.hash = function (str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  };
  QF.rng = function (seed) {
    var s = seed >>> 0 || 1;
    return function () { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  };
  QF.today = function () {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  };
  QF.$ = function (s, r) { return (r || document).querySelector(s); };
  QF.$$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- storage with in-memory fallback ---------- */
  var KEY = 'queryforge.v1';
  var mem = null, canStore = true;
  try { var t = '__qf'; window.localStorage.setItem(t, t); window.localStorage.removeItem(t); } catch (e) { canStore = false; }
  function blank() {
    return { user: null, theme: null, enrolled: {}, done: {}, quiz: {}, notes: {}, bookmarks: {}, days: [], lists: {}, tmpl: null, certs: {} };
  }
  function load() {
    if (mem) return mem;
    var raw = null;
    if (canStore) { try { raw = window.localStorage.getItem(KEY); } catch (e) { canStore = false; } }
    try { mem = raw ? Object.assign(blank(), JSON.parse(raw)) : blank(); } catch (e) { mem = blank(); }
    return mem;
  }
  QF.state = function () { return load(); };
  QF.save = function () {
    if (!canStore) return;
    try { window.localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { canStore = false; }
  };
  QF.storageOK = function () { return canStore; };
  QF.resetAll = function () { mem = blank(); QF.save(); };

  /* ---------- derived data ---------- */
  QF.byId = {};
  QF.lessonIndex = [];
  QF.init = function () {
    /* Order the catalog by learning stage (stable), keeping authoring order inside a stage. */
    QF.courses.forEach(function (c, i) { c.stage = c.stage || (QF.stageMap && QF.stageMap[c.slug]) || 2; c._o = i; });
    function pos(c) { var i = (QF.courseOrder || []).indexOf(c.slug); return i < 0 ? 999 + c._o : i; }
    QF.courses.sort(function (a, b) { return a.stage - b.stage || pos(a) - pos(b); });
    QF.courses.forEach(function (c, ci) {
      c.id = c.slug; c.num = ci + 1;
      c.mins = 0; c.lessonCount = 0; c.quizCount = 0;
      c.sections.forEach(function (s, si) {
        s.mins = 0;
        s.lessons.forEach(function (l, li) {
          l.key = c.id + ':' + si + '.' + li; l.si = si; l.li = li; l.courseId = c.id;
          l.id = si + '-' + li;
          var dd = QF.deep && QF.deep[c.slug + '|' + si + '|' + li]; if (dd) l.deep = dd;
          s.mins += l.mins; c.lessonCount++;
          QF.lessonIndex.push({
            course: c, section: s, lesson: l,
            text: (l.title + ' ' + l.obj.join(' ') + ' ' + l.body.join(' ') + ' ' + l.takeaways.join(' ') + ' ' + (l.say || []).join(' ') + ' ' + (l.deep || []).join(' ')).toLowerCase()
          });
        });
        c.mins += s.mins; c.quizCount++;
      });
      /* Authoring order is lopsided; shuffle options with a stable seed so answers are evenly spread. */
      c.sections.forEach(function (s, si) {
        s.quiz.forEach(function (q, qi) {
          if (q.shuffled) return;
          var r = QF.rng(QF.hash(c.id + si + qi)), order = [0, 1, 2, 3];
          for (var i = 3; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = order[i]; order[i] = order[j]; order[j] = t; }
          var correct = q.opts[q.ans];
          q.opts = order.map(function (k) { return q.opts[k]; });
          q.ans = q.opts.indexOf(correct); q.shuffled = true;
        });
      });
      /* Optional deeper material, kept in js/data/deep-*.js as QF.deep['slug|section|lesson'] = [paragraphs]. */
      c.flat = [];
      c.sections.forEach(function (s) { s.lessons.forEach(function (l) { c.flat.push(l); }); });
      var h = QF.hash(c.id);
      c.reviews = [0, 1, 2].map(function (k) {
        var r = QF.reviewPool[(h + k * 2) % QF.reviewPool.length];
        return { name: r.name, text: r.text, stars: k === 2 ? 4 : 5 };
      });
      QF.byId[c.id] = c;
    });
  };

  QF.course = function (id) { return QF.byId[id]; };
  QF.lesson = function (c, id) {
    var p = String(id).split('-'); var s = c.sections[+p[0]];
    return s && s.lessons[+p[1]] || null;
  };
  QF.isDone = function (l) { return !!QF.state().done[l.key]; };
  QF.quizBest = function (c, si) { var q = QF.state().quiz[c.id]; return q && q[si] || null; };
  QF.PASS = 0.6;
  QF.quizPassed = function (c, si) { var b = QF.quizBest(c, si); return !!b && b.score / b.total >= QF.PASS; };
  QF.progress = function (c) {
    var d = c.flat.filter(QF.isDone).length;
    return { done: d, total: c.flat.length, pct: c.flat.length ? Math.round(d / c.flat.length * 100) : 0 };
  };
  QF.quizzesPassed = function (c) { return c.sections.filter(function (s, i) { return QF.quizPassed(c, i); }).length; };
  QF.isComplete = function (c) { var p = QF.progress(c); return p.done === p.total && QF.quizzesPassed(c) === c.sections.length; };
  QF.nextLesson = function (c) {
    for (var i = 0; i < c.flat.length; i++) if (!QF.isDone(c.flat[i])) return c.flat[i];
    return c.flat[0];
  };
  QF.enrolled = function (c) { return !!QF.state().enrolled[c.id]; };

  QF.touchDay = function () {
    var s = QF.state(), t = QF.today();
    if (s.days.indexOf(t) < 0) { s.days.push(t); s.days = s.days.slice(-400); }
  };
  QF.streak = function () {
    var days = QF.state().days, set = {}, n = 0;
    days.forEach(function (d) { set[d] = 1; });
    var d = new Date();
    function key(x) { return x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0'); }
    if (!set[key(d)]) d.setDate(d.getDate() - 1);
    while (set[key(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  };

  QF.badges = function () {
    var s = QF.state();
    var doneN = Object.keys(s.done).length;
    var perfect = false, quizzes = 0;
    Object.keys(s.quiz).forEach(function (cid) {
      Object.keys(s.quiz[cid]).forEach(function (si) { quizzes++; var q = s.quiz[cid][si]; if (q.score === q.total) perfect = true; });
    });
    var completed = QF.courses.filter(QF.isComplete).length;
    var st = QF.streak();
    return [
      { id: 'first', name: 'First step', desc: 'Complete a lesson', got: doneN >= 1 },
      { id: 'ten', name: 'Ten down', desc: 'Complete 10 lessons', got: doneN >= 10 },
      { id: 'ace', name: 'Perfect score', desc: 'Score 5 of 5 on a quiz', got: perfect },
      { id: 'quizzer', name: 'Quiz regular', desc: 'Take 5 quizzes', got: quizzes >= 5 },
      { id: 'streak3', name: 'Three-day run', desc: 'Learn 3 days in a row', got: st >= 3 },
      { id: 'streak7', name: 'Week streak', desc: 'Learn 7 days in a row', got: st >= 7 },
      { id: 'saver', name: 'Curator', desc: 'Bookmark 5 lessons', got: Object.keys(s.bookmarks).length >= 5 },
      { id: 'grad', name: 'Graduate', desc: 'Earn a course certificate', got: completed >= 1 },
      { id: 'trio', name: 'Triple threat', desc: 'Earn 3 certificates', got: completed >= 3 }
    ];
  };

  /* ---------- search ---------- */
  QF.search = function (q) {
    q = (q || '').trim().toLowerCase();
    if (!q) return { courses: [], lessons: [], terms: [] };
    var words = q.split(/\s+/);
    function hit(t) { return words.every(function (w) { return t.indexOf(w) >= 0; }); }
    var courses = QF.courses.filter(function (c) { return hit((c.title + ' ' + c.subtitle + ' ' + c.topic + ' ' + c.track + ' ' + c.desc).toLowerCase()); });
    var lessons = QF.lessonIndex.filter(function (x) { return hit(x.text) || hit((x.course.title + ' ' + x.lesson.title).toLowerCase()); });
    lessons.sort(function (a, b) { return (b.lesson.title.toLowerCase().indexOf(q) >= 0) - (a.lesson.title.toLowerCase().indexOf(q) >= 0); });
    var terms = QF.glossary.filter(function (g) { return hit((g[0] + ' ' + g[1]).toLowerCase()); });
    return { courses: courses, lessons: lessons, terms: terms };
  };

  /* ---------- theme ---------- */
  QF.applyTheme = function () {
    var s = QF.state(), t = s.theme;
    if (!t) { try { t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; } catch (e) { t = 'light'; } }
    document.documentElement.setAttribute('data-theme', t);
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', t === 'dark' ? '#0f1424' : '#ffffff');
    return t;
  };
  QF.toggleTheme = function () {
    var cur = document.documentElement.getAttribute('data-theme');
    QF.state().theme = cur === 'dark' ? 'light' : 'dark';
    QF.save(); QF.applyTheme();
  };

  /* ---------- router ---------- */
  var routes = [];
  QF.route = function (re, fn) { routes.push({ re: re, fn: fn }); };
  QF.parseHash = function () {
    var h = location.hash.replace(/^#/, '') || '/';
    var qi = h.indexOf('?'), path = qi < 0 ? h : h.slice(0, qi), query = {};
    if (qi >= 0) h.slice(qi + 1).split('&').forEach(function (kv) {
      if (!kv) return; var p = kv.split('='); query[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || '').replace(/\+/g, ' '));
    });
    return { path: path, query: query };
  };
  QF.go = function (path) { location.hash = '#' + path; };
  QF.setQuery = function (q) {
    var cur = QF.parseHash(), merged = Object.assign({}, cur.query, q);
    var qs = Object.keys(merged).filter(function (k) { return merged[k] !== '' && merged[k] != null; })
      .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(merged[k]); }).join('&');
    var url = '#' + cur.path + (qs ? '?' + qs : '');
    history.replaceState(null, '', url);
  };

  QF.announce = function (msg) {
    var el = document.getElementById('live'); if (!el) return;
    el.textContent = ''; setTimeout(function () { el.textContent = msg; }, 30);
  };

  var lastPath = null;
  QF.dispatch = function () {
    var p = QF.parseHash(), main = document.getElementById('main');
    var found = null;
    for (var i = 0; i < routes.length; i++) {
      var m = routes[i].re.exec(p.path);
      if (m) { found = { fn: routes[i].fn, m: m }; break; }
    }
    var result = found ? found.fn(found.m.slice(1), p.query) : { title: 'Not found', html: QF.views.notFound() };
    main.innerHTML = result.html;
    document.title = result.title + ' | Queryforge';
    document.body.setAttribute('data-page', result.page || '');
    QF.$$('[data-nav]').forEach(function (a) {
      var on = result.nav && a.getAttribute('data-nav') === result.nav;
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    var nav = document.getElementById('site-nav'); if (nav) nav.classList.remove('open');
    var tg = document.getElementById('nav-toggle'); if (tg) tg.setAttribute('aria-expanded', 'false');
    if (result.after) result.after();
    if (p.path !== lastPath) {
      window.scrollTo(0, 0);
      var h1 = main.querySelector('h1');
      if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
      QF.announce(result.title);
    }
    lastPath = p.path;
  };
  window.addEventListener('hashchange', function () { QF.dispatch(); });
})();
