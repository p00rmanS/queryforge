(function () {
  var h = QF.h, L = h.L, S = h.S, Q = h.Q;
  QF.addCourse({
    slug: 'keyword-research', title: 'Keyword Research Masterclass', subtitle: 'Search intent, tools, clustering and a long-tail strategy that fits your site\'s authority.',
    track: 'SEO', topic: 'Keyword Research', level: 'Beginner', instructor: 'tobias', rating: 4.7,
    desc: 'Great SEO starts with understanding what people actually type, and why. You will learn the four intent types, how to use free and paid tools, how to read volume and difficulty with healthy skepticism, how to group keywords into clusters, and how to build a long-tail plan that new sites can actually win.',
    learn: ['Classify any query by search intent', 'Build a keyword list from seed terms, competitors and real data', 'Interpret volume, difficulty and CPC metrics correctly', 'Cluster keywords and map them to pages', 'Prioritize long-tail opportunities by value and winnability'],
    reqs: ['Basic familiarity with what SEO is (the SEO Fundamentals course is ideal)', 'Access to a free Search Console account is helpful']
  }, [
    S('Search intent', [
      L('The four types of intent', 9,
        ['Define informational, navigational, commercial and transactional intent', 'Recognize intent from query wording', 'Match content formats to intent'],
        ['Every query carries a goal. **Informational** queries want to learn ("how does a heat pump work"). **Navigational** queries want a specific site ("Search Console login"). **Commercial investigation** queries compare options before buying ("best crm for small business"). **Transactional** queries are ready to act ("buy standing desk", "hotel in lisbon tonight").',
         'Words give clues: "how", "what", "guide" lean informational; "best", "vs", "review" lean commercial; "buy", "price", "near me", "coupon" lean transactional. But the SERP is the final judge. If the top ten are all product pages, a blog post will not satisfy that intent no matter how well written.'],
        ['"Running shoes" is ambiguous; the SERP shows shopping results and category pages, so it is commercial/transactional. "How to choose running shoes" shows guides and videos, so it is informational. Same topic, two different pages needed.'],
        ['Take ten keywords from your niche', 'Label each with an intent type, then check the live SERP to confirm', 'Note any where your guess and the SERP disagree'],
        ['Four intents: informational, navigational, commercial, transactional', 'Wording gives clues, the SERP gives the answer', 'Content format must match intent']),
      L('Reading intent from the SERP', 9,
        ['Analyze the top ten for format and angle', 'Spot mixed-intent queries', 'Decide whether you can compete'],
        ['For any target keyword, open the top results and record: page type (article, category, tool, video), content angle (list, tutorial, comparison), freshness, and depth. The dominant pattern is what the engine has learned searchers prefer. This is often called analyzing the "SERP archetype".',
         'Some queries are mixed: "python" shows the language, a snake, and tutorials. Here you choose the interpretation you serve best. If results are dominated by huge brands or tools you cannot rival, deprioritise the term and look for a more specific variant.'],
        ['For "email marketing templates" the top results are all downloadable template libraries with previews. A 600-word essay on email marketing would mismatch. The winning format: a visual gallery with copyable templates and short usage notes.'],
        ['For three keywords, fill a table: dominant page type, angle, average depth', 'Write the page format you would build for each', 'Flag one term to drop because of brand-dominated results'],
        ['The SERP shows the format searchers prefer', 'Mixed intent means choosing your interpretation', 'Drop terms dominated by unbeatable formats']),
      L('Intent and the buyer journey', 8,
        ['Map keywords to funnel stages', 'Balance top-of-funnel and bottom-of-funnel content', 'Avoid vanity traffic'],
        ['Awareness-stage searches are broad and informational; consideration-stage searches compare solutions; decision-stage searches name products, prices and alternatives. Bottom-of-funnel keywords have lower volume but convert far better, so many businesses start there and expand upward.',
         'Top-of-funnel content builds audience and links, but only pays off if it connects to the next step through internal links, email capture or clear next-step content. Judge each page by the role it plays in the journey, not by traffic alone.'],
        ['A project-management tool targets: "what is agile" (awareness), "best project management software for agencies" (consideration), "Asana alternatives" and "[brand] pricing" (decision). It publishes decision pages first, because they produce trials fastest.'],
        ['List five keywords per funnel stage for your site', 'Check you have a page for each decision-stage term', 'Add an internal link from each awareness page to a consideration page'],
        ['Funnel stage maps to intent', 'Bottom-funnel terms convert best', 'Link awareness content to the next step'])
    ], [
      Q('"buy wireless earbuds free shipping" is which intent?', ['Informational', 'Navigational', 'Transactional', 'Local'], 2, 'The searcher is ready to purchase, which is transactional.'),
      Q('What is the most reliable way to confirm intent?', ['Count the characters in the keyword', 'Look at the live SERP', 'Check the estimated CPC and nothing else', 'Ask a colleague what they think it means'], 1, 'The SERP reveals what the engine has learned users want.'),
      Q('A query whose SERP shows only product category pages needs:', ['A long blog essay on the topic', 'A matching category or product-style page', 'A press release announcing the product', 'A downloadable PDF guide'], 1, 'Format mismatch usually means the page will not rank.'),
      Q('Which keyword is closest to decision stage?', ['what is a crm', 'crm software comparison', 'HubSpot pricing', 'history of crm'], 2, 'Brand + pricing indicates someone close to purchase.'),
      Q('Why link awareness content to later-stage pages?', ['It slows pages down by adding more links', 'It moves readers toward conversion', 'Google requires a link from every page', 'It stops the pages from being indexed'], 1, 'Internal links connect traffic to the next step in the journey.')
    ]),
    S('Tools, data and metrics', [
      L('Building the seed list and expanding it', 10,
        ['Generate seed keywords from your business', 'Use free sources for expansion', 'Collect candidate keywords in one sheet'],
        ['Start with seeds: the products, services, problems and audience terms you already use, plus the words customers use in support tickets, sales calls and reviews. Customer language is often different from your internal jargon, and mismatched vocabulary is a major missed opportunity.',
         'Expand with free sources: Google Autocomplete and "People also ask", "Related searches", Search Console\'s Queries report (real data on terms where you already show), forums such as Reddit, and competitor page titles. Paste everything into one sheet with columns for keyword, source, and later metrics.'],
        ['A dentist\'s seeds: "dentist", "teeth whitening". Support emails reveal "my tooth hurts when I drink cold water". That long phrase signals a real problem, and Autocomplete expands it into "sensitive teeth causes", "sensitive teeth treatment" and "sensitivity after whitening", each a content opportunity.'],
        ['Write 20 seed terms, ten of them in customer language', 'Expand five seeds with Autocomplete and PAA', 'Export your top 100 Search Console queries into the sheet'],
        ['Seeds come from customers, not just your jargon', 'Search Console shows terms you already partly rank for', 'Keep everything in one tracked sheet']),
      L('Reading volume, difficulty and CPC', 10,
        ['Interpret search volume as an estimate', 'Use difficulty scores as relative guides', 'Use CPC as a value signal'],
        ['Tools estimate monthly **search volume** from clickstream and Google data; treat numbers as ranges, and prefer comparing keywords within one tool. **Keyword difficulty** scores are each vendor\'s own model, usually based on backlink strength of top results. A "30" in one tool is not a "30" in another.',
         '**CPC** from advertising data shows what advertisers pay per click, which is a decent proxy for commercial value: a keyword with CPC of $12 is probably more valuable than one at $0.30, even if volume is lower. Also look at clicks-per-search: if the SERP is full of ads and features, volume overstates organic traffic.'],
        ['Keyword A: 5,000 searches, CPC $0.40, difficulty 70. Keyword B: 600 searches, CPC $9, difficulty 25. For a new B2B site, B is usually the better first target: lower competition and visitors with clear commercial value.'],
        ['Add volume, difficulty and CPC to your list from one tool', 'Calculate a simple score: (volume x intent weight) / difficulty', 'Pick ten terms you can realistically win this quarter'],
        ['Volume and difficulty are estimates', 'Compare within one tool', 'CPC hints at commercial value']),
      L('Competitor gap and SERP-based research', 9,
        ['Find keywords competitors rank for that you do not', 'Study which pages drive their traffic', 'Avoid copying blindly'],
        ['A content gap analysis lists terms where competitors rank in the top 20 and you do not. Paid tools automate this; without them you can manually review competitors\' top pages by browsing their site structure and search results for `site:competitor.com topic`.',
         'Look for patterns: which topics earn most traffic, which formats they use, which pages seem outdated. The goal is not to imitate but to find topics where you can add something better: original data, deeper expertise, clearer examples, or a fresher update.'],
        ['A competitor\'s "invoice template" page brings in 40,000 monthly visits but is a plain download link. You can build a better page with a live generator, usage guidance and a free-to-use license, giving a clear angle to outperform them.'],
        ['Pick three direct competitors and list their five top pages', 'For each, note what you could do better', 'Add the associated keywords to your sheet'],
        ['Gap analysis finds missing topics', 'Study formats and weaknesses', 'Aim to improve on competitors, not copy'])
    ], [
      Q('Where can you find real queries your site already appears for?', ['Only the Keyword Planner inside Google Ads', 'Search Console Queries report', 'The sitemaps published by your competitors', 'The old meta keywords tag on each page'], 1, 'The Performance report shows the actual queries that generated impressions and clicks.'),
      Q('Why compare keyword difficulty only within one tool?', ['Tools use different proprietary models', 'Google publishes a rule forbidding cross-tool comparison', 'Scores change every hour of the day', 'Every vendor uses an identical formula'], 0, 'Each vendor\'s score is calculated differently.'),
      Q('A high CPC usually signals:', ['Low commercial value for most advertisers', 'Strong advertiser interest and commercial value', 'That nobody is searching for the term', 'That the query is navigational'], 1, 'Advertisers pay more where clicks tend to be valuable.'),
      Q('A content gap analysis finds:', ['Broken links that waste crawl activity', 'Keywords competitors rank for but you do not', 'Slow pages that fail Core Web Vitals', 'Duplicate titles across your templates'], 1, 'It compares ranking keyword sets between sites.'),
      Q('Which is the best source of customer language?', ['Support tickets and sales calls', 'Internal brand guidelines and style documents', 'Legal terms and conditions pages', 'Raw server logs and error reports'], 0, 'Customers describe problems in their own words, which often match search queries.')
    ]),
    S('Clustering and long-tail strategy', [
      L('Keyword clustering', 10,
        ['Explain why we cluster keywords', 'Group by shared SERP rather than shared words', 'Map one cluster to one page'],
        ['Search engines understand meaning, so "how to lose weight fast", "fast weight loss tips" and "ways to lose weight quickly" are handled by the same page. A **cluster** groups keywords that one page can satisfy. This prevents cannibalization, where several of your pages compete for the same query.',
         'The best clustering test is SERP overlap: search two keywords and compare the top ten. If they share many of the same URLs (commonly 3 or more), one page can serve both. Tools can automate this, but a spreadsheet and a few searches work for small projects. Name each cluster by its primary keyword (highest value or volume) and treat the rest as secondary.'],
        ['Keywords: "standing desk benefits", "benefits of standing desks", "is a standing desk worth it". The top-ten overlap is high, so one page targets all three with "standing desk benefits" as primary. A separate page is needed for "best standing desk" because its SERP is entirely different.'],
        ['Take 30 keywords and group them into clusters by SERP overlap', 'Name each cluster by its primary keyword', 'Assign each cluster to an existing or planned URL'],
        ['Cluster by SERP overlap, not word similarity', 'One cluster maps to one page', 'Clustering prevents cannibalization']),
      L('Long-tail strategy', 9,
        ['Define head, body and long-tail terms', 'Explain why long-tail suits newer sites', 'Build a topic plan from long-tail seeds'],
        ['Head terms are short and broad ("shoes"), with high volume and brutal competition. Long-tail terms are longer and specific ("waterproof trail running shoes for wide feet"). Each has low volume, but together they represent the majority of searches, convert better thanks to specific intent, and are far easier to rank for.',
         'For a new site the strategy is to win dozens of long-tail terms, building topical depth and links, which then supports ranking for tougher body terms. Pair each long-tail page with internal links to a hub page for the broader topic.'],
        ['A new site selling hiking gear writes 20 guides on specific long-tail questions ("how to waterproof leather hiking boots"). Over six months those pages earn links and traffic, and the category page for "hiking boots" starts to rise too.'],
        ['Find ten long-tail variants for one head term', 'Check for a SERP with weaker sites (forums, small blogs)', 'Plan the hub page and its five supporting articles'],
        ['Long-tail is specific, lower competition and higher converting', 'It builds depth and authority over time', 'Link long-tail pages to a hub']),
      L('Prioritizing and maintaining your keyword map', 9,
        ['Score keywords by value and effort', 'Build a keyword map', 'Review it on a schedule'],
        ['Create a keyword map: one row per target URL with primary keyword, secondary keywords, intent, current ranking, priority and status. Score priority by business value (conversion likelihood), traffic potential, and winnability (difficulty, your authority, SERP weakness). Work top-down.',
         'The map is a living document. Review it quarterly: remove terms that no longer matter, add emerging ones from Search Console, and check for newly created cannibalization. Tie every content brief back to a row on the map.'],
        ['A map has 40 rows. The team scores each 1 to 5 on value, potential and winnability and multiplies them. The top 8 scores become next quarter\'s content roadmap; terms scoring under 10 are parked.'],
        ['Create a keyword map spreadsheet with the columns above', 'Score your top 20 clusters', 'Schedule a quarterly review in your calendar'],
        ['One primary keyword per URL', 'Prioritize by value, potential and winnability', 'Review the map regularly'])
    ], [
      Q('Two keywords share most of the same top-ten URLs. What should you do?', ['Build two separate pages, one for each keyword', 'Target both with one page', 'Ignore both keywords as too similar', 'Redirect one of the keywords to the homepage'], 1, 'High SERP overlap means one page can satisfy both.'),
      Q('What is keyword cannibalization?', ['Using too many keywords inside one page title', 'Multiple of your pages competing for the same query', 'Competitors copying the keywords you target', 'A penalty Google applies for similar pages'], 1, 'Several similar pages split signals and confuse which page should rank.'),
      Q('Why target long-tail keywords first on a new site?', ['They always have very high search volume', 'They are less competitive and often higher converting', 'Google only ranks long-tail terms for new sites', 'They need no content to rank'], 1, 'Specific queries are easier to win and signal clear intent.'),
      Q('What belongs in a keyword map?', ['Only the domain name and the logo', 'URL, primary and secondary keywords, intent and priority', 'Only the names of your competitors', 'Only a count of backlinks'], 1, 'A map ties keywords to URLs and tracks priority and status.'),
      Q('How often should you review the keyword map?', ['Never, because a map is permanent once built', 'Quarterly or on a regular schedule', 'Only when traffic drops to zero', 'Once every five years'], 1, 'Search behavior and your site change, so a regular review keeps it accurate.')
    ])
  ]);
})();
