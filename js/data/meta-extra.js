/* Second layer of metadata: stages, extra instructors, paths, glossary, resources.
 * Loaded after meta.js and all course files. Fictional sample people, as before. */
(function () {
  var QF = window.QF;

  QF.instructors.sol = { name: 'Sol Parker', role: 'Marketing Teacher & Trainer', years: 12, bio: 'Sol has taught marketing to teenagers, career-changers and business owners. They believe nothing is too basic to explain properly, and that confident beginners become excellent professionals.' };
  QF.instructors.rae = { name: 'Rae Donovan', role: 'Agency Founder', years: 16, bio: 'Rae built and sold a search marketing agency and has sat through hundreds of client calls, good and awful. Their lessons are full of scripts, hard lessons and things they wish someone had said sooner.' };

  QF.stages = [
    { n: 1, name: 'Start from zero', blurb: 'No experience needed. Learn how the web and search work, the math and spreadsheets you will use, how to write, and the tools of the trade.' },
    { n: 2, name: 'Learn the craft', blurb: 'The core skills of an SEO and a paid search marketer, step by step.' },
    { n: 3, name: 'Go deeper', blurb: 'Technical depth, links, advanced bidding and specialist areas.' },
    { n: 4, name: 'Be client-ready', blurb: 'Everything between knowing the work and running it for real people: proposals, expectations, reports, crises and compliance.' }
  ];
  QF.stageMap = {
    'how-the-internet-works': 1, 'marketing-math-basics': 1, 'writing-for-the-web': 1, 'seo-sem-toolbox': 1, 'seo-fundamentals': 1,
    'keyword-research': 2, 'on-page-seo': 2, 'google-ads-fundamentals': 2, 'local-seo': 2, 'content-strategy-eeat': 2, 'seo-analytics': 2, 'conversion-tracking-cro': 2,
    'technical-seo': 3, 'link-building': 3, 'seo-for-ai-search': 3, 'advanced-ppc': 3, 'microsoft-ads-shopping-remarketing': 3, 'ecommerce-seo': 3, 'international-seo': 3,
    'client-management': 4, 'client-questions-answered': 4, 'ppc-account-management': 4, 'migrations-and-recovery': 4, 'ethics-privacy-compliance': 4,
    'seo-audits-and-strategy': 4, 'careers-and-freelancing': 4, 'capstone-mock-client': 4,
    'ga4-and-tag-manager': 2, 'platform-seo': 2, 'beyond-search-channels': 3
  };
  QF.courseOrder = [
    'how-the-internet-works', 'marketing-math-basics', 'writing-for-the-web', 'seo-sem-toolbox', 'seo-fundamentals',
    'keyword-research', 'on-page-seo', 'platform-seo', 'google-ads-fundamentals', 'local-seo', 'content-strategy-eeat', 'seo-analytics', 'ga4-and-tag-manager', 'conversion-tracking-cro',
    'technical-seo', 'link-building', 'advanced-ppc', 'ecommerce-seo', 'international-seo', 'microsoft-ads-shopping-remarketing', 'beyond-search-channels', 'seo-for-ai-search',
    'client-management', 'client-questions-answered', 'seo-audits-and-strategy', 'ppc-account-management', 'migrations-and-recovery', 'ethics-privacy-compliance', 'careers-and-freelancing', 'capstone-mock-client'
  ];

  QF.paths = [
    { id: 'zero-to-hired', title: 'Zero to Hired', level: 'Complete beginner to job-ready', blurb: 'The full journey for someone starting from nothing: how the web works, the math, writing, tools, SEO, PPC and the client skills that get you hired.',
      outcome: 'You can do real SEO and PPC work and talk to clients without panic.',
      courses: ['how-the-internet-works', 'marketing-math-basics', 'writing-for-the-web', 'seo-sem-toolbox', 'seo-fundamentals', 'keyword-research', 'on-page-seo', 'google-ads-fundamentals', 'seo-analytics', 'client-questions-answered', 'client-management', 'careers-and-freelancing', 'capstone-mock-client'] },
    { id: 'client-ready', title: 'Client-Ready Pro', level: 'Intermediate to advanced', blurb: 'You know the craft. Now learn proposals, expectations, reporting, migrations, account management and compliance so nothing surprises you in front of a client.',
      outcome: 'You can run client accounts confidently, handle bad news, and protect yourself and the client.',
      courses: ['client-management', 'client-questions-answered', 'seo-audits-and-strategy', 'ppc-account-management', 'migrations-and-recovery', 'ethics-privacy-compliance', 'capstone-mock-client'] },
    { id: 'seo-specialist', title: 'SEO Specialist', level: 'Beginner to Intermediate', blurb: 'The core craft of organic search: how it works, what to target, how to optimize pages, and how to measure the result.',
      outcome: 'You can run an SEO program for a small or mid-size site end to end.',
      courses: ['seo-fundamentals', 'keyword-research', 'on-page-seo', 'platform-seo', 'seo-analytics', 'ga4-and-tag-manager', 'technical-seo', 'seo-audits-and-strategy'] },
    { id: 'ppc-sem-expert', title: 'PPC / SEM Expert', level: 'Beginner to Advanced', blurb: 'From your first Search campaign to automation, measurement and multi-platform paid search with a firm grip on the economics.',
      outcome: 'You can launch, scale and defend a paid search budget with confidence.',
      courses: ['google-ads-fundamentals', 'ga4-and-tag-manager', 'conversion-tracking-cro', 'advanced-ppc', 'microsoft-ads-shopping-remarketing', 'beyond-search-channels', 'ppc-account-management'] },
    { id: 'full-stack-search', title: 'Full-Stack Search Marketer', level: 'Beginner to Expert', blurb: 'Organic and paid, technical and creative. The complete program, ordered so each course builds on the last.',
      outcome: 'You can plan and lead an integrated search strategy across SEO and SEM.',
      courses: ['seo-fundamentals', 'keyword-research', 'on-page-seo', 'technical-seo', 'content-strategy-eeat', 'link-building', 'seo-analytics', 'google-ads-fundamentals', 'conversion-tracking-cro', 'advanced-ppc', 'ecommerce-seo', 'international-seo', 'seo-for-ai-search'] },
    { id: 'local-growth', title: 'Local Growth Marketer', level: 'Beginner to Intermediate', blurb: 'For people marketing businesses with a physical presence: local SEO, reputation and the paid tools that fill the gaps.',
      outcome: 'You can put a local business on the map, literally, and measure the calls it earns.',
      courses: ['seo-fundamentals', 'local-seo', 'on-page-seo', 'google-ads-fundamentals'] }
  ];

  /* more resources: checklists share the existing checklist engine */
  QF.resources.push(
    { id: 'client-onboarding-checklist', title: 'Client Onboarding Checklist', kind: 'Checklist', blurb: 'Everything to do in the first two weeks with a new client so nothing is forgotten.',
      groups: [
        { name: 'Before kickoff', items: ['Signed agreement with scope, fee, term, and a no-guarantees statement', 'Invoice sent and payment terms agreed', 'Primary contact and decision maker identified', 'Welcome email sent with the first-30-days plan', 'Access request sent (user roles, never passwords)', 'Questionnaire sent: brand voice, products, competitors, past work'] },
        { name: 'Access and setup', items: ['Search Console access confirmed', 'GA4 access confirmed and key events checked', 'Tag Manager access confirmed', 'Google Ads / Microsoft Ads access confirmed (if applicable)', 'CMS access confirmed (editor, not admin, if possible)', 'Access log started with date and role for each platform'] },
        { name: 'Baseline', items: ['Last 12 months of Search Console data exported', 'Last 12 months of analytics and conversions exported', 'Priority keyword rankings recorded', 'Full site crawl saved with date', 'Current ad performance exported (PPC)', 'Screenshots of key search results saved'] },
        { name: 'Kickoff and rhythm', items: ['Kickoff call held; goals and KPIs written down and agreed', 'Reporting date and format agreed', 'Meeting cadence agreed', 'Change log started', 'Shared folder with Reports, Audits, Access and Change log created'] }
      ] },
    { id: 'discovery-call-questions', title: 'Discovery Call Questions', kind: 'Checklist', blurb: 'Check off the questions as you ask them. Good calls cover business, goals, history and practicalities.',
      groups: [
        { name: 'The business', items: ['What do you sell, and who are your best customers?', 'Which products or services make the most profit?', 'What makes you different from competitors?', 'Who are your three biggest competitors?', 'Is the business seasonal?'] },
        { name: 'Goals', items: ['What does a great year look like in numbers?', 'What is a new customer or lead worth to you?', 'What is your current conversion rate from inquiry to sale?', 'What would make you say this project was a success in six months?'] },
        { name: 'History', items: ['Have you done SEO or paid ads before? What happened?', 'Who built and maintains the website?', 'Do you own your Google Analytics, Search Console and Ads accounts?', 'Has the site had a redesign, penalty or hack?'] },
        { name: 'Practical', items: ['What is your budget range for ads and for management?', 'Who approves decisions and spend?', 'When do you want to start?', 'Who supplies content and approves it, and how fast?', 'Which tools do you already use (CRM, email, call tracking)?'] }
      ] },
    { id: 'monthly-report-outline', title: 'Monthly Report Outline', kind: 'Checklist', blurb: 'A structure for reports clients actually read. Use it as a checklist before you hit send.',
      groups: [
        { name: 'Page one: the summary', items: ['Results in plain words (leads, sales, calls) versus last month and last year', 'Three highlights', 'One or two problems, with the reason and the plan', 'What we will do next month', 'Anything we need from the client'] },
        { name: 'Evidence', items: ['Organic clicks, impressions and conversions with a one-sentence comment on each chart', 'Rankings for priority keywords', 'PPC: spend, conversions, cost per conversion and ROAS, by campaign', 'Annotations for any major change (site updates, budget changes, Google updates)'] },
        { name: 'Work done and quality check', items: ['List of work completed this month', 'Names, numbers and brand spellings double-checked', 'Charts have titles and labeled axes', 'No broken links, #REF! errors or placeholder text', 'Sent on the agreed date, with an offer to talk it through'] }
      ] },
    { id: 'migration-launch-checklist', title: 'Site Migration Launch Checklist', kind: 'Checklist', blurb: 'The checks that prevent the classic website-relaunch disasters.',
      groups: [
        { name: 'Before launch', items: ['Old site crawled and every URL, title and traffic figure saved', 'Redirect map complete, old URL to most relevant new URL', 'Top 100 pages hand-checked in staging', 'Titles, H1s, canonicals and structured data carried over', 'Internal links updated to final URLs', 'Staging blocked from search (to be removed at launch)', 'Rollback plan agreed and owners named'] },
        { name: 'Launch day', items: ['Staging noindex or password protection removed', 'robots.txt does not block the site', 'Redirects live and tested on a sample of URLs', 'HTTPS works and the preferred domain redirects correctly', 'XML sitemap updated and submitted', 'Analytics and ad conversion tags fire', 'Forms, checkout and phone links tested on mobile', 'Live site crawled for 404s, chains and noindex'] },
        { name: 'After launch', items: ['Search Console checked daily for two weeks', 'Top 404s on pages with traffic or links fixed', 'Rankings and organic traffic compared against the baseline', 'Short update sent to the client on days 1, 3, 7 and 14', 'Lessons written down for next time'] }
      ] },
    { id: 'jargon-translator', title: 'Jargon Translator', kind: 'Phrasebook', blurb: 'What you think, and how to say it to a client who has never heard these words. Search it, practice it aloud.',
      phrases: [
        ['Canonical tag', 'A note that tells Google which version of a page is the main one.'],
        ['Crawl budget', 'How much attention Google gives your site on each visit.'],
        ['Indexing', 'Being listed in Google\'s catalog so you can appear in results.'],
        ['Not indexed', 'Google has seen the page but chose not to list it, so nobody can find it through search.'],
        ['SERP', 'The page of results you see after searching.'],
        ['Organic traffic', 'Visitors who arrived from unpaid search results.'],
        ['Backlink', 'A link from another website to yours. It works like a recommendation.'],
        ['Domain authority', 'A score some tools make up to estimate how strong a site is. Google does not use it.'],
        ['Meta description', 'The short summary under the blue link in search results.'],
        ['Title tag', 'The clickable headline that appears in search results.'],
        ['301 redirect', 'A permanent forwarding sign: "this page moved here".'],
        ['404 error', 'A "page not found" message.'],
        ['Core Web Vitals', 'Google\'s measures of how fast and stable your page feels to real visitors.'],
        ['LCP', 'How long it takes for the main part of the page to appear.'],
        ['CLS', 'How much the page jumps around while it loads.'],
        ['Structured data / schema', 'Extra labels in the page code that help Google understand what the content is, like a price or a review.'],
        ['Search intent', 'What the person actually wants when they type a search.'],
        ['Long-tail keyword', 'A longer, more specific search with fewer searchers but more serious intent.'],
        ['Keyword cannibalization', 'Two of your pages competing for the same search, so neither does well.'],
        ['Thin content', 'Pages that say too little to be useful.'],
        ['Algorithm update', 'Google changing how it orders results.'],
        ['E-E-A-T', 'Signs that real, experienced, trustworthy people are behind your content.'],
        ['CPC', 'What you pay each time someone clicks your ad.'],
        ['CPA', 'What it costs on average to get one lead or sale.'],
        ['ROAS', 'How many dollars of revenue each ad dollar brought in (before costs).'],
        ['Quality Score', 'Google\'s hint about how relevant your ad and page are for a keyword.'],
        ['Impression share', 'The share of possible ad showings that you actually got.'],
        ['Negative keyword', 'A word that stops your ad appearing for searches you do not want.'],
        ['Conversion rate', 'The share of visitors who do what you want, such as buy or call.'],
        ['Attribution', 'Deciding which marketing activity gets credit for a sale.'],
        ['A/B test', 'Trying two versions to see which one works better.'],
        ['Remarketing', 'Showing ads to people who already visited your site.'],
        ['Bounce rate / engagement rate', 'Whether visitors stayed and did something or left straight away.'],
        ['Landing page', 'The page a visitor arrives on after clicking a result or ad.'],
        ['CRO', 'Improving the page so a bigger share of visitors take action.']
      ] }
  );

  /* beginner glossary additions: [term, definition, track] */
  [
    ['Browser', 'The program you use to open websites, such as Chrome, Safari, Edge or Firefox.', 'Both'],
    ['Server', 'A computer that stores a website and sends pages to visitors when they ask.', 'Both'],
    ['Domain name', 'The human-friendly address of a website, such as example.com.', 'Both'],
    ['DNS', 'The Domain Name System: the internet\'s phone book that turns domain names into numbers computers use.', 'Both'],
    ['IP address', 'A number that identifies a device or server on the internet.', 'Both'],
    ['URL', 'The full web address of a page, including protocol, domain and path.', 'Both'],
    ['Hosting', 'Renting space on a server so a website can be visited all day, every day.', 'Both'],
    ['HTTPS', 'The secure, encrypted version of the web\'s communication rules. A padlock in the address bar shows it.', 'Both'],
    ['SSL/TLS certificate', 'A digital document that proves a site is genuine and enables HTTPS.', 'Both'],
    ['HTML', 'The code that labels the content of a web page: headings, paragraphs, links and images.', 'SEO'],
    ['CSS', 'The code that controls how a page looks: colors, fonts and layout.', 'SEO'],
    ['JavaScript', 'The code that makes a page interactive: menus, forms and live updates.', 'SEO'],
    ['CMS', 'Content Management System: software like WordPress or Shopify that lets people edit a site without coding.', 'Both'],
    ['Plugin', 'An add-on that gives a website extra features. Old plugins can be a security risk.', 'Both'],
    ['Theme', 'The design template of a website built on a CMS.', 'Both'],
    ['Cache', 'A saved copy of a page or file so it can load faster next time.', 'SEO'],
    ['CDN', 'Content Delivery Network: servers around the world that deliver your files from a place close to each visitor.', 'SEO'],
    ['Uptime', 'The share of time a website is working and reachable.', 'Both'],
    ['Query', 'The words a person types or says into a search engine.', 'Both'],
    ['Organic result', 'An unpaid listing on a results page.', 'SEO'],
    ['Paid result', 'An advertisement on a results page. The advertiser pays when someone clicks.', 'SEM'],
    ['Traffic', 'The visitors who come to a website.', 'Both'],
    ['Bounce rate', 'The share of visits that leave without doing anything else. GA4 mostly reports engagement rate instead.', 'Both'],
    ['Engagement rate', 'The share of sessions that lasted a while, had a key event or viewed multiple pages.', 'Both'],
    ['KPI', 'Key performance indicator: a number that shows whether you are reaching a goal.', 'Both'],
    ['ROI', 'Return on investment: profit divided by cost, expressed as a percentage.', 'Both'],
    ['Funnel', 'The journey from first hearing about something to buying it: awareness, consideration, decision.', 'Both'],
    ['B2B', 'Business-to-business: companies selling to other companies.', 'Both'],
    ['B2C', 'Business-to-consumer: companies selling to everyday people.', 'Both'],
    ['Persona', 'A fictional profile of a typical customer, used to plan marketing.', 'Both'],
    ['CRM', 'Customer Relationship Management software that stores leads and customers.', 'Both'],
    ['Lead', 'A person who has shown interest, for example by filling in a form or calling.', 'Both'],
    ['Call to action (CTA)', 'A clear instruction such as "Get a free quote" that tells the visitor what to do next.', 'Both'],
    ['Heatmap', 'A picture showing where visitors click, move and scroll on a page.', 'Both'],
    ['Wireframe', 'A simple sketch of a page layout before the design is finished.', 'Both'],
    ['Staging site', 'A private test copy of a website used before changes go live.', 'SEO'],
    ['Redirect (301/302)', 'An instruction that sends visitors and search engines from one URL to another. 301 is permanent, 302 is temporary.', 'SEO'],
    ['404 error', 'The message shown when a page cannot be found.', 'SEO'],
    ['Status code', 'A number a server returns with every response, such as 200 (OK), 301 (moved), 404 (not found) or 500 (server error).', 'SEO'],
    ['Hreflang', 'A tag telling search engines which language or regional version of a page suits which users.', 'SEO'],
    ['Black hat SEO', 'Tactics that break search engine rules to win quick rankings, risking penalties.', 'SEO'],
    ['White hat SEO', 'Methods that follow search engine guidelines and aim to help users.', 'SEO'],
    ['Thin content', 'Pages with little useful information that offer little value to visitors.', 'SEO'],
    ['Duplicate content', 'The same or very similar content appearing at more than one URL.', 'SEO'],
    ['Click-through rate benchmark', 'A typical CTR for a given position or ad type used for comparison, not a guarantee.', 'Both'],
    ['Learning period', 'The first weeks after a campaign or bidding change when automated systems are still gathering data.', 'SEM'],
    ['Search terms report', 'A Google Ads report showing the actual searches that triggered your ads.', 'SEM'],
    ['Ad Rank', 'The score that decides whether and where your ad shows, based on bid, quality and context.', 'SEM'],
    ['Manager account (MCC)', 'A Google Ads account used by agencies to manage many client accounts.', 'SEM'],
    ['Management fee', 'What an agency charges to run campaigns, separate from the ad spend paid to the platform.', 'SEM'],
    ['Scope creep', 'A project slowly growing beyond what was agreed, without agreeing time or price.', 'Both'],
    ['Retainer', 'A fixed monthly fee for an agreed amount of ongoing work.', 'Both'],
    ['GDPR', 'The EU General Data Protection Regulation: rules about how personal data must be collected and used.', 'Both'],
    ['Consent mode', 'A Google feature that adjusts how tags behave based on whether a visitor agreed to tracking.', 'Both'],
    ['WCAG', 'Web Content Accessibility Guidelines: the standard for making websites usable by people with disabilities.', 'Both'],
    ['Data layer', 'A structured list of information a website hands to Tag Manager, such as the order value or form name, so tags can send accurate data.', 'Both'],
    ['Key event', 'A GA4 event you mark as important to the business, such as a lead or purchase (formerly called a conversion).', 'Both'],
    ['Container (Tag Manager)', 'The package that holds all of a website\'s tags, triggers and variables in Google Tag Manager.', 'Both'],
    ['Trigger', 'The rule in Tag Manager that says when a tag should fire, such as on a click or a form success.', 'Both'],
    ['Permalink', 'The permanent URL of a page or post in a CMS such as WordPress.', 'SEO'],
    ['Headless site', 'A website where the content is stored in one system and displayed by a separate front end, often built with JavaScript.', 'SEO'],
    ['Lookalike audience', 'A group of people a platform finds who resemble your existing customers.', 'SEM'],
    ['Frequency (ads)', 'How many times the same person has seen your ad.', 'SEM'],
    ['SPF, DKIM and DMARC', 'Email authentication records that prove a message really comes from the domain it claims.', 'Both'],
    ['Allowable cost per lead', 'The most you can pay for a lead and still make a profit: value per customer times margin times close rate.', 'SEM'],
    ['Case study', 'A short written story of a project: the situation, what you did, what you measured and what happened.', 'Both']
  ].forEach(function (g) {
    if (!QF.glossary.some(function (x) { return x[0].toLowerCase() === g[0].toLowerCase(); })) QF.glossary.push(g);
  });
})();
