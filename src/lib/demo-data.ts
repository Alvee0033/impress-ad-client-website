export const DEMO_CATEGORIES = [
    { id: '1', name: 'Mugs & Drinkware', slug: 'mugs-drinkware', icon: '☕', imageUrl: '/images/categories/mugs-drinkware.png', description: 'Custom printed mugs, bottles, and cups', sortOrder: 1 },
    { id: '2', name: 'Apparel & T-Shirts', slug: 'apparel-tshirts', icon: '👕', imageUrl: '/images/categories/apparel-tshirts.png', description: 'Printed and embroidered clothing', sortOrder: 2 },
    { id: '3', name: 'Banners & Signage', slug: 'banners-signage', icon: '🏗️', imageUrl: '/images/categories/banners-signage.png', description: 'Flex banners, roll-up banners, standees', sortOrder: 3 },
    { id: '4', name: 'Visiting Cards', slug: 'visiting-cards', icon: '💳', imageUrl: '/images/categories/visiting-cards.png', description: 'Standard, premium, and specialty cards', sortOrder: 4 },
    { id: '5', name: 'Brochures & Flyers', slug: 'brochures-flyers', icon: '📄', imageUrl: '/images/categories/brochures-flyers.png', description: 'Folded and flat printed marketing materials', sortOrder: 5 },
    { id: '6', name: 'Stickers & Labels', slug: 'stickers-labels', icon: '🏷️', imageUrl: '/images/categories/stickers-labels.png', description: 'Custom cut stickers, roll labels, transparent', sortOrder: 6 },
    { id: '7', name: 'Corporate Gifts', slug: 'corporate-gifts', icon: '🎁', imageUrl: '/images/categories/corporate-gifts.png', description: 'Branded pens, notebooks, bags, and gift sets', sortOrder: 7 },
    { id: '8', name: 'Packaging', slug: 'packaging', icon: '📦', imageUrl: '/images/categories/packaging.png', description: 'Custom boxes, bags, and branded packaging', sortOrder: 8 },
];

export const DEMO_PRODUCTS = [
    // Mugs
    { id: 'm1', categoryId: '1', name: 'Standard 11oz Ceramic Mug', slug: 'standard-11oz-mug', images: '/images/products/mug-standard.png', shortDescription: 'The classic 11oz white ceramic mug, perfect for corporate branding', moq: 12, startingPrice: 250, leadTime: '2-3 days', status: 'active' },
    { id: 'm2', categoryId: '1', name: 'Magic Mug (Heat Sensitive)', slug: 'magic-mug', images: '/images/products/mug-magic.png', shortDescription: 'Heat-sensitive mug that reveals your design when hot', moq: 6, startingPrice: 450, leadTime: '2-3 days', status: 'active' },
    // Apparel
    { id: 'a1', categoryId: '2', name: 'Round Neck T-Shirt (Sublimation)', slug: 'round-neck-tshirt-sublimation', images: '/images/products/tshirt-sublimation.png', shortDescription: 'Full-color sublimation printed round neck T-shirt', moq: 5, startingPrice: 400, leadTime: '5-7 days', status: 'active' },
    { id: 'a2', categoryId: '2', name: 'Polo Shirt', slug: 'polo-shirt', images: '/images/products/polo-shirts.png', shortDescription: 'Premium polo shirt with embroidered or printed logo', moq: 10, startingPrice: 600, leadTime: '7-10 days', status: 'active' },
    // Banners
    { id: 'b1', categoryId: '3', name: 'Flex Banner (Custom Size)', slug: 'flex-banner-custom', images: '/images/products/banner-flex.png', shortDescription: 'High-quality flex banner for outdoor/indoor use', moq: 1, startingPrice: 15, leadTime: '1-2 days', status: 'active' },
    { id: 'b2', categoryId: '3', name: 'Roll-Up / Retractable Banner', slug: 'roll-up-retractable-banner', images: '/images/products/banner-rollup.png', shortDescription: 'Portable retractable banner stand with printed graphic', moq: 1, startingPrice: 2500, leadTime: '2-3 days', status: 'active' },
    { id: 'b3', categoryId: '3', name: 'Exhibition Display Set', slug: 'exhibition-display-set', images: '/images/products/banners-expo.png', shortDescription: 'Complete banner and signage set for exhibitions and events', moq: 1, startingPrice: 15000, leadTime: '5-7 days', status: 'active' },
    // Cards
    { id: 'c1', categoryId: '4', name: 'Standard Matte/Glossy Card', slug: 'standard-matte-glossy-card', images: '/images/products/cards-standard.png', shortDescription: 'Premium quality visiting cards with matte or glossy finish', moq: 100, startingPrice: 1.5, leadTime: '2-3 days', status: 'active' },
    { id: 'c2', categoryId: '4', name: 'Spot UV Cards', slug: 'spot-uv-cards', images: '/images/products/cards-spotuv.png', shortDescription: 'Elegant cards with selective UV coating highlights', moq: 100, startingPrice: 3, leadTime: '3-5 days', status: 'active' },
    // Brochures
    { id: 'br1', categoryId: '5', name: 'A4 Tri-fold Brochure', slug: 'a4-trifold-brochure', images: '/images/products/brochure-trifold.png', shortDescription: 'Professional tri-fold brochure for high-impact marketing', moq: 100, startingPrice: 25, leadTime: '3-5 days', status: 'active' },
    { id: 'br2', categoryId: '5', name: 'Promotional Flyer (A5)', slug: 'promotional-flyer-a5', images: '/images/products/flyer-a5.png', shortDescription: 'Vibrant A5 flyers for mass distribution and events', moq: 500, startingPrice: 5, leadTime: '1-2 days', status: 'active' },
    // Stickers
    { id: 's1', categoryId: '6', name: 'Custom Shape Cut Sticker', slug: 'custom-shape-cut-sticker', images: '/images/products/stickers-diecut.png', shortDescription: 'Die-cut stickers in any custom shape', moq: 50, startingPrice: 2, leadTime: '2-3 days', status: 'active' },
    { id: 's2', categoryId: '6', name: 'Product Label Set', slug: 'product-label-set', images: '/images/products/stickers-set.png', shortDescription: 'Branded labels for products and packaging', moq: 1000, startingPrice: 1, leadTime: '3-5 days', status: 'active' },
    // Corporate Gifts
    { id: 'g1', categoryId: '7', name: 'Executive Branding Set', slug: 'executive-branding-set', images: '/images/products/corporate-gift-set.png', shortDescription: 'Luxury pen, notebook, and card holder branding set', moq: 10, startingPrice: 1200, leadTime: '7-10 days', status: 'active' },
    // Packaging
    { id: 'pk1', categoryId: '8', name: 'Custom Branded Box', slug: 'custom-branded-box', images: '/images/products/packaging-box.png', shortDescription: 'Premium corrugated boxes with custom brand printing', moq: 50, startingPrice: 45, leadTime: '5-7 days', status: 'active' },
];

