(function () {
  var h = QF.h, L = h.L, S = h.S, Q = h.Q;
  QF.addCourse({
    slug: 'writing-for-the-web', title: 'Writing for the Web & SEO Copywriting', subtitle: 'Clear sentences, clean grammar, headlines, page copy and ad copy. Write like someone people trust.',
    track: 'SEO', topic: 'Content', level: 'Beginner', stage: 1, instructor: 'sol', rating: 4.7,
    desc: 'Search marketers write constantly: page titles, descriptions, blog posts, product copy, ads and emails to clients. Typos and awkward sentences make clients doubt you. This course goes back to basics (sentences, grammar, editing) and builds up to SEO copywriting and ad copy.',
    learn: ['Write short, clear, scannable web text', 'Avoid the grammar and spelling mistakes that embarrass professionals', 'Write headlines and introductions that are honest and compelling', 'Place keywords naturally in page copy', 'Write title tags, meta descriptions and ads within character limits', 'Edit your own work with a repeatable checklist'],
    reqs: ['None. Bring something you want to write about.']
  }, [
    S('Write clearly', [
      L('How people read on screens', 9,
        ['Explain how readers scan web pages', 'Write short paragraphs and clear sentences', 'Use the inverted pyramid'],
        ['People rarely read web pages word for word. They scan: they look at the headline, jump to bold text and subheadings, and read only the parts that answer their question. Your job is to make the scanning path easy. Put the most important point first, then add detail. Journalists call this the **inverted pyramid**: the big idea at the top, supporting facts beneath, small details last.',
         'Keep sentences short (about 15 to 20 words on average), use everyday words ("use" instead of "utilize"), and write in the **active voice**: "The team fixed the bug" is better than "The bug was fixed by the team". Keep paragraphs to two or three sentences. Use headings, bullet lists and bold text to make a page easy to scan. Aim for a reading level that most adults find easy; clear is not childish.'],
        ['Before: "It is a fact that, in the event that a page is not loading in an adequate manner, visitors may become disinclined to remain." After: "Slow pages lose visitors." Same meaning, one-third of the words.'],
        ['Take a paragraph you wrote and cut it by one third without losing meaning', 'Rewrite one passive sentence into active voice', 'Add a subheading that tells the reader what the next section answers'],
        ['Readers scan; make scanning easy', 'Put the main point first', 'Short sentences, plain words, active voice']),
      L('Grammar and spelling mistakes that embarrass professionals', 12,
        ['Fix the ten most common mistakes', 'Use apostrophes and commas correctly', 'Proofread with a repeatable method'],
        ['A typo on a client\'s homepage is memorable for the wrong reasons. Learn these: **their** (belonging to them), **there** (a place), **they\'re** (they are). **Your** (belonging to you) versus **you\'re** (you are). **Its** (belonging to it) versus **it\'s** (it is). **Affect** (to change; a verb) versus **effect** (the result; usually a noun). **Then** (time) versus **than** (comparing). **Lose** (misplace) versus **loose** (not tight).',
         'Apostrophes show ownership (the client\'s website) or missing letters (don\'t). They do **not** make plurals: write "keywords", not "keyword\'s". Use a comma after an introductory phrase ("In 2025, search changed") and to separate items in a list. Keep style consistent: choose one spelling (US or UK), one way of writing numbers and one capitalization style for headings.',
         'To proofread: leave the text for an hour if you can, read it out loud, read it backwards sentence by sentence to catch typos, check names and numbers twice, and run a spell checker. Spell checkers miss real words used wrongly, like "form" instead of "from".'],
        ['A proposal says "Its important to loose no time". Corrected: "It\'s important to lose no time." Four letters changed, and the credibility is saved.'],
        ['Write one correct sentence for each of the confusing pairs listed above', 'Proofread a page from your own writing and count the mistakes', 'Install a free grammar checker and review its suggestions critically'],
        ['Learn the common confusable words', 'Apostrophes never make plurals', 'Proofread by reading aloud and checking names and numbers'],
        { oops: 'Misspelling a client\'s name or brand in a report or email. Copy and paste official names rather than typing them.' }),
      L('Headlines and intros that work', 9,
        ['Write honest, specific headlines', 'Use proven patterns without clickbait', 'Hook the reader in the first two sentences'],
        ['A good headline tells the reader exactly what they will get. Specific beats vague: "7 Ways to Cut Your Google Ads Costs" beats "Save Money Today". Patterns that work: how-to ("How to Read a Search Console Report"), list ("9 Mistakes in Local SEO"), question ("Why Did My Traffic Drop?"), and result ("We Doubled Leads in 90 Days: Here Is How"). Do not promise something the page does not deliver; that increases bounces and hurts trust.',
         'The first two sentences of an article should show the reader they are in the right place and that you understand their problem. Then promise what you will cover. Avoid starting with "In today\'s fast-paced digital world", which means nothing.'],
        ['Weak: "SEO Tips". Better: "10 SEO Quick Wins You Can Do in an Afternoon". Intro: "Your site is live, but nobody is visiting. These ten fixes take minutes each and often bring results within a month."'],
        ['Write five different headlines for the same topic', 'Pick the most specific one and explain why', 'Write a two-sentence intro that names the reader\'s problem'],
        ['Specific beats vague', 'Never promise what the page cannot deliver', 'Open with the reader\'s problem, not filler'])
    ], [
      Q('What is the inverted pyramid?', ['Details first, conclusion last', 'Most important point first, details after', 'Write only headings', 'Use many images'], 1, 'The main point comes first so scanners get it immediately.'),
      Q('Which sentence is correct?', ['Its important to check your title.', 'It\'s important to check your title.', 'Its\' important to check your title.', 'It is important to check you\'re title.'], 1, '"It\'s" is the short form of "it is".'),
      Q('Which is the correct plural?', ['keyword\'s', 'keywords', 'keywords\'', 'keyword\'s\'s'], 1, 'Apostrophes do not make plurals; the plural is simply "keywords".'),
      Q('What is the best way to catch typos?', ['Read it once quickly', 'Read it aloud and check names and numbers', 'Skip proofreading', 'Only use spell check'], 1, 'Reading aloud and checking facts catches mistakes that spell check misses.'),
      Q('Which headline is better?', ['Great Tips', 'Marketing Stuff', '7 Ways to Cut Your Google Ads Costs', 'Read This Now'], 2, 'It is specific and tells readers what they will get.')
    ]),
    S('Writing for search', [
      L('Using keywords naturally', 9,
        ['Know the key places to use a keyword', 'Avoid keyword stuffing', 'Use related words and synonyms'],
        ['Once you know the main keyword for a page, use it in the places that matter: the title tag, the main heading (H1), the first paragraph, one or two subheadings, the URL, and image alt text where it describes the image. Then write normally. Use related phrases and synonyms ("running shoes", "sneakers", "jogging footwear") because people and search engines understand meaning.',
         'Keyword stuffing means repeating a phrase unnaturally ("Our cheap plumber London plumber provides London plumber services"). It reads badly and can hurt rankings. A simple test: read it to a friend. If it sounds like a robot, rewrite it.'],
        ['The page is about "emergency plumber in Leeds". Title: "Emergency Plumber in Leeds | 24/7 Call-Out". H1: "Emergency Plumber in Leeds". First sentence: "Burst pipe at 2 am? Our Leeds plumbers answer the phone day and night." Notice the keyword appears where it fits and the copy still sounds human.'],
        ['Pick a keyword and mark the five places to use it', 'Write a first paragraph that includes it naturally', 'Read your text aloud to check it does not sound forced'],
        ['Use the keyword in key places, then write naturally', 'Include related terms and synonyms', 'If it sounds robotic, rewrite it']),
      L('Writing common page types', 12,
        ['Outline a homepage, service page, product page, blog post and landing page', 'Match structure to purpose', 'Include trust and a clear call to action'],
        ['**Homepage:** say who you help and what you do in one sentence, show top services, include proof (reviews, logos), and give a clear next step. **Service page:** explain the problem, your solution, the process, pricing hints, FAQs, proof, and a call to action. **Product page:** a clear title, key benefits, specifications, images, shipping and returns, and reviews. **Blog post:** a promise, helpful sections with subheadings, examples, and a next step. **Landing page:** one goal, one offer, one call to action, no distractions.',
         'Every page should answer three questions fast: Am I in the right place? Can I trust you? What do I do next? Add a **call to action (CTA)** such as "Get a free quote" or "Add to cart", written as a clear instruction. Avoid vague buttons like "Submit".'],
        ['A service page for a roofer is rewritten. Old: a block of text about the company history. New: headline "Roof Repair in Bristol", three short sections (problems we fix, how it works, prices), reviews, a phone number at the top and a "Get a free quote" button. Calls double in two months.'],
        ['Outline a service page for a business you know', 'Write a clear CTA instead of "Submit"', 'List three proof elements you could include'],
        ['Each page type has a purpose and structure', 'Answer: right place, can I trust you, what next?', 'Use clear calls to action']),
      L('Writing titles, meta descriptions and ads within limits', 11,
        ['Fit text into character limits', 'Write titles and descriptions that earn clicks', 'Write a basic search ad'],
        ['Short-form writing is hard because every character counts. Page titles: about 60 characters. Meta descriptions: about 120 to 155 characters. In Google Ads, responsive search ads allow up to 15 headlines of 30 characters and 4 descriptions of 90 characters each. Use a free character counter and write several versions.',
         'Strong short copy includes the keyword, a benefit, and a reason to click: "Emergency Plumber in Leeds: 24/7, Fixed Prices". Be specific with numbers ("Free delivery over $50"), be honest, and follow ad policies (no excessive capitals or unproven claims like "best in the world").'],
        ['Headline options for a bakery ad: "Custom Birthday Cakes" (21 chars), "Fresh Daily, Same-Day Delivery" (30 chars), "Order Online in 2 Minutes" (25 chars). Each is under the 30-character limit and offers something different.'],
        ['Write a title tag and meta description for a page you choose and count characters', 'Write five ad headlines under 30 characters', 'Check them against policy rules (no false claims)'],
        ['Short copy needs the keyword, a benefit and a reason to click', 'Know the limits: about 60, 155, 30 and 90', 'Be specific and honest'])
    ], [
      Q('Where should the main keyword usually appear?', ['Only in the footer', 'In the title, H1 and first paragraph', 'In every sentence', 'Nowhere'], 1, 'These are the most important places for relevance, and the rest of the copy should read naturally.'),
      Q('What is keyword stuffing?', ['Using synonyms', 'Repeating a keyword unnaturally', 'Writing short titles', 'Adding alt text'], 1, 'It makes the text unnatural and can hurt rankings.'),
      Q('Which CTA is clearest?', ['Submit', 'Click', 'Get a free quote', 'Go'], 2, 'It tells the user exactly what will happen.'),
      Q('About how long should a title tag be?', ['10 characters', 'About 60 characters', 'About 300 characters', 'No limit'], 1, 'About 60 characters prevents truncation in results.'),
      Q('What is the maximum length of a Google Ads RSA headline?', ['15 characters', '30 characters', '60 characters', '90 characters'], 1, 'Headlines are limited to 30 characters; descriptions to 90.')
    ]),
    S('Edit like a professional', [
      L('A repeatable editing workflow', 9,
        ['Edit in rounds', 'Use a checklist', 'Get a second pair of eyes'],
        ['Do not try to fix everything at once. Edit in rounds: first **big picture** (does it answer the question? is the order logical?), then **clarity** (cut waste, shorten sentences), then **style and tone**, then **proofreading** (spelling, grammar, numbers, names, links). Take a break between rounds if possible.',
         'Use a checklist: Is the main point in the first paragraph? Does each heading describe its section? Are facts and numbers checked? Do all links work? Is the keyword used naturally? Is the call to action clear? Ask another person to read it; they spot problems you cannot see because you know what you meant.'],
        ['A draft blog post is edited in three rounds. Round one moves the best tip to the top. Round two cuts 400 words. Round three finds that the client\'s product name was spelled two different ways. Nothing embarrassing goes live.'],
        ['Write your own 10-point editing checklist', 'Edit a piece in rounds and note what each round caught', 'Ask someone to read a draft and tell you where they got lost'],
        ['Edit in rounds, not all at once', 'Use a checklist every time', 'A second reader catches what you miss']),
      L('Originality, sources and AI drafting', 10,
        ['Avoid plagiarism', 'Cite sources properly', 'Use AI tools as helpers, not authors'],
        ['Copying text from another website is plagiarism, and search engines can detect duplicate content. Instead, learn from sources, then write in your own words and add your own experience, examples or data. When you use a statistic, link to the original source and say when it was published.',
         'AI writing tools can help with outlines, ideas and first drafts, but they sometimes state false things confidently ("hallucinations") and produce bland, generic text. Always fact-check, add real examples, edit for your client\'s voice, and never publish an unreviewed draft. Check your client\'s policy about disclosing AI use. Search engines care about helpful content, not about who or what typed it, but low-quality mass-produced pages are risky.'],
        ['A freelancer pastes an AI draft containing a statistic "73% of customers prefer chat". She searches, cannot find the source, and removes it. A client later thanks her for catching a made-up number.'],
        ['Take one claim from an article and find its original source', 'Use an AI tool to create an outline and then rewrite it with your own examples', 'Run a plagiarism check on a piece of your writing'],
        ['Never copy; learn and rewrite with your own insight', 'Link to original sources', 'Fact-check and edit anything AI drafts'],
        { oops: 'Delivering content with invented statistics or facts. Verify every number you cannot trace to a source.' }),
      L('Tone of voice and brand style guides', 9,
        ['Describe a brand voice', 'Create a mini style guide', 'Keep writing consistent across pages'],
        ['A brand\'s **tone of voice** is its personality in words. A law firm might sound calm and precise; a skateboard shop might sound casual and funny. Before you write for a client, ask for a style guide, read their best existing pages, and note their rules (formal or friendly? contractions or not? US or UK spelling?).',
         'Create a one-page mini style guide: three adjectives for the voice ("friendly, expert, direct"), words to use and avoid, how to format headings and numbers, and examples of good and bad sentences. Share it with anyone who writes for the site so everything sounds like the same company.'],
        ['A bank wants to sound "trustworthy, plain and warm". Before: "Leverage our synergistic financial solutions." After: "We help you save for what matters, with no hidden fees."'],
        ['Write three adjectives that describe a brand you like', 'Rewrite a stiff sentence in two different tones', 'Draft a one-page mini style guide'],
        ['Match the client\'s voice, not your own', 'A style guide keeps writing consistent', 'Show examples of good and bad copy'])
    ], [
      Q('What is the best order for editing?', ['Proofread first, then big picture', 'Big picture, clarity, style, then proofreading', 'Only proofread', 'Only add keywords'], 1, 'Fix structure and clarity first, because proofreading small errors in text you will cut wastes time.'),
      Q('What should you do with a statistic you cannot trace to a source?', ['Publish it anyway', 'Verify it or remove it', 'Make it bigger', 'Hide the source'], 1, 'Unverified numbers can be wrong and damage your credibility.'),
      Q('AI-generated drafts should be:', ['Published unchecked', 'Fact-checked and edited by a human', 'Copied to every page', 'Used without reading'], 1, 'AI can invent facts and produce generic text, so human review is essential.'),
      Q('Why create a mini style guide?', ['To make text longer', 'To keep writing consistent with the brand voice', 'To hide keywords', 'To replace the website'], 1, 'It keeps all writers sounding like one brand.'),
      Q('Why ask someone else to read your draft?', ['They can spot what you cannot see', 'It is required by Google', 'To add more keywords', 'To make it longer'], 0, 'You know what you meant, so you miss unclear parts that others notice.')
    ])
  ]);
})();
