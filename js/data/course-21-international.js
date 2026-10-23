(function () {
  var h = QF.h, L = h.L, S = h.S, Q = h.Q;
  QF.addCourse({
    slug: 'international-seo', title: 'International & Multilingual SEO', subtitle: 'Domains, hreflang, translation versus localization, and marketing across countries.',
    track: 'SEO', topic: 'International', level: 'Advanced', stage: 3, instructor: 'idris', rating: 4.6,
    desc: 'Selling in more than one country multiplies SEO complexity: language versions, currencies, different search habits and technical tags that are easy to get wrong. This course gives you a framework for deciding if a site should go international and how to set it up properly.',
    learn: ['Decide whether a business needs international SEO', 'Choose between ccTLDs, subdirectories and subdomains', 'Implement hreflang correctly', 'Differentiate translation from localization', 'Research keywords and competitors in other markets'],
    reqs: ['Technical SEO basics', 'Interest in multi-country marketing']
  }, [
    S('Strategy and structure', [
      L('Do you need international SEO?', 9,
        ['Ask the right business questions', 'Distinguish language targeting from country targeting', 'Avoid expanding too early'],
        ['Before building a second language site, check: are there customers there, can the business serve them (shipping, support, legal), and is there search demand? **Language targeting** serves speakers of a language wherever they are (Spanish for Spain and Latin America). **Country targeting** serves people in a particular country, with its prices, delivery and laws (Spanish for Mexico with pesos).',
         'Many companies translate a site and wait for traffic that never arrives because they never researched the market or promoted it. Start with one or two markets, measure and expand.'],
        ['A US store ships to Canada and the UK. Analytics shows 12% of traffic already from these countries, so adding localized pages for them has evidence behind it.'],
        ['List three markets a business could enter and the evidence for each', 'Write which are language and which are country targets', 'Check delivery and legal constraints'],
        ['Check demand, ability to serve and legal fit', 'Language and country targeting differ', 'Start small, then expand']),
      L('URL structures: ccTLD, subdirectory or subdomain', 10,
        ['Compare the three common structures', 'Know their pros and cons', 'Pick one and stay consistent'],
        ['**ccTLD** (country-code domain, such as example.de): a strong signal of the target country and trusted locally, but costs more and each domain needs its own authority. **Subdirectory** (example.com/de/): easiest to maintain and benefits from the main domain\'s authority. **Subdomain** (de.example.com): can be hosted separately, but is treated more like a separate site.',
         'For most businesses, subdirectories are the simplest and most efficient. Large brands with local operations may prefer ccTLDs. Do not use URL parameters (`?lang=de`) or cookies to decide language, because search engines may never see the other versions. Each language version needs its own crawlable URL.'],
        ['A growing store chooses `/fr/` and `/de/` subdirectories. Each shares authority with the main site, and one team can manage them in one system.'],
        ['Draw the three structures for a store with five markets', 'List pros and cons in a table', 'Choose one for a fictional client and justify'],
        ['ccTLDs: strong signal, more cost', 'Subdirectories: simplest for most', 'Never rely on cookies or parameters for language']),
      L('Geotargeting, currencies and legal details', 8,
        ['Use geotargeting tools correctly', 'Present local currencies and details', 'Avoid forced redirects'],
        ['Search Console no longer has a general country setting for most sites, but ccTLDs and hreflang tags signal your targets. Show local currency, shipping, phone numbers, address formats, units, VAT details and local legal information such as privacy and returns policies.',
         'Avoid automatically redirecting users by IP address, because search engines crawl mostly from the US and may never see other versions, and users who are traveling get frustrated. Instead, suggest the local version with a banner and let them choose.'],
        ['A visitor from Germany lands on the English site and sees a banner "View the German site?" They choose, and the choice is remembered. Googlebot can still reach all versions.'],
        ['Check a multi-country site for banners or forced redirects', 'List the local details you would adapt', 'Write the banner text'],
        ['Localize currency, shipping and legal details', 'Do not force IP-based redirects', 'Suggest, do not force'])
    ], [
      Q('What is the difference between language and country targeting?', ['Language targets speakers; country targets people in a place with local details', 'They are identical', 'Language is paid, country is free', 'Country is only for ads'], 0, 'A language can span many countries.'),
      Q('Which structure is usually simplest for most businesses?', ['Subdirectories', 'Parameters', 'Cookies', 'Separate unrelated sites'], 0, 'They share authority and are easy to manage.'),
      Q('Why is IP-based forced redirecting risky?', ['Crawlers may not see other versions and users get frustrated', 'It speeds up the site', 'It is required', 'It adds links'], 0, 'Googlebot mostly crawls from the US.'),
      Q('Which signals your target country?', ['A ccTLD like .de', 'The font', 'The color scheme', 'The logo'], 0, 'Country-code domains are a clear geographic signal.'),
      Q('Before expanding, you should check:', ['Demand and ability to serve the market', 'Only translation cost', 'Nothing', 'Only competitor logos'], 0, 'Evidence of demand and operational readiness prevent wasted effort.')
    ]),
    S('hreflang and translation', [
      L('hreflang explained', 11,
        ['Say what hreflang does', 'Write correct tags', 'Know the rules for return links'],
        ['`hreflang` tells search engines which language and regional version of a page to show to which users. It does not boost rankings; it helps show the right version. Place tags in the HTML head, HTTP headers, or the XML sitemap. Each page must list **all** versions including itself, and every version must link back (return links), otherwise the tags may be ignored.',
         'Format: language code (ISO 639-1) optionally with region (ISO 3166-1): `en-gb`, `en-us`, `de-de`. `x-default` marks a fallback page for users who do not match any version. Make sure each URL is indexable, canonical to itself and returns 200.'],
        ['::<link rel="alternate" hreflang="en-us" href="https://example.com/en-us/" />', '::<link rel="alternate" hreflang="en-gb" href="https://example.com/en-gb/" />', '::<link rel="alternate" hreflang="de-de" href="https://example.com/de-de/" />', '::<link rel="alternate" hreflang="x-default" href="https://example.com/" />', 'Every page in the set must include this same list, including a tag pointing to itself.'],
        ['Write hreflang tags for a site with two versions', 'Check return links between versions', 'Test with a crawler that reports hreflang errors'],
        ['hreflang shows the right version to the right user', 'List all versions with return links', 'Use correct codes and x-default'],
        { oops: 'Using country codes as languages ("uk" for English). English in the United Kingdom is `en-gb`.' }),
      L('Translation versus localization', 9,
        ['Define both terms', 'Understand why raw translation is not enough', 'Use machine translation carefully'],
        ['**Translation** changes the words into another language. **Localization** adapts the whole experience: idioms, units, dates, examples, images, payment methods and cultural references. A slogan may be harmless in one language and embarrassing in another.',
         'Machine translation is useful for drafts but can produce errors and unnatural text. Search engines may treat large amounts of poor, unreviewed automatic translation as low quality. Use native speakers to review key pages, and translate meta titles and descriptions properly because those affect clicks.'],
        ['A retailer translates "pants" literally for the UK site, where pants means underwear. A local reviewer changes it to "trousers", avoiding confusion and snickers.'],
        ['Find three terms that differ between US and UK English', 'Translate a short paragraph with a tool and ask a native speaker to review', 'List things to localize besides text'],
        ['Localization adapts more than words', 'Machine translation needs human review', 'Translate titles and descriptions too']),
      L('Common international SEO mistakes', 9,
        ['Spot typical errors', 'Fix duplicate content between regions', 'Keep versions in sync'],
        ['Common mistakes: missing return links, hreflang pointing to redirecting or non-canonical URLs, mixing language and country codes, translating only the visible text and leaving titles in English, auto-redirecting by IP, and duplicate English pages for the UK, US and Australia with no differences and no hreflang.',
         'For near-duplicate regional pages, keep hreflang and make real local differences such as prices and spelling. Create a process so updates reach all versions; otherwise, one language drifts out of date.'],
        ['A crawl reveals that 40% of German pages have hreflang tags pointing to English pages that redirect. Fixing them makes the German pages appear in German results.'],
        ['Run a crawl on an international site and check hreflang reports', 'List five mistakes and fixes', 'Create a sync checklist for updates'],
        ['Check hreflang with a crawler', 'Make real local differences', 'Maintain all versions together'])
    ], [
      Q('What does hreflang do?', ['Boosts rankings', 'Signals which language/region version suits which user', 'Blocks pages', 'Speeds up the site'], 1, 'It helps search engines show the right version.'),
      Q('What are return links?', ['Links back from each version to the others', 'Paid links', 'Redirects', 'Links to the homepage'], 0, 'hreflang annotations must be reciprocal.'),
      Q('The correct code for English in the UK is:', ['uk', 'en-uk', 'en-gb', 'gb-en'], 2, 'Use language en and region GB: en-gb.'),
      Q('Localization is:', ['Only translation', 'Adapting the whole experience for a market', 'A redirect', 'A tracker'], 1, 'It includes units, currency, culture and more.'),
      Q('Machine-translated pages should be:', ['Published unreviewed at scale', 'Reviewed by a native speaker for important pages', 'Hidden', 'Duplicated'], 1, 'Poor translation can hurt quality and trust.')
    ]),
    S('Researching and measuring other markets', [
      L('International keyword research', 9,
        ['Research in the target language', 'Avoid direct translation of keywords', 'Consider other search engines'],
        ['Do not translate keywords word for word. People in other markets use different words. Research with local tools, native speakers and local autocomplete. Set the tool\'s country and language settings correctly, and check the local SERP for intent and competitors.',
         'Google dominates most markets, but not all: Baidu in China, Yandex in Russia, Naver in South Korea have their own rules. Also check platforms like marketplaces and social search that play a big role in some countries.'],
        ['A furniture brand translates "sideboard" for Germany. The tool shows "Sideboard" is common, while "Anrichte" has lower volume. Research in German avoids guesswork.'],
        ['Research a keyword in a different language using autocomplete', 'Compare SERPs in two countries', 'List local search engines for three countries'],
        ['Research keywords locally', 'Check the SERP for each market', 'Know the local search landscape']),
      L('Local link building and reputation', 8,
        ['Earn links in the target country', 'Use local PR', 'Respect cultural norms'],
        ['Links from sites in the target country and language support local relevance. Look for local directories, associations, media and partners. Local PR and community involvement build trust.',
         'Learn how outreach is done locally: communication style, formality and holidays differ. Use native speakers for outreach and local review sites for reputation.'],
        ['A UK brand entering Spain partners with a Spanish trade association and gets links, mentions and credibility among local buyers.'],
        ['Find five local sites relevant to a business in another country', 'Draft a polite outreach email in simple language and have it reviewed', 'Note local holidays to avoid for campaigns'],
        ['Local links boost relevance', 'Adapt communication to culture', 'Use native speakers']),
      L('Measuring international performance', 8,
        ['Segment reports by country and language', 'Compare markets fairly', 'Report to stakeholders'],
        ['In Search Console use filters for country, and different properties or directories for each version. In GA4, segment by country and language, and compare conversion rate, revenue and cost. Currency differences can confuse comparisons, so convert them consistently.',
         'Report each market with its own goals and baseline. A new market will start small, so report growth rates and progress milestones as well as totals. Share findings with local teams and adjust.'],
        ['A monthly dashboard shows organic revenue by market in a single currency and notes that the French site grew 60% from a small base, while Germany needs content fixes.'],
        ['Create a Search Console filter for a country', 'Build a country comparison table', 'Write a milestone list for a new market'],
        ['Segment by country and language', 'Use consistent currency in comparisons', 'Report progress, not just totals'])
    ], [
      Q('Why not translate keywords word for word?', ['People may use different words', 'It is illegal', 'It is slower', 'Tools forbid it'], 0, 'Local vocabulary and search habits differ.'),
      Q('Which search engine is dominant in China?', ['Baidu', 'Bing', 'Yahoo', 'DuckDuckGo'], 0, 'Baidu is the largest local search engine in China.'),
      Q('Local links help because they:', ['Support local relevance and trust', 'Increase page weight', 'Remove errors', 'Replace content'], 0, 'They show the site matters in that market.'),
      Q('When comparing markets, you should:', ['Use consistent currency and baselines', 'Ignore differences', 'Compare only totals', 'Use random units'], 0, 'Fair comparisons need consistent measures.'),
      Q('Search Console segmentation helps you to:', ['Filter data by country or version', 'Edit pages', 'Pay for ads', 'Verify DNS'], 0, 'Filters isolate performance by market.')
    ])
  ]);
})();
