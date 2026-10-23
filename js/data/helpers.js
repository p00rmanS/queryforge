/* Queryforge data model
 *
 * window.QF.courses[]  -> { id, title, subtitle, track:'SEO'|'SEM', topic, level, instructor,
 *                           rating, desc, learn[], reqs[], sections[] }
 *   section            -> { title, lessons[], quiz[] }          (quiz = exactly 5 questions)
 *   lesson             -> { title, mins, obj[], body[], example[], exercise[], takeaways[] }
 *   question           -> { q, opts[4], ans (index), why }
 *
 * Text rules: `code` and **bold** are supported inline. A paragraph starting with "::" is
 * rendered as a preformatted block (one "::" per line of code).
 * To add a course: create js/data/course-xyz.js, call QF.addCourse(meta, sections),
 * then add a <script> tag in index.html. IDs and durations are generated in core.js.
 */
(function () {
  var QF = (window.QF = window.QF || {});
  QF.courses = [];
  QF.addCourse = function (meta, sections) {
    QF.courses.push(Object.assign({}, meta, { sections: sections }));
  };
  QF.h = {
    /* extra (optional): { say: ["line to use with a client", ...], oops: "a mistake that looks bad in front of clients" } */
    L: function (title, mins, obj, body, example, exercise, takeaways, extra) {
      return Object.assign({ title: title, mins: mins, obj: obj, body: body, example: example, exercise: exercise, takeaways: takeaways }, extra || {});
    },
    S: function (title, lessons, quiz) {
      return { title: title, lessons: lessons, quiz: quiz };
    },
    Q: function (q, opts, ans, why) {
      return { q: q, opts: opts, ans: ans, why: why };
    }
  };
})();