export const DEMO_PORTFOLIO = [
    { id: 'p1', categoryId: '1', imageUrl: '/images/portfolio/mug-1.png', title: 'Corporate Mug Set — Ahmed Traders', description: '500 white ceramic mugs with full-color company logo' },
    { id: 'p2', categoryId: '2', imageUrl: '/images/portfolio/tshirt-1.png', title: 'Event T-Shirts — Star Events', description: 'Sublimation printed T-shirts for annual conference' },
    { id: 'p3', categoryId: '3', imageUrl: '/images/portfolio/banner-1.png', title: 'Grand Opening Banner — Fashionista', description: '10x4 ft flex banner for boutique opening' },
    { id: 'p4', categoryId: '4', imageUrl: '/images/portfolio/card-1.png', title: 'Spot UV Business Cards — Karim & Associates', description: 'Premium spot UV visiting cards with gold accents' },
    { id: 'p5', categoryId: '7', imageUrl: '/images/portfolio/gift-1.png', title: 'Corporate Gift Box — TechStart BD', description: 'Custom branded pen, diary, and mug gift set' },
    { id: 'p6', categoryId: '6', imageUrl: '/images/portfolio/sticker-1.png', title: 'Product Labels — Fresh Foods Ltd', description: 'Custom die-cut labels for food packaging' },
    { id: 'p7', categoryId: '8', imageUrl: '/images/portfolio/packaging-1.png', title: 'Premium Product Boxes — Glow Cosmetics', description: 'Custom gold-foil embossed packaging boxes' },
    { id: 'p8', categoryId: '5', imageUrl: '/images/portfolio/brochure-1.png', title: 'Real Estate Brochures — Urban Living', description: 'High-quality tri-fold brochures for new residential project' },
];

export const DEMO_POSTS = [
    {
        id: 'b1',
        title: '10 Creative Ways to Use Custom Printed Mugs',
        slug: '10-creative-ways-custom-mugs',
        excerpt: 'Discover how custom mugs can boost your brand visibility and make perfect gifts.',
        author: 'Prokash Ad Team',
        publishedAt: '2024-03-15',
        featuredImage: '/images/blog/mugs-blog.png',
        body: 'Custom printed mugs are one of the most versatile promotional products available. Whether for corporate giveaways, event merchandise, or personal gifts, a well-designed mug leaves a lasting impression.\n\n## 1. Corporate Welcome Kits\nInclude a branded mug in your new employee welcome box.\n\n## 2. Client Appreciation Gifts\nSend personalized mugs to your top clients.\n\n## 3. Event Merchandise\nOffer custom mugs at conferences and trade shows.\n\n## 4. Restaurant & Cafe Branding\nUse branded mugs to enhance your dining experience.\n\n## 5. Wedding Favors\nCreate personalized mugs as memorable wedding keepsakes.'
    },
    {
        id: 'b2',
        title: 'The Ultimate Guide to Choosing the Right Visiting Card',
        slug: 'guide-choosing-right-visiting-card',
        excerpt: 'Your visiting card is your first impression. Learn how to choose the perfect one for your brand.',
        author: 'Prokash Ad Team',
        publishedAt: '2024-03-20',
        featuredImage: '/images/blog/cards-blog.png',
        body: 'A visiting card speaks volumes about your brand before you even say a word.\n\n## Material Matters\nChoose from standard, premium, or specialty materials.\n\n## Finish Options\n- Matte: Elegant and understated\n- Glossy: Vibrant and eye-catching\n- Spot UV: Premium with selective shine\n- Embossed: Tactile and luxurious\n\n## Design Tips\n1. Keep it clean and uncluttered\n2. Use your brand colors consistently\n3. Include essential contact information only\n4. Consider QR codes for digital connectivity'
    },
];

