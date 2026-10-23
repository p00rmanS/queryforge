(function () {
  var h = QF.h, L = h.L, S = h.S, Q = h.Q;
  QF.addCourse({
    slug: 'ethics-privacy-compliance', title: 'Privacy, Ethics & Compliance for Marketers', subtitle: 'Cookies, consent, advertising rules, copyright, accessibility and AI disclosure. Stay out of trouble.',
    track: 'SEO', topic: 'Compliance', level: 'Intermediate', stage: 4, instructor: 'rae', rating: 4.7,
    desc: 'Marketers regularly touch personal data, make advertising claims, use images and now use AI. Mistakes here are not just embarrassing; they can be expensive. This course gives you the practical basics so you can spot risks, ask better questions and know when to call a lawyer. It is general education, not legal advice.',
    learn: ['Explain privacy basics: personal data, consent and cookies', 'Know the broad principles of GDPR and similar laws', 'Follow advertising and endorsement rules', 'Respect copyright when using images, text and fonts', 'Make websites and campaigns more accessible', 'Use AI tools responsibly and honestly'],
    reqs: ['Basic familiarity with analytics and advertising', 'Remember: this course does not replace legal advice for your situation']
  }, [
    S('Privacy and tracking', [
      L('Personal data, consent and cookies', 11,
        ['Define personal data', 'Explain consent and cookie banners', 'Know why tracking tools need care'],
        ['**Personal data** is information that identifies or can be linked to a person: name, email, phone, IP address, device IDs and online identifiers. Laws such as the EU\'s **GDPR**, the UK GDPR and California\'s **CCPA/CPRA** (plus many others) give people rights over their data and set rules for companies that collect it.',
         '**Cookies** are small files stored in the browser. Some are essential (keeping items in a cart), others track behavior for analytics and advertising. In many regions, websites must ask for **consent** before using non-essential cookies and tracking, explain what they do in a privacy policy, and let people refuse or change their mind easily. Consent platforms (CMPs) manage this and, with Google Consent Mode, control how Google tags behave.',
         'Practical rule: know what data every tool collects, why, and where it is sent. If you add a new tag (analytics, ads, heatmaps), check it respects consent settings.'],
        ['A client adds a new heatmap tool without telling anyone. It sets cookies before users accept the banner. After an audit, the agency configures the tag to wait for consent and updates the privacy policy.'],
        ['List all the tracking tools on a site you know', 'Check what happens when you refuse cookies', 'Write a plain-language explanation of cookies for a client'],
        ['Personal data includes identifiers like IP and device IDs', 'Consent is often needed before non-essential tracking', 'Check every new tag against consent settings'],
        { say: ['"Before we add this tool, let us check how it handles consent and what we need to put in the privacy policy."'], oops: 'Adding tags to a client site without checking consent. You could expose the client to legal risk.' }),
      L('Data handling, security and client data', 9,
        ['Handle client data safely', 'Use data minimization', 'Know what to do after a breach'],
        ['Collect only what you need and keep it only as long as needed (**data minimization**). Never email spreadsheets full of customer data. Use secure sharing with limited access, strong passwords, two-step verification and a password manager. When analyzing, anonymize or aggregate where possible.',
         'If you suspect a security incident (a lost laptop, a phishing click, unauthorized access), tell your client or manager immediately; laws may require reporting a breach within a short time (72 hours under GDPR in many cases). Agencies often sign **data processing agreements** with clients that set rules for handling data.'],
        ['A freelancer receives an export of leads including phone numbers. She stores it in an encrypted folder, uses only the columns needed, and deletes it when the project ends.'],
        ['Create a data handling checklist for your work', 'Enable two-step verification on all your work accounts', 'Write one sentence about breach reporting'],
        ['Collect and keep only what you need', 'Share securely, never casually', 'Report incidents immediately']),
      L('Analytics, advertising and privacy features', 8,
        ['Understand consent mode and enhanced conversions', 'Respect audience rules', 'Avoid sensitive targeting'],
        ['Google Consent Mode adjusts how tags behave based on a user\'s consent choices and can model some conversions. **Enhanced conversions** send hashed first-party data (such as email) to improve matching, which needs proper consent and disclosure. Customer match uploads need permission to use data for advertising.',
         'Ad platforms restrict **sensitive categories** (health conditions, financial hardship, ethnicity and others) for audience targeting and remarketing. Never build audiences on sensitive data, and be careful with children\'s data, where stricter rules apply.'],
        ['A clinic wants to retarget visitors who viewed a page about a medical condition. The agency explains that platform rules forbid it and offers contextual ads and email sign-ups instead.'],
        ['Read your ad platform\'s personalized advertising policy summary', 'Write a safe alternative to sensitive retargeting', 'Check where hashed data is sent in a tag'],
        ['Consent signals change how tags behave', 'Sensitive categories are restricted', 'Use first-party data with permission'])
    ], [
      Q('Which is typically personal data?', ['An email address', 'The color blue', 'A font', 'A sitemap'], 0, 'Emails identify individuals.'),
      Q('In many regions, non-essential cookies require:', ['Consent before use', 'Nothing', 'A bigger logo', 'A shorter URL'], 0, 'Consent is a common requirement for tracking cookies.'),
      Q('Data minimization means:', ['Collecting only what you need', 'Collecting everything', 'Deleting analytics', 'Hiding the site'], 0, 'Less data means less risk.'),
      Q('If you suspect a data breach you should:', ['Hide it', 'Tell the client or manager immediately', 'Wait', 'Post online'], 1, 'Laws may require fast reporting.'),
      Q('Sensitive-category remarketing is generally:', ['Restricted by platform policies', 'Encouraged', 'Required', 'Free'], 0, 'Ad platforms limit it.')
    ]),
    S('Advertising rules and honest claims', [
      L('Truthful claims, disclosures and endorsements', 10,
        ['Make claims you can prove', 'Disclose sponsored content and affiliate links', 'Know reviews and testimonial rules'],
        ['Advertising must be truthful and not misleading. If you say "#1 rated", "cures", "lowest price" or "guaranteed results", be ready with proof and make sure the claim is allowed in that industry. Include clear terms for offers (dates, conditions, fees).',
         'If a creator or website is paid or receives free products, or earns an affiliate commission, this must be **disclosed** clearly (rules like the US FTC guidelines and the UK ASA/CAP code). A tiny footnote is not enough. Fake or incentivized reviews are illegal or against policy in many regions. Do not write testimonials for customers who did not give them.',
         'In highly regulated fields (health, finance, legal, gambling, alcohol), have a compliance review before launching.'],
        ['An affiliate site recommending mattresses adds a clear line at the top of each page: "We may earn a commission if you buy through links on this page." Readers trust it more, and the site stays compliant.'],
        ['Check your claims in a draft ad and find proof for each', 'Write a clear affiliate disclosure', 'List three industries where you would ask for compliance review'],
        ['Be ready to prove every claim', 'Disclose paid and affiliate relationships clearly', 'Never fake reviews'],
        { oops: 'Writing "clinically proven" or "guaranteed" because it sounds good. If asked for proof, you need it.' }),
      L('Trademarks, brand names and comparative ads', 9,
        ['Understand basic trademark rules', 'Use competitor names carefully', 'Avoid confusing customers'],
        ['A trademark protects a brand name or logo. Using someone else\'s trademark in an ad headline can violate policy or law, especially if it suggests you are them. Bidding on competitor names as keywords is generally allowed on Google in many regions, but using the name in ad text is restricted when the owner complains.',
         'Comparative ads ("cheaper than Brand X") must be true and based on fair comparison. Be careful with logos and brand assets. For clients, check that their own brand is registered (or at least not conflicting) before investing heavily in it.'],
        ['A reseller wants an ad "Official Brand X Store". The agency checks and finds they are not an authorized retailer, so it uses "Brand X products available here" with correct wording.'],
        ['Read Google\'s trademark policy summary', 'Write a safe comparison statement', 'Check whether a client\'s name conflicts with others'],
        ['Do not suggest you are another brand', 'Keep comparisons true and fair', 'Check trademarks before big spend']),
      L('Industry rules: health, finance, legal and alcohol', 8,
        ['Spot restricted categories', 'Know that rules vary by country', 'Plan approvals'],
        ['Some industries have strict advertising rules and platform restrictions. Healthcare, pharmacy, financial services, loans, legal services, gambling, alcohol and adult content often need certification, special terms or are limited by location. Rules differ widely by country.',
         'Check the platform\'s policy page for the industry before building campaigns, ask for licenses or certificates, and allow extra time for approvals. When unsure, ask a lawyer or the client\'s compliance team.'],
        ['A loan broker\'s campaign is paused because it lacks the required financial services verification. The agency starts verification and uses organic content while waiting.'],
        ['Look up the policy for one restricted industry', 'List what proof you would need', 'Add buffer time to a project plan for approvals'],
        ['Regulated industries need extra care', 'Rules differ by country', 'Plan for approval time'])
    ], [
      Q('If you claim "#1 rated", you should:', ['Have proof ready', 'Never mention it', 'Make it bigger', 'Hide the source'], 0, 'Unsupported claims are misleading.'),
      Q('Affiliate links should be:', ['Disclosed clearly', 'Hidden', 'Only in a footnote', 'Faked'], 0, 'Disclosures must be easy to see and understand.'),
      Q('Fake reviews are:', ['Acceptable if small', 'Against rules and often illegal', 'Recommended', 'Free'], 1, 'They mislead consumers.'),
      Q('Before advertising in a regulated industry you should:', ['Check policies and get approvals', 'Ignore rules', 'Copy competitor ads', 'Use all capitals'], 0, 'Approvals may be required before ads run.'),
      Q('Using a competitor\'s trademark in ad text can:', ['Cause policy issues', 'Always help', 'Be required', 'Guarantee conversions'], 0, 'It can violate policy or law.')
    ]),
    S('Copyright, accessibility and AI', [
      L('Copyright for images, text, fonts and music', 9,
        ['Understand copyright basics', 'Source images legally', 'Credit and license correctly'],
        ['Most images, text, fonts and music are protected by copyright the moment they are created. "I found it on Google Images" is not permission. Use your own photos, images from licensed stock sites, or openly licensed content (such as Creative Commons) and follow the conditions (credit, no commercial use, etc.).',
         'Keep a record of where each image came from and the license. Fonts and plugins also have licenses. If a client supplies images, ask whether they own the rights. A takedown notice or a legal letter for an image used without permission is stressful and costly.'],
        ['A freelancer uses a photo from a random website on a client\'s blog. Months later the owner demands a fee. After that, the agency uses a licensed stock subscription and an image log.'],
        ['Create an image source log', 'Find three sources of free-to-use images and read their licenses', 'Write a short copyright statement for clients'],
        ['"Found online" is not permission', 'Use licensed or original assets', 'Keep a record of sources']),
      L('Accessibility: websites everyone can use', 10,
        ['Explain why accessibility matters', 'Apply the basics', 'Test quickly'],
        ['Accessibility means people with disabilities (blindness, low vision, deafness, motor and cognitive differences) can use your site. It is the right thing to do, it helps all users, it overlaps with SEO, and in many places it is a legal requirement. The standard to know is **WCAG** (Web Content Accessibility Guidelines).',
         'Basics: descriptive alt text, headings in logical order, enough color contrast (4.5:1 for normal text), keyboard operation with visible focus, labeled forms, captions for video, and meaningful link text ("download the guide" not "click here"). Do not rely on an "accessibility overlay" plugin to fix a site; it does not replace real fixes.',
         'Quick tests: use the keyboard (Tab) to move through the page, zoom to 200%, run a free checker, and try a screen reader for a minute.'],
        ['An agency tests a client\'s contact form with the keyboard and finds that it cannot be submitted without a mouse. Fixing it improves the experience for everyone and avoids a legal risk.'],
        ['Tab through a page and note problems', 'Check the color contrast of text and background', 'Add alt text to five images properly'],
        ['Accessibility helps people and often SEO', 'Know the WCAG basics', 'Overlays are not a fix']),
      L('Using AI responsibly', 9,
        ['Know the risks of AI tools', 'Protect client data', 'Be transparent'],
        ['AI tools can speed up research, outlines and drafts, but they can invent facts, copy styles, and produce generic text. Always fact-check, edit and add original value. Do not paste confidential client data, passwords or personal data into tools unless you have checked how the tool uses it and the contract allows it.',
         'Be honest with clients about how you use AI. Some clients forbid it, some welcome it. Consider disclosure where rules or trust require it (for example, AI-generated images that could mislead). Never use AI to create fake reviews, fake experts or fake sources.'],
        ['An agency adds an AI policy to its contract: AI used only for drafts and research, human review of all content, no client confidential data entered, and facts verified. Clients feel reassured.'],
        ['Write a short AI policy for your work', 'List three tasks where AI helps and three where it is risky', 'Check one AI-generated claim for accuracy'],
        ['Fact-check and edit all AI output', 'Protect client data', 'Be transparent and never fake sources'],
        { say: ['"We use AI as an assistant for research and drafts, and every piece is checked and edited by a person."'] })
    ], [
      Q('Is an image found via search free to use?', ['Yes, always', 'No, it is usually protected by copyright', 'Only on weekends', 'Only if small'], 1, 'You need a license or permission.'),
      Q('What contrast ratio is recommended for normal text under WCAG AA?', ['1.5:1', '2:1', '4.5:1', '10:1'], 2, 'WCAG AA requires 4.5:1 for normal text.'),
      Q('Are accessibility overlay plugins a full fix?', ['Yes', 'No, real fixes are needed', 'Only for images', 'Only for forms'], 1, 'They do not replace proper accessible design.'),
      Q('Should you paste confidential client data into any AI tool?', ['Yes', 'Only after checking the tool\'s data handling and permission', 'Always', 'Never check'], 1, 'Check policies and contracts first.'),
      Q('AI output should be:', ['Published unchecked', 'Fact-checked and edited', 'Used to create fake reviews', 'Hidden'], 1, 'Humans must verify and improve it.')
    ])
  ]);
})();
