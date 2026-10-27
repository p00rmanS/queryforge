(function () {
  var h = QF.h, L = h.L, S = h.S, Q = h.Q;
  QF.addCourse({
    slug: 'microsoft-ads-shopping-remarketing', title: 'Microsoft Ads, Shopping & Remarketing', subtitle: 'Extend beyond Google: Microsoft Advertising, product feeds and shopping campaigns, and bringing visitors back.',
    track: 'SEM', topic: 'Multi-platform SEM', level: 'Intermediate', instructor: 'dara', rating: 4.6,
    desc: 'Search marketing is not only Google Search. Microsoft Advertising reaches Bing, Edge, Yahoo-powered and partner traffic with often lower competition. Shopping campaigns put your products in front of buyers, and remarketing brings back visitors who did not convert. This course covers all three.',
    learn: ['Import and adapt Google Ads campaigns to Microsoft Advertising', 'Build and optimize a product feed for Shopping campaigns', 'Structure Shopping campaigns with priority and segmentation', 'Build remarketing audiences and messaging', 'Respect privacy and policy rules for audience lists'],
    reqs: ['Google Ads Fundamentals or equivalent', 'For Shopping: a product catalog (real or sample)']
  }, [
    S('Microsoft Advertising', [
      L('The Microsoft audience and when to use it', 8,
        ['Describe the Microsoft network', 'Identify audience characteristics', 'Decide when it adds value'],
        ['Microsoft Advertising serves ads on Bing, Microsoft Edge, MSN, Yahoo (via partnership) and syndicated partners. The network typically has a smaller share of search volume than Google, but it reaches users who do not use Google, often skewing older, higher-income desktop users in the US and UK, depending on market. Check current figures for your region.',
         'Because there is less competition, CPCs are frequently lower, so it can deliver efficient incremental conversions. It is rarely a replacement for Google but a sensible second channel once Google campaigns are performing.'],
        ['A B2B software firm imports its Google campaigns into Microsoft Ads and finds a 30% lower CPC and similar conversion rate, adding about 12% extra leads.'],
        ['Check your audience share in Microsoft Advertising market data', 'Decide a test budget (10 to 20% of Google spend)', 'Set success metrics'],
        ['Smaller share but less competition', 'Often lower CPC', 'Use as a second channel']),
      L('Importing from Google Ads and adapting', 9,
        ['Import campaigns', 'Know feature differences', 'Schedule syncs carefully'],
        ['Microsoft Advertising can import campaigns directly from Google Ads, including keywords, ads, budgets and targeting, and schedule recurring imports. Review the result: match types behave similarly, but bids and settings may need adjusting. Some features differ: audience targeting names, LinkedIn profile targeting (for B2B) and specific asset types.',
         'After import, set up UET (Universal Event Tracking) for conversion tracking, which is Microsoft\'s equivalent of the conversion tag. Check ads for policy variances, and adapt bids and budgets since traffic patterns differ.'],
        ['After import, the manager installs the UET tag via GTM, sets up a form submission goal, and confirms conversions appear before scaling budgets.'],
        ['Create or open a Microsoft Advertising account', 'Import a Google Ads campaign', 'Install UET and test'],
        ['Import saves setup time', 'UET tag is required for tracking', 'Review after import']),
      L('Microsoft-specific features and optimization', 9,
        ['Use LinkedIn targeting', 'Use Copilot-related ad formats', 'Optimize bids by device and audience'],
        ['Unique features include LinkedIn profile targeting (company, industry, job function), Multimedia Ads and conversational/AI-surface ad formats as they roll out in some markets, and Microsoft Clarity integration for free heatmaps and recordings. Check the current feature availability since the platform evolves quickly.',
         'Optimize using the same principles: search terms, negatives, ad tests and bid adjustments. Segment by device since desktop may convert better. Review the Microsoft Advertising Editor for bulk changes.'],
        ['A B2B campaign layers LinkedIn profile targeting for "Manager and above" in IT, applying a +25% bid adjustment, and finds improved lead quality.'],
        ['Test one LinkedIn targeting bid adjustment', 'Connect Clarity to your site', 'Review device performance'],
        ['LinkedIn targeting aids B2B', 'Clarity is free for behavior insight', 'Features change often, so verify'])
    ], [
      Q('UET stands for:', ['Universal Event Tracking', 'Unique Ad Template', 'User Engagement Tool', 'Unified Exchange Tag'], 0, 'It is Microsoft\'s conversion tracking tag.'),
      Q('A benefit of Microsoft Advertising is:', ['Often lower CPCs and less competition', 'Zero cost', 'Guaranteed sales', 'No policies'], 0, 'Less competition frequently reduces costs.'),
      Q('You can bring campaigns from Google Ads by:', ['Import', 'Email', 'Fax', 'Copy by hand only'], 0, 'Direct import is supported.'),
      Q('A unique feature for B2B targeting is:', ['LinkedIn profile targeting', 'YouTube Shorts', 'Maps pins', 'Discover'], 0, 'Target by company, industry or function.'),
      Q('Microsoft Clarity provides:', ['Free heatmaps and recordings', 'Domain hosting', 'Email', 'Backlinks'], 0, 'It shows user behavior.')
    ]),
    S('Shopping campaigns and feeds', [
      L('How Shopping ads work and the product feed', 10,
        ['Explain Shopping ads', 'Set up Merchant Center', 'Understand the feed'],
        ['Shopping ads show product images, titles, prices and store names in results. They are driven not by keywords you choose but by the **product feed** you upload to Google Merchant Center (or Microsoft Merchant Center), which Google matches to relevant queries. Feed data is the creative.',
         'Key attributes: id, title, description, link, image_link, price, availability, brand, GTIN, condition and product category. Accuracy matters: prices and availability must match the landing page, otherwise products are disapproved.'],
        ['::id: SKU-1042', '::title: Brooks Trail Running Shoe Men - Waterproof - Size 10 - Black', '::price: 129.00 USD', '::availability: in_stock', '::gtin: 00000000000000', 'A clear descriptive title with brand, type, key attribute, size and color improves matching. The GTIN here is a placeholder.'],
        ['Open Merchant Center and review diagnostics', 'List products with disapprovals and fix causes', 'Rewrite 10 titles using the pattern brand + type + attributes'],
        ['The feed is the creative', 'Accuracy prevents disapprovals', 'Titles drive matching']),
      L('Feed optimization', 9,
        ['Improve titles and images', 'Add custom labels', 'Use supplemental feeds'],
        ['Optimize titles to put the most important search terms in the first 70 characters. Use clear images on plain backgrounds with the product visible. Fill optional attributes such as color, size, material and product type. Use GTINs and brand where available.',
         'Add **custom labels** (up to five) to segment: bestsellers, high margin, clearance, seasonal. Supplemental feeds let you modify attributes without changing your main data source.'],
        ['A retailer labels products with custom_label_0 = margin tier (high, medium, low) and sets different ROAS targets for each tier.'],
        ['Add custom labels for margin tiers', 'Test image variants', 'Fill missing attributes'],
        ['Optimize titles and images', 'Custom labels for segmentation', 'Fill optional attributes']),
      L('Structuring Shopping and Performance Max for retail', 10,
        ['Choose between standard Shopping and PMax', 'Segment by label', 'Monitor product-level performance'],
        ['Standard Shopping campaigns offer more control (priority settings, product-level bids) and clearer reporting, while Performance Max for retail uses the feed across all channels with more automation. Many advertisers run PMax with brand exclusions plus standard Shopping for control.',
         'Review product-level performance: find products with many clicks and no sales (check price competitiveness, reviews, page quality) and star performers to scale. Use free product listings as well, which cost nothing.'],
        ['The report shows 40 products absorbing 35% of spend with zero conversions. Reviewing them reveals poor images and uncompetitive pricing; fixes or exclusions improve ROAS.'],
        ['Segment products by performance', 'Exclude or fix wasteful products', 'Enable free listings'],
        ['Choose control vs automation', 'Product-level review is key', 'Free listings add reach'])
    ], [
      Q('Shopping ads are driven by:', ['The product feed', 'Keywords you choose manually', 'Only video', 'Email'], 0, 'The feed is matched to queries.'),
      Q('Which problem leads to disapproval?', ['Price mismatch with landing page', 'Having a brand', 'Long description', 'Good image'], 0, 'Accuracy is required.'),
      Q('Custom labels are used to:', ['Segment products for bidding', 'Change the domain', 'Edit prices', 'Create video'], 0, 'They group products.'),
      Q('Where should key search terms appear in titles?', ['The first ~70 characters', 'At the very end only', 'Nowhere', 'Hidden'], 0, 'Front-load important words.'),
      Q('Free product listings:', ['Cost nothing', 'Cost double', 'Need no feed', 'Are disabled'], 0, 'They provide free reach.')
    ]),
    S('Remarketing and audiences', [
      L('Remarketing fundamentals', 9,
        ['Define remarketing', 'Build audience lists', 'Plan membership durations'],
        ['Remarketing (retargeting) shows ads to people who previously interacted with your site, app or business. Audience segments include all visitors, product viewers, cart abandoners, past purchasers and engaged video viewers. Audience lists need a minimum size before ads serve. On Google, the common minimums are about 100 active users for Display and about 1,000 for Search, and other platforms differ, so check the current documentation.',
         'Set membership durations according to the buying cycle: cart abandoners 7 to 14 days, product viewers 30 days, past buyers longer for repeat purchase. Exclude converters from acquisition-style messages.'],
        ['A shoe store builds "viewed product, not purchased, last 14 days" and "purchased last 180 days" lists. The first gets a reminder with free returns; the second gets a new-arrivals message.'],
        ['Define three audiences for your site', 'Set membership durations', 'Exclude converters from reminder campaigns'],
        ['Segment by behavior', 'Match duration to buying cycle', 'Exclude converters']),
      L('Messaging and campaign setup', 9,
        ['Write relevant remarketing creative', 'Set frequency caps', 'Use RLSA'],
        ['Tailor ads to the visitor\'s stage: cart abandoners get a reminder or incentive; product viewers see the exact products (dynamic remarketing with a feed); past buyers see accessories or replenishment. Avoid creepy messaging and overexposure; cap frequency, e.g. 3 to 5 impressions per day.',
         'RLSA (remarketing lists for search ads) lets you bid higher or use different ads for people on your lists when they search. Observation mode lets you gather data without restricting reach.'],
        ['A SaaS company bids +40% for past trial users searching for its brand plus "pricing" and shows an ad with a special upgrade offer.'],
        ['Draft messages for three audiences', 'Set a frequency cap', 'Add an RLSA audience in observation mode'],
        ['Match message to stage', 'Cap frequency', 'Use RLSA for search']),
      L('Privacy, policy and measuring remarketing', 8,
        ['Follow audience policies', 'Respect consent', 'Measure incrementality'],
        ['Remarketing is regulated. Platforms forbid building lists from sensitive categories (health conditions, financial hardship, etc.), and laws require consent for tracking in many regions. Include a clear privacy policy and honor opt-outs. Do not upload customer lists without proper consent.',
         'Remarketing often shows high ROAS because it targets people already likely to buy. Check incrementality with holdout groups; many of those buyers would have returned anyway.'],
        ['A holdout test excludes 10% of cart abandoners from ads. The exposed group converts 12% more than the holdout, showing real but modest incrementality.'],
        ['Review your privacy and consent setup', 'Check audience policy restrictions', 'Plan a 10% holdout test'],
        ['Follow consent laws and platform policy', 'Avoid sensitive categories', 'Test for incrementality'])
    ], [
      Q('Cart abandoner audiences usually use:', ['Short membership durations such as 7 to 14 days', 'Zero days', 'Ten years', 'No duration'], 0, 'Intent decays quickly.'),
      Q('RLSA stands for:', ['Remarketing lists for search ads', 'Real location search ads', 'Rapid link sharing ads', 'Retail listing shopping ads'], 0, 'It layers audiences onto Search.'),
      Q('Frequency caps help to:', ['Avoid overexposure', 'Increase spend', 'Edit feed', 'Block bots'], 0, 'They limit repeated impressions.'),
      Q('Sensitive category remarketing is:', ['Restricted by policy', 'Encouraged', 'Required', 'Free'], 0, 'Platforms prohibit it.'),
      Q('Why test with a holdout group?', ['To measure incremental impact', 'To raise bids', 'To change the logo', 'To hide ads'], 0, 'Shows what would have happened anyway.')
    ])
  ]);
})();
