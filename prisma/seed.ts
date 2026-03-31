import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Seed Admin User
    const passwordHash = await bcrypt.hash('admin123', 12);
    await prisma.adminUser.upsert({
        where: { email: 'admin@impressad.com' },
        update: {},
        create: {
            name: 'Admin',
            email: 'admin@impressad.com',
            passwordHash,
            role: 'admin',
            status: 'active',
        },
    });
    console.log('✅ Admin user created');

    // Seed Categories
    const categories = [
        { name: 'Mugs & Drinkware', slug: 'mugs-drinkware', icon: '☕', imageUrl: '/images/categories/mugs-drinkware.png', description: 'Custom printed mugs, bottles, and cups', sortOrder: 1 },
        { name: 'Apparel & T-Shirts', slug: 'apparel-tshirts', icon: '👕', imageUrl: '/images/categories/apparel-tshirts.png', description: 'Printed and embroidered clothing', sortOrder: 2 },
        { name: 'Banners & Signage', slug: 'banners-signage', icon: '🏗️', imageUrl: '/images/categories/banners-signage.png', description: 'Flex banners, roll-up banners, standees', sortOrder: 3 },
        { name: 'Visiting Cards', slug: 'visiting-cards', icon: '💳', imageUrl: '/images/categories/visiting-cards.png', description: 'Standard, premium, and specialty cards', sortOrder: 4 },
        { name: 'Brochures & Flyers', slug: 'brochures-flyers', icon: '📄', imageUrl: '/images/categories/brochures-flyers.png', description: 'Folded and flat printed marketing materials', sortOrder: 5 },
        { name: 'Stickers & Labels', slug: 'stickers-labels', icon: '🏷️', imageUrl: '/images/categories/stickers-labels.png', description: 'Custom cut stickers, roll labels, transparent', sortOrder: 6 },
        { name: 'Corporate Gifts', slug: 'corporate-gifts', icon: '🎁', imageUrl: '/images/categories/corporate-gifts.png', description: 'Branded pens, notebooks, bags, and gift sets', sortOrder: 7 },
        { name: 'Packaging', slug: 'packaging', icon: '📦', imageUrl: '/images/categories/packaging.png', description: 'Custom boxes, bags, and branded packaging', sortOrder: 8 },
    ];

    for (const cat of categories) {
        await prisma.productCategory.upsert({
            where: { slug: cat.slug },
            update: { imageUrl: cat.imageUrl },
            create: cat,
        });
    }
    console.log('✅ Categories seeded');

    // Seed Products
    const allCategories = await prisma.productCategory.findMany();
    const catMap = Object.fromEntries(allCategories.map(c => [c.slug, c.id]));

    const products = [
        // Mugs & Drinkware
        { categoryId: catMap['mugs-drinkware'], name: 'Standard 11oz Ceramic Mug', slug: 'standard-11oz-mug', images: '/images/products/mug-standard.png', shortDescription: 'The classic 11oz white ceramic mug, perfect for corporate branding', moq: 12, startingPrice: 250, leadTime: '2-3 days' },
        { categoryId: catMap['mugs-drinkware'], name: 'Magic Mug (Heat Sensitive)', slug: 'magic-mug', images: '/images/products/mug-magic.png', shortDescription: 'Heat-sensitive mug that reveals your design when hot', moq: 6, startingPrice: 450, leadTime: '2-3 days' },
        { categoryId: catMap['mugs-drinkware'], name: 'Frosted Glass Mug', slug: 'frosted-glass-mug', images: '/images/products/mug-standard.png', shortDescription: 'Elegant frosted glass mug for a semi-transparent look', moq: 12, startingPrice: 350, leadTime: '3-5 days' },
        { categoryId: catMap['mugs-drinkware'], name: 'Travel Mug / Tumbler', slug: 'travel-mug-tumbler', images: '/images/products/mug-standard.png', shortDescription: 'Insulated travel mug for people on the go', moq: 10, startingPrice: 800, leadTime: '5-7 days' },
        { categoryId: catMap['mugs-drinkware'], name: 'Inner Color Mug', slug: 'inner-color-mug', images: '/images/products/mug-standard.png', shortDescription: 'Ceramic mug with vibrant colored interior and handle', moq: 12, startingPrice: 280, leadTime: '2-3 days' },

        // Apparel
        { categoryId: catMap['apparel-tshirts'], name: 'Round Neck T-Shirt (Sublimation)', slug: 'round-neck-tshirt-sublimation', images: '/images/products/tshirt-sublimation.png', shortDescription: 'Full-color sublimation printed round neck T-shirt', moq: 5, startingPrice: 400, leadTime: '5-7 days' },
        { categoryId: catMap['apparel-tshirts'], name: 'Round Neck T-Shirt (Screen Print)', slug: 'round-neck-tshirt-screen-print', images: '/images/products/tshirt-sublimation.png', shortDescription: 'Screen printed T-shirt for bulk orders', moq: 20, startingPrice: 300, leadTime: '5-7 days' },
        { categoryId: catMap['apparel-tshirts'], name: 'Polo Shirt', slug: 'polo-shirt', images: '/images/products/polo-shirts.png', shortDescription: 'Premium polo shirt with embroidered or printed logo', moq: 10, startingPrice: 600, leadTime: '7-10 days' },
        { categoryId: catMap['apparel-tshirts'], name: 'Hoodie & Jacket', slug: 'hoodie-jacket', images: '/images/products/polo-shirts.png', shortDescription: 'Custom printed or embroidered hoodies', moq: 10, startingPrice: 900, leadTime: '10-14 days' },
        { categoryId: catMap['apparel-tshirts'], name: 'Cap & Hat', slug: 'cap-hat', images: '/images/products/polo-shirts.png', shortDescription: 'Branded caps with embroidery or printing', moq: 20, startingPrice: 250, leadTime: '5-7 days' },

        // Banners & Signage
        { categoryId: catMap['banners-signage'], name: 'Flex Banner (Custom Size)', slug: 'flex-banner-custom', images: '/images/products/banner-flex.png', shortDescription: 'High-quality flex banner for outdoor/indoor use', moq: 1, startingPrice: 15, leadTime: '1-2 days' },
        { categoryId: catMap['banners-signage'], name: 'Roll-Up / Retractable Banner', slug: 'roll-up-retractable-banner', images: '/images/products/banner-rollup.png', shortDescription: 'Portable retractable banner stand with printed graphic', moq: 1, startingPrice: 2500, leadTime: '2-3 days' },
        { categoryId: catMap['banners-signage'], name: 'X-Banner & Y-Banner', slug: 'x-banner-y-banner', images: '/images/products/banner-rollup.png', shortDescription: 'Lightweight X or Y banner stand for events', moq: 1, startingPrice: 1500, leadTime: '2-3 days' },
        { categoryId: catMap['banners-signage'], name: 'Vinyl Sticker & Wall Graphics', slug: 'vinyl-wall-graphics', images: '/images/products/banner-flex.png', shortDescription: 'Custom vinyl for walls, windows, and surfaces', moq: 1, startingPrice: 20, leadTime: '2-3 days' },
        { categoryId: catMap['banners-signage'], name: 'Foam Board / Standee', slug: 'foam-board-standee', images: '/images/products/banner-flex.png', shortDescription: 'Rigid foam board cutouts and standees', moq: 1, startingPrice: 1000, leadTime: '3-5 days' },

        // Visiting Cards
        { categoryId: catMap['visiting-cards'], name: 'Standard Matte/Glossy Card', slug: 'standard-matte-glossy-card', images: '/images/products/cards-standard.png', shortDescription: 'Premium quality visiting cards with matte or glossy finish', moq: 100, startingPrice: 1.5, leadTime: '2-3 days' },
        { categoryId: catMap['visiting-cards'], name: 'Spot UV Cards', slug: 'spot-uv-cards', images: '/images/products/cards-spotuv.png', shortDescription: 'Elegant cards with selective UV coating highlights', moq: 100, startingPrice: 3, leadTime: '3-5 days' },
        { categoryId: catMap['visiting-cards'], name: 'Embossed & Foil Cards', slug: 'embossed-foil-cards', images: '/images/products/cards-foil.png', shortDescription: 'Luxury raised and metallic foil business cards', moq: 100, startingPrice: 5, leadTime: '5-7 days' },
        { categoryId: catMap['visiting-cards'], name: 'Transparent/Plastic Cards', slug: 'transparent-plastic-cards', images: '/images/products/cards-transparent.png', shortDescription: 'See-through clear PVC business cards', moq: 100, startingPrice: 8, leadTime: '5-7 days' },

        // Brochures & Flyers
        { categoryId: catMap['brochures-flyers'], name: 'A4/A5 Flyer', slug: 'a4-a5-flyer', images: '/images/products/flyers-standard.png', shortDescription: 'Full-color printed flyers for marketing', moq: 100, startingPrice: 3, leadTime: '2-3 days' },
        { categoryId: catMap['brochures-flyers'], name: 'Bi-Fold Brochure', slug: 'bi-fold-brochure', images: '/images/products/flyers-bifold.png', shortDescription: 'Double-fold brochure for professional presentation', moq: 100, startingPrice: 5, leadTime: '3-5 days' },
        { categoryId: catMap['brochures-flyers'], name: 'Tri-Fold Brochure', slug: 'tri-fold-brochure', images: '/images/products/flyers-trifold.png', shortDescription: 'Triple-fold brochure ideal for catalogs', moq: 100, startingPrice: 6, leadTime: '3-5 days' },
        { categoryId: catMap['brochures-flyers'], name: 'Booklet & Catalog', slug: 'booklet-catalog', images: '/images/products/flyers-booklet.png', shortDescription: 'Multi-page stapled or perfect-bound booklets', moq: 50, startingPrice: 25, leadTime: '5-7 days' },

        // Stickers & Labels
        { categoryId: catMap['stickers-labels'], name: 'Custom Shape Cut Sticker', slug: 'custom-shape-cut-sticker', images: '/images/products/stickers-diecut.png', shortDescription: 'Die-cut stickers in any custom shape', moq: 50, startingPrice: 2, leadTime: '2-3 days' },
        { categoryId: catMap['stickers-labels'], name: 'Roll Label', slug: 'roll-label', images: '/images/products/stickers-roll.png', shortDescription: 'Continuous roll labels for products and packaging', moq: 100, startingPrice: 1.5, leadTime: '3-5 days' },
        { categoryId: catMap['stickers-labels'], name: 'Transparent Sticker', slug: 'transparent-sticker', images: '/images/products/stickers-transparent.png', shortDescription: 'Clear see-through vinyl stickers', moq: 50, startingPrice: 3, leadTime: '2-3 days' },
        { categoryId: catMap['stickers-labels'], name: 'QR Code Sticker', slug: 'qr-code-sticker', images: '/images/products/stickers-qr.png', shortDescription: 'Custom stickers with integrated QR codes', moq: 100, startingPrice: 1, leadTime: '2-3 days' },

        // Corporate Gifts
        { categoryId: catMap['corporate-gifts'], name: 'Branded Pen & Diary Set', slug: 'branded-pen-diary-set', images: '/images/categories/corporate-gifts.png', shortDescription: 'Premium pen and diary combo with company branding', moq: 20, startingPrice: 400, leadTime: '5-7 days' },
        { categoryId: catMap['corporate-gifts'], name: 'Notebook & Planner', slug: 'notebook-planner', images: '/images/categories/corporate-gifts.png', shortDescription: 'Custom branded notebooks and planners', moq: 20, startingPrice: 300, leadTime: '5-7 days' },
        { categoryId: catMap['corporate-gifts'], name: 'Tote Bag & Backpack', slug: 'tote-bag-backpack', images: '/images/categories/corporate-gifts.png', shortDescription: 'Reusable bags with printed/embroidered logos', moq: 20, startingPrice: 250, leadTime: '7-10 days' },
        { categoryId: catMap['corporate-gifts'], name: 'Keychain & Lanyard', slug: 'keychain-lanyard', images: '/images/categories/corporate-gifts.png', shortDescription: 'Custom keychains and branded lanyards', moq: 50, startingPrice: 50, leadTime: '5-7 days' },
        { categoryId: catMap['corporate-gifts'], name: 'Gift Set', slug: 'gift-set', images: '/images/categories/corporate-gifts.png', shortDescription: 'Curated branded gift boxes for corporate clients', moq: 10, startingPrice: 1500, leadTime: '7-10 days' },

        // Packaging
        { categoryId: catMap['packaging'], name: 'Custom Printed Box', slug: 'custom-printed-box', images: '/images/categories/packaging.png', shortDescription: 'Branded packaging boxes for products', moq: 50, startingPrice: 30, leadTime: '7-10 days' },
        { categoryId: catMap['packaging'], name: 'Paper Bag with Logo', slug: 'paper-bag-logo', images: '/images/categories/packaging.png', shortDescription: 'Eco-friendly paper bags with your brand', moq: 50, startingPrice: 20, leadTime: '5-7 days' },
        { categoryId: catMap['packaging'], name: 'Tissue Paper Printing', slug: 'tissue-paper-printing', images: '/images/categories/packaging.png', shortDescription: 'Custom printed tissue paper for luxury packaging', moq: 100, startingPrice: 5, leadTime: '5-7 days' },
        { categoryId: catMap['packaging'], name: 'Product Label', slug: 'product-label', images: '/images/categories/packaging.png', shortDescription: 'Custom adhesive labels for product packaging', moq: 100, startingPrice: 2, leadTime: '3-5 days' },
    ];

    for (const product of products) {
        await prisma.product.upsert({
            where: { slug: product.slug },
            update: { images: product.images },
            create: product,
        });
    }
    console.log('✅ Products seeded');

    // Seed Testimonials
    const testimonials = [
        { clientName: 'Rafiq Ahmed', businessName: 'Ahmed Traders', reviewText: 'Impress Ad delivered 500 custom mugs for our corporate event in just 3 days. The print quality was outstanding and the colors were vibrant. Highly recommended!', rating: 5 },
        { clientName: 'Nasreen Begum', businessName: 'Fashionista Boutique', reviewText: 'We ordered custom T-shirts and shopping bags for our boutique launch. The attention to detail was impressive. Will definitely order again.', rating: 5 },
        { clientName: 'Mohammad Karim', businessName: 'Karim & Associates', reviewText: 'Our visiting cards from Impress Ad always impress our clients. The spot UV finish gives a very premium feel. Great pricing too!', rating: 5 },
        { clientName: 'Fatima Akter', businessName: 'Star Events', reviewText: 'We use Impress Ad for all our event banners and signage. Fast turnaround, excellent quality, and very reasonable pricing. 5 stars!', rating: 5 },
        { clientName: 'Shahidul Islam', businessName: 'TechStart BD', reviewText: 'The branded corporate gift sets we ordered for our partners were beautifully done. Professional packaging and high-quality items.', rating: 4 },
        { clientName: 'Ayesha Siddiqua', businessName: null, reviewText: 'I ordered a photo mug as a birthday gift and it turned out amazing! The colors were perfect and it was delivered the next day. Love it!', rating: 5 },
    ];

    for (const t of testimonials) {
        const existing = await prisma.testimonial.findFirst({ where: { clientName: t.clientName } });
        if (!existing) {
            await prisma.testimonial.create({ data: t });
        }
    }
    console.log('✅ Testimonials seeded');

    // Seed Pricing Tiers
    const pricingData = [
        {
            catSlug: 'mugs-drinkware', tiers: [
                { label: '11oz Ceramic Mug', quantityRange: '1-10', pricePerUnit: 250, notes: 'Sublimation print' },
                { label: '11oz Ceramic Mug', quantityRange: '11-50', pricePerUnit: 200, notes: 'Sublimation print' },
                { label: '11oz Ceramic Mug', quantityRange: '51-100+', pricePerUnit: 170, notes: 'Bulk discount' },
                { label: 'Magic Mug', quantityRange: '1-10', pricePerUnit: 450, notes: 'Color-changing' },
                { label: 'Magic Mug', quantityRange: '11-50', pricePerUnit: 380, notes: 'Color-changing' },
            ]
        },
        {
            catSlug: 'apparel-tshirts', tiers: [
                { label: 'Round Neck T-Shirt (Sublimation)', quantityRange: '5-20', pricePerUnit: 400, notes: 'Full-color print' },
                { label: 'Round Neck T-Shirt (Sublimation)', quantityRange: '21-50', pricePerUnit: 350, notes: 'Full-color print' },
                { label: 'Round Neck T-Shirt (Screen Print)', quantityRange: '20-50', pricePerUnit: 300, notes: 'Up to 3 colors' },
                { label: 'Round Neck T-Shirt (Screen Print)', quantityRange: '51-100+', pricePerUnit: 250, notes: 'Up to 3 colors' },
                { label: 'Polo Shirt', quantityRange: '10-50', pricePerUnit: 600, notes: 'Embroidered logo' },
            ]
        },
        {
            catSlug: 'visiting-cards', tiers: [
                { label: 'Standard Matte/Glossy', quantityRange: '100-500', pricePerUnit: 1.5, notes: 'Both sides full color' },
                { label: 'Standard Matte/Glossy', quantityRange: '500-1000', pricePerUnit: 1.2, notes: 'Both sides full color' },
                { label: 'Spot UV', quantityRange: '100-500', pricePerUnit: 3, notes: 'Selective UV coating' },
                { label: 'Embossed & Foil', quantityRange: '100-500', pricePerUnit: 5, notes: 'Gold/Silver foil' },
            ]
        },
        {
            catSlug: 'banners-signage', tiers: [
                { label: 'Flex Banner', quantityRange: 'Per sq ft', pricePerUnit: 15, notes: 'Outdoor quality' },
                { label: 'Roll-Up Banner (3x6 ft)', quantityRange: '1-5', pricePerUnit: 2500, notes: 'Includes stand' },
                { label: 'Roll-Up Banner (3x6 ft)', quantityRange: '6-10+', pricePerUnit: 2200, notes: 'Includes stand' },
                { label: 'X-Banner (2.5x6 ft)', quantityRange: '1-5', pricePerUnit: 1500, notes: 'Includes stand' },
            ]
        },
    ];

    for (const pd of pricingData) {
        const cat = allCategories.find(c => c.slug === pd.catSlug);
        if (cat) {
            for (const tier of pd.tiers) {
                const existing = await prisma.pricingTier.findFirst({
                    where: { productCategoryId: cat.id, label: tier.label, quantityRange: tier.quantityRange },
                });
                if (!existing) {
                    await prisma.pricingTier.create({
                        data: { ...tier, productCategoryId: cat.id },
                    });
                }
            }
        }
    }
    console.log('✅ Pricing tiers seeded');

    // Seed Portfolio Items
    const portfolioItems = [
        { categoryId: catMap['mugs-drinkware'], imageUrl: '/images/portfolio/mug-1.png', title: 'Corporate Mug Set — Ahmed Traders', description: '500 white ceramic mugs with full-color company logo' },
        { categoryId: catMap['apparel-tshirts'], imageUrl: '/images/portfolio/tshirt-1.png', title: 'Event T-Shirts — Star Events', description: 'Sublimation printed T-shirts for annual conference' },
        { categoryId: catMap['banners-signage'], imageUrl: '/images/portfolio/banner-1.png', title: 'Grand Opening Banner — Fashionista', description: '10x4 ft flex banner for boutique opening' },
        { categoryId: catMap['visiting-cards'], imageUrl: '/images/portfolio/card-1.png', title: 'Spot UV Business Cards — Karim & Associates', description: 'Premium spot UV visiting cards with gold accents' },
        { categoryId: catMap['corporate-gifts'], imageUrl: '/images/portfolio/gift-1.png', title: 'Corporate Gift Box — TechStart BD', description: 'Custom branded pen, diary, and mug gift set' },
        { categoryId: catMap['stickers-labels'], imageUrl: '/images/portfolio/sticker-1.png', title: 'Product Labels — Fresh Foods Ltd', description: 'Custom die-cut labels for food packaging' },
    ];

    for (const item of portfolioItems) {
        const existing = await prisma.portfolioItem.findFirst({ where: { title: item.title } });
        if (!existing) {
            await prisma.portfolioItem.create({ data: item });
        } else {
            await prisma.portfolioItem.update({ where: { id: existing.id }, data: { imageUrl: item.imageUrl } });
        }
    }
    console.log('✅ Portfolio items seeded');

    // Seed Blog Posts
    const posts = [
        { title: '10 Creative Ways to Use Custom Printed Mugs', slug: '10-creative-ways-custom-mugs', excerpt: 'Discover how custom mugs can boost your brand visibility and make perfect gifts.', body: 'Custom printed mugs are one of the most versatile promotional products available. Whether for corporate giveaways, event merchandise, or personal gifts, a well-designed mug leaves a lasting impression.\n\n## 1. Corporate Welcome Kits\nInclude a branded mug in your new employee welcome box.\n\n## 2. Client Appreciation Gifts\nSend personalized mugs to your top clients.\n\n## 3. Event Merchandise\nOffer custom mugs at conferences and trade shows.\n\n## 4. Restaurant & Cafe Branding\nUse branded mugs to enhance your dining experience.\n\n## 5. Wedding Favors\nCreate personalized mugs as memorable wedding keepsakes.', author: 'Impress Ad Team', status: 'published', publishedAt: new Date('2024-03-15'), featuredImage: '/images/blog/mugs-blog.png' },
        { title: 'The Ultimate Guide to Choosing the Right Visiting Card', slug: 'guide-choosing-right-visiting-card', excerpt: 'Your visiting card is your first impression. Learn how to choose the perfect one for your brand.', body: 'A visiting card speaks volumes about your brand before you even say a word.\n\n## Material Matters\nChoose from standard, premium, or specialty materials.\n\n## Finish Options\n- Matte: Elegant and understated\n- Glossy: Vibrant and eye-catching\n- Spot UV: Premium with selective shine\n- Embossed: Tactile and luxurious\n\n## Design Tips\n1. Keep it clean and uncluttered\n2. Use your brand colors consistently\n3. Include essential contact information only\n4. Consider QR codes for digital connectivity', author: 'Impress Ad Team', status: 'published', publishedAt: new Date('2024-03-20'), featuredImage: '/images/blog/cards-blog.png' },
    ];

    for (const post of posts) {
        await prisma.post.upsert({
            where: { slug: post.slug },
            update: { featuredImage: post.featuredImage },
            create: post,
        });
    }
    console.log('✅ Blog posts seeded');

    // Seed Jobs
    const jobs = [
        { title: 'Graphic Designer', department: 'Design', location: 'Chittagong Office', summary: 'We are looking for a creative graphic designer to join our team. Must be proficient in Adobe Creative Suite and have experience in print design. 2+ years experience preferred.', deadline: new Date('2024-06-30') },
        { title: 'Sales Executive', department: 'Sales', location: 'Chittagong Office', summary: 'Seeking an energetic sales executive to grow our B2B client base. Experience in printing/branding industry preferred. Excellent communication skills required.', deadline: new Date('2024-06-30') },
    ];

    for (const job of jobs) {
        const existing = await prisma.job.findFirst({ where: { title: job.title } });
        if (!existing) {
            await prisma.job.create({ data: job });
        }
    }
    console.log('✅ Jobs seeded');

    // Seed Settings
    const settings = [
        { key: 'whatsapp_number', value: '8801974330594' },
        { key: 'business_phone', value: '+880 1974-330594' },
        { key: 'business_email', value: 'info@impressad.com' },
        { key: 'business_address', value: 'Wireless Moor, Chittagong, Bangladesh' },
        { key: 'facebook_url', value: 'https://facebook.com/impressad' },
        { key: 'instagram_url', value: 'https://instagram.com/impressad' },
        { key: 'seo_title', value: 'Impress Ad — Printing, Branding & Promotional Products | Chittagong' },
        { key: 'seo_description', value: 'Chittagong\'s trusted printing & branding partner.' },
        { key: 'whatsapp_link', value: 'https://wa.me/8801974330594?text=Hello%20Impress%20Ad,%20I%20am%20interested%20in%20your%20printing%20services.' },
    ];

    for (const s of settings) {
        await prisma.settings.upsert({
            where: { key: s.key },
            update: { value: s.value },
            create: s,
        });
    }
    console.log('✅ Settings seeded');


    console.log('🎉 Seed complete!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
