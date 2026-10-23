(function () {
  var h = QF.h, L = h.L, S = h.S, Q = h.Q;
  QF.addCourse({
    slug: 'ecommerce-seo', title: 'Ecommerce SEO', subtitle: 'Category pages, faceted navigation, product pages, schema, out-of-stock products and the growth levers for online stores.',
    track: 'SEO', topic: 'Ecommerce', level: 'Intermediate', stage: 3, instructor: 'tobias', rating: 4.7,
    desc: 'Online stores have their own SEO problems: thousands of near-identical pages, filters that create endless URLs, products that come and go, and customers who compare before buying. This course shows how to structure a store so search engines and shoppers find the right page.',
    learn: ['Design a store structure around categories and demand', 'Handle filters, sorting and pagination without creating chaos', 'Write product page titles, descriptions and structured data', 'Deal with out-of-stock, discontinued and variant products', 'Grow with category content, guides, feeds and reviews'],
    reqs: ['On-Page SEO and Technical SEO basics', 'Access to an ecommerce store (real or demo)']
  }, [
    S('Store structure and navigation', [
      L('Categories: the money pages', 10,
        ['Explain why categories rank for the best searches', 'Plan categories from keyword demand', 'Avoid too deep or too flat structures'],
        ['Shoppers often search for a type of product ("women\'s waterproof jackets") before they choose a particular item. These searches match **category pages**, which makes categories the highest-value SEO pages of most stores. Build categories around how people search, not just how the warehouse labels things.',
         'Use keyword research to decide categories and subcategories. Aim for a structure that keeps important pages within three clicks of the homepage: Home > Women > Jackets > Waterproof jackets. Too flat means a messy list of hundreds of categories; too deep hides products. Each category needs its own URL, a unique title and heading, a short helpful intro, and links to subcategories.'],
        ['A store named a category "Outerwear Collection 7" because that was the internal code. Renaming it "Women\'s Waterproof Jackets" and adding a buying guide moves it from page 4 to page 1 for its main search.'],
        ['List the top ten search terms for your store and map each to a category', 'Check the click depth of your main products', 'Rewrite one category title and heading'],
        ['Categories match shoppers\' searches for product types', 'Name them with real search terms', 'Keep key pages within three clicks']),
      L('Filters, sorting and faceted navigation', 11,
        ['Understand how filters create thousands of URLs', 'Choose which filter pages to index', 'Control crawling and duplication'],
        ['Filters let shoppers narrow results: color, size, price, brand. Each combination can create a new URL (`?color=red&size=m&sort=price`), producing huge numbers of near-duplicate pages. This wastes crawling and can dilute rankings.',
         'Decide which filter pages deserve to exist as search landing pages. A filter such as "black leather sofas" may match real searches, so give it a clean static URL, unique title and indexable status. Most combinations (sort orders, price ranges, three filters at once) should not be indexed: use canonical tags to the main category, `noindex`, or block parameter patterns in robots.txt, depending on the situation, and do not link to unwanted combinations in a crawlable way.'],
        ['A furniture site finds 300,000 filter URLs crawled by Googlebot but only 4,000 real products. The team keeps 40 valuable filter pages indexable, canonicalises the rest and blocks sorting parameters. Crawling shifts back to products.'],
        ['Find the URL parameters on a store you can access', 'Mark which filter combinations match real searches', 'Write a rule for which combinations to index'],
        ['Filters can create endless duplicate URLs', 'Index only filter pages that match real demand', 'Use canonicals, noindex or robots rules for the rest']),
      L('Pagination, URLs and breadcrumbs', 9,
        ['Handle multi-page category lists', 'Use clean URLs', 'Use breadcrumbs for structure'],
        ['Long categories are split across pages (`?page=2`). Give each page a crawlable link (`<a href>`), a self-referencing canonical and a unique title where possible. Google no longer uses `rel=prev/next`. Avoid "infinite scroll" without paginated links because crawlers cannot scroll.',
         'URLs should be short and logical: `/womens/jackets/waterproof/`. Do not put the product in many different URL paths without a canonical, or you create duplicates. Breadcrumbs ("Home > Women > Jackets") help shoppers and crawlers, and can be added with structured data.'],
        ['A product exists at `/jackets/blue-jacket` and `/sale/blue-jacket`. The team picks `/jackets/blue-jacket` as canonical, and sets the sale path to canonicalise to it, solving duplicates.'],
        ['Check how your store handles page 2 of a category', 'Pick one canonical URL for a product that appears in two categories', 'Add breadcrumbs if they are missing'],
        ['Crawlable pagination links, no infinite scroll without fallback', 'One canonical URL per product', 'Breadcrumbs help structure'])
    ], [
      Q('Which pages are usually the highest value for a store\'s SEO?', ['Category pages', 'The privacy policy', 'The 404 page', 'The login page'], 0, 'They match searches for product types.'),
      Q('What problem do filters often cause?', ['Faster crawling', 'Thousands of near-duplicate URLs', 'Better rankings', 'HTTPS errors'], 1, 'Filter combinations multiply URLs.'),
      Q('Which filter pages should usually be indexable?', ['Every combination', 'Only those matching real search demand', 'None ever', 'Only sorting pages'], 1, 'Index filter pages that match valuable searches.'),
      Q('Does Google still use rel=prev/next for pagination?', ['Yes, strongly', 'No', 'Only for images', 'Only for mobile'], 1, 'Google stopped using it, so use crawlable links.'),
      Q('If a product appears in two category paths, you should:', ['Create two canonical URLs', 'Choose one canonical URL', 'Delete the product', 'Noindex both'], 1, 'One canonical URL prevents duplicate content.')
    ]),
    S('Product pages that sell and rank', [
      L('Product titles, descriptions and images', 10,
        ['Write product titles that match searches', 'Write unique descriptions', 'Optimize product images'],
        ['A good product title includes brand, product type, key attributes: "Patagonia Torrentshell 3L Women\'s Waterproof Jacket, Black". Customers searching the model or type will find it. Do not stuff, and keep the title consistent with what is shown.',
         'Many stores copy the supplier\'s description, which is also used by hundreds of competitors. Write unique descriptions for your most important products: benefits, who it is for, sizing and care notes, and answers to common questions. Use clear photos from several angles with descriptive filenames, alt text and compressed file sizes. Add video where helpful.'],
        ['A store rewrites descriptions for its top 50 products with fit notes, materials and use cases. Organic sales of those products increase by 22% over four months.'],
        ['Rewrite three product titles', 'Write a unique description for one top product', 'Add a size and fit guide or FAQ'],
        ['Titles combine brand, type and attributes', 'Unique descriptions beat supplier copy', 'Quality images help rankings and sales']),
      L('Structured data and reviews', 10,
        ['Add Product schema', 'Display reviews honestly', 'Know the rules for review markup'],
        ['`Product` structured data can make pages eligible for rich results with price, availability and ratings. Include name, image, description, SKU or GTIN, brand, `offers` (price, currency, availability) and, if real, `aggregateRating`. Data must match what the page shows.',
         'Reviews build trust and keywords naturally. Use an honest review system, do not write your own fake reviews, and follow Google\'s rules: self-serving review markup for a business reviewing itself is not allowed in some contexts. Ask customers for reviews after purchase.'],
        ['::{', '::  "@context": "https://schema.org",', '::  "@type": "Product",', '::  "name": "Waterproof Jacket",', '::  "sku": "WJ-100",', '::  "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "129.00", "availability": "https://schema.org/InStock" }', '::}'],
        ['Test a product page in the Rich Results Test', 'Fix any price or availability errors', 'Set up an automated review request email'],
        ['Product schema must match the visible page', 'Reviews must be real', 'Use the Rich Results Test']),
      L('Out-of-stock, discontinued and variant products', 10,
        ['Choose what to do with unavailable products', 'Handle color and size variants', 'Avoid soft 404s'],
        ['**Temporarily out of stock:** keep the page live, mark availability as OutOfStock, offer notify-me, and show alternatives. **Permanently discontinued with a close replacement:** 301 redirect to the replacement or the category. **Discontinued with no good replacement:** serve a 410 or 404, or keep a helpful page if it has traffic and links.',
         'For **variants** (color, size), usually keep one product page with options, rather than separate pages with the same content. If each color has real search demand, separate URLs with unique content and canonical settings can work. Never redirect every old product to the homepage; Google may treat it as a soft 404.'],
        ['A store removes 600 discontinued products and redirects all to the homepage. Traffic falls and Search Console shows soft 404s. The fix: redirect to relevant categories and replacements.'],
        ['Write a rule for out-of-stock products at your store', 'Find any soft 404s in Search Console', 'Review variant handling'],
        ['Keep temporary out-of-stock pages with alternatives', 'Redirect to relevant replacements, not the homepage', 'One page for most variants'],
        { oops: 'Bulk-redirecting every removed product to the homepage. Always map to the closest relevant page.' })
    ], [
      Q('What is a good product title?', ['A string of keywords', 'Brand, type and key attributes', 'Only the SKU', 'Only "product"'], 1, 'It matches how shoppers search and describe the item.'),
      Q('Why write unique product descriptions?', ['Supplier copy is shared with competitors', 'Google forbids short text', 'It speeds up the site', 'It removes reviews'], 0, 'Duplicate supplier text gives you no advantage.'),
      Q('Product schema must:', ['Match visible page data', 'Contain made-up ratings', 'Be hidden', 'Include only a price'], 0, 'Misleading markup can cause penalties.'),
      Q('For a permanently discontinued product with a close replacement, you should:', ['301 redirect to the replacement', 'Redirect to the homepage', 'Leave it', 'Noindex the site'], 0, 'A relevant redirect preserves value.'),
      Q('What are mass redirects to the homepage often treated as?', ['Excellent practice', 'Soft 404s', 'Canonicals', 'Sitemaps'], 1, 'Irrelevant redirects can be treated as soft 404s.')
    ]),
    S('Growth levers for stores', [
      L('Category content and buying guides', 9,
        ['Add helpful content to category pages', 'Write buying guides', 'Link guides to categories'],
        ['Category pages often have only a grid of products, which gives little text for search engines and little help for shoppers. Add a short intro above the products and a longer helpful section below: how to choose, key differences, size guides, care. Keep it useful, not keyword-stuffed.',
         'Buying guides ("How to choose a waterproof jacket") attract people early in the funnel and link to categories and products. Include real expertise: tests, comparison tables and photos.'],
        ['A category for "trail running shoes" gets a 300-word guide covering cushioning, drop and fit, and a link to a longer buying guide. Rankings and conversion rate both improve.'],
        ['Write a 150-word intro for a category', 'Plan a buying guide with a comparison table', 'Add links from the guide to categories'],
        ['Help shoppers choose, not just browse', 'Guides attract early-stage searchers', 'Link guides to money pages']),
      L('Shopping feeds, free listings and marketplaces', 9,
        ['Use your product feed for free listings', 'Understand marketplaces', 'Keep data consistent'],
        ['Your product feed in Google Merchant Center can make products appear in free Shopping listings and, if you advertise, Shopping ads. Quality titles, correct prices and availability, GTINs and clear images matter. Keep website and feed data consistent.',
         'Marketplaces (Amazon, eBay, Etsy) can bring sales but you compete on their rules and fees. They are a channel, not a replacement for your own site. Treat them as a way to reach new customers who may later buy directly.'],
        ['A store enables free listings and fixes feed errors. Impressions for products increase and some free clicks appear within weeks.'],
        ['Check Merchant Center diagnostics', 'Compare prices in feed and on site', 'List your marketplace options'],
        ['Feeds power free listings and ads', 'Data must match the site', 'Marketplaces are a channel, not a substitute']),
      L('Speed, trust and conversion for stores', 10,
        ['Improve store speed', 'Add trust signals', 'Measure what matters'],
        ['Stores are often heavy with apps, scripts and images, which slows pages. Audit apps, remove unused ones, compress images, and test the product and category templates with PageSpeed Insights. Check the checkout is smooth on mobile.',
         'Trust signals include clear shipping and returns, secure checkout, reviews, contact details and recognizable payment methods. Measure organic revenue, conversion rate by landing page, and revenue per organic session, not just clicks.'],
        ['A store removes five unused apps and compresses banners; mobile load time drops from 5.8 to 3.1 seconds and the conversion rate rises by 11%.'],
        ['List all apps and scripts and remove one unused', 'Add a returns policy summary to product pages', 'Create a report of organic revenue by landing page'],
        ['Speed, trust and clear policies convert', 'Audit apps regularly', 'Report revenue, not just traffic'])
    ], [
      Q('Why add content to category pages?', ['They have little text and shoppers need help choosing', 'It slows the site', 'It is illegal', 'It deletes products'], 0, 'Helpful content improves relevance and conversions.'),
      Q('Which can bring free product visibility?', ['Free product listings via Merchant Center', 'Hidden text', 'Meta keywords', 'Link farms'], 0, 'Feeds can power free listings.'),
      Q('Marketplaces are best viewed as:', ['A channel, not a substitute for your site', 'A replacement for SEO', 'Illegal', 'Free forever'], 0, 'They follow their own rules and fees.'),
      Q('What is a good ecommerce metric?', ['Organic revenue per landing page', 'Number of tags', 'Page weight only', 'Logo size'], 0, 'It links SEO to money.'),
      Q('A common reason stores are slow is:', ['Too many apps and scripts', 'Too few products', 'A short domain', 'Having HTTPS'], 0, 'Apps and third-party scripts add weight.')
    ])
  ]);
})();
