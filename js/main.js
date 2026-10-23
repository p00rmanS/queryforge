/* Queryforge: app shell wiring, global actions, boot. */
(function () {
  var QF = window.QF, $ = QF.$;
  var pending = null;

  function toast(msg) {
    var t = document.getElementById('toast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.classList.remove('show'); }, 2600);
  }
  function download(name, text, type) {
    var url, a = document.createElement('a');
    try {
      url = URL.createObjectURL(new Blob([text], { type: type }));
      a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 500);
    } catch (e) { toast('Download is not available in this browser.'); }
  }
  function refresh() { var y = window.scrollY; QF.dispatch(); window.scrollTo(0, y); updateUserLink(); }
  function updateUserLink() {
    var u = QF.state().user, el = document.getElementById('user-link'); if (!el) return;
    el.textContent = u ? u.name.split(' ')[0] : 'Dashboard';
  }

  /* ----- auth (mock) ----- */
  function openAuth(then) {
    pending = then || null;
    var d = document.getElementById('auth'), s = QF.state();
    if (s.user) { d.querySelector('[name=name]').value = s.user.name; d.querySelector('[name=email]').value = s.user.email; }
    if (d.showModal) d.showModal(); else d.setAttribute('open', '');
    d.querySelector('[name=name]').focus();
  }
  function closeAuth() { var d = document.getElementById('auth'); if (d.close) d.close(); else d.removeAttribute('open'); }

  function enroll(id, stay) {
    var c = QF.course(id), s = QF.state();
    if (!s.user) { openAuth(function () { enroll(id, stay); }); return; }
    if (!s.enrolled[id]) { s.enrolled[id] = Date.now(); QF.save(); toast('Enrolled in ' + c.title); }
    if (stay) refresh(); else QF.go('/learn/' + id + '/' + QF.nextLesson(c).id);
  }
  function setDone(key, val) {
    var x = QF.lessonIndex.filter(function (i) { return i.lesson.key === key; })[0]; if (!x) return;
    var s = QF.state();
    if (val) { s.done[key] = Date.now(); if (!s.enrolled[x.course.id]) s.enrolled[x.course.id] = Date.now(); QF.touchDay(); }
    else delete s.done[key];
    QF.save();
  }

  function mdFor(r) {
    var st = QF.state().lists[r.id] || {}, out = '# ' + r.title + '\n\n' + r.blurb + '\n\n';
    r.groups.forEach(function (g, gx) {
      out += '## ' + g.name + '\n\n';
      g.items.forEach(function (it, ix) { out += '- [' + (st[gx + '.' + ix] ? 'x' : ' ') + '] ' + it + '\n'; });
      out += '\n';
    });
    return out + '_From Queryforge_\n';
  }
  function csvFor(r) {
    function q(v) { v = String(v == null ? '' : v); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; }
    var rows = [r.columns].concat(QF.state().tmpl || r.sample);
    return rows.map(function (row) { return r.columns.map(function (_, i) { return q(row[i]); }).join(','); }).join('\r\n');
  }
  function res(id) { return QF.resources.filter(function (x) { return x.id === id; })[0]; }

  /* ----- clicks ----- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-action]'); if (!t) return;
    var a = t.getAttribute('data-action'), s = QF.state(), r;
    switch (a) {
      case 'toggle-theme': QF.toggleTheme(); syncThemeBtn(); break;
      case 'enroll': enroll(t.getAttribute('data-course'), !!t.getAttribute('data-stay')); break;
      case 'enroll-path':
        (function () {
          var p = QF.paths.filter(function (x) { return x.id === t.getAttribute('data-path'); })[0];
          function go() { p.courses.forEach(function (id) { if (!s.enrolled[id]) s.enrolled[id] = Date.now(); }); QF.save(); toast('Enrolled in ' + p.courses.length + ' courses'); refresh(); }
          if (!s.user) openAuth(go); else go();
        })(); break;
      case 'complete':
        (function () {
          var k = t.getAttribute('data-key'), was = !!s.done[k];
          setDone(k, !was); refresh();
          var b = document.querySelector('[data-action="complete"]'); if (b) b.focus();
          QF.announce(was ? 'Marked incomplete' : 'Lesson marked complete'); toast(was ? 'Marked incomplete' : 'Lesson complete');
        })(); break;
      case 'bookmark':
        (function () {
          var k = t.getAttribute('data-key');
          if (s.bookmarks[k]) delete s.bookmarks[k]; else s.bookmarks[k] = Date.now();
          QF.save(); refresh();
          var b = document.querySelector('[data-action="bookmark"]'); if (b) b.focus();
          toast(s.bookmarks[k] ? 'Lesson bookmarked' : 'Bookmark removed');
        })(); break;
      case 'video':
        document.getElementById('video-msg').textContent = 'Demo build: no video file is included. The full lesson is written below.';
        t.blur(); break;
      case 'retake': refresh(); window.scrollTo(0, 0); break;
      case 'print': window.print(); break;
      case 'signin': openAuth(function () { refresh(); }); break;
      case 'signout': s.user = null; QF.save(); updateUserLink(); refresh(); toast('Signed out'); break;
      case 'reset':
        if (window.confirm('Erase all progress, notes and bookmarks stored in this browser?')) { QF.resetAll(); updateUserLink(); QF.go('/dashboard'); refresh(); toast('Progress reset'); }
        break;
      case 'clear-filters': QF.setQuery({ q: '', stage: '', track: '', level: '', topic: '', dur: '', rating: '', sort: '' }); QF.dispatch(); break;
      case 'res-md': r = res(t.getAttribute('data-res')); download(r.id + '.md', mdFor(r), 'text/markdown'); break;
      case 'res-clear': r = res(t.getAttribute('data-res')); delete s.lists[r.id]; QF.save(); refresh(); break;
      case 'tmpl-add': r = res('keyword-research-template'); (s.tmpl = s.tmpl || r.sample.map(function (x) { return x.slice(); })).push(r.columns.map(function () { return ''; })); QF.save(); document.getElementById('tmpl-host').innerHTML = QF.views.tmplTable(r);
        var ins = document.querySelectorAll('#tmpl-host tbody tr:last-child input')[0]; if (ins) ins.focus(); break;
      case 'tmpl-del': r = res('keyword-research-template'); (s.tmpl = s.tmpl || r.sample.map(function (x) { return x.slice(); })).splice(+t.getAttribute('data-r'), 1); QF.save(); document.getElementById('tmpl-host').innerHTML = QF.views.tmplTable(r); break;
      case 'tmpl-reset': s.tmpl = null; QF.save(); r = res('keyword-research-template'); document.getElementById('tmpl-host').innerHTML = QF.views.tmplTable(r); toast('Template reset'); break;
      case 'tmpl-csv': r = res('keyword-research-template'); download('keyword-research-template.csv', csvFor(r), 'text/csv'); break;
    }
  });

  document.addEventListener('change', function (e) {
    var t = e.target.closest('[data-action]'); if (!t) return;
    var a = t.getAttribute('data-action'), s = QF.state();
    if (a === 'lesson-check') {
      var k = 'L:' + t.getAttribute('data-key'); s.lists[k] = s.lists[k] || {}; s.lists[k][t.getAttribute('data-i')] = t.checked; QF.save();
    } else if (a === 'res-check') {
      var id = t.getAttribute('data-res'); s.lists[id] = s.lists[id] || {}; s.lists[id][t.getAttribute('data-k')] = t.checked; QF.save();
      QF.views.updateResProgress(res(id));
    }
  });

  var noteT, nameT;
  document.addEventListener('input', function (e) {
    var t = e.target;
    if (t.id === 'notes') {
      var st = document.getElementById('notes-status'); st.textContent = 'Saving…';
      clearTimeout(noteT); noteT = setTimeout(function () {
        var s = QF.state(), k = t.getAttribute('data-key');
        if (t.value.trim()) s.notes[k] = t.value; else delete s.notes[k];
        QF.save(); st.textContent = QF.storageOK() ? 'Saved' : 'Saved for this session only';
      }, 350);
    } else if (t.getAttribute && t.getAttribute('data-action') === 'tmpl-edit') {
      var s2 = QF.state(), r = res('keyword-research-template');
      s2.tmpl = s2.tmpl || r.sample.map(function (x) { return x.slice(); });
      s2.tmpl[+t.getAttribute('data-r')][+t.getAttribute('data-c')] = t.value; clearTimeout(nameT); nameT = setTimeout(QF.save, 300);
    } else if (t.id === 'cert-name') {
      var s3 = QF.state(); s3.user = s3.user || { name: '', email: '' }; s3.user.name = t.value.trim();
      var out = document.getElementById('cert-name-out'); if (out) out.textContent = t.value.trim() || 'Your name here';
      clearTimeout(nameT); nameT = setTimeout(function () { QF.save(); updateUserLink(); }, 300);
    }
  });

  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (f.getAttribute('data-form') === 'search') {
      e.preventDefault(); var q = f.elements.q.value.trim();
      QF.go('/search' + (q ? '?q=' + encodeURIComponent(q) : ''));
    }
  });

  /* ----- auth dialog ----- */
  var dlg = document.getElementById('auth');
  dlg.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, name = f.elements.name.value.trim(), email = f.elements.email.value.trim();
    if (!name || !email) return;
    QF.state().user = { name: name, email: email }; QF.save(); closeAuth(); updateUserLink();
    toast('Signed in as ' + name);
    var p = pending; pending = null; if (p) p();
  });
  dlg.querySelector('[data-close]').addEventListener('click', function () { pending = null; closeAuth(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) { pending = null; closeAuth(); } });

  /* ----- header ----- */
  function syncThemeBtn() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark', b = document.getElementById('theme-btn');
    b.setAttribute('aria-pressed', dark); b.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    b.innerHTML = QF.icon(dark ? 'sun' : 'moon');
  }
  document.getElementById('nav-toggle').addEventListener('click', function () {
    var n = document.getElementById('site-nav'), o = n.classList.toggle('open');
    this.setAttribute('aria-expanded', o);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { var n = document.getElementById('site-nav'); if (n.classList.contains('open')) { n.classList.remove('open'); document.getElementById('nav-toggle').setAttribute('aria-expanded', 'false'); document.getElementById('nav-toggle').focus(); } }
    if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || '')) { e.preventDefault(); document.getElementById('hdr-q').focus(); }
  });

  /* ----- boot ----- */
  QF.init();
  QF.applyTheme();
  document.getElementById('logo-slot').innerHTML = QF.logo(34);
  document.getElementById('foot-logo').innerHTML = QF.logo(28);
  document.getElementById('nav-toggle').innerHTML = QF.icon('menu');
  document.querySelector('.hdr-search button').innerHTML = QF.icon('search');
  syncThemeBtn(); updateUserLink();
  document.getElementById('year').textContent = new Date().getFullYear();
  if (!QF.storageOK()) document.getElementById('storage-note').hidden = false;
  QF.dispatch();
})();
