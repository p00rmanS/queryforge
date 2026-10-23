(function () {
  var h = QF.h, L = h.L, S = h.S, Q = h.Q;
  QF.addCourse({
    slug: 'seo-for-ai-search', title: 'SEO for AI Search', subtitle: 'Optimizing for AI Overviews, generative answers and citation-driven discovery.',
    track: 'SEO', topic: 'AI Search', level: 'Advanced', instructor: 'kenji', rating: 4.7,
    desc: 'Search results now include AI-generated summaries and chat-style answers that cite sources. This course explains how these systems retrieve and ground answers, how to make your content eligible for citation, and how to measure visibility in a world of fewer clicks. Guidance here is evidence-based and honest about uncertainty: nobody outside the vendors knows exact selection rules.',
    learn: ['Explain retrieval-augmented generation in plain terms', 'Make content easy for AI systems to extract and cite', 'Strengthen entity and brand signals', 'Measure visibility and referral traffic from AI surfaces', 'Plan a strategy that balances classic SEO and AI visibility'],
    reqs: ['Solid SEO fundamentals', 'Content strategy experience helpful']
  }, [
    S('How AI search works', [
      L('Generative search and AI Overviews', 9,
        ['Describe AI Overviews and chat-based search', 'Explain grounding and retrieval', 'Acknowledge the limits of what we know'],
        ['Generative search systems combine a language model with retrieval. In a pattern often called **retrieval-augmented generation (RAG)**, the system fetches relevant documents from an index or the web, then the model writes an answer grounded in them and, in most products, shows links to sources. Google\'s AI Overviews and AI Mode, Bing Copilot, and assistants such as ChatGPT search and Perplexity work in broadly this way.',
         'Google has said that to appear as a supporting link in AI features, a page must be indexed and eligible to show a snippet; there are no special technical requirements beyond standard SEO best practices. The exact selection and ordering are not public, so treat any claim of a guaranteed "AI ranking factor" with scepticism and rely on testing.'],
        ['A user asks "how often should I replace running shoes?" An AI Overview summarizes 300 to 500 miles guidance and links three sources. Pages that state the answer clearly, with credible reasoning, are easier to use as supporting sources.'],
        ['Search 10 queries from your niche and record which show AI summaries', 'Note which sources are cited', 'Identify what those pages have in common'],
        ['RAG retrieves then generates', 'Standard indexability and snippet eligibility are prerequisites', 'No official guaranteed AI ranking factors']),
      L('Query types and where AI answers appear', 9,
        ['Classify queries by AI feature likelihood', 'Understand zero-click effects', 'Prioritize topics accordingly'],
        ['AI summaries appear most for informational and complex queries and less for navigational or highly transactional ones. Multi-part, conversational queries are especially likely to trigger generative responses. Where an answer is fully satisfied by the summary, fewer people click, a "zero-click" effect.',
         'Not every topic is affected equally. Queries that need a product, a booking, a tool or deep expertise still lead to clicks. Focus on content where you can add value beyond a summary: original data, tools, firsthand experience, and transactions.'],
        ['A site relying on simple definition posts sees impressions up and clicks down as summaries answer "what is" queries. It pivots to calculators, comparison data and original tests that a summary cannot replace.'],
        ['Segment your Search Console queries by type', 'Compare click trends for definitional versus complex queries', 'Pick three pages to strengthen with unique value'],
        ['Informational queries are most affected', 'Zero-click behavior is rising', 'Add value summaries cannot replace']),
      L('AI crawlers, access and control', 9,
        ['Identify major AI user agents', 'Control access with robots.txt', 'Weigh visibility against content licensing'],
        ['Different bots do different jobs: some collect data for model training, others fetch pages in real time to answer user questions. Vendors publish user-agent names (for example `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`) and Google uses the `Google-Extended` token to control use of content for its AI model training, separate from Googlebot search.',
         'Blocking in robots.txt is a business decision. Blocking a search or retrieval bot can reduce citation chances; blocking a training bot generally does not affect search listings. Blocking Googlebot would remove you from Google Search entirely. Document your policy and review vendor documentation regularly because details change.'],
        ['::User-agent: GPTBot', '::Disallow: /premium/', '::', '::User-agent: OAI-SearchBot', '::Allow: /', 'This sample allows a search bot everywhere while keeping a training bot out of a paid section. Check each vendor\'s current docs before copying.'],
        ['Review your robots.txt for AI bot rules', 'Check server logs for AI crawler traffic', 'Write a one-paragraph policy on AI access'],
        ['Training and retrieval bots differ', 'Robots.txt is the control mechanism', 'Decide deliberately; policies change'])
    ], [
      Q('RAG stands for:', ['Rapid Access Gateway', 'Retrieval-Augmented Generation', 'Ranked Answer Graph', 'Random Article Generator'], 1, 'The system retrieves documents then generates a grounded answer.'),
      Q('To appear as a supporting link in Google\'s AI features, a page must at minimum be:', ['Paid for through an advertising account', 'Indexed and eligible for a snippet', 'Written by an AI tool', 'Shorter than 300 words'], 1, 'Google states standard SEO eligibility applies.'),
      Q('Which query type is most likely to show an AI summary?', ['A login page for an account', 'A complex informational question', 'A navigational brand search', 'A single-word brand name'], 1, 'Complex informational queries often trigger summaries.'),
      Q('Blocking a training-only bot generally:', ['Removes you from Google Search entirely', 'Does not by itself remove search listings', 'Permanently deletes your site', 'Boosts your rankings'], 1, 'Training and search crawling are separate controls.'),
      Q('Zero-click refers to:', ['A search that returns no results', 'Users getting answers without clicking through', 'A broken link that goes nowhere', 'A paid advertisement'], 1, 'The answer is satisfied on the results page.')
    ]),
    S('Optimizing for AI visibility', [
      L('Write extractable, citable content', 10,
        ['Structure content for extraction', 'Lead with direct answers', 'Provide verifiable facts'],
        ['AI systems pull passages, so make each section self-contained: a clear heading, a direct answer in the first sentences, then supporting detail. Use concise definitions, lists, tables with labeled data and specific numbers with sources. Avoid vague claims that cannot be quoted.',
         'State facts precisely and cite primary sources. Include dates, units and context. Original statistics and unique insight are more likely to be quoted than rephrased common knowledge. Clear writing helps people and machines alike.'],
        ['A heading "How long does a mortgage pre-approval last?" is followed by: "Most pre-approvals remain valid for 60 to 90 days, depending on the lender." The section then explains extensions and credit checks. The answer is easy to extract.'],
        ['Rewrite the first two sentences under five headings as direct answers', 'Add a labeled comparison table to one page', 'Add source citations to key statistics'],
        ['Self-contained, answer-first sections', 'Specific, sourced facts', 'Original data gets cited']),
      L('Entities, brand and authority', 9,
        ['Define entity recognition', 'Strengthen brand and author signals', 'Build consistent presence'],
        ['Search and AI systems model the world as entities (people, brands, places, products) and relationships. Make yours unambiguous: consistent names, an About page, `Organization` and `Person` schema with `sameAs` links to official profiles, a Wikipedia or Wikidata entry where genuinely eligible, and consistent descriptions across the web.',
         'Mentions in reputable publications, reviews, communities and expert contributions build the association between your brand and your topic. In generative answers brands are often mentioned from broad web consensus, so earning mentions matters alongside links.'],
        ['A software firm adds Organization schema with sameAs links to its LinkedIn and GitHub, ensures its name is consistent everywhere, and earns coverage in three trade publications. Branded searches and AI mentions of the firm for its category increase.'],
        ['Audit how your brand is described across five platforms', 'Add Organization and Person schema', 'Plan two earned-mention opportunities'],
        ['Be unambiguous as an entity', 'Consistency across the web', 'Earned mentions build association']),
      L('Technical accessibility for AI systems', 9,
        ['Ensure content is in the HTML', 'Keep pages fast and crawlable', 'Use structured data sensibly'],
        ['Many AI crawlers do not run JavaScript, so ensure key content is present in server-rendered HTML. Keep pages accessible without logins or aggressive interstitials, with clean semantic markup and fast response times. Standard technical SEO hygiene remains the foundation.',
         'Structured data helps clarify content but is not a proven ticket to citation. Use accurate markup. Some sites publish an `llms.txt` file proposing a curated guide for LLMs; major vendors have not confirmed they use it for ranking, so treat it as optional and low priority.'],
        ['A documentation site renders everything client-side. Fetching it with a plain HTTP client returns an empty page. Server-rendering the docs makes the content visible to all crawlers.'],
        ['Fetch a key page with curl and check content appears', 'Check paywall or interstitial friction for bots', 'Validate your schema'],
        ['Server-render critical content', 'Keep pages accessible and fast', 'Treat llms.txt as optional'])
    ], [
      Q('Which content structure suits AI extraction best?', ['Long unstructured blocks of prose', 'Self-contained sections with direct answers', 'Content that exists only inside images', 'Hidden text added for crawlers'], 1, 'Answer-first sections are easier to quote.'),
      Q('Why include specific sourced statistics?', ['Vague claims are easier to quote', 'They are verifiable and more likely to be quoted', 'Statistics slow the page down', 'Robots.txt requires them'], 1, 'Concrete facts are easy to cite.'),
      Q('sameAs in schema is used to:', ['Link entity to official profiles', 'Hide pages from search results', 'Change a page\'s ranking position', 'Block specific bots from crawling'], 0, 'It connects your entity to other official identities.'),
      Q('Why server-render important content?', ['Many AI crawlers do not run JavaScript', 'It removes the need for HTML', 'It deletes the cache automatically', 'It stops real users from loading the page'], 0, 'Content absent from the HTML may be invisible to them.'),
      Q('The status of llms.txt as a ranking tool is:', ['Confirmed as required by every major vendor', 'Not confirmed by major vendors', 'Banned by search engines', 'A replacement for robots.txt'], 1, 'It remains a proposal without confirmed support.')
    ]),
    S('Measuring and adapting', [
      L('Measuring AI visibility', 9,
        ['Track AI referral traffic', 'Run prompt-based visibility checks', 'Interpret Search Console data'],
        ['Referral traffic from AI products appears in analytics under their referrer domains (for example chatgpt.com or perplexity.ai); create a channel group to monitor it. Google\'s AI feature traffic is counted within normal Search Console web search data, so it is not separated out.',
         'For visibility, define a set of 30 to 100 representative prompts, run them regularly across assistants, and record whether your brand is mentioned or cited, in what position, and with which sentiment. Results vary by run and location, so track trends not single outputs. Some SEO tools now automate this.'],
        ['A team records that its brand is cited in 8 of 50 prompts in March and 15 of 50 in June after publishing original research and gaining trade press mentions.'],
        ['Create a custom GA4 channel for AI referrals', 'Build a list of 30 prompts', 'Record baseline citations'],
        ['AI referrals appear under distinct domains', 'Track prompts over time', 'Expect variability']),
      L('Adapting your strategy', 9,
        ['Focus on high-value content', 'Diversify channels', 'Balance classic SEO and AI work'],
        ['Classic SEO still drives most search traffic and underpins AI visibility, since eligibility starts with being indexed and well ranked. Double down on content that earns clicks despite summaries: tools, proprietary data, first-hand reviews, communities and brand-driven demand.',
         'Diversify: email, communities, video and partnerships reduce dependence on a single surface. Measure conversions rather than traffic alone; AI referrals are often small but higher intent.'],
        ['A publisher shifts from 100 generic explainers per quarter to 20 original-research pieces plus a data tool; overall traffic is flat but newsletter signups and brand searches rise.'],
        ['List pages most exposed to summaries', 'Plan unique-value upgrades for three of them', 'Add an email capture step'],
        ['Classic SEO remains the foundation', 'Invest in unique value', 'Diversify channels']),
      L('Ethics, accuracy and staying current', 8,
        ['Avoid manipulative tactics', 'Monitor misinformation about your brand', 'Keep learning from reliable sources'],
        ['Avoid tactics such as hidden prompt injection text aimed at AI crawlers or mass AI-generated spam; they violate policies and can backfire. Review how AI systems describe your brand; if inaccurate, correct the sources they rely on (your site, profiles, reputable listings) and use vendors\' feedback channels.',
         'This field changes quickly. Follow official documentation (Google Search Central, Bing Webmaster blog, vendor publisher docs), run your own experiments, and be cautious of confident claims without evidence.'],
        ['A brand finds an assistant quoting an outdated pricing page. Updating the page, adding dates and removing stale third-party listings corrects answers over subsequent weeks.'],
        ['Ask three assistants about your brand and check accuracy', 'Fix the underlying sources of any mistakes', 'Subscribe to official documentation feeds'],
        ['No manipulation', 'Correct inaccuracies at the source', 'Rely on documentation and tests'])
    ], [
      Q('AI referral traffic appears in analytics as:', ['Always as direct traffic', 'Referrals from AI product domains', 'As paid search', 'As unknown traffic that cannot be identified'], 1, 'Many show as referrals from their domains.'),
      Q('Why track a fixed prompt list over time?', ['Outputs vary, so trends are more reliable than single outputs', 'It guarantees a ranking improvement', 'It deletes old data to save space', 'It speeds up your site'], 0, 'Variability makes trend tracking the sensible method.'),
      Q('Which content types hold click value against summaries?', ['Generic definitions anyone can find', 'Tools, original data and first-hand tests', 'Duplicate text copied from other sites', 'Thin pages with a few lines of text'], 1, 'Unique value encourages clicks.'),
      Q('Hidden text aimed at AI crawlers is:', ['Recommended by search engines for visibility', 'Manipulative and risky', 'Required for AI systems to read your page', 'Part of standard schema markup'], 1, 'It violates spam policies.'),
      Q('Best source of guidance on search features is:', ['Official documentation and tests', 'Rumors shared on social media', 'Anonymous posts on forums', 'Advertisements from tool vendors'], 0, 'Documentation and experiments are most reliable.')
    ])
  ]);
})();
