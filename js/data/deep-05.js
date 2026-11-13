/* "Go deeper" material, part 5: the beginner stage (internet basics, math, writing, tools). */
(function () {
  var QF = window.QF; QF.deep = QF.deep || {};
  var D = QF.deep;

  /* ---------- The Internet and Search, From Zero ---------- */
  D['how-the-internet-works|0|0'] = [
    'Here is what happens in the few hundred milliseconds after you tap a link. Your device asks your Wi-Fi router, the router passes the request to your internet provider, and the provider forwards it across a chain of larger networks until it reaches the computer that holds the page. The reply comes back the same way, in many small packets that may take different routes.',
    'You can see this yourself. On Windows open a command prompt (on a Mac, the Terminal) and type `ping example.com`. Each line shows how many milliseconds a tiny message took to reach the site and return. Around 20 to 60 ms is fast, over 200 ms feels slow. This is called **latency**, and it is one reason a site hosted far from its visitors feels slower.',
    'Two words people mix up: **bandwidth** is how much data can flow per second (the width of the road), **latency** is how long one message takes (the length of the road). A page can be slow because of either, and SEO people need to know which one they are fixing.'
  ];
  D['how-the-internet-works|0|1'] = [
    'A web page is rarely one file. Opening a single page can trigger dozens of separate requests: the HTML, stylesheets, scripts, fonts, logos and each image. The browser asks for all of them and assembles the result. This is why a page with 80 images loads slower than one with 8, and why compressing images is such a common SEO and speed fix.',
    'Try it: in Chrome press `F12`, open the **Network** tab and reload any page. You will see every file requested, its size and how long it took. Sort by size to find the heaviest files. Most beginners are surprised that a "simple" page makes over 50 requests.',
    'Servers also respond with a **status code**, a number that says how it went: 200 means OK, 301 means moved permanently, 404 means not found, 500 means the server broke. You will meet these constantly in SEO work, so learn the four above first.'
  ];
  D['how-the-internet-works|0|2'] = [
    'Practice reading URLs. Take `https://www.shop.example.co.uk/mens/shoes/trail?size=10&color=blue#reviews`. The protocol is `https`. The subdomain is `www.shop`. The domain is `example`, and `co.uk` is the top-level domain (a two-part ending used in the UK). The path is `/mens/shoes/trail`. The parameters are `size=10` and `color=blue`, separated by `&`. The fragment is `#reviews`.',
    'Two details matter for SEO. First, search engines treat `http://example.com`, `https://example.com`, `https://www.example.com` and `https://example.com/` as potentially different addresses unless the site redirects them to one version, so a good site picks one. Second, parameters can create many addresses showing nearly the same page, which is why filters and tracking tags need care.',
    'DNS records worth knowing by name: an **A record** points a name to an IP address, a **CNAME** points a name to another name, an **MX** record says where email goes, and a **TXT** record holds text such as verification codes (you add one to prove you own a site to Google). When a client says "add this TXT record", you now know what is being asked.'
  ];
  D['how-the-internet-works|0|3'] = [
    'Not all hosting is equal. **Shared hosting** puts hundreds of sites on one server, which is cheap but can be slow when neighbors get busy. A **VPS** gives you a reserved slice of a server. **Managed WordPress hosting** is tuned for one platform and often includes backups and caching. **Cloud hosting** spreads sites across many machines so it can grow with demand. For a small local business, good managed hosting is usually the sweet spot.',
    'A **CDN** (content delivery network) keeps copies of your files on servers around the world so each visitor downloads from a nearby one. It is one of the easiest speed upgrades for sites with international visitors, and many CDNs also add security protection.',
    'For HTTPS, the certificate must be valid and renewed. An expired certificate shows visitors a full-screen warning that scares most of them away, so ask clients who manages renewal. Also check that `http://` addresses redirect to `https://` and that no page loads some files insecurely (mixed content).'
  ];
  D['how-the-internet-works|1|0'] = [
    'Learn the handful of tags you will meet most. `<h1>` to `<h6>` are headings, `<p>` is a paragraph, `<a href="...">` is a link, `<img src="..." alt="...">` is an image, `<ul>` and `<li>` make bullet lists, and `<div>` is a generic container. Tags sit inside other tags like boxes inside boxes, and this nesting is called the **DOM** (Document Object Model).',
    'The `<head>` holds information about the page that visitors do not see on the page itself: the title, the meta description, the canonical link and instructions such as `<meta name="robots" content="noindex">`. The `<body>` holds what visitors see. Many SEO problems come from something wrong in the head, which is why view source is your best friend.',
    'A good beginner exercise: save the sample in the lesson as `test.html`, open it in a browser, then change the title and heading and refresh. Add a second paragraph and a link to another site. Ten minutes of this will make HTML feel familiar rather than frightening.'
  ];
  D['how-the-internet-works|1|1'] = [
    'CSS works by **selecting** elements and applying rules. `p { color: navy; }` makes every paragraph navy. `.button { padding: 12px; }` styles anything with the class `button`. `#hero { background: yellow; }` styles the single element with the id `hero`. The "cascading" in the name means that when rules conflict, the more specific or later one wins.',
    'JavaScript runs in the visitor\'s browser. It can change the page after it loads: show a menu, validate a form, load more products when you scroll. For SEO the question is always **"is the important content in the HTML before JavaScript runs?"**. If a page shows a blank space until scripts finish, search engines and some AI tools may see less than visitors do.',
    'A useful test: view source (`Ctrl+U`) and search for a sentence you can see on the page. If it is there, the content is in the HTML. If it is missing, it is added by JavaScript and you should note it as something to check with the developer.'
  ];
  D['how-the-internet-works|1|2'] = [
    'When a client names their platform, you can form quick expectations. **WordPress** is flexible and plugin-based (SEO plugins are common, speed depends on hosting and plugins). **Shopify** is a hosted store platform (strong basics, limited URL structure). **Wix and Squarespace** are all-in-one builders (easy, less technical control). **Webflow** is designer-friendly. **Custom-built** sites can do anything but need a developer for every change.',
    'Ask three questions in any first look: Who can edit the site and how? Can we change titles, descriptions and URLs ourselves? Can we install tracking code? The answers tell you how quickly SEO changes can happen, which affects how you plan and what you promise.',
    'Beware of **page builders** and heavy themes that add lots of code. They make design easy but can bloat pages. If a site feels slow and uses a builder with many animations, simplifying the design is often the biggest speed win.'
  ];
  D['how-the-internet-works|1|3'] = [
    'Build a habit: every time you meet a new site, spend two minutes under the hood. Check the title (`<title>`), the heading (`<h1>`), whether `noindex` appears anywhere, the canonical link, the language attribute and how many scripts load. This quick routine is how experienced SEOs spot problems in the first minute of a client call.',
    'Other free browser tools: the **Console** tab shows JavaScript errors in red, the **Elements** tab lets you inspect and temporarily change any part of the page (try editing text; it only changes your view), and **Lighthouse** (also in DevTools) gives a quick speed and accessibility report. Nothing you do here changes the real website.',
    'Safe-use rule: never paste code into the Console because a stranger asked you to. It runs with your browser\'s access and can be used for scams. Looking and reading are always safe; running unknown code is not.'
  ];
  D['how-the-internet-works|2|0'] = [
    'The library comparison has a limit worth knowing: a real librarian reads once, but a crawler returns again and again, and the catalog entry is rebuilt when the book changes. That is why updating a page can change its ranking, and why a page that was blocked for a week can come back after it is fixed.',
    'There are many crawlers and many search engines. Google and Bing are the main two in most countries, but others matter in some places (Baidu in China, Yandex in Russia, Naver in Korea). Privacy-focused engines such as DuckDuckGo and Brave use their own and partner data. The same SEO fundamentals help on all of them, with local differences.',
    'Practical exercise: search for the name of a small business you know. Note whether the website appears, whether a map shows, and what the first three results are. Write one sentence on what you would improve. This is the habit of looking at results through a marketer\'s eyes.'
  ];
  D['how-the-internet-works|2|1'] = [
    'Learn to spot each part. **Ads** carry a label such as "Sponsored". **The map pack** shows three local listings with ratings. **Organic results** are the blue links. A **featured snippet** is a box that quotes a page. **People also ask** is a list of expandable questions. **Shopping results** show products with prices. **Video carousels** show clips. Some results also show an **AI summary** that answers the question and links to sources.',
    'Each type has a different owner: you pay for ads, you earn map and organic positions, and snippets and summaries pull from pages that already rank well and answer clearly. When you plan SEO or PPC work, ask which parts of the page your client can realistically win.',
    'Try this: search "dentist near me", then "how to whiten teeth", then "buy electric toothbrush". The three results pages look very different because the intent is different (local, learning, buying). Recognizing intent from the layout is one of the most useful beginner skills.'
  ];
  D['how-the-internet-works|2|2'] = [
    'A tidy way to hold the terms: **Search marketing** is everything done to get visibility in search engines. **SEO** is the unpaid part. **PPC or paid search** is the paid part (and many people call it SEM). **CRO** improves what happens after the click. **Analytics** measures it all. When a client uses a term loosely, restate it in these words and confirm.',
    'Other channels sit next to search but are different: **social media marketing**, **email marketing**, **content marketing**, **display advertising** and **affiliate marketing**. A client who says "we do digital marketing" may mean any mix. Ask which channels they use now and which one brings the most customers.',
    'Practice sentence: "SEO helps you appear for free when people search; paid search lets you appear immediately for a fee per click; I would plan both, starting with whichever fits your timeline and budget." Say it aloud until it feels natural.'
  ];
  D['how-the-internet-works|2|3'] = [
    'Most careers in this field start in one of four places: **an agency** (many clients, fast learning), **an in-house team** (one business, depth), **freelancing** (independence, but you also run the business) or **a publisher or ecommerce company** (revenue tied to search). A junior role often mixes tasks: reporting, keyword research, writing titles, checking sites and helping on ad accounts.',
    'The skills that grow fastest: reading data and explaining it simply, writing clearly, learning one tool deeply, and getting comfortable with a little HTML and spreadsheets. Technical depth, strategy and client leadership come later and are what this platform\'s later stages build.',
    'Start a simple **learning log** today: one line per day with what you learned and one thing you want to try. After a month you will have a record of progress and a list of topics to dig into, and it makes a good talking point in interviews.'
  ];

  /* ---------- Marketing & Math Basics ---------- */
  D['marketing-math-basics|0|0'] = [
    'The classic **four Ps** are a helpful memory aid: **Product** (what you sell), **Price**, **Place** (where and how customers get it) and **Promotion** (how people hear about it). Search marketing mostly lives in "Promotion" and "Place", but its results depend on the other two. If the price is too high or the product does not fit, no amount of SEO will rescue sales.',
    'Distinguish **brand marketing** (making people remember and trust you over time) from **performance marketing** (generating measurable actions now). SEO and paid search can do both, but search ads and bottom-funnel pages lean toward performance, while content, PR and video lean toward brand. Healthy plans use both.',
    'Exercise: choose a business near you and write its audience, offer, channel and promise in one sentence each. Then name the search a perfect customer might type. If you cannot name it, you do not yet understand the customer well enough to plan keywords.'
  ];
  D['marketing-math-basics|0|1'] = [
    'The business type decides the **numbers that matter**. Ecommerce watches conversion rate, average order value and return on ad spend. Local services watch calls, booked jobs and cost per lead. B2B watches qualified leads, pipeline and sales cycle length. SaaS watches trials, activation and churn (customers who cancel). Publishers watch sessions, engagement and revenue per visit. A report that shows the wrong metric for the business wastes everyone\'s time.',
    'Ask about **margin** and **repeat business** early. A shop with 60 percent margin can afford far more per customer than one with 15 percent. A client with high repeat purchases can pay more to acquire a customer than their first order suggests. These two answers shape every budget conversation.',
    'Create a one-page cheat sheet with five business types and their top three metrics. Keeping it beside you in your first client calls prevents the beginner mistake of talking about traffic to someone who only cares about phone calls.'
  ];
  D['marketing-math-basics|0|2'] = [
    'The funnel is a simplification: real people bounce between stages, research on several devices and forget what they read. Still, it helps you **match content to need**. Early searches deserve guides and explanations, middle searches deserve comparisons and proof, late searches deserve clear prices, availability and a simple next step.',
    'Work an example. A person with a leaking tap might search "why is my tap dripping" (early), "plumber vs fix it myself" (middle), then "emergency plumber near me" (late). A plumber that has a helpful guide, an honest cost page and a fast phone answer can win the customer at each step.',
    'Funnel numbers can be calculated. If 1,000 people read a guide, 100 visit the services page and 10 call, the step rates are 10 percent and 10 percent, and 1 percent overall. Knowing where the biggest drop happens tells you where to improve first.'
  ];
  D['marketing-math-basics|0|3'] = [
    'A good goal is often called **SMART**: Specific, Measurable, Achievable, Relevant and Time-bound. "Increase organic leads from 40 to 60 a month by June" meets all five. Compare with "get more traffic", which fails on almost every one.',
    '**Leading** indicators move first and you can influence them (rankings, impressions, pages published). **Lagging** indicators prove the result (leads, sales). If you only watch lagging numbers you will not know for months whether you are on track, and if you only watch leading ones you may celebrate things that do not pay.',
    'Always define a **baseline** (where you are now) and the **source** of each number. Write, for example: "Leads = form submissions plus phone calls over 60 seconds, counted in the CRM." A KPI without a definition causes arguments later.'
  ];
  D['marketing-math-basics|1|0'] = [
    '**Practice problems** (answers at the end). 1) What is 18% of 650? 2) A page had 1,200 visits last month and 1,500 this month. What is the percent change? 3) Visits fall from 2,000 to 1,600. What is the percent change? 4) CTR rises from 2% to 3%: how many percentage points and what percent increase? 5) A $80 item is discounted 25%. What is the new price?',
    'Answers: 1) 650 × 0.18 = 117. 2) (1,500 − 1,200) ÷ 1,200 = 25%. 3) (1,600 − 2,000) ÷ 2,000 = −20%. 4) 1 percentage point, a 50% increase. 5) 80 × 0.75 = $60. Notice that 3 shows that a 20% fall needs a 25% rise to get back, because you start from a smaller number.',
    'Shortcut for mental math: 10% of a number is the number with the decimal point moved one place left, so 10% of 650 is 65. Then 5% is half of that (32.5) and 20% is double (130). Being able to estimate percentages quickly makes you look sharp in meetings.'
  ];
  D['marketing-math-basics|1|1'] = [
    '**Practice.** Order values: $20, $25, $25, $30, $400. Mean = (20 + 25 + 25 + 30 + 400) ÷ 5 = $100. Median = $25 (the middle value). Mode = $25 (appears twice). The mean is dragged up by one large order, so the median is a fairer picture of a typical customer.',
    'Another trap: averaging averages. If Campaign A has a 10% conversion rate on 1,000 clicks (100 conversions) and Campaign B has 2% on 100 clicks (2 conversions), the combined rate is (100 + 2) ÷ 1,100 = 9.3%, not (10 + 2) ÷ 2 = 6%. Always combine the underlying counts.',
    'In analytics you will often see an **average** shown alone. Get in the habit of asking: how many data points, is there an extreme value, and would the median tell a different story? Raising these questions politely makes reports more trustworthy.'
  ];
  D['marketing-math-basics|1|2'] = [
    '**Practice.** A campaign shows 50,000 impressions, 1,500 clicks, 60 conversions, $1,800 cost and $7,200 revenue. CTR = 1,500 ÷ 50,000 = 3%. Conversion rate = 60 ÷ 1,500 = 4%. CPC = 1,800 ÷ 1,500 = $1.20. CPA = 1,800 ÷ 60 = $30. ROAS = 7,200 ÷ 1,800 = 4.0. Average order value = 7,200 ÷ 60 = $120.',
    'Now the business question. If the product margin is 40 percent, gross profit is 7,200 × 0.40 = $2,880. After the $1,800 ad cost that leaves $1,080 before any other costs. The campaign makes money, but not as much as ROAS 4.0 suggests, which is why margin matters.',
    'What-if thinking is where the formulas become powerful. If the conversion rate rose from 4% to 5%, conversions would be 75 and CPA would fall to $24 with no change in spend. A small improvement in the page can be worth as much as lowering the bid, and that is a key reason SEO and conversion work go together.'
  ];
  D['marketing-math-basics|1|3'] = [
    'Always read a chart in this order: the **title** (what is it about), the **axes** (what is measured, what units, where does the scale start), the **time range**, then the **shape**. Truncated axes can make a 2 percent change look dramatic. If a chart does not label its axes, ask for the data.',
    'Separate **trend**, **seasonality** and **noise**. A florist\'s sales spike in February and May every year (seasonality). Daily ups and downs of a few percent are usually noise. The long-run direction over months is the trend. When you compare periods, compare like with like: this January with last January.',
    'A simple rule against over-reacting: do not call a change meaningful unless it is larger than the normal swing. If weekly traffic usually moves ±8%, a 5% change is probably noise, while a 30% drop deserves investigation. Learn the normal range for each client\'s data.'
  ];
  D['marketing-math-basics|2|0'] = [
    'Learn five keyboard habits and you will work twice as fast: `Ctrl+C` copy, `Ctrl+V` paste, `Ctrl+Z` undo, `Ctrl+Arrow` jump to the edge of data, and `Ctrl+Shift+Arrow` select to the edge. Click a cell, press `F2` to edit it, and `Ctrl+D` fills the cell above downward.',
    '**Practice.** In a new sheet, put Month in A1, Clicks in B1 and Cost in C1. Enter three rows of numbers. In D1 type CPC, then in D2 `=C2/B2` and drag the formula down. In E1 type Total and in E2 `=SUM(C2:C4)`. Format column D as currency. Congratulations, you have built a mini report.',
    'Common beginner errors: typing numbers as text (they align left and will not add up), forgetting the `=` sign, and deleting a cell that other formulas depend on (you will see `#REF!`). When you see an error code, read it: `#DIV/0!` means you divided by zero, `#N/A` means a lookup found nothing, `#NAME?` means a function name is wrong.'
  ];
  D['marketing-math-basics|2|1'] = [
    '**Practice table.** Column A: keyword, B: clicks, C: cost. Rows: shoes 120 / $140, boots 80 / $110, shoes sale 60 / $50. Try these: `=SUM(B2:B4)` gives 260 clicks. `=AVERAGE(C2:C4)` gives $100. `=COUNTIF(A2:A4,"*shoes*")` counts keywords containing "shoes" (2). `=SUMIF(A2:A4,"*shoes*",C2:C4)` adds the cost for those rows ($190). `=IF(B2>100,"Big","Small")` labels each row.',
    'To look up a value from another table, `=XLOOKUP(A2, Prices!A:A, Prices!B:B)` finds the keyword in a list on the Prices tab and returns the matching price. In older sheets use `=VLOOKUP(A2, Prices!A:B, 2, FALSE)`. Lookups are how you attach search volume to a keyword list, or a team member to an account.',
    'Habit: after writing a formula, test it on a row where you know the right answer by hand. A formula that returns a plausible number is not necessarily correct, and many embarrassing report errors come from untested formulas.'
  ];
  D['marketing-math-basics|2|2'] = [
    'Pivot tables answer "how much per what?" questions. In Sheets, select your data, choose Insert then Pivot table, put the field to group by in **Rows** (for example Page), and the number to total in **Values** (for example Clicks, summarized by SUM). Add **Filters** to narrow, and **Columns** to split further, for instance by device.',
    '**Practice.** Export the Performance report from Search Console (Pages tab) and open it in a sheet. Build a pivot with page folder as rows and clicks as values. Sort descending. You have just discovered which sections of the site earn the most traffic, a classic first task in any audit.',
    'Sorting safely: always select the whole data range (or click inside it and use Data then Sort range) and include the header row setting. Filtering with the funnel icon hides rows without deleting them; remember to clear filters before sharing a sheet so the next person sees all the data.'
  ];
  D['marketing-math-basics|2|3'] = [
    'Cleaning checklist for any export: 1) delete empty rows and columns, 2) check the header row, 3) `TRIM` extra spaces, 4) make text consistent with `LOWER` or `PROPER`, 5) remove duplicates, 6) convert text-numbers to real numbers, 7) check dates all use one format, 8) spot-check ten random rows against the source. This takes minutes and prevents hours of confusion.',
    'CSV files can open wrongly when text contains commas or when your computer uses a different decimal style. If everything lands in one column, use File then Import and choose the correct separator. If accents look broken (like "cafÃ©"), the file encoding is wrong; re-import choosing UTF-8.',
    'Chart rules of thumb: one message per chart, a title that states the takeaway, no more than about five colors, start bar charts at zero, and label the units. Charts exist to make a point clear, not to show off every number you have.'
  ];

  /* ---------- Writing for the Web ---------- */
  D['writing-for-the-web|0|0'] = [
    'A quick readability test: read a paragraph aloud. If you run out of breath in a sentence, split it. If you reread a sentence to understand it, simplify it. Aim for most sentences under 20 words and most paragraphs under four lines. Many free tools show a reading grade; around grade 7 to 9 suits general audiences, but write for your reader (a doctor audience can handle more jargon than a general one).',
    '**Before and after practice.** Before: "In order to facilitate the optimization of your digital presence, it is advisable that you utilize an appropriate selection of keywords." After: "To rank better, use the words your customers search for." Notice what was removed: filler phrases, long words and passive voice.',
    'Formatting does half the work. Use a descriptive heading every few paragraphs, bullets for lists of three or more things, bold for the one phrase a skimmer should not miss, and white space. Walls of text are skipped on phones, where most people read.'
  ];
  D['writing-for-the-web|0|1'] = [
    'The most common mistakes in a handy list: **its/it\'s** (it\'s = it is), **their/there/they\'re**, **your/you\'re**, **then/than**, **affect/effect**, **lose/loose**, **principal/principle**, **compliment/complement**, **fewer/less** (fewer for things you can count) and **who/whom**. Make a personal list of the three you trip over and check for them on every proofread.',
    'Punctuation basics: end sentences with a period, use a comma after an introductory phrase and between items in a list, use an apostrophe for possession or missing letters (never for plurals), and use a colon to introduce a list. Pick a style for lists (with or without the final "and" comma) and stick with it.',
    'Proofreading routine: read the text aloud, read it backwards by sentence to catch typos, search for double spaces, double words ("the the") and inconsistent capitalization, check every name, number and link, and run a spell checker last. Spell checkers miss correct words used wrongly, so your eyes still matter.'
  ];
  D['writing-for-the-web|0|2'] = [
    'Headline patterns you can borrow honestly: **How to** ("How to read a Search Console report"), **numbered list** ("9 mistakes that slow your website"), **question** ("Why did my traffic drop?"), **result with proof** ("How one shop doubled its leads in 90 days"), and **versus** ("WordPress vs Shopify for small stores"). Always make sure the page delivers exactly what the headline promises.',
    'The introduction has three jobs: show the reader they are in the right place, name their problem, and say what they will get. Two or three sentences is enough. Cut openings such as "In today\'s world" and "Since the dawn of time", which tell the reader nothing.',
    'Test headlines by writing ten and choosing the clearest, not the cleverest. For search pages, keep the main phrase near the start and under about 60 characters for the title tag, while the on-page headline can be a little longer and more human.'
  ];
  D['writing-for-the-web|1|0'] = [
    'Think of a keyword as a **topic you must clearly cover**, not a number of times to say it. Put it naturally in the title, the main heading, the first paragraph, and perhaps one subheading, then use related words ("plumber", "plumbing", "pipe repair", "leak") where they fit. If you read it aloud and a sentence sounds odd, rewrite it.',
    '**Practice.** Rewrite this stuffed sentence: "We are a London plumber providing London plumber services from a London plumber team." Better: "We are a London plumbing company. Our team repairs leaks, installs boilers and answers emergency calls day and night." The second is clear, uses natural variations and tells the reader what they get.',
    'Also write for **search intent**: if the keyword is "how to fix a leaking tap", the page should show the steps early. If it is "emergency plumber", the page should show a phone number early. Matching intent matters more than repeating words.'
  ];
  D['writing-for-the-web|1|1'] = [
    'Use a **skeleton** for each page type. Service page: headline with service and place; two sentences on who it helps; the problem; how it works in 3 to 5 steps; prices or price ranges; proof (reviews, certifications, photos); FAQs; one clear call to action. Blog post: promise; short answer; sections with subheadings; examples; summary; next step.',
    'Product descriptions should lead with the **benefit**, then the details: "Keeps your feet dry in heavy rain (waterproof membrane, taped seams)." Add size and care information, shipping and returns, and answers to the questions customers ask most. Avoid copying the manufacturer\'s text, which many other shops use.',
    'Every page needs a **single main call to action**. Beginners often add five competing buttons. Decide the one action you want ("Get a free quote") and make everything else secondary. A clear next step often improves results more than any rewording.'
  ];
  D['writing-for-the-web|1|2'] = [
    '**Practice with limits.** Title tag (about 60 characters): "Emergency Plumber in Leeds | 24/7 Call-Out" is 41 characters. Meta description (about 120 to 155): "Burst pipe or no hot water? Our Leeds plumbers answer day and night with fixed prices and no call-out fee. Call now." is about 113. Responsive ad headline (30 characters max): "Fixed-Price Leeds Plumbers" is 26.',
    'Use a character counter and write several options for each. Check that each version includes the main phrase, one concrete benefit and, for ads, a reason to act now that is true (do not invent urgency). Variation matters: three headlines that say the same thing waste the space.',
    'Policy basics for ad copy: avoid all capitals, excessive punctuation, unproven superlatives ("best in the world") and misleading claims. If you offer a discount, show the conditions. Ads that break rules are disapproved, and repeated problems can put an account at risk.'
  ];
  D['writing-for-the-web|2|0'] = [
    'A practical checklist to use on every piece: Is the main point in the first paragraph? Does every heading describe its section? Are facts, names and numbers verified? Do all links work and go to the right page? Is the keyword used naturally? Is the call to action clear? Is it consistent with the brand style guide? Have you read it aloud?',
    'Leave time between writing and editing. Even 30 minutes helps you see the text freshly. If you cannot wait, change the way you see it: print it, change the font size, or read it on your phone.',
    'Ask for feedback with a **specific question**: "Where did you get lost?" or "What would you cut?" works better than "Is this OK?". Thank people for criticism and keep a list of the issues that recur in your writing; those become your personal proofreading checklist.'
  ];
  D['writing-for-the-web|2|1'] = [
    'Originality means **adding something**: your experience, a clearer explanation, an example, data or a different angle. Summarizing the top five results in new words adds little. Before writing, list what you know that the existing pages lack. If the list is empty, interview someone who knows more.',
    'Citing sources: name the source in the text ("according to Google\'s documentation"), link to it, and check the date. For statistics, find the original study, not a blog quoting it. If you cannot find the origin, do not use the number.',
    'If you use AI tools, treat the output as a rough first draft from a fast but unreliable assistant. Check every fact, rewrite for your client\'s voice, add real examples, remove generic filler and keep a record of what you changed. Many clients now ask about this, so be ready to explain your process honestly.'
  ];
  D['writing-for-the-web|2|2'] = [
    'To capture a voice, collect **five good samples** (the client\'s best pages, emails and social posts) and highlight what they have in common: sentence length, use of "we" and "you", humor, formality, favorite words. Then write your three adjectives ("warm, practical, direct") and a short list of words to use and avoid.',
    '**Practice.** Rewrite this sentence in two voices. Original: "We provide excellent dental services." Warm and friendly: "We make dental visits easier, with gentle care and no judgment." Formal and precise: "Our clinic provides preventive, restorative and cosmetic dental treatment by registered practitioners." Same facts, different personality.',
    'Put the style guide in one page with examples of good and bad sentences, rules for headings, numbers, abbreviations and spelling, and a short note on tone in difficult situations (apologies, price rises). A guide that is short gets used; a long one is ignored.'
  ];

  /* ---------- The SEO & PPC Toolbox ---------- */
  D['seo-sem-toolbox|0|0'] = [
    'Learn the Search Console **menu** in the order you will use it: Overview (headline numbers), Performance (queries, pages, countries, devices), URL inspection (check one page), Pages (indexing report), Sitemaps, Core Web Vitals, and Links. Every audit starts by looking at Performance and Pages.',
    '**First-hour routine for a new site:** set the date range to the last 16 months, look at the total clicks and impressions trend, open the Queries tab and sort by impressions, open the Pages tab, then check the Pages report for the top reasons pages are not indexed. Screenshot each. This takes about 15 minutes and gives a strong first picture.',
    'Verification methods in plain terms: **DNS record** (best, covers the whole domain), **HTML file upload** (needs file access), **meta tag** (needs access to the page head) and **Google Analytics or Tag Manager** (if already installed). If a client\'s IT person will not add a DNS record, offer the alternatives, but explain why DNS is more reliable.'
  ];
  D['seo-sem-toolbox|0|1'] = [
    'The words you need: **user** (a person or device), **session** (a visit), **event** (any action), **key event** (an action that matters to the business), **source/medium** (where the visit came from, such as google / organic), **channel** (a grouping such as Organic Search or Paid Search) and **landing page** (the first page of the visit).',
    '**First-hour routine:** open Reports, then Acquisition, then Traffic acquisition for the last three months. Note the share of traffic by channel. Open Engagement, then Landing page. Look at which pages bring visits, and whether they produce key events. Check Admin to see whether key events are set up at all. Many small sites turn out to have none, and fixing that is your first win.',
    'Tag Manager in one picture: the website loads one container; inside it you create tags (what to send), triggers (when to send) and variables (data to include). Beginners often feel intimidated, but a single tag such as "send an event when someone taps the phone number" is a perfect first exercise on your own practice site.'
  ];
  D['seo-sem-toolbox|0|2'] = [
    'PageSpeed Insights has two sections: **field data** (real users, only available for sites with enough traffic) and **lab data** (a test run). Look at field data first. Then read the opportunities list, but do not chase every suggestion: pick the two or three that save the most time on the main template.',
    'Google Trends shows **relative interest** (100 is the peak), not absolute searches. Use it to compare terms ("sofa" vs "couch"), see seasonality, and spot rising topics. Combine it with a keyword tool for numbers.',
    'Looker Studio basics: connect a data source, drag in a chart, choose dimension and metric, add a date control. Start with one-page dashboards that answer one question: "How is organic traffic doing this month compared with last year?" Share it by link and set viewing permissions carefully.'
  ];
  D['seo-sem-toolbox|0|3'] = [
    'Importing from Search Console into Bing Webmaster Tools takes a few clicks and gives you a second source of search data and indexing reports. Even if Bing is 5 to 10 percent of a site\'s search traffic, it can be an easy extra audience, and some AI tools use Bing data.',
    'Clarity gives you **recordings** (watch an anonymized visit) and **heatmaps** (where people click and scroll). Try watching ten recordings of visitors on a key page. You will often see clear problems within minutes: a button that looks clickable but is not, a form field that confuses people, a popup that covers the content.',
    'Privacy matters when you watch sessions. Make sure sensitive fields (passwords, payment details) are masked, tell visitors in the privacy policy, and respect consent settings where required. If a client works in healthcare or finance, check what is allowed before installing any recording tool.'
  ];
  D['seo-sem-toolbox|1|0'] = [
    'What the big suites do, in plain words: **keyword tool** (ideas, volumes, difficulty), **site explorer** (what a site ranks for and who links to it), **audit tool** (crawls a site and lists issues), **rank tracker** (checks positions on a schedule), and **content tools** (suggest topics and terms). They all collect their own data, so numbers differ between them.',
    'Practical advice: learn one suite thoroughly with a free trial or entry plan, using it on a real project. Compare its numbers with Search Console for a site you can access, so you understand how far estimates differ from reality. Many professionals find that estimates are directionally helpful but rarely exact.',
    'When a client asks "what does Ahrefs/Semrush say about us?", answer with the tool name and the caveat: "The tool estimates about 4,000 monthly visits from search; Search Console, which is Google\'s own data, shows 3,100, so I would use the console for actual performance and the tool for comparison with competitors."'
  ];
  D['seo-sem-toolbox|1|1'] = [
    'A crawler reads the site like a search engine. **Beginner crawl settings:** enter the homepage, leave defaults, set a polite speed, then run. After it finishes, look at the tabs: Response Codes (404s, redirects), Page Titles (missing, duplicate, long), Meta Description, H1, Images (missing alt), Canonicals and Directives (noindex).',
    'Make a habit of **exporting to a spreadsheet** and using filters and pivot tables. For example, export Page Titles, filter Duplicate, and you have a ready-made fix list. Add a column for priority and owner, and you have a working audit document.',
    'Know the limits. The free version of a desktop crawler stops at 500 URLs. Crawlers run from your computer, so they see the site as a normal visitor, not as Googlebot, and may be blocked by security systems. If a site requires JavaScript to show content, switch on rendering. Always crawl politely and, for big sites, ask the hosting team first.'
  ];
  D['seo-sem-toolbox|1|2'] = [
    'To set up rank tracking well: choose the **country and language**, the **device** (mobile and desktop), the **search engine**, and for local businesses a precise **location**. Name keyword groups by page or service so you can read the results by topic. Track your own site plus three real competitors.',
    'Read trends rather than days. A single day\'s movement of a few positions is normal. Weekly or monthly averages and counts of keywords in the top 3, top 10 and top 20 tell you whether the work is paying off.',
    'Useful free browser extensions include a SEO overlay that shows title, description, headings and links for the page you are on, a redirect path checker and a tool to view response headers. Install only from the official store, check reviews and permissions, and remove ones you do not use.'
  ];
  D['seo-sem-toolbox|1|3'] = [
    'Build your starter kit in stages. **Free stack:** Search Console, GA4, Tag Manager, Looker Studio, PageSpeed Insights, Bing Webmaster Tools, Clarity, Trends, a free crawler and Sheets. **Add when you have clients:** one all-in-one suite, a paid crawler license if you audit large sites, a password manager and a project board. **Add when you scale:** rank tracking with local grids, a reporting platform, call tracking.',
    'Before buying any tool ask: what specific task will this save time on, how many hours a month, and what would it cost to do that task another way? If you cannot answer, wait. Many beginners pay for several overlapping tools and use none well.',
    'Keep a simple **tools register**: tool, purpose, cost, renewal date, who owns the login. Review it every quarter and cancel what you do not use. Annual plans often renew automatically, and forgotten subscriptions are a common waste of money for freelancers.'
  ];
  D['seo-sem-toolbox|2|0'] = [
    'Google Ads navigation in plain terms: the **Campaigns** page lists your campaigns and their results; **Ad groups**, **Ads and assets** and **Keywords** are the building blocks; **Search terms** (under Keywords) shows what people really typed; **Audiences**, **Locations** and **Devices** refine targeting; **Tools** holds Keyword Planner and conversion setup; **Change history** records every edit; **Billing** handles payments.',
    '**First look at any account:** check the date range, sort campaigns by cost, look at conversions and cost per conversion, open Search terms for the last 30 days and scan for irrelevant ones, then open Change history. Ten minutes and you have a feel for the account.',
    'Google Ads Editor is worth learning early: download your account, make edits offline (for example, change 40 headlines at once), review the changes, then post them. It is much faster than the website for bulk work. Merchant Center, for shops, is where products are uploaded and checked, and errors there stop products showing.'
  ];
  D['seo-sem-toolbox|2|1'] = [
    'Microsoft Advertising looks and works much like Google Ads, so skills transfer. The import tool copies campaigns across, and you then check settings, bids and policies. Add the UET tag for conversion tracking before spending anything, and link Clarity if you want recordings.',
    'Other platforms you may be asked about: **Meta Ads** (Facebook and Instagram), **LinkedIn Ads**, **TikTok Ads**, **YouTube ads** (inside Google Ads), and **Amazon Ads**. You do not have to know them all, but learn what each is best for and be honest about where you are a beginner.',
    'A CRM (customer relationship management system) stores leads and customers. Ask every client what they use and whether you can see how leads move from new to sold. Linking CRM outcomes to ad and SEO data is how you prove real value rather than just reporting clicks.'
  ];
  D['seo-sem-toolbox|2|2'] = [
    'A password manager is not optional for client work. Use one that supports shared folders, two-step login and an emergency access feature. Generate long random passwords, never reuse them, and turn on two-step verification for every account that offers it, preferably with an authenticator app rather than text messages.',
    'Organize client work in a standard folder structure, for example: `Client name / 01 Contract / 02 Access / 03 Audits / 04 Reports / 05 Content / 06 Assets`. Use dates in file names in the order year-month-day (2026-03-14) so they sort correctly. A new team member should be able to find any document in seconds.',
    'A **change log** is the single most underrated tool. One line per change: date, what changed, where, why, who. When traffic jumps or drops, your log is the first place you look. Keep it in a shared sheet so the client can see it too.'
  ];
  D['seo-sem-toolbox|2|3'] = [
    'Write a standard **access request email** and reuse it. It should list each tool, the role needed (for example Search Console "Full", GA4 "Editor", Tag Manager "Publish"), the exact email address to add, a link to the help page and an offer to help on a short call. Making it easy gets faster answers.',
    'Common obstacles: the person who owns the account left the company, the account is under a former agency\'s login, or nobody knows which Google account created it. Ask early who the owner is. If the owner cannot be found, you may need to create new properties and start collecting data from today, which is why asking in week one matters.',
    'After the project ends, remove your access or ask them to. Keep a list of every client and tool you have access to and review it quarterly. This protects the client, protects you from blame if something goes wrong later, and shows professionalism.'
  ];
})();
