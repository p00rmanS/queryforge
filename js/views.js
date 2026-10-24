/* Queryforge views. Each view returns { title, html, nav, page, after }. */
(function () {
  var QF = window.QF, esc = QF.esc, fmt = QF.fmt;
  var V = (QF.views = {});

  /* ---------- icons ---------- */
  var IC = {
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/>',
    check: '<path d="M4 12.5l5 5L20 6.5"/>',
    bookmark: '<path d="M6 3h12v18l-6-4.5L6 21z"/>',
    play: '<path d="M8 5v14l11-7z"/>',
    arrow: '<path d="M4 12h16M14 6l6 6-6 6"/>',
    back: '<path d="M20 12H4M10 6l-6 6 6 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    star: '<path d="M12 3l2.7 5.8 6.3.7-4.7 4.3 1.3 6.2L12 17l-5.6 3 1.3-6.2L3 9.5l6.3-.7z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    print: '<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01"/>',
    flame: '<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="1"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>'
  };
  function icon(n, cls, fill) {
    return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false"' +
      (fill ? ' fill="currentColor"' : ' fill="none"') + ' stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + IC[n] + '</svg>';
  }
  QF.icon = icon;
  QF.logo = function (size) {
    return '<svg class="logo-mark" width="' + size + '" height="' + size + '" viewBox="0 0 40 40" aria-hidden="true" focusable="false">' +
      '<rect width="40" height="40" rx="9" fill="var(--logo-bg)"/>' +
      '<circle cx="18" cy="18" r="9.5" fill="none" stroke="var(--logo-fg)" stroke-width="3.2"/>' +
      '<path d="M12.5 21l3.2-3.4 2.6 2.4 4.2-5.2" fill="none" stroke="var(--logo-hi)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M25.3 25.3L33 33" stroke="var(--logo-fg)" stroke-width="3.6" stroke-linecap="round"/></svg>';
  };

  /* ---------- generated course artwork (color = learning stage, motif varies by course) ---------- */
  var STAGE_PAL = { 1: ['#ffe45e', '#172036', '#ff6b4a'], 2: ['#bdeedb', '#0b4f43', '#ffe45e'], 3: ['#c4dcff', '#17338a', '#ff6b4a'], 4: ['#ffc9b8', '#7a2410', '#ffe45e'] };
  function art(c) {
    var r = QF.rng(QF.hash(c.id + 'art')), p = STAGE_PAL[c.stage] || STAGE_PAL[2], W = 400, H = 225, ink = p[1], pop = p[2], s = '', i;
    var motif = QF.hash(c.id) % 3, sw = 'stroke="' + ink + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
    for (i = 1; i < 8; i++) s += '<line x1="' + (i * 50) + '" y1="0" x2="' + (i * 50) + '" y2="' + H + '" stroke="' + ink + '" stroke-opacity=".08"/>';
    for (i = 1; i < 5; i++) s += '<line x1="0" y1="' + (i * 45) + '" x2="' + W + '" y2="' + (i * 45) + '" stroke="' + ink + '" stroke-opacity=".08"/>';
    if (motif === 0) {
      var n = 8, hi = 4 + Math.floor(r() * 3);
      for (i = 0; i < n; i++) {
        var bh = Math.round((0.18 + (i / n) * 0.5 + r() * 0.2) * 150), x = 52 + i * 38, y = 190 - bh;
        s += '<rect x="' + x + '" y="' + y + '" width="28" height="' + bh + '" rx="3" fill="' + (i === hi ? pop : 'none') + '" ' + sw + '/>';
      }
      s += '<path d="M34 192 L372 190" ' + sw + '/>';
    } else if (motif === 1) {
      var pts = [], d = '';
      for (i = 0; i < 8; i++) pts.push([44 + i * 44, 176 - (i * 14 + r() * 38)]);
      pts.forEach(function (q, k) { d += (k ? ' L' : 'M') + q[0].toFixed(0) + ' ' + q[1].toFixed(0); });
      s += '<path d="' + d + '" fill="none" ' + sw + '/>';
      pts.forEach(function (q, k) { s += '<circle cx="' + q[0].toFixed(0) + '" cy="' + q[1].toFixed(0) + '" r="' + (k === 6 ? 11 : 5) + '" fill="' + (k === 6 ? pop : p[0]) + '" ' + sw + '/>'; });
      s += '<path d="M34 196 L372 196" ' + sw + '/>';
    } else {
      [86, 60, 36, 13].forEach(function (rad, k) { s += '<circle cx="262" cy="112" r="' + rad + '" fill="' + (k % 2 ? pop : 'none') + '" ' + sw + '/>'; });
      s += '<path d="M120 190 L256 118" ' + sw + '/><path d="M120 190 l14 -3 M120 190 l5 -13" ' + sw + '/>';
    }
    s += '<text x="22" y="40" class="art-hand" fill="' + ink + '">stage ' + c.stage + ' · ' + esc(c.track) + '</text>';
    return '<svg class="art" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><rect width="' + W + '" height="' + H + '" fill="' + p[0] + '"/>' + s + '</svg>';
  }
  QF.art = art;

  /* ---------- shared fragments ---------- */
  function stars(rating) {
    return '<span class="rating" title="Sample rating"><span class="sr-only">Rated </span>' + icon('star', '', true) + '<b>' + rating.toFixed(1) + '</b></span>';
  }
  function bar(pct, label) {
    return '<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '" aria-label="' + esc(label || 'Progress') + '"><span style="width:' + pct + '%"></span></div>';
  }
  function tag(c) { return '<span class="tag tag-' + c.track.toLowerCase() + '">' + c.track + '</span>'; }
  QF.card = function (c, opts) {
    opts = opts || {};
    var p = QF.progress(c), enrolled = QF.enrolled(c);
    return '<article class="card stage-' + c.stage + '">' +
      '<div class="card-art">' + art(c) + '</div>' +
      '<div class="card-body">' +
      '<p class="kicker">' + tag(c) + '<span>' + esc(c.level) + '</span></p>' +
      '<h3><a class="stretch" href="#/course/' + c.id + '">' + esc(c.title) + '</a></h3>' +
      '<p class="card-sub">' + esc(c.subtitle) + '</p>' +
      '<ul class="meta"><li>' + icon('clock') + QF.dur(c.mins) + '</li><li>' + icon('list') + c.lessonCount + ' lessons</li><li>' + stars(c.rating) + '</li></ul>' +
      (enrolled && !opts.noProgress ? '<div class="card-progress">' + bar(p.pct, c.title + ' progress') + '<span>' + p.pct + '% complete</span></div>' : '') +
      '</div></article>';
  };
  function crumbs(list) {
    return '<nav class="crumbs" aria-label="Breadcrumb"><ol>' + list.map(function (x, i) {
      return '<li>' + (x[1] && i < list.length - 1 ? '<a href="' + x[1] + '">' + esc(x[0]) + '</a>' : '<span aria-current="page">' + esc(x[0]) + '</span>') + '</li>';
    }).join('') + '</ol></nav>';
  }
  function pageHead(eyebrow, title, lede) {
    return '<header class="page-head"><div class="wrap"><p class="eyebrow">' + esc(eyebrow) + '</p><h1>' + title + '</h1>' + (lede ? '<p class="lede">' + lede + '</p>' : '') + '</div></header>';
  }
  function totals() {
    var l = 0, q = 0, m = 0;
    QF.courses.forEach(function (c) { l += c.lessonCount; q += c.quizCount * 5; m += c.mins; });
    return { courses: QF.courses.length, lessons: l, questions: q, hours: Math.round(m / 60), terms: QF.glossary.length };
  }

  /* ================= HOME ================= */
  function stairsSvg() {
    var steps = [['1', 'Start from zero', '#ffe45e', 90], ['2', 'Learn the craft', '#bdeedb', 160], ['3', 'Go deeper', '#c4dcff', 230], ['4', 'Client-ready', '#ffc9b8', 300]], s = '';
    steps.forEach(function (st, i) {
      var x = 20 + i * 122, y = 392 - st[3];
      s += '<a href="#/courses?stage=' + st[0] + '" aria-label="Stage ' + st[0] + ': ' + st[1] + '"><rect class="stair-r" x="' + x + '" y="' + y + '" width="122" height="' + st[3] + '" rx="8" fill="' + st[2] + '"/>' +
        '<text class="stair-n" x="' + (x + 16) + '" y="' + (y + 40) + '">' + st[0] + '</text><text class="stair-t" x="' + (x + 16) + '" y="' + (y + 64) + '">' + st[1] + '</text></a>';
    });
    s += '<path class="stair-flag" d="M451 92 L451 46 M451 46 L492 58 L451 72"/>' +
      '<text class="stair-hand" x="40" y="206">you are here</text><path class="stair-arrow" d="M70 214 C 78 238, 86 262, 94 296 M94 296 l-9 -12 M94 296 l12 -8"/>' +
      '<text class="stair-hand" x="372" y="36">first client!</text>';
    return '<svg viewBox="0 0 520 410" focusable="false">' + s + '</svg>';
  }
  QF.route(/^\/$/, function () {
    var t = totals();
    var html =
      '<section class="hero"><div class="wrap hero-grid">' +
      '<div class="hero-copy">' +
      '<h1>Learn SEO and paid search <span class="scribble">from zero</span>, then walk into client calls like you have done it for years.</h1>' +
      '<p class="lede">Start with what a website even is. Finish knowing how to run campaigns, write proposals, explain bad news and answer every awkward question a client can throw at you. No experience needed.</p>' +
      '<div class="hero-cta"><a class="btn btn-primary btn-lg" href="#/paths?p=zero-to-hired">I am brand new</a><a class="btn btn-ghost btn-lg" href="#/course/client-questions-answered">I have a client soon</a></div>' +
      '<form class="hero-search" role="search" data-form="search"><label for="hero-q" class="sr-only">Search courses and lessons</label>' +
      '<input id="hero-q" name="q" type="search" placeholder="Looking for something? Try &quot;canonical tag&quot;" autocomplete="off">' +
      '<button class="btn btn-ghost" type="submit">Search</button></form></div>' +
      '<figure class="stairs">' + stairsSvg() + '<figcaption class="sr-only">Four stages: start from zero, learn the craft, go deeper, be client-ready.</figcaption></figure>' +
      '</div></section>' +

      '<section class="facts" aria-label="What is inside"><div class="wrap"><ul>' +
      '<li><b>' + t.courses + '</b> courses</li><li><b>' + t.lessons + '</b> lessons</li><li><b>' + t.hours + '</b> hours of reading</li><li><b>' + t.questions + '</b> quiz questions</li><li><b>' + t.terms + '</b> glossary terms</li></ul></div></section>' +

      '<section class="block"><div class="wrap"><h2 class="block-title">Where are you right now?</h2><p class="block-sub">Pick the one that sounds like you. You can change your mind any time.</p>' +
      '<div class="chooser">' +
      '<a class="choice c1" href="#/paths?p=zero-to-hired"><h3>I have never done any of this</h3><p>Start with the internet, math, writing and tools. It is the full ladder, with no skipped steps.</p><span class="link-arrow">Open the Zero to Hired path ' + icon('arrow') + '</span></a>' +
      '<a class="choice c2" href="#/courses?stage=2"><h3>I know the basics and want real skills</h3><p>Keyword research, on-page SEO, Google Ads, analytics and local search, step by step.</p><span class="link-arrow">See the craft courses ' + icon('arrow') + '</span></a>' +
      '<a class="choice c4" href="#/course/client-questions-answered"><h3>I have a client meeting this week</h3><p>Scripts for the questions clients really ask, plus what never to say. Read it tonight.</p><span class="link-arrow">Open Client Questions ' + icon('arrow') + '</span></a>' +
      '</div></div></section>' +

      QF.stages.map(function (st) {
        var cs = QF.courses.filter(function (c) { return c.stage === st.n; }), hrs = Math.round(cs.reduce(function (a, c) { return a + c.mins; }, 0) / 60);
        return '<section class="block stage-block s' + st.n + '"><div class="wrap"><div class="stage-head"><span class="stage-n">' + st.n + '</span><div><h2>' + esc(st.name) + '</h2><p>' + esc(st.blurb) + '</p></div><a class="link-arrow" href="#/courses?stage=' + st.n + '">' + cs.length + ' courses · ' + hrs + ' h ' + icon('arrow') + '</a></div>' +
          '<div class="grid grid-3">' + cs.slice(0, 3).map(function (c) { return QF.card(c); }).join('') + '</div></div></section>';
      }).join('') +

      '<section class="block block-tint"><div class="wrap"><h2 class="block-title">What a lesson looks like</h2><p class="block-sub">Every lesson follows the same simple pattern, so you always know where you are.</p>' +
      '<ul class="parts">' +
      [['y', 'What you will be able to do', 'Goals first, so you know why you are reading.'], ['w', 'The idea', 'Plain explanation with comparisons, no assumed knowledge.'], ['w', 'Worked example', 'A real situation with numbers, code or markup.'], ['t', 'Say it to the client', 'Words you can actually use in a meeting.'], ['c', 'Avoid the cringe', 'The mistakes that make professionals look careless.'], ['m', 'Try it yourself', 'A short checklist to do on a real site.']]
        .map(function (p) { return '<li class="part p-' + p[0] + '"><b>' + p[1] + '</b><span>' + p[2] + '</span></li>'; }).join('') + '</ul></div></section>' +

      '<section class="block"><div class="wrap split"><div><h2>Never get caught off guard</h2><p class="lede">Clients ask the same awkward questions again and again. Our Client Questions course gives you honest answers to practice out loud, so "I will get back to you" is a choice, not a panic.</p><a class="btn btn-primary" href="#/course/client-questions-answered">Open the question bank</a></div>' +
      '<div class="chat" role="group" aria-label="Example conversation between a client and an SEO consultant">' +
      '<p class="bubble client"><b>Client</b>Can you guarantee we will be number one on Google?</p>' +
      '<p class="bubble you"><b>You</b>I cannot honestly promise a position, because Google decides and competitors keep improving. What I can promise is a clear plan, the work done on time, and monthly reports that show real progress.</p>' +
      '<p class="bubble client"><b>Client</b>Our last agency promised first page in 30 days.</p>' +
      '<p class="bubble you"><b>You</b>That is possible for tiny, very specific searches, but nobody can promise it for the ones that matter. I would rather give you an honest timeline and beat it.</p></div></div></section>' +

      '<section class="block block-tint"><div class="wrap"><h2 class="block-title">Guided paths</h2><p class="block-sub">Not sure what order to learn things in? These are in a sensible order already.</p>' +
      '<div class="path-list">' + QF.paths.map(function (p) {
        var hrs = Math.round(p.courses.reduce(function (a, id) { return a + QF.course(id).mins; }, 0) / 60);
        return '<a class="path-row" href="#/paths?p=' + p.id + '"><span class="path-t"><b>' + esc(p.title) + '</b><small>' + esc(p.blurb) + '</small></span><span class="path-m">' + p.courses.length + ' courses · ' + hrs + ' h</span>' + icon('arrow') + '</a>';
      }).join('') + '</div></div></section>' +

      '<section class="block"><div class="wrap"><h2 class="block-title">What learners say <em class="pill">Sample</em></h2><p class="note">These are placeholder quotes written for this demo, not real reviews.</p>' +
      '<div class="quotes">' + QF.testimonials.map(function (q) {
        return '<figure class="quote"><blockquote>' + esc(q.q) + '</blockquote><figcaption>' + esc(q.who) + ', ' + esc(q.role) + '</figcaption></figure>';
      }).join('') + '</div></div></section>' +

      '<section class="cta"><div class="wrap"><h2>Pick a lesson. Do the first one tonight.</h2><p>Free, and your progress stays in your browser. This is a demo platform, so there is nothing to pay and nothing to sign.</p>' +
      '<div class="cta-actions"><a class="btn btn-accent btn-lg" href="#/course/how-the-internet-works">Start from zero</a><a class="btn btn-ghost-light btn-lg" href="#/courses">Browse everything</a></div></div></section>';
    return { title: 'Learn SEO and PPC from zero', html: html, nav: 'home', page: 'home' };
  });

  /* ================= CATALOG ================= */
  function topics() {
    var s = {}; QF.courses.forEach(function (c) { s[c.topic] = 1; }); return Object.keys(s).sort();
  }
  function filterCourses(q) {
    var term = (q.q || '').toLowerCase().trim(), words = term ? term.split(/\s+/) : [];
    var out = QF.courses.filter(function (c) {
      if (q.stage && c.stage !== +q.stage) return false;
      if (q.track && c.track !== q.track) return false;
      if (q.level && c.level !== q.level) return false;
      if (q.topic && c.topic !== q.topic) return false;
      if (q.rating && c.rating < parseFloat(q.rating)) return false;
      if (q.dur) {
        var h = c.mins / 60;
        if (q.dur === 's' && h >= 2.5) return false;
        if (q.dur === 'm' && (h < 2.5 || h >= 3.5)) return false;
        if (q.dur === 'l' && h < 3.5) return false;
      }
      if (words.length) {
        var hay = (c.title + ' ' + c.subtitle + ' ' + c.topic + ' ' + c.desc + ' ' + c.sections.map(function (s) { return s.title + ' ' + s.lessons.map(function (l) { return l.title; }).join(' '); }).join(' ')).toLowerCase();
        if (!words.every(function (w) { return hay.indexOf(w) >= 0; })) return false;
      }
      return true;
    });
    if (q.sort === 'rating') out.sort(function (a, b) { return b.rating - a.rating; });
    else if (q.sort === 'short') out.sort(function (a, b) { return a.mins - b.mins; });
    else if (q.sort === 'long') out.sort(function (a, b) { return b.mins - a.mins; });
    return out;
  }
  function sel(name, label, opts, val) {
    return '<div class="field"><label for="f-' + name + '">' + label + '</label><select id="f-' + name + '" name="' + name + '">' +
      opts.map(function (o) { return '<option value="' + esc(o[0]) + '"' + (String(val || '') === o[0] ? ' selected' : '') + '>' + esc(o[1]) + '</option>'; }).join('') + '</select></div>';
  }
  V.catalogResults = function (q) {
    var list = filterCourses(q), active = ['stage', 'track', 'level', 'topic', 'dur', 'rating', 'q'].filter(function (k) { return q[k]; }).length;
    var head = '<p class="result-count" aria-live="polite"><b>' + list.length + '</b> of ' + QF.courses.length + ' courses' + (active ? ' <button class="linklike" type="button" data-action="clear-filters">Clear filters</button>' : '') + '</p>';
    if (!list.length) return head + '<div class="empty"><h3>Nothing matches those filters</h3><p>Loosen a filter or clear the search to see everything.</p><button class="btn btn-primary" type="button" data-action="clear-filters">Clear filters</button></div>';
    if (q.sort) return head + '<div class="grid grid-3">' + list.map(function (c) { return QF.card(c); }).join('') + '</div>';
    return head + QF.stages.map(function (st) {
      var cs = list.filter(function (c) { return c.stage === st.n; });
      if (!cs.length) return '';
      return '<section class="stage-group s' + st.n + '" aria-labelledby="sg' + st.n + '"><div class="stage-head"><span class="stage-n">' + st.n + '</span><div><h2 id="sg' + st.n + '">' + esc(st.name) + '</h2><p>' + esc(st.blurb) + '</p></div></div><div class="grid grid-3">' + cs.map(function (c) { return QF.card(c); }).join('') + '</div></section>';
    }).join('');
  };
  QF.route(/^\/courses$/, function (_, q) {
    var html = pageHead('Catalog', 'All the courses', 'Ordered in four stages, from "what is a website" to running real client accounts. Ratings are sample data for this demo.') +
      '<div class="wrap catalog">' +
      '<form class="filterbar" id="filters" role="search" aria-label="Filter courses" onsubmit="return false">' +
      '<div class="field grow"><label for="f-q">Search</label><input id="f-q" name="q" type="search" value="' + esc(q.q || '') + '" placeholder="A topic, tool or lesson"></div>' +
      sel('stage', 'Stage', [['', 'All stages']].concat(QF.stages.map(function (s) { return [String(s.n), s.n + '. ' + s.name]; })), q.stage) +
      sel('track', 'Track', [['', 'SEO and SEM'], ['SEO', 'SEO'], ['SEM', 'SEM']], q.track) +
      sel('level', 'Level', [['', 'All levels'], ['Beginner', 'Beginner'], ['Intermediate', 'Intermediate'], ['Advanced', 'Advanced']], q.level) +
      sel('topic', 'Topic', [['', 'All topics']].concat(topics().map(function (t) { return [t, t]; })), q.topic) +
      sel('dur', 'Length', [['', 'Any length'], ['s', 'Under 2.5 hours'], ['m', '2.5 to 3.5 hours'], ['l', 'Over 3.5 hours']], q.dur) +
      sel('rating', 'Rating', [['', 'Any rating'], ['4.5', '4.5 and up'], ['4.7', '4.7 and up'], ['4.8', '4.8 and up']], q.rating) +
      sel('sort', 'Sort', [['', 'By stage'], ['rating', 'Highest rated'], ['short', 'Shortest first'], ['long', 'Longest first']], q.sort) +
      '</form><div id="results">' + V.catalogResults(q) + '</div></div>';
    return {
      title: 'Course catalog', html: html, nav: 'courses', page: 'catalog',
      after: function () {
        var f = document.getElementById('filters'), t;
        function read() {
          var o = {}; ['q', 'stage', 'track', 'level', 'topic', 'dur', 'rating', 'sort'].forEach(function (k) { o[k] = f.elements[k].value; });
          return o;
        }
        function apply() { var o = read(); QF.setQuery(o); document.getElementById('results').innerHTML = V.catalogResults(o); }
        f.addEventListener('input', function (e) { clearTimeout(t); t = setTimeout(apply, e.target.name === 'q' ? 160 : 0); });
        f.addEventListener('change', apply);
      }
    };
  });

  /* ================= COURSE DETAIL ================= */
  QF.route(/^\/course\/([\w-]+)$/, function (a) {
    var c = QF.course(a[0]); if (!c) return { title: 'Not found', html: V.notFound() };
    var ins = QF.instructors[c.instructor], p = QF.progress(c), enrolled = QF.enrolled(c), next = QF.nextLesson(c);
    var cta = enrolled
      ? '<a class="btn btn-primary btn-block" href="#/learn/' + c.id + '/' + next.id + '">' + (p.done ? 'Continue learning' : 'Start course') + ' ' + icon('arrow') + '</a>'
      : '<button class="btn btn-primary btn-block" type="button" data-action="enroll" data-course="' + c.id + '">Enroll for free</button>';
    var html =
      '<header class="course-hero"><div class="wrap course-hero-grid"><div>' + crumbs([['Courses', '#/courses'], [c.title]]) +
      '<p class="kicker">' + tag(c) + '<span>' + esc(c.level) + '</span><span>' + esc(c.topic) + '</span></p>' +
      '<h1>' + esc(c.title) + '</h1><p class="lede">' + esc(c.subtitle) + '</p>' +
      '<ul class="meta meta-lg"><li>' + stars(c.rating) + ' <small>sample rating</small></li><li>' + icon('clock') + QF.dur(c.mins) + '</li><li>' + icon('list') + c.lessonCount + ' lessons</li><li>' + c.sections.length + ' quizzes</li></ul>' +
      '<p class="by">Taught by <a href="#instructor">' + esc(ins.name) + '</a>, ' + esc(ins.role) + '</p></div>' +
      '<aside class="enroll-card"><div class="card-art">' + art(c) + '</div><div class="enroll-body">' +
      (enrolled ? '<p class="small-label">Your progress</p>' + bar(p.pct, 'Course progress') + '<p class="muted">' + p.done + ' of ' + p.total + ' lessons · ' + QF.quizzesPassed(c) + ' of ' + c.sections.length + ' quizzes passed</p>' : '<p class="price">Free <small>demo enrollment</small></p>') +
      cta +
      (QF.isComplete(c) ? '<a class="btn btn-ghost btn-block" href="#/certificate/' + c.id + '">View certificate</a>' : '') +
      '<ul class="includes"><li>' + c.lessonCount + ' written lessons with worked examples</li><li>' + c.sections.length + ' section quizzes with explanations</li><li>Notes, bookmarks and progress saved locally</li><li>Printable certificate on completion</li></ul></div></aside></div></header>' +

      '<div class="wrap detail-grid"><div class="detail-main">' +
      '<section aria-labelledby="learn-h"><h2 id="learn-h">What you will learn</h2><ul class="ticks">' + c.learn.map(function (x) { return '<li>' + icon('check') + '<span>' + esc(x) + '</span></li>'; }).join('') + '</ul></section>' +
      '<section aria-labelledby="about-h"><h2 id="about-h">About this course</h2><p class="prose-p">' + esc(c.desc) + '</p></section>' +
      '<section aria-labelledby="req-h"><h2 id="req-h">Requirements</h2><ul class="bullets">' + c.reqs.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></section>' +
      '<section aria-labelledby="cur-h"><div class="cur-head"><h2 id="cur-h">Curriculum</h2><p class="muted">' + c.sections.length + ' sections · ' + c.lessonCount + ' lessons · ' + QF.dur(c.mins) + '</p></div><div class="accordion">' +
      c.sections.map(function (s, si) {
        var doneN = s.lessons.filter(QF.isDone).length, best = QF.quizBest(c, si);
        return '<details' + (si === 0 ? ' open' : '') + '><summary><span class="sec-n">' + String(si + 1).padStart(2, '0') + '</span><span class="sec-t">' + esc(s.title) + '</span><span class="sec-m">' + s.lessons.length + ' lessons · ' + QF.dur(s.mins) + (enrolled ? ' · ' + doneN + '/' + s.lessons.length : '') + '</span></summary><ul class="lesson-list">' +
          s.lessons.map(function (l) {
            return '<li><a href="#/learn/' + c.id + '/' + l.id + '"><span class="dot' + (QF.isDone(l) ? ' done' : '') + '">' + (QF.isDone(l) ? icon('check') : '') + '</span><span class="lt">' + esc(l.title) + '</span><span class="ld">' + l.mins + ' min</span></a></li>';
          }).join('') +
          '<li class="quiz-row"><a href="#/quiz/' + c.id + '/' + si + '"><span class="dot' + (QF.quizPassed(c, si) ? ' done' : '') + '">' + (QF.quizPassed(c, si) ? icon('check') : '?') + '</span><span class="lt">Section quiz · 5 questions</span><span class="ld">' + (best ? best.score + '/' + best.total : '5 min') + '</span></a></li></ul></details>';
      }).join('') + '</div></section>' +
      '<section id="instructor" aria-labelledby="ins-h"><h2 id="ins-h">Your instructor</h2><div class="instructor"><div class="avatar" aria-hidden="true">' + esc(ins.name.split(' ').map(function (w) { return w[0]; }).join('')) + '</div><div><h3>' + esc(ins.name) + '</h3><p class="muted">' + esc(ins.role) + ' · ' + ins.years + ' years in search</p><p>' + esc(ins.bio) + '</p><p class="note">Instructors are fictional characters created for this demo.</p></div></div></section>' +
      '<section aria-labelledby="rev-h"><h2 id="rev-h">Reviews <em class="pill">Sample</em></h2><p class="note">Sample reviews written for this demo. They are not from real learners.</p><div class="reviews">' +
      c.reviews.map(function (r) {
        return '<figure class="review"><div class="review-top"><b>' + esc(r.name) + '</b><span class="stars" role="img" aria-label="' + r.stars + ' out of 5">' + new Array(r.stars + 1).join(icon('star', '', true)) + '</span></div><blockquote>' + esc(r.text) + '</blockquote></figure>';
      }).join('') + '</div></section></div></div>';
    return { title: c.title, html: html, nav: 'courses', page: 'course' };
  });

  /* ================= LESSON PLAYER ================= */
  function sequence(c) {
    var seq = [];
    c.sections.forEach(function (s, si) {
      s.lessons.forEach(function (l) { seq.push({ type: 'lesson', l: l }); });
      seq.push({ type: 'quiz', si: si });
    });
    return seq;
  }
  function seqHref(c, it) { return it.type === 'lesson' ? '#/learn/' + c.id + '/' + it.l.id : '#/quiz/' + c.id + '/' + it.si; }
  function seqLabel(c, it) { return it.type === 'lesson' ? it.l.title : 'Quiz: ' + c.sections[it.si].title; }
  function sidebar(c, cur) {
    var p = QF.progress(c);
    return '<div class="side-head"><a class="side-course" href="#/course/' + c.id + '">' + esc(c.title) + '</a>' + bar(p.pct, 'Course progress') + '<p class="muted">' + p.done + ' of ' + p.total + ' lessons complete</p></div>' +
      c.sections.map(function (s, si) {
        var open = cur ? cur.si === si : si === 0;
        return '<details class="side-sec"' + (open ? ' open' : '') + '><summary><span class="sec-n">' + String(si + 1).padStart(2, '0') + '</span> ' + esc(s.title) + '</summary><ul>' +
          s.lessons.map(function (l) {
            var here = cur && cur.key === l.key;
            return '<li><a href="#/learn/' + c.id + '/' + l.id + '"' + (here ? ' aria-current="page"' : '') + '><span class="dot' + (QF.isDone(l) ? ' done' : '') + '">' + (QF.isDone(l) ? icon('check') : '') + '</span><span class="lt">' + esc(l.title) + '</span><span class="ld">' + l.mins + 'm</span></a></li>';
          }).join('') +
          '<li class="quiz-row"><a href="#/quiz/' + c.id + '/' + si + '"><span class="dot' + (QF.quizPassed(c, si) ? ' done' : '') + '">' + (QF.quizPassed(c, si) ? icon('check') : '?') + '</span><span class="lt">Section quiz</span></a></li></ul></details>';
      }).join('');
  }
  V.playerBtns = function (c, l) {
    var done = QF.isDone(l), bm = !!QF.state().bookmarks[l.key];
    return '<button class="btn ' + (done ? 'btn-done' : 'btn-primary') + '" type="button" data-action="complete" data-key="' + l.key + '" aria-pressed="' + done + '">' + icon('check') + (done ? 'Completed' : 'Mark complete') + '</button>' +
      '<button class="btn btn-ghost" type="button" data-action="bookmark" data-key="' + l.key + '" aria-pressed="' + bm + '">' + icon('bookmark', bm ? 'filled' : '', bm) + (bm ? 'Bookmarked' : 'Bookmark') + '</button>';
  };
  QF.route(/^\/learn\/([\w-]+)\/(\d+-\d+)$/, function (a) {
    var c = QF.course(a[0]), l = c && QF.lesson(c, a[1]);
    if (!l) return { title: 'Lesson not found', html: V.notFound() };
    var s = c.sections[l.si], seq = sequence(c), idx = -1;
    seq.forEach(function (it, i) { if (it.type === 'lesson' && it.l.key === l.key) idx = i; });
    var prev = seq[idx - 1], nxt = seq[idx + 1], st = QF.state();
    var checks = st.lists['L:' + l.key] || {};
    var html =
      '<div class="player"><aside class="player-side" aria-label="Course curriculum"><details class="side-toggle" id="side-toggle"><summary>' + icon('list') + ' Curriculum</summary><div class="side-body">' + sidebar(c, l) + '</div></details></aside>' +
      '<article class="player-main"><div class="player-inner">' + crumbs([[c.title, '#/course/' + c.id], [s.title]]) +
      '<div class="video" id="video"><div class="video-poster">' + art(c) + '</div><button class="video-play" type="button" data-action="video" aria-label="Play lesson video (placeholder)">' + icon('play', '', true) + '</button><div class="video-msg" id="video-msg" aria-live="polite"></div><div class="video-bar"><span class="video-title">' + esc(l.title) + '</span><span>' + l.mins + ':00</span></div></div>' +
      (!QF.enrolled(c) ? '<div class="banner"><span>You are previewing this lesson. Enroll to save your progress.</span><button class="btn btn-small btn-primary" type="button" data-action="enroll" data-course="' + c.id + '" data-stay="1">Enroll for free</button></div>' : '') +
      '<p class="kicker"><span>Section ' + (l.si + 1) + ' · Lesson ' + (l.li + 1) + ' of ' + s.lessons.length + '</span><span>' + l.mins + ' min read</span></p>' +
      '<h1>' + esc(l.title) + '</h1>' +
      '<div class="actions" id="player-actions">' + V.playerBtns(c, l) + '</div>' +
      '<div class="lesson">' +
      '<section class="objectives"><h2>What you will be able to do</h2><ul>' + l.obj.map(function (o) { return '<li>' + fmt(o) + '</li>'; }).join('') + '</ul></section>' +
      '<section><h2>The idea</h2>' + QF.blocks(l.body) + '</section>' +
      '<section class="example"><h2>Worked example</h2>' + QF.blocks(l.example) + '</section>' +
      (l.deep ? '<details class="deep"><summary>Go deeper: how experts handle the edge cases</summary><div class="deep-body">' + QF.blocks(l.deep) + '</div></details>' : '') +
      (l.say ? '<section class="say"><h2>Say it to the client</h2>' + l.say.map(function (x) { return '<p class="bubble you">' + fmt(x) + '</p>'; }).join('') + '</section>' : '') +
      (l.oops ? '<section class="oops"><h2>Avoid the cringe</h2><p>' + fmt(l.oops) + '</p></section>' : '') +
      '<section><h2>Try it yourself</h2><ul class="checklist">' + l.exercise.map(function (x, i) {
        return '<li><label><input type="checkbox" data-action="lesson-check" data-key="' + l.key + '" data-i="' + i + '"' + (checks[i] ? ' checked' : '') + '><span>' + fmt(x) + '</span></label></li>';
      }).join('') + '</ul></section>' +
      '<section class="takeaways"><h2>Remember this</h2><ol>' + l.takeaways.map(function (x) { return '<li>' + fmt(x) + '</li>'; }).join('') + '</ol></section></div>' +
      '<section class="notes"><h2><label for="notes">Your notes</label></h2><textarea id="notes" rows="5" data-key="' + l.key + '" placeholder="Jot down questions, ideas, or things to try. Saved automatically in this browser.">' + esc(st.notes[l.key] || '') + '</textarea><p class="muted" id="notes-status" aria-live="polite"></p></section>' +
      '<nav class="pager" aria-label="Lesson navigation">' +
      (prev ? '<a class="btn btn-ghost" href="' + seqHref(c, prev) + '">' + icon('back') + '<span><small>Previous</small>' + esc(seqLabel(c, prev)) + '</span></a>' : '<span></span>') +
      (nxt ? '<a class="btn btn-primary" href="' + seqHref(c, nxt) + '"><span><small>' + (nxt.type === 'quiz' ? 'Up next: section quiz' : 'Next') + '</small>' + esc(seqLabel(c, nxt)) + '</span>' + icon('arrow') + '</a>' : '<a class="btn btn-primary" href="#/course/' + c.id + '"><span><small>Finished</small>Back to course</span>' + icon('arrow') + '</a>') +
      '</nav></div></article></div>';
    return {
      title: l.title + ' · ' + c.title, html: html, nav: 'courses', page: 'player',
      after: function () {
        var d = document.getElementById('side-toggle');
        if (d && window.matchMedia('(min-width: 960px)').matches) d.open = true;
        var cur = document.querySelector('.player-side [aria-current="page"]');
        if (cur && cur.scrollIntoView) { try { cur.scrollIntoView({ block: 'nearest' }); } catch (e) { } }
      }
    };
  });

  /* ================= QUIZ ================= */
  function quizForm(c, si) {
    var s = c.sections[si];
    return '<form id="quiz-form" novalidate>' + s.quiz.map(function (q, i) {
      return '<fieldset class="q"><legend><span class="q-n">Question ' + (i + 1) + ' of 5</span>' + fmt(q.q) + '</legend>' +
        q.opts.map(function (o, k) { return '<label class="opt"><input type="radio" name="q' + i + '" value="' + k + '"><span class="opt-l">' + 'ABCD'[k] + '</span><span>' + fmt(o) + '</span></label>'; }).join('') + '</fieldset>';
    }).join('') + '<p class="form-error" id="quiz-error" role="alert"></p><button class="btn btn-primary" type="submit">Submit answers</button></form>';
  }
  V.quizResult = function (c, si, answers) {
    var s = c.sections[si], score = 0;
    s.quiz.forEach(function (q, i) { if (answers[i] === q.ans) score++; });
    var pass = score / 5 >= QF.PASS;
    return { score: score, pass: pass, html:
      '<div class="result ' + (pass ? 'pass' : 'fail') + '"><p class="score"><b>' + score + '</b><span>/ 5</span></p><div><h2>' + (score === 5 ? 'Perfect score' : pass ? 'Passed' : 'Not quite yet') + '</h2><p>' + (pass ? 'You answered ' + score + ' of 5 correctly. Review the explanations below, then continue.' : 'You need 3 of 5 to pass. Read the explanations, revisit the lessons, and try again.') + '</p></div></div>' +
      '<ol class="review-list">' + s.quiz.map(function (q, i) {
        var ok = answers[i] === q.ans;
        return '<li class="' + (ok ? 'ok' : 'bad') + '"><p class="rq">' + fmt(q.q) + '</p><p><span class="chip ' + (ok ? 'chip-ok' : 'chip-bad') + '">' + (ok ? 'Correct' : 'Incorrect') + '</span> Your answer: <b>' + fmt(q.opts[answers[i]]) + '</b></p>' +
          (ok ? '' : '<p>Correct answer: <b>' + fmt(q.opts[q.ans]) + '</b></p>') + '<p class="why"><b>Why:</b> ' + fmt(q.why) + '</p></li>';
      }).join('') + '</ol>' };
  };
  QF.route(/^\/quiz\/([\w-]+)\/(\d+)$/, function (a) {
    var c = QF.course(a[0]), si = +a[1], s = c && c.sections[si];
    if (!s) return { title: 'Quiz not found', html: V.notFound() };
    var best = QF.quizBest(c, si), seq = sequence(c), idx = 0;
    seq.forEach(function (it, i) { if (it.type === 'quiz' && it.si === si) idx = i; });
    var prev = seq[idx - 1], nxt = seq[idx + 1];
    var html = '<div class="wrap quiz-wrap">' + crumbs([[c.title, '#/course/' + c.id], ['Quiz ' + (si + 1)]]) +
      '<p class="eyebrow">Section ' + (si + 1) + ' quiz</p><h1>' + esc(s.title) + '</h1>' +
      '<p class="lede">Five multiple-choice questions. You need 3 correct to pass. ' + (best ? 'Your best so far: <b>' + best.score + '/' + best.total + '</b>.' : '') + '</p>' +
      '<div id="quiz-body">' + quizForm(c, si) + '</div>' +
      '<nav class="pager" aria-label="Quiz navigation">' + (prev ? '<a class="btn btn-ghost" href="' + seqHref(c, prev) + '">' + icon('back') + '<span><small>Previous</small>' + esc(seqLabel(c, prev)) + '</span></a>' : '<span></span>') +
      (nxt ? '<a class="btn btn-primary" href="' + seqHref(c, nxt) + '"><span><small>Next</small>' + esc(seqLabel(c, nxt)) + '</span>' + icon('arrow') + '</a>' : '<a class="btn btn-primary" href="#/course/' + c.id + '"><span><small>Finished</small>Back to course</span>' + icon('arrow') + '</a>') + '</nav></div>';
    return {
      title: 'Quiz: ' + s.title, html: html, nav: 'courses', page: 'quiz',
      after: function () {
        document.getElementById('quiz-form').addEventListener('submit', function (e) {
          e.preventDefault();
          var ans = [], missing = 0;
          s.quiz.forEach(function (q, i) {
            var r = document.querySelector('input[name="q' + i + '"]:checked');
            if (r) ans.push(+r.value); else { ans.push(-1); missing++; }
          });
          if (missing) { document.getElementById('quiz-error').textContent = 'Please answer all questions. ' + missing + ' left.'; return; }
          var res = V.quizResult(c, si, ans), st = QF.state();
          st.quiz[c.id] = st.quiz[c.id] || {};
          var prevBest = st.quiz[c.id][si];
          if (!prevBest || res.score >= prevBest.score) st.quiz[c.id][si] = { score: res.score, total: 5, at: Date.now() };
          QF.touchDay(); QF.save();
          var wasComplete = !!st.certs[c.id];
          document.getElementById('quiz-body').innerHTML = res.html +
            '<div class="actions"><button class="btn btn-ghost" type="button" data-action="retake">Retake quiz</button>' +
            (QF.isComplete(c) ? '<a class="btn btn-accent" href="#/certificate/' + c.id + '">' + (wasComplete ? 'View certificate' : 'Course complete: get your certificate') + '</a>' : '') + '</div>';
          QF.announce('Quiz scored ' + res.score + ' out of 5. ' + (res.pass ? 'Passed.' : 'Not passed.'));
          var h = document.querySelector('.result'); if (h) { h.setAttribute('tabindex', '-1'); h.focus(); }
        });
      }
    };
  });

  /* ================= PATHS ================= */
  QF.route(/^\/paths$/, function (_, query) {
    var html = pageHead('Learning paths', 'A clear order, start to finish', 'Paths sequence courses so each builds on the last. Enroll in a whole path with one click and track progress across it.') +
      '<div class="wrap paths">' + QF.paths.map(function (p) {
        var cs = p.courses.map(QF.course), mins = cs.reduce(function (a, c) { return a + c.mins; }, 0);
        var tot = 0, dn = 0; cs.forEach(function (c) { var q = QF.progress(c); tot += q.total; dn += q.done; });
        var pct = tot ? Math.round(dn / tot * 100) : 0;
        return '<section class="path" id="' + p.id + '" aria-labelledby="h-' + p.id + '"><div class="path-intro"><p class="eyebrow">' + esc(p.level) + '</p><h2 id="h-' + p.id + '">' + esc(p.title) + '</h2><p>' + esc(p.blurb) + '</p>' +
          '<p class="outcome"><b>Outcome:</b> ' + esc(p.outcome) + '</p><p class="muted">' + cs.length + ' courses · ' + QF.dur(mins) + '</p>' +
          (dn ? bar(pct, p.title + ' progress') + '<p class="muted">' + pct + '% complete</p>' : '') +
          '<button class="btn btn-primary" type="button" data-action="enroll-path" data-path="' + p.id + '">Enroll in this path</button></div>' +
          '<ol class="path-steps">' + cs.map(function (c, i) {
            var q = QF.progress(c);
            return '<li><span class="step-n">' + (i + 1) + '</span><div class="step-b"><a href="#/course/' + c.id + '"><b>' + esc(c.title) + '</b></a><span class="muted">' + tag(c) + ' ' + esc(c.level) + ' · ' + QF.dur(c.mins) + (QF.enrolled(c) ? ' · ' + q.pct + '%' : '') + '</span></div></li>';
          }).join('') + '</ol></section>';
      }).join('') + '</div>';
    return {
      title: 'Learning paths', html: html, nav: 'paths', page: 'paths',
      after: function () {
        if (query.p) { var el = document.getElementById(query.p); if (el) el.scrollIntoView(); }
      }
    };
  });

  /* ================= DASHBOARD ================= */
  QF.route(/^\/dashboard$/, function () {
    var st = QF.state(), enrolled = QF.courses.filter(QF.enrolled);
    var done = Object.keys(st.done).length, passed = 0;
    QF.courses.forEach(function (c) { passed += QF.quizzesPassed(c); });
    var certs = QF.courses.filter(QF.isComplete), bms = Object.keys(st.bookmarks);
    var name = st.user && st.user.name ? st.user.name.split(' ')[0] : null;
    var badges = QF.badges();
    var html = pageHead('Dashboard', name ? 'Welcome back, ' + esc(name) : 'Your learning dashboard', st.user ? 'Pick up where you left off.' : 'Progress is saved in this browser. <button class="linklike" type="button" data-action="signin">Sign in (mock)</button> to put your name on certificates.') +
      '<div class="wrap dash">' +
      '<dl class="kpis"><div><dt>Day streak</dt><dd>' + icon('flame') + QF.streak() + '</dd></div><div><dt>Lessons completed</dt><dd>' + done + '</dd></div><div><dt>Quizzes passed</dt><dd>' + passed + '</dd></div><div><dt>Certificates</dt><dd>' + certs.length + '</dd></div></dl>' +
      '<section aria-labelledby="my-h"><h2 id="my-h">My courses</h2>' +
      (enrolled.length ? '<div class="enrolled">' + enrolled.map(function (c) {
        var p = QF.progress(c), n = QF.nextLesson(c);
        return '<article class="erow"><div class="erow-art">' + art(c) + '</div><div class="erow-b"><h3><a href="#/course/' + c.id + '">' + esc(c.title) + '</a></h3><div class="card-progress">' + bar(p.pct, c.title + ' progress') + '<span>' + p.pct + '%</span></div><p class="muted">' + p.done + '/' + p.total + ' lessons · ' + QF.quizzesPassed(c) + '/' + c.sections.length + ' quizzes</p></div>' +
          '<div class="erow-a">' + (QF.isComplete(c) ? '<a class="btn btn-accent btn-small" href="#/certificate/' + c.id + '">Certificate</a>' : '<a class="btn btn-primary btn-small" href="#/learn/' + c.id + '/' + n.id + '">' + (p.done ? 'Continue' : 'Start') + '</a>') + '</div></article>';
      }).join('') + '</div>' : '<div class="empty"><h3>You have not enrolled in anything yet</h3><p>Enrollment is free and instant in this demo.</p><a class="btn btn-primary" href="#/courses">Browse courses</a></div>') + '</section>' +
      '<section aria-labelledby="badge-h"><h2 id="badge-h">Badges</h2><ul class="badges">' + badges.map(function (b) {
        return '<li class="' + (b.got ? 'got' : '') + '"><span class="badge-i">' + (b.got ? icon('check') : icon('lock')) + '</span><b>' + esc(b.name) + '</b><small>' + esc(b.desc) + '</small><span class="sr-only">' + (b.got ? 'Earned' : 'Locked') + '</span></li>';
      }).join('') + '</ul></section>' +
      '<section aria-labelledby="cert-h"><h2 id="cert-h">Certificates</h2>' + (certs.length ? '<ul class="plain-list">' + certs.map(function (c) { return '<li><a href="#/certificate/' + c.id + '">' + esc(c.title) + '</a><span class="muted">Completed</span></li>'; }).join('') + '</ul>' : '<p class="muted">Finish every lesson and pass every section quiz in a course to earn its certificate.</p>') + '</section>' +
      '<section aria-labelledby="bm-h"><h2 id="bm-h">Bookmarked lessons</h2>' + (bms.length ? '<ul class="plain-list">' + bms.map(function (k) {
        var x = QF.lessonIndex.filter(function (i) { return i.lesson.key === k; })[0]; if (!x) return '';
        return '<li><a href="#/learn/' + x.course.id + '/' + x.lesson.id + '">' + esc(x.lesson.title) + '</a><span class="muted">' + esc(x.course.title) + '</span></li>';
      }).join('') + '</ul>' : '<p class="muted">Bookmark lessons from the player to find them here.</p>') + '</section>' +
      '<section class="data-box" aria-labelledby="data-h"><h2 id="data-h">Your data</h2><p class="muted">' + (QF.storageOK() ? 'Everything is stored in this browser only. Clearing site data erases it.' : 'Your browser blocked local storage, so progress lasts only until you close this tab.') + '</p><div class="actions">' +
      (st.user ? '<button class="btn btn-ghost btn-small" type="button" data-action="signout">Sign out</button>' : '') +
      '<button class="btn btn-ghost btn-small" type="button" data-action="reset">Reset all progress</button></div></section></div>';
    return { title: 'Dashboard', html: html, nav: 'dashboard', page: 'dashboard' };
  });

  /* ================= CERTIFICATE ================= */
  QF.route(/^\/certificate\/([\w-]+)$/, function (a) {
    var c = QF.course(a[0]); if (!c) return { title: 'Not found', html: V.notFound() };
    var st = QF.state();
    if (!QF.isComplete(c)) {
      var p = QF.progress(c);
      return { title: 'Certificate locked', nav: 'dashboard', html: '<div class="wrap narrow">' + crumbs([[c.title, '#/course/' + c.id], ['Certificate']]) + '<p class="eyebrow">Not yet</p><h1>Certificate locked</h1><p class="lede">To earn the ' + esc(c.title) + ' certificate, complete every lesson and pass every section quiz.</p>' +
        '<ul class="req-list"><li class="' + (p.done === p.total ? 'ok' : '') + '">Lessons: <b>' + p.done + ' of ' + p.total + '</b></li><li class="' + (QF.quizzesPassed(c) === c.sections.length ? 'ok' : '') + '">Quizzes passed: <b>' + QF.quizzesPassed(c) + ' of ' + c.sections.length + '</b></li></ul><a class="btn btn-primary" href="#/learn/' + c.id + '/' + QF.nextLesson(c).id + '">Continue learning</a></div>' };
    }
    if (!st.certs[c.id]) { st.certs[c.id] = { at: Date.now() }; QF.save(); }
    var when = new Date(st.certs[c.id].at), nm = st.user && st.user.name;
    var id = 'QF-' + QF.hash(c.id + (nm || '')).toString(36).toUpperCase().padStart(7, '0').slice(0, 7);
    var dateStr = when.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    var ins = QF.instructors[c.instructor];
    var html = '<div class="wrap cert-wrap"><div class="cert-tools no-print">' + crumbs([[c.title, '#/course/' + c.id], ['Certificate']]) +
      '<div class="actions"><div class="field inline"><label for="cert-name">Name on certificate</label><input id="cert-name" type="text" value="' + esc(nm || '') + '" placeholder="Your full name" autocomplete="name"></div><button class="btn btn-primary" type="button" data-action="print">' + icon('print') + 'Print or save as PDF</button></div></div>' +
      '<article class="cert" aria-label="Certificate of completion"><div class="cert-in">' +
      '<header class="cert-head">' + QF.logo(44) + '<span class="cert-brand">Queryforge</span></header>' +
      '<p class="cert-kicker">Certificate of completion</p><p class="cert-pre">This certifies that</p><p class="cert-name" id="cert-name-out">' + esc(nm || 'Your name here') + '</p>' +
      '<p class="cert-pre">has completed all ' + c.lessonCount + ' lessons and passed all ' + c.sections.length + ' section quizzes of</p><h1 class="cert-course">' + esc(c.title) + '</h1>' +
      '<p class="cert-sub">' + esc(c.level) + ' · ' + QF.dur(c.mins) + ' of instruction</p>' +
      '<footer class="cert-foot"><div><b>' + dateStr + '</b><span>Date of completion</span></div><div class="seal" aria-hidden="true"><svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="40" cy="40" r="29" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2 3"/><path d="M26 42l9 9 19-22" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><b>' + esc(ins.name) + '</b><span>Instructor (fictional)</span></div></footer>' +
      '<p class="cert-id">Certificate ID ' + id + ' · Demo certificate, not an accredited credential</p></div></article></div>';
    return { title: 'Certificate: ' + c.title, html: html, nav: 'dashboard', page: 'certificate' };
  });

  /* ================= GLOSSARY ================= */
  V.glossaryList = function (q, track) {
    q = (q || '').toLowerCase();
    var items = QF.glossary.slice().sort(function (a, b) { return a[0].localeCompare(b[0]); }).filter(function (g) {
      return (!track || g[2] === track || g[2] === 'Both') && (!q || (g[0] + ' ' + g[1]).toLowerCase().indexOf(q) >= 0);
    });
    if (!items.length) return '<div class="empty"><h3>No terms found</h3><p>Try a shorter search.</p></div>';
    var groups = {};
    items.forEach(function (g) { var l = /[a-z]/i.test(g[0][0]) ? g[0][0].toUpperCase() : '#'; (groups[l] = groups[l] || []).push(g); });
    return Object.keys(groups).sort().map(function (l) {
      return '<section class="gloss-group" aria-labelledby="g-' + l + '"><h2 id="g-' + l + '">' + l + '</h2><dl>' + groups[l].map(function (g) {
        return '<div><dt>' + esc(g[0]) + ' <span class="pill pill-' + g[2].toLowerCase() + '">' + g[2] + '</span></dt><dd>' + fmt(g[1]) + '</dd></div>';
      }).join('') + '</dl></section>';
    }).join('');
  };
  QF.route(/^\/glossary$/, function (_, q) {
    var letters = {}; QF.glossary.forEach(function (g) { letters[g[0][0].toUpperCase()] = 1; });
    var html = pageHead('Glossary', QF.glossary.length + ' terms, defined plainly', 'Search or filter the vocabulary of SEO and SEM.') +
      '<div class="wrap gloss"><form class="gloss-tools" role="search" onsubmit="return false"><div class="field"><label for="g-q">Search terms</label><input id="g-q" type="search" value="' + esc(q.q || '') + '" placeholder="e.g. canonical"></div>' +
      sel('g-track', 'Track', [['', 'SEO and SEM'], ['SEO', 'SEO'], ['SEM', 'SEM']], q.track).replace('name="g-track"', 'name="g-track"') + '</form>' +
      '<nav class="az" aria-label="Jump to letter">' + Object.keys(letters).sort().map(function (l) { return '<a href="#g-' + l + '" data-jump="g-' + l + '">' + l + '</a>'; }).join('') + '</nav>' +
      '<div id="gloss-list">' + V.glossaryList(q.q, q.track) + '</div></div>';
    return {
      title: 'Glossary', html: html, nav: 'glossary', page: 'glossary',
      after: function () {
        var qi = document.getElementById('g-q'), tr = document.getElementById('f-g-track');
        function go() { QF.setQuery({ q: qi.value, track: tr.value }); document.getElementById('gloss-list').innerHTML = V.glossaryList(qi.value, tr.value); }
        qi.addEventListener('input', go); tr.addEventListener('change', go);
        QF.$$('[data-jump]').forEach(function (a) {
          a.addEventListener('click', function (e) { e.preventDefault(); var el = document.getElementById(a.getAttribute('data-jump')); if (el) { el.scrollIntoView(); el.setAttribute('tabindex', '-1'); el.focus({ preventScroll: true }); } });
        });
      }
    };
  });

  /* ================= RESOURCES ================= */
  QF.route(/^\/resources$/, function () {
    var html = pageHead('Resources', 'Working documents you can keep', 'Interactive checklists and a keyword template. Check items and your progress is saved; download them to use anywhere.') +
      '<div class="wrap"><div class="res-grid">' + QF.resources.map(function (r) {
        var st = QF.state().lists[r.id] || {}, total = r.groups ? r.groups.reduce(function (a, g) { return a + g.items.length; }, 0) : 0, d = Object.keys(st).filter(function (k) { return st[k]; }).length;
        return '<a class="res-card" href="#/resources/' + r.id + '"><span class="pill">' + r.kind + '</span><h2>' + esc(r.title) + '</h2><p>' + esc(r.blurb) + '</p>' +
          (r.groups ? '<span class="muted">' + total + ' items' + (d ? ' · ' + d + ' checked' : '') + '</span>' : r.phrases ? '<span class="muted">' + r.phrases.length + ' phrases</span>' : '<span class="muted">' + r.columns.length + ' columns · CSV download</span>') + '<span class="link-arrow">Open ' + icon('arrow') + '</span></a>';
      }).join('') + '</div></div>';
    return { title: 'Resources', html: html, nav: 'resources', page: 'resources' };
  });
  function tmplRows(r) { var s = QF.state(); if (!s.tmpl) s.tmpl = r.sample.map(function (x) { return x.slice(); }); return s.tmpl; }
  V.tmplTable = function (r) {
    var rows = tmplRows(r);
    return '<div class="table-wrap"><table class="tmpl"><caption class="sr-only">Keyword research template</caption><thead><tr>' + r.columns.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '<th scope="col"><span class="sr-only">Remove</span></th></tr></thead><tbody>' +
      rows.map(function (row, ri) {
        return '<tr>' + r.columns.map(function (c, ci) { return '<td><input type="text" aria-label="' + esc(c) + ', row ' + (ri + 1) + '" value="' + esc(row[ci] || '') + '" data-action="tmpl-edit" data-r="' + ri + '" data-c="' + ci + '"></td>'; }).join('') +
          '<td><button class="icon-btn" type="button" data-action="tmpl-del" data-r="' + ri + '" aria-label="Remove row ' + (ri + 1) + '">' + icon('x') + '</button></td></tr>';
      }).join('') + '</tbody></table></div>';
  };
  QF.route(/^\/resources\/([\w-]+)$/, function (a) {
    var r = QF.resources.filter(function (x) { return x.id === a[0]; })[0]; if (!r) return { title: 'Not found', html: V.notFound() };
    var st = QF.state().lists[r.id] || {};
    var body;
    if (r.phrases) {
      body = '<div class="field"><label for="ph-q">Search the translator</label><input id="ph-q" type="search" placeholder="e.g. canonical"></div><dl class="phrases" id="phrases">' + V.phraseList(r, '') + '</dl>';
    } else if (r.template) {
      body = '<div class="actions"><button class="btn btn-primary" type="button" data-action="tmpl-add">' + icon('plus') + 'Add row</button><button class="btn btn-ghost" type="button" data-action="tmpl-csv">' + icon('download') + 'Download CSV</button><button class="btn btn-ghost" type="button" data-action="tmpl-reset">Reset to sample</button></div><div id="tmpl-host">' + V.tmplTable(r) + '</div>' +
        '<section class="guide"><h2>How to use it</h2><ol><li>List every candidate keyword with its monthly volume and difficulty from your tool of choice.</li><li>Label the intent, then group keywords that share a SERP into one cluster.</li><li>Assign each cluster one target URL and a priority from 1 to 5.</li><li>Review quarterly; see the Keyword Research course for the method.</li></ol></section>';
    } else {
      var total = 0, done = 0, gi = 0;
      body = '<div class="res-progress" id="res-progress"></div><div class="actions"><button class="btn btn-ghost" type="button" data-action="res-md" data-res="' + r.id + '">' + icon('download') + 'Download as Markdown</button><button class="btn btn-ghost" type="button" data-action="print">' + icon('print') + 'Print</button><button class="btn btn-ghost" type="button" data-action="res-clear" data-res="' + r.id + '">Clear ticks</button></div>' +
        r.groups.map(function (g, gx) {
          return '<fieldset class="chk-group"><legend>' + esc(g.name) + '</legend><ul class="checklist">' + g.items.map(function (it, ix) {
            var key = gx + '.' + ix; total++; if (st[key]) done++;
            return '<li><label><input type="checkbox" data-action="res-check" data-res="' + r.id + '" data-k="' + key + '"' + (st[key] ? ' checked' : '') + '><span>' + esc(it) + '</span></label></li>';
          }).join('') + '</ul></fieldset>';
        }).join('');
    }
    var html = '<div class="wrap narrow-lg">' + crumbs([['Resources', '#/resources'], [r.title]]) + '<p class="eyebrow">' + r.kind + '</p><h1>' + esc(r.title) + '</h1><p class="lede">' + esc(r.blurb) + '</p>' + body + '</div>';
    return { title: r.title, html: html, nav: 'resources', page: 'resource', after: function () {
      V.updateResProgress(r);
      var pq = document.getElementById('ph-q');
      if (pq) pq.addEventListener('input', function () { document.getElementById('phrases').innerHTML = V.phraseList(r, pq.value); });
    } };
  });
  V.phraseList = function (r, q) {
    q = q.toLowerCase();
    var items = r.phrases.filter(function (x) { return !q || (x[0] + ' ' + x[1]).toLowerCase().indexOf(q) >= 0; });
    if (!items.length) return '<p class="muted">No match.</p>';
    return items.map(function (x) { return '<div><dt>' + esc(x[0]) + '</dt><dd><span class="say-label">Say:</span> ' + fmt(x[1]) + '</dd></div>'; }).join('');
  };
  V.updateResProgress = function (r) {
    var el = document.getElementById('res-progress'); if (!el || !r.groups) return;
    var st = QF.state().lists[r.id] || {}, total = r.groups.reduce(function (a, g) { return a + g.items.length; }, 0), d = Object.keys(st).filter(function (k) { return st[k]; }).length;
    el.innerHTML = bar(Math.round(d / total * 100), 'Checklist progress') + '<p class="muted"><b>' + d + '</b> of ' + total + ' items checked</p>';
  };

  /* ================= SEARCH ================= */
  QF.route(/^\/search$/, function (_, q) {
    var term = q.q || '', r = QF.search(term), lim = r.lessons.slice(0, 30);
    function snippet(x) {
      var raw = x.lesson.body[0], i = raw.toLowerCase().indexOf(term.toLowerCase().split(/\s+/)[0]);
      var s = raw.slice(Math.max(0, i - 40), Math.max(0, i - 40) + 150);
      return esc(s) + '…';
    }
    var html = pageHead('Search', term ? 'Results for “' + esc(term) + '”' : 'Search', term ? r.courses.length + ' courses · ' + r.lessons.length + ' lessons · ' + r.terms.length + ' glossary terms' : 'Type a topic above to search every course, lesson and glossary term.') +
      '<div class="wrap results-page"><form class="hero-search" role="search" data-form="search"><label class="sr-only" for="s-q">Search</label><input id="s-q" name="q" type="search" value="' + esc(term) + '" placeholder="Search courses, lessons, terms"><button class="btn btn-primary" type="submit">Search</button></form>' +
      (term && !r.courses.length && !r.lessons.length && !r.terms.length ? '<div class="empty"><h3>Nothing found</h3><p>Try a broader word, such as “links”, “bidding” or “schema”.</p></div>' : '') +
      (r.courses.length ? '<section><h2>Courses</h2><div class="grid grid-3">' + r.courses.map(function (c) { return QF.card(c); }).join('') + '</div></section>' : '') +
      (lim.length ? '<section><h2>Lessons <small class="muted">' + (r.lessons.length > 30 ? 'showing 30 of ' + r.lessons.length : r.lessons.length) + '</small></h2><ul class="hits">' + lim.map(function (x) {
        return '<li><a href="#/learn/' + x.course.id + '/' + x.lesson.id + '"><b>' + esc(x.lesson.title) + '</b><span class="muted">' + esc(x.course.title) + ' · ' + esc(x.section.title) + '</span><span class="snip">' + snippet(x) + '</span></a></li>';
      }).join('') + '</ul></section>' : '') +
      (r.terms.length ? '<section><h2>Glossary</h2><dl class="hits-terms">' + r.terms.slice(0, 12).map(function (g) { return '<div><dt>' + esc(g[0]) + '</dt><dd>' + fmt(g[1]) + '</dd></div>'; }).join('') + '</dl><a class="link-arrow" href="#/glossary?q=' + encodeURIComponent(term) + '">Open in glossary ' + icon('arrow') + '</a></section>' : '') + '</div>';
    return { title: term ? 'Search: ' + term : 'Search', html: html, nav: '', page: 'search' };
  });

  V.notFound = function () {
    return '<div class="wrap narrow"><p class="eyebrow">404</p><h1>That page does not exist</h1><p class="lede">The link may be old or mistyped.</p><div class="actions"><a class="btn btn-primary" href="#/">Go home</a><a class="btn btn-ghost" href="#/courses">Browse courses</a></div></div>';
  };
})();
