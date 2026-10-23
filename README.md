# Queryforge

A static, no-build learning platform for SEO and SEM, from "what is a website" to running real client accounts. 30 courses in four stages, 331 lessons, 515 quiz questions, a 132-term glossary, 6 guided paths and 8 resources (checklists, a keyword template and a client jargon translator).

Live site: https://p00rmans.github.io/queryforge/

## Run it

Open `index.html` in a browser (hash routing, so it works from `file://`). For fonts and a normal dev loop you can also serve the folder:

```
python -m http.server 5173
```

Progress, notes, bookmarks, streaks and the mock sign-in live in `localStorage` (key `queryforge.v1`) with an in-memory fallback when storage is blocked.

## Structure

```
index.html            shell, header/footer, sign-in dialog
css/styles.css        design system (tokens at the top, dark mode via data-theme)
js/data/helpers.js    data model docs + L() S() Q() helpers
js/data/course-*.js   one file per course
js/data/meta.js       instructors, paths, resources, glossary, sample testimonials
js/data/meta-extra.js stages, course order, extra paths, resources and glossary terms
js/core.js            store, derived data, search, theme, router
js/views.js           every page
js/main.js            global actions and boot
```

## Add a course

1. Copy any `js/data/course-*.js` file, change the metadata and sections.
2. Add its `<script>` tag to `index.html` before `meta.js`.
3. Add its `slug` to `QF.stageMap` and `QF.courseOrder` in `js/data/meta-extra.js` (stage 1 to 4), and optionally to a path.

Lessons accept an optional 8th argument `{ say: [...], oops: "..." }` that renders the "Say it to the client" and "Avoid the cringe" callouts.

Each section needs 3-6 lessons and a 5-question quiz. Answer options are shuffled at load, so write them in any order.

## Notes

Instructors, ratings, reviews and testimonials are fictional sample content and are labeled as such in the UI. Enrollment and sign-in are simulated. Certificates are demo documents, not accredited credentials.
