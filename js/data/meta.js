/* Instructors, learning paths, testimonials, resources, glossary.
 * All people, quotes and review text in this file are fictional sample content. */
(function () {
  var QF = window.QF;

  QF.instructors = {
    maren:  { name: 'Maren Holt',    role: 'Head of Organic Growth', years: 14, bio: 'Maren has led organic programs for marketplaces and B2B software companies. She teaches the foundations the way she wishes they had been taught to her: as a system, not a bag of tricks.' },
    tobias: { name: 'Tobias Reyes',  role: 'Search Strategist',      years: 11, bio: 'Tobias builds keyword and content roadmaps for ecommerce brands. He is allergic to vanity metrics and loves a good spreadsheet.' },
    idris:  { name: 'Idris Okafor',  role: 'Technical SEO Lead',     years: 12, bio: 'Idris works with engineering teams on large-scale sites, from migrations to rendering. His audits are famous for being readable by developers.' },
    priya:  { name: 'Priya Venkat',  role: 'Content & PR Director',  years: 10, bio: 'Priya has run editorial teams and digital PR campaigns that earned coverage in national media. She believes links are a by-product of being genuinely useful.' },
    lucia:  { name: 'Lucia Ferrante', role: 'Local Search Consultant', years: 9, bio: 'Lucia helps multi-location and service-area businesses win the map pack. She has managed more than 400 business profiles.' },
    kenji:  { name: 'Kenji Aoki',    role: 'Search & AI Researcher', years: 13, bio: 'Kenji runs experiments on how generative systems retrieve and cite sources. He is careful to separate what is known from what is hoped.' },
    noor:   { name: 'Noor Haddad',   role: 'Analytics Lead',         years: 12, bio: 'Noor builds measurement systems that connect search activity to revenue, from GTM implementations to executive dashboards.' },
    dara:   { name: 'Dara Whitfield', role: 'Paid Media Director',   years: 15, bio: 'Dara has managed eight-figure annual ad budgets across Google and Microsoft. She teaches PPC as applied economics.' }
  };

  QF.paths = [
    { id: 'seo-specialist', title: 'SEO Specialist', level: 'Beginner to Intermediate', blurb: 'The core craft of organic search: how it works, what to target, how to optimize pages, and how to measure the result.',
      outcome: 'You can run an SEO program for a small or mid-size site end to end.',
      courses: ['seo-fundamentals', 'keyword-research', 'on-page-seo', 'seo-analytics'] },
    { id: 'ppc-sem-expert', title: 'PPC / SEM Expert', level: 'Beginner to Advanced', blurb: 'From your first Search campaign to automation, measurement and multi-platform paid search with a firm grip on the economics.',
      outcome: 'You can launch, scale and defend a paid search budget with confidence.',
      courses: ['google-ads-fundamentals', 'conversion-tracking-cro', 'advanced-ppc', 'microsoft-ads-shopping-remarketing'] },
    { id: 'full-stack-search', title: 'Full-Stack Search Marketer', level: 'Beginner to Expert', blurb: 'Organic and paid, technical and creative. The complete program, ordered so each course builds on the last.',
      outcome: 'You can plan and lead an integrated search strategy across SEO and SEM.',
      courses: ['seo-fundamentals', 'keyword-research', 'on-page-seo', 'technical-seo', 'content-strategy-eeat', 'link-building', 'seo-analytics', 'google-ads-fundamentals', 'conversion-tracking-cro', 'advanced-ppc', 'seo-for-ai-search'] },
    { id: 'local-growth', title: 'Local Growth Marketer', level: 'Beginner to Intermediate', blurb: 'For people marketing businesses with a physical presence: local SEO, reputation and the paid tools that fill the gaps.',
      outcome: 'You can put a local business on the map, literally, and measure the calls it earns.',
      courses: ['seo-fundamentals', 'local-seo', 'on-page-seo', 'google-ads-fundamentals'] }
  ];

  /* Clearly sample content. */
  QF.testimonials = [
    { q: 'The lessons end with something I can do the same afternoon. My title-tag audit took an hour and moved three pages up.', who: 'Sample learner', role: 'In-house marketer' },
    { q: 'I finally understand why my Quality Score was stuck at 4. The worked examples made it click.', who: 'Sample learner', role: 'Small business owner' },
    { q: 'Honest about what nobody knows, especially in the AI search course. That is rare in this field.', who: 'Sample learner', role: 'Agency strategist' }
  ];

  QF.reviewPool = [
    { name: 'Alex M.', text: 'Clear, practical and free of fluff. The worked examples were the best part, and the quizzes caught things I had skimmed.' },
    { name: 'Jordan P.', text: 'I applied the exercises to a live site while taking the course. Good structure, and the checklists are reusable.' },
    { name: 'Sam T.', text: 'Wish a few lessons went deeper, but nothing here is wrong or padded. Solid for the level it targets.' },
    { name: 'Riley C.', text: 'The pacing suits a busy schedule. Ten minutes a lesson and I always had a concrete next step.' },
    { name: 'Casey W.', text: 'Finally an explanation of the numbers that does not hide the math. I use the formulas weekly now.' },
    { name: 'Morgan D.', text: 'Good balance of theory and action. I would like more downloadable templates, though the resource pages help.' }
  ];

  QF.resources = [
    { id: 'seo-audit-checklist', title: 'SEO Audit Checklist', kind: 'Checklist', blurb: 'A 30-point audit across crawlability, indexing, on-page, content, performance and links.',
      groups: [
        { name: 'Crawl and index', items: ['robots.txt exists and does not block important paths or rendering files', 'XML sitemap lists only canonical, indexable 200 URLs', 'Sitemap submitted in Search Console and Bing Webmaster Tools', 'No accidental noindex on key templates', 'Pages report reviewed for unexpected exclusions', 'Preferred host and protocol redirect with a single 301', 'No soft 404s, redirect chains or broken internal links'] },
        { name: 'On-page', items: ['Every indexable page has a unique, descriptive title', 'Meta descriptions written for pages that earn impressions', 'One H1 per page with logical subheadings', 'Primary content answers the search intent', 'Images compressed, sized and given useful alt text', 'Internal links use descriptive anchors; no orphan pages', 'URLs are short, lowercase and readable'] },
        { name: 'Content and authority', items: ['Authors and credentials shown on key pages', 'Duplicate or cannibalising pages identified and consolidated', 'Thin or outdated pages scheduled for refresh or removal', 'About, contact and policy pages are present', 'Backlink profile reviewed for spam patterns and gaps'] },
        { name: 'Performance and structured data', items: ['Core Web Vitals (LCP, INP, CLS) checked in field data', 'LCP image is not lazy-loaded and has fetchpriority', 'Images and embeds have width and height', 'Third-party scripts reviewed for cost', 'Structured data valid and matches visible content', 'Site is mobile friendly and served over HTTPS'] },
        { name: 'Tracking and reporting', items: ['Search Console verified and baseline exported', 'GA4 key events configured and tested', 'Organic landing page report built', 'Priority keywords tracked by location and device'] }
      ] },
    { id: 'ppc-launch-checklist', title: 'PPC Launch Checklist', kind: 'Checklist', blurb: 'Everything to verify before you spend your first dollar on a Search campaign.',
      groups: [
        { name: 'Tracking and measurement', items: ['Primary conversion action defined and tested', 'GA4 and Google Ads linked; auto-tagging enabled', 'Conversion values set where they differ', 'Enhanced conversions or offline import planned', 'UTM convention agreed for other platforms'] },
        { name: 'Account and campaign setup', items: ['Campaigns separated by goal, product or budget', 'Ad groups built around a single theme', 'Location uses Presence targeting; languages set', 'Search Partners and Display expansion considered and set deliberately', 'Budget matches target conversions x expected CPA', 'Bid strategy matches data available'] },
        { name: 'Keywords and ads', items: ['Keywords chosen by match type with a rationale', 'Starter negative keywords added', 'RSAs include 12+ varied headlines and 4 descriptions', 'Sitelinks, callouts and other assets added', 'Ads comply with policy; claims are provable'] },
        { name: 'Landing pages', items: ['Message match between ad and page', 'Mobile speed tested', 'Form tested on a phone; fields minimized', 'Trust proof and clear call to action above the fold'] },
        { name: 'After launch', items: ['Daily checks for first week: spend, disapprovals, search terms', 'Change log started', 'Weekly search terms review scheduled', 'Success metrics and review dates agreed'] }
      ] },
    { id: 'keyword-research-template', title: 'Keyword Research Template', kind: 'Template', blurb: 'A working keyword map. Fill in the table, then download it as a CSV for your spreadsheet.',
      template: true,
      columns: ['Keyword', 'Intent', 'Monthly volume', 'Difficulty (0-100)', 'CPC', 'Cluster', 'Target URL', 'Priority (1-5)', 'Status'],
      sample: [
        ['standing desk benefits', 'Informational', '2400', '32', '1.10', 'Benefits', '/guides/standing-desk-benefits', '4', 'Planned'],
        ['best standing desk', 'Commercial', '14800', '58', '3.40', 'Best-of', '/best-standing-desks', '5', 'In progress'],
        ['standing desk converter', 'Transactional', '5400', '44', '2.20', 'Converters', '/standing-desk-converters', '3', 'Planned']
      ] }
  ];

  /* [term, definition, track] */
  QF.glossary = [
    ['Algorithm update', 'A change to how a search engine ranks or filters results. Core updates adjust the overall systems; spam updates target manipulation.', 'SEO'],
    ['Alt text', 'A text description of an image in HTML, used by screen readers and search engines when the image cannot be seen.', 'SEO'],
    ['Anchor text', 'The visible, clickable words of a link. Descriptive anchors tell users and crawlers what the destination is about.', 'SEO'],
    ['Attribution model', 'The rule that decides how credit for a conversion is divided among the marketing touchpoints a customer interacted with.', 'SEM'],
    ['Backlink', 'A link from one website to another. Relevant links from trusted sites are among the strongest ranking signals.', 'SEO'],
    ['Bid strategy', 'The method used to set bids in an ad auction, either manual (you set bids) or automated (the platform sets them to a goal).', 'SEM'],
    ['Breadcrumbs', 'A trail of links that shows where a page sits in a site hierarchy, often marked up with BreadcrumbList schema.', 'SEO'],
    ['Broad match', 'A keyword match type that lets ads show for searches related to the keyword, not only close variants. Works best with smart bidding.', 'SEM'],
    ['Canonical tag', 'An HTML element (rel="canonical") that names the preferred URL when several URLs show similar content.', 'SEO'],
    ['Click-through rate (CTR)', 'Clicks divided by impressions, expressed as a percentage. Shows how often people who saw a result clicked it.', 'Both'],
    ['Cloaking', 'Showing different content to search engines than to users. It violates spam policies.', 'SEO'],
    ['Conversion', 'A valuable action a visitor takes, such as a purchase, lead form submission or phone call.', 'Both'],
    ['Conversion rate (CVR)', 'Conversions divided by clicks or sessions, expressed as a percentage.', 'Both'],
    ['Core Web Vitals', 'Google\'s user-experience metrics: Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift.', 'SEO'],
    ['Cost per acquisition (CPA)', 'Advertising cost divided by conversions. Also written cost per conversion or cost per lead.', 'SEM'],
    ['Cost per click (CPC)', 'The amount an advertiser pays each time a user clicks an ad.', 'SEM'],
    ['Crawl budget', 'The number of URLs a search engine will crawl on a site in a period, shaped by server capacity and crawl demand.', 'SEO'],
    ['Crawler', 'A program, such as Googlebot, that fetches web pages and follows links to discover content.', 'SEO'],
    ['Cumulative Layout Shift (CLS)', 'A Core Web Vital that measures unexpected movement of page content while it loads. A good score is 0.1 or less.', 'SEO'],
    ['Disavow', 'A Google tool for telling the search engine to ignore specified links. It is a last resort, mainly for manual actions.', 'SEO'],
    ['Domain authority', 'A third-party score that estimates how well a site might rank, based mostly on links. Google does not use it.', 'SEO'],
    ['Dynamic search ads', 'Search ads whose headlines are generated from page content on your site rather than from keywords.', 'SEM'],
    ['E-E-A-T', 'Experience, Expertise, Authoritativeness and Trust: a framework from Google\'s quality rater guidelines for judging content quality.', 'SEO'],
    ['Exact match', 'A keyword match type that shows ads for searches with the same meaning or intent as the keyword.', 'SEM'],
    ['Featured snippet', 'A highlighted answer box at the top of results, pulling text, a list or a table from a page.', 'SEO'],
    ['Googlebot', 'The name of Google\'s web crawler.', 'SEO'],
    ['Hreflang', 'An annotation telling search engines which language or regional version of a page to show to which users.', 'SEO'],
    ['Impression', 'One instance of a search result or ad being shown to a user.', 'Both'],
    ['Impression share', 'The impressions your ads received divided by the impressions they were eligible to receive.', 'SEM'],
    ['Index', 'The database of pages a search engine has processed and can return in results.', 'SEO'],
    ['Interaction to Next Paint (INP)', 'A Core Web Vital measuring responsiveness to user interactions across a visit. A good score is 200 ms or less.', 'SEO'],
    ['Internal link', 'A link from one page of a site to another page on the same site.', 'SEO'],
    ['JSON-LD', 'A format for embedding structured data in a page using a JavaScript Object Notation script block. Recommended by Google.', 'SEO'],
    ['Keyword cannibalization', 'When several pages on one site compete for the same query, splitting signals and weakening all of them.', 'SEO'],
    ['Keyword difficulty', 'A vendor-specific score estimating how hard it is to rank for a keyword, usually based on link strength of ranking pages.', 'SEO'],
    ['Landing page', 'The page a visitor reaches after clicking a result or ad.', 'Both'],
    ['Largest Contentful Paint (LCP)', 'A Core Web Vital that times when the largest visible element renders. A good score is 2.5 seconds or less.', 'SEO'],
    ['Local pack', 'The group of three map-based business listings shown for local searches.', 'SEO'],
    ['Long-tail keyword', 'A longer, more specific search phrase with lower volume, lower competition and usually clearer intent.', 'SEO'],
    ['Manual action', 'A penalty applied by a human reviewer at Google for violating spam policies, reported in Search Console.', 'SEO'],
    ['Meta description', 'An HTML tag summarizing a page; often used as the snippet in results. It is not a ranking factor.', 'SEO'],
    ['Negative keyword', 'A keyword that prevents your ad from showing on searches containing that term.', 'SEM'],
    ['Nofollow', 'A link attribute (rel="nofollow") that signals the publisher does not endorse the target; treated by Google as a hint.', 'SEO'],
    ['Noindex', 'A directive telling search engines not to include a page in their index.', 'SEO'],
    ['Orphan page', 'A page with no internal links pointing to it, making it hard to discover.', 'SEO'],
    ['Organic traffic', 'Visits that come from unpaid search results.', 'SEO'],
    ['PageRank', 'Google\'s original link-analysis algorithm, which treats links as votes weighted by the importance of the linking page.', 'SEO'],
    ['Performance Max', 'A Google Ads campaign type that uses automation to serve ads across all Google channels from one set of assets.', 'SEM'],
    ['Phrase match', 'A keyword match type that shows ads for searches that include the meaning of the keyword phrase.', 'SEM'],
    ['Quality Score', 'A 1 to 10 diagnostic of expected CTR, ad relevance and landing page experience for a keyword.', 'SEM'],
    ['Rel canonical', 'See Canonical tag.', 'SEO'],
    ['Remarketing', 'Showing ads to people who have previously visited your site or interacted with your business.', 'SEM'],
    ['Responsive search ad (RSA)', 'A search ad where you supply many headlines and descriptions and the platform assembles the best combinations.', 'SEM'],
    ['Retrieval-augmented generation (RAG)', 'A pattern in which an AI system retrieves relevant documents and then writes an answer grounded in them.', 'SEO'],
    ['Return on ad spend (ROAS)', 'Revenue attributed to ads divided by the cost of those ads.', 'SEM'],
    ['Robots.txt', 'A file at the root of a site that tells crawlers which paths they may fetch. It controls crawling, not indexing.', 'SEO'],
    ['Schema markup', 'Structured data vocabulary from Schema.org used to describe page content to machines.', 'SEO'],
    ['Search intent', 'The underlying goal behind a query: informational, navigational, commercial or transactional.', 'SEO'],
    ['SERP', 'Search engine results page: the page of results shown after a search.', 'Both'],
    ['Sitemap', 'An XML file listing the URLs you want search engines to discover, optionally with last-modified dates.', 'SEO'],
    ['Soft 404', 'A page that tells users it does not exist but returns a 200 status code instead of 404.', 'SEO'],
    ['Structured data', 'Code that labels page content in a standard vocabulary so search engines can understand it and show rich results.', 'SEO'],
    ['Title tag', 'The HTML title element of a page, usually shown as the clickable headline in search results.', 'SEO'],
    ['Topical authority', 'The perceived depth and credibility of a site\'s coverage of a subject.', 'SEO'],
    ['UTM parameters', 'Tags added to URLs (such as utm_source) that tell analytics where a visit came from.', 'Both'],
    ['Universal Event Tracking (UET)', 'Microsoft Advertising\'s tag for conversion tracking and remarketing.', 'SEM'],
    ['YMYL', 'Your Money or Your Life: topics such as health, finance and safety where low-quality information could cause harm.', 'SEO']
  ];
})();
