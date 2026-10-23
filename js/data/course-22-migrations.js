(function () {
  var h = QF.h, L = h.L, S = h.S, Q = h.Q;
  QF.addCourse({
    slug: 'migrations-and-recovery', title: 'Migrations, Redesigns & Traffic Drops', subtitle: 'How to move a website without losing traffic, and what to do when traffic falls anyway.',
    track: 'SEO', topic: 'Technical SEO', level: 'Advanced', stage: 4, instructor: 'idris', rating: 4.9,
    desc: 'The most expensive SEO mistakes happen during redesigns and migrations, and the most stressful client calls happen when traffic falls. This course gives you a step-by-step method for planning and launching migrations, diagnosing drops, recovering from penalties and hacks, and communicating through each of them.',
    learn: ['Classify migration types and plan redirects', 'Run a launch-day checklist and monitor afterwards', 'Diagnose a traffic drop in a fixed order', 'Handle algorithm updates, hacks and manual actions', 'Communicate calmly with clients during a crisis'],
    reqs: ['Technical SEO basics', 'Experience with Search Console and a crawler is helpful']
  }, [
    S('Planning a migration or redesign', [
      L('Types of migration and why they go wrong', 10,
        ['List the common migration types', 'Explain why traffic is lost', 'Decide who must be involved'],
        ['A **migration** is any big change that affects URLs, content, structure or hosting: a redesign, changing platform (for example WordPress to Shopify), switching domain, moving from HTTP to HTTPS, merging sites, or restructuring URLs. Each can cause trouble when search engines cannot map the old pages to the new ones.',
         'Traffic is lost when: old URLs are not redirected, redirects point to irrelevant pages, content is removed, pages are accidentally blocked or set to noindex, internal links break, titles and headings change without thought, or site speed gets worse. Involve SEO at the start, not after the design is finished.'],
        ['A company redesigns its website and changes every URL, without telling the SEO. At launch, 2,000 pages return 404 errors. Organic traffic falls 60% in a week. It takes four months to recover.'],
        ['List five migrations you could encounter', 'Write who needs to be in the project meeting: SEO, developer, designer, content and owner', 'Write a rule: "SEO is consulted before design is approved"'],
        ['Migrations change URLs, content, structure or hosting', 'Lost traffic comes from missing redirects and blocked or removed content', 'Involve SEO from the start'],
        { say: ['"Before the design is final, I would like us to agree a plan for URLs and redirects, because that is where most traffic is lost."'] }),
      L('The pre-migration audit and redirect map', 12,
        ['Benchmark the old site', 'Build a redirect map', 'Plan a staging check'],
        ['Before touching anything, **crawl the old site** and export every URL with its title, status, traffic, links and rankings. Pull top pages from Search Console and Analytics, and backlinks from a link tool. Save everything. This is your baseline and your checklist.',
         'The **redirect map** is a spreadsheet with columns: old URL, new URL, type (301), and notes. Map each old URL to the most relevant new URL, not the homepage. Prioritize pages with traffic and links. Use one-to-one mapping where possible. Test the redirects on a staging server and check for redirect chains (A to B to C), which slow things down.',
         'Staging sites must be blocked from search (noindex or password protection) so they are not indexed, but **remember to remove the block at launch**. Forgetting is a classic disaster.'],
        ['A redirect map for 800 pages is built in a spreadsheet: old URL, new URL, traffic last year. The 80 pages with 90% of traffic are checked by hand; the rest use rules by pattern.'],
        ['Crawl a small site and export all URLs', 'Create a redirect map for 20 URLs', 'Write the staging noindex removal into your launch checklist'],
        ['Benchmark before you change anything', 'Map each old URL to the most relevant new one', 'Block staging, then unblock it at launch']),
      L('Content, internal links and metadata during a redesign', 10,
        ['Preserve what ranks', 'Keep titles, headings and content for top pages', 'Update internal links'],
        ['A new design should not delete the words that earn rankings. For top pages, keep the main text, headings and title tags unless there is a reason to change them. If you change the structure or wording, do it knowingly and measure it.',
         'Update internal links to the new URLs (do not rely only on redirects). Keep the site map, navigation and breadcrumbs crawlable. Check that images, structured data, canonical tags and hreflang are carried over. Do not let the new theme hide text behind tabs or load it only through scripts.'],
        ['A new design hides service descriptions inside accordion menus loaded by JavaScript. A check in Google\'s URL Inspection tool shows the text missing from the rendered page. The developer changes it to load with the page.'],
        ['Compare old and new templates for title, H1, canonical and schema', 'Use URL Inspection on a staging copy if available, or a crawler with rendering', 'Make a list of top 20 pages and their must-keep elements'],
        ['Keep what ranks unless you have a reason', 'Update internal links directly', 'Check rendering and templates'])
    ], [
      Q('What is the most common cause of traffic loss in a migration?', ['Missing or irrelevant redirects', 'Too many images', 'A short domain', 'Using HTTPS'], 0, 'Old URLs need to point to equivalent new pages.'),
      Q('When should SEO be involved in a redesign?', ['At the beginning', 'After launch', 'Never', 'Only when traffic drops'], 0, 'Early planning prevents costly mistakes.'),
      Q('What belongs in a redirect map?', ['Old URL, new URL, notes and priority', 'Only the homepage', 'Only images', 'Only keywords'], 0, 'It tells developers where each page goes.'),
      Q('What should you do with staging sites?', ['Index them', 'Block them from search and remember to unblock at launch', 'Share links publicly', 'Ignore them'], 1, 'Staging must be hidden, and the block must be removed at launch.'),
      Q('Why update internal links instead of relying only on redirects?', ['Redirects slow things and waste crawl effort', 'Redirects are illegal', 'Links cannot be updated', 'Google cannot see links'], 0, 'Direct links are faster and cleaner.')
    ]),
    S('Launch day and aftermath', [
      L('The launch-day checklist', 10,
        ['Run the pre-launch tests', 'Verify the key settings', 'Know who does what on launch day'],
        ['On launch day: confirm the redirect map is live and test 100 URLs, especially top pages; remove noindex or password protection; check robots.txt is not blocking everything; submit the new XML sitemap; verify canonical tags and HTTPS; check mobile pages; test forms and tracking (analytics and ad conversion tags); confirm structured data; and crawl the live site.',
         'Assign a person to each task and keep a shared channel for issues. Avoid launching on a Friday afternoon or at the busiest sales period. Have a rollback plan if something critical breaks.'],
        ['At 9 am launch, the SEO crawls the live site and finds the robots.txt file still says `Disallow: /`. It is fixed in minutes instead of days, saving the project.'],
        ['Write your own 20-point launch checklist', 'Choose launch-day owners for each task', 'Plan a rollback step'],
        ['Test redirects, robots, noindex, sitemap, tracking and mobile', 'Assign owners', 'Have a rollback plan'],
        { oops: 'Launching without checking robots.txt. A single "Disallow: /" left from staging can block the whole site.' }),
      L('Post-launch monitoring', 10,
        ['Watch the right metrics daily', 'Fix issues quickly', 'Report to the client'],
        ['After launch, monitor daily for two weeks: Search Console for crawl errors, page indexing, and the sitemap; analytics for organic traffic and conversions; a crawler for 404s and redirect issues; rankings for top keywords; and server logs for bot activity and errors.',
         'Expect some fluctuation: temporary dips can last weeks as Google reprocesses the site. A small dip is normal; a large drop needs fast investigation. Fix 404s on pages with traffic or links first. Send the client short updates: "Day 3: indexing is progressing, no critical errors, rankings stable."'],
        ['Two days after launch, Search Console shows a spike in 404 errors for URLs with old parameters. The team adds redirect rules, and traffic recovers before the next report.'],
        ['Create a daily monitoring sheet for the first two weeks', 'List which tools you check each day', 'Draft a short update email template'],
        ['Monitor daily after launch', 'Expect small fluctuation, investigate large drops quickly', 'Keep the client informed briefly']),
      L('Common migration disasters and how to avoid them', 9,
        ['Recognize typical disasters', 'Apply preventive checks', 'Recover faster'],
        ['Disasters you can prevent: noindex left on; robots.txt blocking all; redirects to the homepage; HTTP and HTTPS both live; wrong canonical tags pointing to the staging domain; broken analytics tags; hreflang lost; missing images; and slow performance after launch.',
         'Prevention: checklists, a staging review by SEO, automated tests in the deployment process, and a clear owner for the launch. If something breaks, fix first, explain second, and add the check to your list so it never happens again.'],
        ['A canonical tag in the new theme points all pages to the staging domain. Google starts treating the live pages as duplicates. A crawl on launch day catches it and a one-line theme change fixes it.'],
        ['List eight disasters and one check for each', 'Review a site\'s canonical tags with a crawler', 'Create an automated test idea for noindex'],
        ['Most disasters are preventable', 'Checklists and crawls catch them', 'Fix first, explain second'])
    ], [
      Q('Which is on a launch-day checklist?', ['Removing noindex and testing redirects', 'Adding more ads', 'Changing the logo', 'Deleting analytics'], 0, 'Those are critical to being indexed and keeping traffic.'),
      Q('How long should you monitor intensively after launch?', ['One hour', 'About two weeks', 'Never', 'One year'], 1, 'Daily checks in the first weeks catch problems early.'),
      Q('Which error can block a whole site?', ['robots.txt with Disallow: /', 'A long title', 'A big image', 'A missing alt text'], 0, 'It tells crawlers to stay away from everything.'),
      Q('A small dip right after launch is:', ['Often normal as Google reprocesses the site', 'Always a disaster', 'Illegal', 'Never happens'], 0, 'Fluctuations are expected, but big drops need investigation.'),
      Q('Best order when something breaks?', ['Fix first, explain second, prevent next time', 'Hide it', 'Blame others', 'Wait a month'], 0, 'Reduce damage quickly, communicate, then improve the process.')
    ]),
    S('When traffic drops', [
      L('A calm, ordered diagnosis', 12,
        ['Follow a diagnosis order', 'Separate tracking issues from real drops', 'Identify the affected pages and queries'],
        ['When traffic drops, do not guess. Ask: **1) Is the data right?** Check that tracking tags still work, and compare Search Console clicks with analytics. **2) Is it seasonal?** Compare with the same period last year. **3) Which pages and which queries?** Use Search Console to compare before and after, find the pages that lost the most, and see whether the loss is sitewide or specific. **4) What changed on our side?** Site changes, redirects, content edits, plugin updates, robots.txt, noindex. **5) What changed outside?** Google updates, new competitors, new SERP features, the market. **6) Is it technical?** Crawl the site, check indexing and server errors.',
         'The pattern gives clues: a sudden sitewide drop on one day often means a technical change; a drop that follows a confirmed Google update and affects many pages suggests an update; a drop for one type of query could be a new SERP feature or an AI summary; a slow decline suggests competitors or content aging.'],
        ['Traffic drops 40% on a Tuesday. Analytics tags are fine. Last year this week was normal. Search Console shows all blog URLs lost impressions from that date. A developer had added `noindex` to the blog template on Monday. Fixing it and requesting reindexing restores traffic over two weeks.'],
        ['Write the six diagnostic questions in your own words', 'Practice on a Search Console export: compare two date ranges', 'Create a "what changed" log template'],
        ['Check data, season, pages, internal changes, external changes and technical state', 'Pattern of the drop points to the cause', 'Keep a change log to find causes quickly'],
        { say: ['"I am investigating in a fixed order: tracking, season, which pages, what changed on the site, and what changed in Google. I will update you by noon tomorrow."'] }),
      L('Algorithm updates and what you can do', 10,
        ['Say what Google updates are', 'Know where to check', 'Plan a response without panic'],
        ['Google updates its systems constantly. Some updates are larger: **core updates** aim to improve overall results, and **spam updates** target manipulation. Google announces major ones on its Search Status Dashboard. Impact can be positive or negative and takes a couple of weeks to roll out.',
         'If a drop matches a core update, there is rarely a quick fix. Google says to review your content against its helpful-content guidance: is it original, expert, complete and written for people? Improve the weakest pages, remove or consolidate thin content, strengthen authorship and trust, and wait: recovery often shows only after later updates. Do not make panic changes in the first days. Document and monitor.'],
        ['A health site loses 25% after a core update. A review shows hundreds of thin articles with no author. The team adds expert reviewers, rewrites the top 60 pages and removes 200 weak ones. Partial recovery comes after the next update.'],
        ['Find Google\'s Search Status Dashboard', 'Match one past traffic drop to an update date', 'Write a "no panic" plan'],
        ['Core and spam updates change how results are ordered', 'Recovery usually means improving real quality', 'Do not panic-change; document and wait']),
      L('Hacks, spam and manual actions', 10,
        ['Recognize a hacked site', 'Respond to a manual action', 'Communicate carefully with the client'],
        ['Signs of a hacked site: strange pages (pharmacy or gambling spam), warnings in browsers, Search Console "Security issues", odd redirects, or new unknown admin users. Act quickly: take the site offline if needed, clean the infection or restore a clean backup, update software and passwords, close the hole, then request a review in Search Console.',
         'A **manual action** is a penalty applied by a human reviewer, shown in Search Console under Manual actions. Read the description, fix the issue (for example, unnatural links or thin content), document your work, and submit a reconsideration request that explains what happened, what you fixed and how you will prevent it. Be honest and specific.',
         'With the client, stay calm and factual, explain the plan and timeline, and avoid guessing blame.'],
        ['A bakery site is hacked and shows casino links. The agency restores a backup, updates plugins, changes passwords, removes unknown users and requests a review. The warning disappears in three days.'],
        ['Write a hack response checklist', 'Find where Manual actions and Security issues appear in Search Console', 'Draft a reconsideration request outline'],
        ['Act quickly on hacks: clean, secure, request review', 'Manual actions require fixing and honest documentation', 'Keep clients informed with facts'],
        { oops: 'Telling a client "it is nothing" about a security warning. Take it seriously and explain the plan.' })
    ], [
      Q('What should you check first when traffic drops?', ['Whether tracking and data are correct', 'Whether to buy links', 'The logo', 'Nothing'], 0, 'Confirm the drop is real before investigating further.'),
      Q('Why compare with the same period last year?', ['To remove seasonality', 'To make charts prettier', 'To hide problems', 'Because it is required'], 0, 'Seasonal patterns can mimic drops.'),
      Q('A sudden sitewide drop on one day often indicates:', ['A technical change', 'A slow trend', 'More competitors', 'A holiday'], 0, 'Check what changed on the site that day.'),
      Q('What is the right approach after a core update drop?', ['Panic changes', 'Review and improve content quality, then monitor', 'Buy links', 'Delete the site'], 1, 'Improve real quality and wait for the next update cycle.'),
      Q('Where do you see a manual action?', ['Search Console, Manual actions report', 'Analytics', 'Merchant Center', 'Google Maps'], 0, 'Google reports them in Search Console.')
    ])
  ]);
})();