export const DEMO_TESTIMONIALS = [
    { id: 't1', clientName: 'Rafiq Ahmed', businessName: 'Ahmed Traders', reviewText: 'Prokash Ad delivered 500 custom mugs for our corporate event in just 3 days. The print quality was outstanding.', rating: 5 },
    { id: 't2', clientName: 'Nasreen Begum', businessName: 'Fashionista Boutique', reviewText: 'We ordered custom T-shirts and shopping bags for our boutique launch. The attention to detail was impressive.', rating: 5 },
];

export const DEMO_JOBS = [
    { id: 'j1', title: 'Graphic Designer', department: 'Design', location: 'Chittagong Office', summary: 'We are looking for a creative graphic designer to join our team. Must be proficient in Adobe Creative Suite and have experience in print design. 2+ years experience preferred.', deadline: '2024-06-30', status: 'active' },
    { id: 'j2', title: 'Sales Executive', department: 'Sales', location: 'Chittagong Office', summary: 'Seeking an energetic sales executive to grow our B2B client base. Experience in printing/branding industry preferred. Excellent communication skills required.', deadline: '2024-06-30', status: 'active' },
];

export const DEMO_PRICING = [
    {
        categoryId: '1', // Mugs
        tiers: [
            { id: 't1', label: 'Standard 11oz Mug', quantityRange: '12 - 49 pcs', pricePerUnit: 250, notes: 'Single side print' },
            { id: 't2', label: 'Standard 11oz Mug', quantityRange: '50 - 199 pcs', pricePerUnit: 180, notes: 'Best value' },
            { id: 't3', label: 'Standard 11oz Mug', quantityRange: '200+ pcs', pricePerUnit: 150, notes: 'Bulk rate' },
        ]
    },
    {
        categoryId: '2', // Apparel
        tiers: [
            { id: 't4', label: 'Round Neck T-Shirt', quantityRange: '10 - 49 pcs', pricePerUnit: 400, notes: 'Sublimation' },
            { id: 't5', label: 'Round Neck T-Shirt', quantityRange: '50 - 99 pcs', pricePerUnit: 350, notes: 'Sublimation' },
            { id: 't6', label: 'Round Neck T-Shirt', quantityRange: '100+ pcs', pricePerUnit: 300, notes: 'Sublimation' },
        ]
    },
    {
        categoryId: '3', // Banners
        tiers: [
            { id: 't7', label: 'Flex Banner', quantityRange: 'Up to 50 sqft', pricePerUnit: 18, notes: 'Per sqft' },
            { id: 't8', label: 'Flex Banner', quantityRange: '51 - 200 sqft', pricePerUnit: 15, notes: 'Per sqft' },
            { id: 't9', label: 'Flex Banner', quantityRange: '200+ sqft', pricePerUnit: 12, notes: 'Per sqft' },
        ]
    },
    {
        categoryId: '4', // Visiting Cards
        tiers: [
            { id: 't10', label: 'Standard Card', quantityRange: '100 - 400 pcs', pricePerUnit: 2.0, notes: 'Matte/Glossy' },
            { id: 't11', label: 'Standard Card', quantityRange: '500 - 900 pcs', pricePerUnit: 1.5, notes: 'Matte/Glossy' },
            { id: 't12', label: 'Standard Card', quantityRange: '1000+ pcs', pricePerUnit: 1.2, notes: 'Matte/Glossy' },
        ]
    }
];

export const DEMO_SETTINGS = {
    whatsapp_number: '8801974330594',
    business_email: 'info@impressad.com',
    business_address: 'Wireless Moor, Chittagong, Bangladesh',
    whatsapp_link: 'https://wa.me/8801974330594?text=Hello%20Impress%20Ad,%20I%20am%20interested%20in%20your%20printing%20services.',
};

export const DEMO_LEADS = [
    { id: 'l1', type: 'quote', fullName: 'John Doe', businessName: 'John Co', phone: '0123456789', email: 'john@example.com', subject: 'Custom Mugs', message: 'I need 100 mugs', productCategory: 'Mugs & Drinkware', product: 'Standard 11oz Ceramic Mug', quantity: 100, designReady: 'yes', status: 'new', createdAt: '2024-03-31T10:00:00Z' },
    { id: 'l2', type: 'contact', fullName: 'Jane Smith', businessName: null, phone: '0987654321', email: 'jane@example.com', subject: 'General Inquiry', message: 'Hello, do you do ship to Dhaka?', productCategory: null, product: null, quantity: null, designReady: null, status: 'in-progress', createdAt: '2024-03-31T12:00:00Z' },
];
