/* ============================================
   LUMIÈRE - LUXURY LIFESTYLE
   Phase 3: JavaScript + GSAP Complete
   All Functionality & Animations
   ============================================ */

// ===== DATA & TRANSLATIONS =====
const translations = {
    ar: {
        nav_home: 'الرئيسية',
        nav_products: 'المنتجات',
        nav_about: 'من نحن',
        nav_contact: 'تواصل',
        hero_badge: 'فخامة لا تُضاهى',
        hero_subtitle: 'حيث تلتقي أناقة البحر الأبيض المتوسط بروح الجمال الطبيعي',
        hero_cta_primary: 'اكتشف المنتجات',
        hero_cta_secondary: 'تعرف علينا',
        feature_1_title: 'توصيل سريع',
        feature_1_desc: 'نوصلك منتجاتك في أقل من 48 ساعة',
        feature_2_title: 'جودة ممتازة',
        feature_2_desc: 'منتجات مختارة بعناية فائقة',
        feature_3_title: 'دفع آمن',
        feature_3_desc: 'حماية كاملة لبياناتك البنكية',
        feature_4_title: 'استرجاع سهل',
        feature_4_desc: '30 يوم ضمان استرجاع كامل',
        products_label: 'تشكيلتنا',
        products_title: 'منتجاتنا المميزة',
        products_desc: 'اختر من مجموعتنا الفاخرة من منتجات العناية والأزياء',
        tab_all: 'الكل',
        tab_skincare: 'عناية بالبشرة',
        tab_clothing: 'أزياء',
        tab_accessories: 'إكسسوارات',
        tab_new: 'وصل حديثاً',
        badge_new: 'جديد',
        badge_bestseller: 'الأكثر مبيعاً',
        badge_limited: 'كمية محدودة',
        btn_add: 'أضف للسلة',
        product_1_name: 'Bergamot Velvet Serum',
        product_1_desc: 'A rare, lightweight golden oil providing high-speed hydration and absolute defense.',
        product_2_name: 'Olive Leaf Luxury Elixir',
        product_2_desc: 'Premium extract harvested from ancient Tuscan groves for timeless radiance.',
        product_3_name: 'Damask Rose Night Cream',
        product_3_desc: 'Rich overnight repair with Bulgarian rose essence and shea butter.',
        product_4_name: 'Manuka Honey Glow Mask',
        product_4_desc: 'Deep cleansing mask with New Zealand Manuka honey and kaolin clay.',
        product_5_name: 'Amalfi Linen Shirt',
        product_5_desc: 'Breathable Italian linen with mother-of-pearl buttons, perfect for summer evenings.',
        product_6_name: 'Parisian Silk Midi Dress',
        product_6_desc: 'Flowing French silk with delicate pleating and hidden side zipper.',
        product_7_name: 'Madrid Leather Jacket',
        product_7_desc: 'Handcrafted Spanish leather with vintage brass hardware and quilted lining.',
        product_8_name: 'Alpine Cashmere Sweater',
        product_8_desc: 'Ultra-soft Mongolian cashmere with ribbed cuffs and crew neckline.',
        product_9_name: 'Swiss Gold Chronograph',
        product_9_desc: '18K gold-plated Swiss movement with sapphire crystal and leather strap.',
        product_10_name: 'Tuscan Leather Tote',
        product_10_desc: 'Hand-stitched Italian leather with gold-tone hardware and silk lining.',
        product_11_name: 'Riviera Polarized Shades',
        product_11_desc: 'Italian acetate frames with UV400 polarized lenses and gold hinges.',
        product_12_name: 'Silk Medici Scarf',
        product_12_desc: 'Hand-printed Florentine silk with Renaissance-inspired botanical motifs.',
        about_label: 'قصتنا',
        about_title: 'حيث يلتقي الجمال بالأصالة',
        about_p1: 'Lumiere ولد من حلم بسيط: جمع أرقى ما تقدمه شواطئ البحر الأبيض المتوسط في مكان واحد. من عبق الأرغان المغربي إلى أناقة الكتان الإيطالي، نختار كل منتج بعناية فائقة.',
        about_p2: 'نؤمن بأن الفخامة الحقيقية تكمن في البساطة والجودة. كل منتج في تشكيلتنا يحمل قصة من الأرض التي نشأ منها، ويداعب حواسك بأصالة لا تُضاهى.',
        stat_customers: 'عميل سعيد',
        stat_products: 'منتج فاخر',
        stat_countries: 'دول أوروبية',
        testimonials_label: 'آراء العملاء',
        testimonials_title: 'ماذا يقولون عنا',
        testimonial_1: '"أفضل منتجات جربتها في حياتي! السيروم الذهبي غيّر بشرتي تماماً. شكراً Lumiere!"',
        testimonial_2: '"الحقيبة الإيطالية روعة! جودة الجلد لا تصدق. سأشتري من هنا دائماً."',
        testimonial_3: '"توصيل سريع وخدمة ممتازة. الفستان الحريري فرنسي فخامة بمعنى الكلمة!"',
        contact_label: 'تواصل معنا',
        contact_title: 'نحن هنا لمساعدتك',
        contact_desc: 'هل لديك سؤال؟ فريقنا جاهز للإجابة على استفساراتك في أي وقت.',
        contact_address: 'الجزائر العاصمة، الجزائر',
        form_name: 'الاسم الكامل',
        form_lastname: 'اللقب',
        form_email: 'البريد الإلكتروني',
        form_phone: 'رقم الهاتف',
        form_address: 'العنوان',
        form_message: 'رسالتك',
        form_submit: 'إرسال الرسالة',
        cart_title: 'سلة المشتريات',
        cart_empty: 'سلتك فارغة',
        cart_subtotal: 'المجموع الفرعي',
        cart_total: 'الإجمالي',
        cart_checkout: 'إتمام الطلب',
        checkout_title: 'إتمام الطلب',
        checkout_total: 'الإجمالي:',
        checkout_confirm: 'تأكيد الطلب',
        thank_title: 'شكراً لثقتك بنا!',
        thank_text: 'تم استلام طلبك بنجاح. سنتواصل معك قريباً لتأكيد التفاصيل.',
        footer_desc: 'وجهتك الأولى للفخامة الأوروبية الأصيلة. نجمع بين أرقى التقاليد وجمال البحر الأبيض المتوسط.',
        footer_quick: 'روابط سريعة',
        footer_categories: 'التصنيفات',
        footer_newsletter: 'اشترك معنا',
        footer_newsletter_desc: 'احصل على أحدث العروض والمنتجات الجديدة',
        footer_made: 'صُنع بكل حب من طرف',
        footer_price: 'قيمة هذا الموقع: $1,000',
        footer_rights: 'جميع الحقوق محفوظة.',
        placeholder_email: 'بريدك الإلكتروني'
    },
    en: {
        nav_home: 'Home',
        nav_products: 'Products',
        nav_about: 'About',
        nav_contact: 'Contact',
        hero_badge: 'Unmatched Luxury',
        hero_subtitle: 'Where Mediterranean elegance meets natural beauty',
        hero_cta_primary: 'Discover Products',
        hero_cta_secondary: 'About Us',
        feature_1_title: 'Fast Delivery',
        feature_1_desc: 'Get your products in less than 48 hours',
        feature_2_title: 'Excellent Quality',
        feature_2_desc: 'Products selected with extreme care',
        feature_3_title: 'Secure Payment',
        feature_3_desc: 'Complete protection for your banking data',
        feature_4_title: 'Easy Returns',
        feature_4_desc: '30-day full refund guarantee',
        products_label: 'Our Collection',
        products_title: 'Our Featured Products',
        products_desc: 'Choose from our luxury collection of skincare and fashion',
        tab_all: 'All',
        tab_skincare: 'Skincare',
        tab_clothing: 'Clothing',
        tab_accessories: 'Accessories',
        tab_new: 'New Arrivals',
        badge_new: 'New',
        badge_bestseller: 'Bestseller',
        badge_limited: 'Limited',
        btn_add: 'Add to Cart',
        product_1_name: 'Bergamot Velvet Serum',
        product_1_desc: 'A rare, lightweight golden oil providing high-speed hydration and absolute defense.',
        product_2_name: 'Olive Leaf Luxury Elixir',
        product_2_desc: 'Premium extract harvested from ancient Tuscan groves for timeless radiance.',
        product_3_name: 'Damask Rose Night Cream',
        product_3_desc: 'Rich overnight repair with Bulgarian rose essence and shea butter.',
        product_4_name: 'Manuka Honey Glow Mask',
        product_4_desc: 'Deep cleansing mask with New Zealand Manuka honey and kaolin clay.',
        product_5_name: 'Amalfi Linen Shirt',
        product_5_desc: 'Breathable Italian linen with mother-of-pearl buttons, perfect for summer evenings.',
        product_6_name: 'Parisian Silk Midi Dress',
        product_6_desc: 'Flowing French silk with delicate pleating and hidden side zipper.',
        product_7_name: 'Madrid Leather Jacket',
        product_7_desc: 'Handcrafted Spanish leather with vintage brass hardware and quilted lining.',
        product_8_name: 'Alpine Cashmere Sweater',
        product_8_desc: 'Ultra-soft Mongolian cashmere with ribbed cuffs and crew neckline.',
        product_9_name: 'Swiss Gold Chronograph',
        product_9_desc: '18K gold-plated Swiss movement with sapphire crystal and leather strap.',
        product_10_name: 'Tuscan Leather Tote',
        product_10_desc: 'Hand-stitched Italian leather with gold-tone hardware and silk lining.',
        product_11_name: 'Riviera Polarized Shades',
        product_11_desc: 'Italian acetate frames with UV400 polarized lenses and gold hinges.',
        product_12_name: 'Silk Medici Scarf',
        product_12_desc: 'Hand-printed Florentine silk with Renaissance-inspired botanical motifs.',
        about_label: 'Our Story',
        about_title: 'Where Beauty Meets Authenticity',
        about_p1: 'Lumiere was born from a simple dream: to gather the finest Mediterranean treasures in one place. From the scent of Moroccan argan to the elegance of Italian linen, we select every product with extreme care.',
        about_p2: 'We believe true luxury lies in simplicity and quality. Every product in our collection carries a story from the land it came from, caressing your senses with unmatched authenticity.',
        stat_customers: 'Happy Customers',
        stat_products: 'Luxury Products',
        stat_countries: 'European Countries',
        testimonials_label: 'Customer Reviews',
        testimonials_title: 'What They Say About Us',
        testimonial_1: '"The best products I\'ve ever tried! The golden serum completely changed my skin. Thank you Lumiere!"',
        testimonial_2: '"The Italian bag is amazing! The leather quality is unbelievable. I\'ll always shop here."',
        testimonial_3: '"Fast delivery and excellent service. The French silk dress is true luxury in every sense!"',
        contact_label: 'Contact Us',
        contact_title: 'We\'re Here to Help',
        contact_desc: 'Have a question? Our team is ready to answer your inquiries at any time.',
        contact_address: 'Algiers, Algeria',
        form_name: 'Full Name',
        form_lastname: 'Last Name',
        form_email: 'Email Address',
        form_phone: 'Phone Number',
        form_address: 'Address',
        form_message: 'Your Message',
        form_submit: 'Send Message',
        cart_title: 'Shopping Cart',
        cart_empty: 'Your cart is empty',
        cart_subtotal: 'Subtotal',
        cart_total: 'Total',
        cart_checkout: 'Checkout',
        checkout_title: 'Complete Order',
        checkout_total: 'Total:',
        checkout_confirm: 'Confirm Order',
        thank_title: 'Thank You for Your Trust!',
        thank_text: 'Your order has been received successfully. We will contact you soon to confirm details.',
        footer_desc: 'Your premier destination for authentic European luxury. We combine the finest traditions with Mediterranean beauty.',
        footer_quick: 'Quick Links',
        footer_categories: 'Categories',
        footer_newsletter: 'Subscribe',
        footer_newsletter_desc: 'Get the latest offers and new products',
        footer_made: 'Made with love by',
        footer_price: 'Website value: $1,000',
        footer_rights: 'All rights reserved.',
        placeholder_email: 'Your email address'
    },
    fr: {
        nav_home: 'Accueil',
        nav_products: 'Produits',
        nav_about: 'À propos',
        nav_contact: 'Contact',
        hero_badge: 'Luxure Inégalée',
        hero_subtitle: 'Où l\'élégance méditerranéenne rencontre la beauté naturelle',
        hero_cta_primary: 'Découvrir les Produits',
        hero_cta_secondary: 'À Propos de Nous',
        feature_1_title: 'Livraison Rapide',
        feature_1_desc: 'Recevez vos produits en moins de 48 heures',
        feature_2_title: 'Excellente Qualité',
        feature_2_desc: 'Produits sélectionnés avec un soin extrême',
        feature_3_title: 'Paiement Sécurisé',
        feature_3_desc: 'Protection complète de vos données bancaires',
        feature_4_title: 'Retours Faciles',
        feature_4_desc: 'Garantie de remboursement de 30 jours',
        products_label: 'Notre Collection',
        products_title: 'Nos Produits Vedettes',
        products_desc: 'Choisissez parmi notre collection de luxe de soins et de mode',
        tab_all: 'Tout',
        tab_skincare: 'Soins de la Peau',
        tab_clothing: 'Vêtements',
        tab_accessories: 'Accessoires',
        tab_new: 'Nouveautés',
        badge_new: 'Nouveau',
        badge_bestseller: 'Best-seller',
        badge_limited: 'Limité',
        btn_add: 'Ajouter au Panier',
        product_1_name: 'Sérum Velours Bergamote',
        product_1_desc: 'Une huile dorée rare et légère offrant une hydratation rapide et une défense absolue.',
        product_2_name: 'Élixir Luxe Feuille d\'Olivier',
        product_2_desc: 'Extrait premium récolté dans d\'anciennes oliveraies toscanes pour un éclat intemporel.',
        product_3_name: 'Crème de Nuit Rose de Damas',
        product_3_desc: 'Réparation riche pendant la nuit avec essence de rose bulgare et beurre de karité.',
        product_4_name: 'Masque Éclat Miel de Manuka',
        product_4_desc: 'Masque nettoyant en profondeur avec miel de Manuka de Nouvelle-Zélande et argile kaolin.',
        product_5_name: 'Chemise en Lin d\'Amalfi',
        product_5_desc: 'Lin italien respirant avec boutons en nacre, parfait pour les soirées d\'été.',
        product_6_name: 'Robe Midi en Soie Parisienne',
        product_6_desc: 'Soie française fluide avec plis délicats et fermeture éclair latérale dissimulée.',
        product_7_name: 'Veste en Cuir de Madrid',
        product_7_desc: 'Cuir espagnol artisanal avec quincaillerie vintage en laiton et doublure matelassée.',
        product_8_name: 'Pull en Cachemire Alpin',
        product_8_desc: 'Cachemire mongol ultra-doux avec poignets côtelés et col rond.',
        product_9_name: 'Chronographe Suisse en Or',
        product_9_desc: 'Mouvement suisse plaqué or 18K avec cristal de saphir et bracelet en cuir.',
        product_10_name: 'Sac Fourre-tout Toscan',
        product_10_desc: 'Cuir italien cousu main avec quincaillerie dorée et doublure en soie.',
        product_11_name: 'Lunettes Polarisées Riviera',
        product_11_desc: 'Montures en acétate italien avec verres polarisés UV400 et charnières dorées.',
        product_12_name: 'Foulard en Soie Medici',
        product_12_desc: 'Soie florentine imprimée à la main avec motifs botaniques inspirés de la Renaissance.',
        about_label: 'Notre Histoire',
        about_title: 'Où la Beauté Rencontre l\'Authenticité',
        about_p1: 'Lumiere est né d\'un rêve simple : rassembler les plus beaux trésors méditerranéens en un seul endroit. Du parfum de l\'argan marocain à l\'élégance du lin italien, nous sélectionnons chaque produit avec un soin extrême.',
        about_p2: 'Nous croyons que le vrai luxe réside dans la simplicité et la qualité. Chaque produit de notre collection porte une histoire de la terre dont il provient, caressant vos sens avec une authenticité inégalée.',
        stat_customers: 'Clients Satisfaits',
        stat_products: 'Produits de Luxe',
        stat_countries: 'Pays Européens',
        testimonials_label: 'Avis des Clients',
        testimonials_title: 'Ce Qu\'ils Disent de Nous',
        testimonial_1: '"Les meilleurs produits que j\'ai jamais essayés ! Le sérum doré a complètement changé ma peau. Merci Lumiere !"',
        testimonial_2: '"Le sac italien est incroyable ! La qualité du cuir est inimaginable. Je ferai toujours mes achats ici."',
        testimonial_3: '"Livraison rapide et service excellent. La robe en soie française est un vrai luxe dans tous les sens !"',
        contact_label: 'Contactez-nous',
        contact_title: 'Nous Sommes Là pour Vous Aider',
        contact_desc: 'Vous avez une question ? Notre équipe est prête à répondre à vos demandes à tout moment.',
        contact_address: 'Alger, Algérie',
        form_name: 'Nom Complet',
        form_lastname: 'Nom de Famille',
        form_email: 'Adresse Email',
        form_phone: 'Numéro de Téléphone',
        form_address: 'Adresse',
        form_message: 'Votre Message',
        form_submit: 'Envoyer le Message',
        cart_title: 'Panier d\'Achat',
        cart_empty: 'Votre panier est vide',
        cart_subtotal: 'Sous-total',
        cart_total: 'Total',
        cart_checkout: 'Commander',
        checkout_title: 'Finaliser la Commande',
        checkout_total: 'Total :',
        checkout_confirm: 'Confirmer la Commande',
        thank_title: 'Merci pour Votre Confiance !',
        thank_text: 'Votre commande a été reçue avec succès. Nous vous contacterons bientôt pour confirmer les détails.',
        footer_desc: 'Votre destination première pour le luxe européen authentique. Nous combinons les plus belles traditions avec la beauté méditerranéenne.',
        footer_quick: 'Liens Rapides',
        footer_categories: 'Catégories',
        footer_newsletter: 'Abonnez-vous',
        footer_newsletter_desc: 'Recevez les dernières offres et nouveaux produits',
        footer_made: 'Fabriqué avec amour par',
        footer_price: 'Valeur du site : 1 000 $',
        footer_rights: 'Tous droits réservés.',
        placeholder_email: 'Votre adresse email'
    },
    it: {
        nav_home: 'Home',
        nav_products: 'Prodotti',
        nav_about: 'Chi Siamo',
        nav_contact: 'Contatto',
        hero_badge: 'Lusso Senza Pari',
        hero_subtitle: 'Dove l\'eleganza mediterranea incontra la bellezza naturale',
        hero_cta_primary: 'Scopri i Prodotti',
        hero_cta_secondary: 'Chi Siamo',
        feature_1_title: 'Consegna Veloce',
        feature_1_desc: 'Ricevi i tuoi prodotti in meno di 48 ore',
        feature_2_title: 'Qualità Eccellente',
        feature_2_desc: 'Prodotti selezionati con estrema cura',
        feature_3_title: 'Pagamento Sicuro',
        feature_3_desc: 'Protezione completa per i tuoi dati bancari',
        feature_4_title: 'Resi Facili',
        feature_4_desc: 'Garanzia di rimborso completo di 30 giorni',
        products_label: 'La Nostra Collezione',
        products_title: 'I Nostri Prodotti in Evidenza',
        products_desc: 'Scegli dalla nostra collezione di lusso di skincare e moda',
        tab_all: 'Tutti',
        tab_skincare: 'Skincare',
        tab_clothing: 'Abbigliamento',
        tab_accessories: 'Accessori',
        tab_new: 'Nuovi Arrivi',
        badge_new: 'Nuovo',
        badge_bestseller: 'Best-seller',
        badge_limited: 'Limitato',
        btn_add: 'Aggiungi al Carrello',
        product_1_name: 'Siero Velluto Bergamotto',
        product_1_desc: 'Un raro olio dorato leggero che offre idratazione ad alta velocità e difesa assoluta.',
        product_2_name: 'Elisir Lusso Foglia d\'Oliva',
        product_2_desc: 'Estratto premium raccolto da antiche olivete toscane per una radiosità senza tempo.',
        product_3_name: 'Crema Notte Rosa di Damasco',
        product_3_desc: 'Ricca riparazione notturna con essenza di rosa bulgara e burro di karité.',
        product_4_name: 'Maschera Luce Miele Manuka',
        product_4_desc: 'Maschera detergente profonda con miele di Manuka della Nuova Zelanda e argilla kaolin.',
        product_5_name: 'Camicia in Lino di Amalfi',
        product_5_desc: 'Lino italiano traspirante con bottoni in madreperla, perfetto per le serate estive.',
        product_6_name: 'Abito Midi in Seta Parigina',
        product_6_desc: 'Seta francese fluente con pieghe delicate e cerniera laterale nascosta.',
        product_7_name: 'Giacca in Pelle di Madrid',
        product_7_desc: 'Pelle spagnola artigianale con ferramenta vintage in ottone e fodera trapuntata.',
        product_8_name: 'Maglione in Cashmere Alpino',
        product_8_desc: 'Cashmere mongolo ultra-morbido con polsini a coste e scollo a giro.',
        product_9_name: 'Cronografo Svizzero in Oro',
        product_9_desc: 'Movimento svizzero placcato oro 18K con cristallo di zaffiro e cinturino in pelle.',
        product_10_name: 'Borsa Tote Toscana',
        product_10_desc: 'Pelle italiana cucita a mano con ferramenta dorata e fodera in seta.',
        product_11_name: 'Occhiali Polarizzati Riviera',
        product_11_desc: 'Montature in acetato italiano con lenti polarizzate UV400 e cerniere dorate.',
        product_12_name: 'Sciarpa in Seta Medici',
        product_12_desc: 'Seta fiorentina stampata a mano con motivi botanici ispirati al Rinascimento.',
        about_label: 'La Nostra Storia',
        about_title: 'Dove la Bellezza Incontra l\'Autenticità',
        about_p1: 'Lumiere è nato da un sogno semplice: raccogliere i più bei tesori mediterranei in un unico luogo. Dal profumo dell\'argan marocchino all\'eleganza del lino italiano, selezioniamo ogni prodotto con estrema cura.',
        about_p2: 'Crediamo che il vero lusso risieda nella semplicità e nella qualità. Ogni prodotto della nostra collezione porta una storia dalla terra da cui proviene, accarezzando i tuoi sensi con un\'autenticità senza pari.',
        stat_customers: 'Clienti Soddisfatti',
        stat_products: 'Prodotti di Lusso',
        stat_countries: 'Paesi Europei',
        testimonials_label: 'Recensioni dei Clienti',
        testimonials_title: 'Cosa Dicono di Noi',
        testimonial_1: '"I migliori prodotti che abbia mai provato! Il siero dorato ha completamente cambiato la mia pelle. Grazie Lumiere!"',
        testimonial_2: '"La borsa italiana è incredibile! La qualità della pelle è inimmaginabile. Farò sempre acquisti qui."',
        testimonial_3: '"Consegna veloce e servizio eccellente. L\'abito in seta francese è un vero lusso in ogni senso!"',
        contact_label: 'Contattaci',
        contact_title: 'Siamo Qui per Aiutarti',
        contact_desc: 'Hai una domanda? Il nostro team è pronto a rispondere alle tue richieste in qualsiasi momento.',
        contact_address: 'Algeri, Algeria',
        form_name: 'Nome Completo',
        form_lastname: 'Cognome',
        form_email: 'Indirizzo Email',
        form_phone: 'Numero di Telefono',
        form_address: 'Indirizzo',
        form_message: 'Il Tuo Messaggio',
        form_submit: 'Invia Messaggio',
        cart_title: 'Carrello della Spesa',
        cart_empty: 'Il tuo carrello è vuoto',
        cart_subtotal: 'Subtotale',
        cart_total: 'Totale',
        cart_checkout: 'Checkout',
        checkout_title: 'Completa l\'Ordine',
        checkout_total: 'Totale:',
        checkout_confirm: 'Conferma Ordine',
        thank_title: 'Grazie per la Tua Fiducia!',
        thank_text: 'Il tuo ordine è stato ricevuto con successo. Ti contatteremo presto per confermare i dettagli.',
        footer_desc: 'La tua destinazione principale per il lusso europeo autentico. Uniamo le migliori tradizioni con la bellezza mediterranea.',
        footer_quick: 'Link Rapidi',
        footer_categories: 'Categorie',
        footer_newsletter: 'Iscriviti',
        footer_newsletter_desc: 'Ottieni le ultime offerte e nuovi prodotti',
        footer_made: 'Realizzato con amore da',
        footer_price: 'Valore del sito: $1.000',
        footer_rights: 'Tutti i diritti riservati.',
        placeholder_email: 'Il tuo indirizzo email'
    }
};

// Product Data
const productsData = {
    1: { name: 'Bergamot Velvet Serum', price: 45, priceDZD: 6080, priceEUR: 42, category: 'skincare', bg: 'warm-beige' },
    2: { name: 'Olive Leaf Luxury Elixir', price: 68, priceDZD: 9180, priceEUR: 63, category: 'skincare', bg: 'warm-green' },
    3: { name: 'Damask Rose Night Cream', price: 55, priceDZD: 7430, priceEUR: 51, category: 'skincare', bg: 'warm-pink' },
    4: { name: 'Manuka Honey Glow Mask', price: 38, priceDZD: 5130, priceEUR: 35, category: 'skincare', bg: 'warm-amber' },
    5: { name: 'Amalfi Linen Shirt', price: 120, priceDZD: 16200, priceEUR: 110, category: 'clothing', bg: 'cool-blue' },
    6: { name: 'Parisian Silk Midi Dress', price: 250, priceDZD: 33750, priceEUR: 230, category: 'clothing', bg: 'cool-lavender' },
    7: { name: 'Madrid Leather Jacket', price: 350, priceDZD: 47250, priceEUR: 322, category: 'clothing', bg: 'cool-slate' },
    8: { name: 'Alpine Cashmere Sweater', price: 180, priceDZD: 24300, priceEUR: 165, category: 'clothing', bg: 'cool-cream' },
    9: { name: 'Swiss Gold Chronograph', price: 580, priceDZD: 78300, priceEUR: 533, category: 'accessories', bg: 'elegant-gold' },
    10: { name: 'Tuscan Leather Tote', price: 420, priceDZD: 56700, priceEUR: 386, category: 'accessories', bg: 'elegant-taupe' },
    11: { name: 'Riviera Polarized Shades', price: 195, priceDZD: 26330, priceEUR: 179, category: 'accessories', bg: 'elegant-black' },
    12: { name: 'Silk Medici Scarf', price: 145, priceDZD: 19580, priceEUR: 133, category: 'accessories', bg: 'elegant-terracotta' }
};

// Cart State
let cart = [];
let currentLang = 'ar';
let currentTheme = 'light';

// ===== DOM ELEMENTS =====
const elements = {
    themeToggle: document.getElementById('themeToggle'),
    langSwitcher: document.getElementById('langSwitcher'),
    mainNav: document.getElementById('mainNav'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileMenu: document.getElementById('mobileMenu'),
    cartBtn: document.getElementById('cartBtn'),
    cartSidebar: document.getElementById('cartSidebar'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartClose: document.getElementById('cartClose'),
    cartItems: document.getElementById('cartItems'),
    cartEmpty: document.getElementById('cartEmpty'),
    cartFooter: document.getElementById('cartFooter'),
    cartCount: document.getElementById('cartCount'),
    subtotalPrice: document.getElementById('subtotalPrice'),
    grandPrice: document.getElementById('grandPrice'),
    currencyDisplay: document.getElementById('currencyDisplay'),
    checkoutBtn: document.getElementById('checkoutBtn'),
    checkoutModal: document.getElementById('checkoutModal'),
    modalClose: document.getElementById('modalClose'),
    checkoutForm: document.getElementById('checkoutForm'),
    thankYouCard: document.getElementById('thankYouCard'),
    checkoutFormWrapper: document.getElementById('checkoutFormWrapper'),
    checkoutPrice: document.getElementById('checkoutPrice'),
    orderSummary: document.getElementById('orderSummary'),
    productsGrid: document.getElementById('productsGrid'),
    contactForm: document.getElementById('contactForm')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initCart();
    initNavigation();
    initProductTabs();
    initAnimations();
    initForms();
    initSmoothScroll();
});

// ===== THEME MANAGEMENT =====
function initTheme() {
    const savedTheme = localStorage.getItem('lumiere-theme') || 'light';
    setTheme(savedTheme);
    
    elements.themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('lumiere-theme', newTheme);
    });
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
}

// ===== LANGUAGE MANAGEMENT =====
function initLanguage() {
    const savedLang = localStorage.getItem('lumiere-lang') || 'ar';
    setLanguage(savedLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            localStorage.setItem('lumiere-lang', lang);
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Update HTML direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all elements with data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.textContent = t[key];
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-key-placeholder]').forEach(el => {
        const key = el.dataset.keyPlaceholder;
        if (t[key]) {
            el.placeholder = t[key];
        }
    });
}

// ===== NAVIGATION =====
function initNavigation() {
    // Scroll effect on navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            elements.mainNav.classList.add('scrolled');
        } else {
            elements.mainNav.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mobileMenu.classList.toggle('active');
        elements.mobileMenuBtn.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            elements.mobileMenu.classList.remove('active');
            elements.mobileMenuBtn.classList.remove('active');
        });
    });
}

// ===== CART FUNCTIONALITY =====
function initCart() {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('lumiere-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
    
    // Cart toggle
    elements.cartBtn.addEventListener('click', () => {
        elements.cartSidebar.classList.add('active');
        elements.cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    elements.cartClose.addEventListener('click', closeCart);
    elements.cartOverlay.addEventListener('click', closeCart);
    
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            addToCart(id);
            
            // Button animation
            btn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                btn.style.transform = 'scale(1.1) rotate(90deg)';
                setTimeout(() => {
                    btn.style.transform = '';
                }, 200);
            }, 100);
        });
    });
    
    // Checkout button
    elements.checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            closeCart();
            openCheckoutModal();
        }
    });
    
    // Modal close
    elements.modalClose.addEventListener('click', closeCheckoutModal);
    elements.checkoutModal.addEventListener('click', (e) => {
        if (e.target === elements.checkoutModal) {
            closeCheckoutModal();
        }
    });
    
    // Checkout form
    elements.checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        processCheckout();
    });
}

function addToCart(id) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const product = productsData[id];
        cart.push({
            id: id,
            quantity: 1,
            ...product
        });
    }
    
    saveCart();
    updateCartUI();
    
    // Show cart
    elements.cartSidebar.classList.add('active');
    elements.cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    updateCartUI();
}

function updateQuantity(id, delta) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function saveCart() {
    localStorage.setItem('lumiere-cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const subtotalDZD = cart.reduce((sum, item) => sum + (item.priceDZD * item.quantity), 0);
    const subtotalEUR = cart.reduce((sum, item) => sum + (item.priceEUR * item.quantity), 0);
    
    // Update cart count
    elements.cartCount.textContent = totalItems;
    elements.cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    
    // Show/hide empty state
    if (cart.length === 0) {
        elements.cartEmpty.style.display = 'flex';
        elements.cartItems.style.display = 'none';
        elements.cartFooter.style.display = 'none';
    } else {
        elements.cartEmpty.style.display = 'none';
        elements.cartItems.style.display = 'flex';
        elements.cartFooter.style.display = 'block';
        
        // Render cart items
        elements.cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-image ${item.bg}">
                    <svg viewBox="0 0 80 80" class="product-icon">
                        ${getProductSVG(item.id)}
                    </svg>
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} x ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Remove">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                </button>
            </div>
        `).join('');
        
        // Update totals
        elements.subtotalPrice.textContent = `$${subtotal.toFixed(2)}`;
        elements.grandPrice.textContent = `$${subtotal.toFixed(2)}`;
        
        elements.currencyDisplay.innerHTML = `
            <span class="currency-usd">$${subtotal.toFixed(2)}</span>
            <span class="currency-dzd">${subtotalDZD.toLocaleString()} د.ج</span>
            <span class="currency-eur">${subtotalEUR.toFixed(2)} €</span>
        `;
        
        elements.checkoutPrice.textContent = `$${subtotal.toFixed(2)}`;
    }
}

function getProductSVG(id) {
    // Return simplified SVG for cart items
    const svgs = {
        1: '<circle cx="35" cy="35" r="12" fill="#F5A623" opacity="0.9"/><circle cx="35" cy="35" r="8" fill="#F8D56B"/><ellipse cx="50" cy="48" rx="14" ry="10" fill="#F5A623" opacity="0.8"/>',
        2: '<path d="M40 65c0-15-10-25-10-35s10-15 10-15s10 5 10 15s-10 20-10 35z" fill="#7CB342" opacity="0.9"/><ellipse cx="40" cy="18" rx="6" ry="4" fill="#8BC34A"/>',
        3: '<circle cx="40" cy="35" r="15" fill="#E91E63" opacity="0.2"/><circle cx="40" cy="35" r="12" fill="#F48FB1" opacity="0.6"/><circle cx="40" cy="35" r="8" fill="#F8BBD0"/>',
        4: '<path d="M40 15c0 0-15 20-15 30a15 15 0 0 0 30 0c0-10-15-30-15-30z" fill="#FFC107" opacity="0.8"/>',
        5: '<path d="M25 20l15-8 15 8v50H25V20z" fill="#E3F2FD" stroke="#1976D2" stroke-width="2"/>',
        6: '<path d="M30 15c0 0 15 5 20 0s10 20 10 20l-5 40H25l-5-40s5-15 10-20z" fill="#F3E5F5" stroke="#7B1FA2" stroke-width="2"/>',
        7: '<path d="M20 15l10-5 20 0 10 5v55H20V15z" fill="#ECEFF1" stroke="#455A64" stroke-width="2"/>',
        8: '<path d="M20 20l10-5 20 0 10 5v50H20V20z" fill="#FFF3E0" stroke="#E65100" stroke-width="2"/>',
        9: '<circle cx="40" cy="40" r="22" fill="#FFD700" stroke="#FFA000" stroke-width="2"/><circle cx="40" cy="40" r="18" fill="#FFF8E1"/>',
        10: '<path d="M15 30c0-5 5-10 10-10h30c5 0 10 5 10 10v40H15V30z" fill="#D7CCC8" stroke="#5D4037" stroke-width="2"/>',
        11: '<path d="M10 35c0-5 5-8 10-8h12c5 0 8 3 8 8v8c0 8-6 14-14 14s-14-6-14-14v-8z" fill="#212121" stroke="#424242" stroke-width="2"/>',
        12: '<path d="M20 15c0 0 15 5 20 20s-5 25-5 25" stroke="#E64A19" stroke-width="8" fill="none" stroke-linecap="round"/>'
    };
    return svgs[id] || '';
}

function closeCart() {
    elements.cartSidebar.classList.remove('active');
    elements.cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== CHECKOUT MODAL =====
function openCheckoutModal() {
    elements.checkoutModal.classList.add('active');
    elements.thankYouCard.classList.remove('active');
    elements.checkoutFormWrapper.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    elements.checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
}

function processCheckout() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Hide form, show thank you
    elements.checkoutFormWrapper.style.display = 'none';
    elements.thankYouCard.classList.add('active');
    
    // Order summary
    elements.orderSummary.innerHTML = `
        <div class="order-total">
            <span>Total: $${subtotal.toFixed(2)}</span>
        </div>
    `;
    
    // Clear cart after delay
    setTimeout(() => {
        cart = [];
        saveCart();
        updateCartUI();
    }, 500);
}

// ===== PRODUCT TABS =====
function initProductTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active tab
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter products
            filterProducts(category);
        });
    });
}

function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach((card, index) => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            gsap.fromTo(card, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.4, delay: index * 0.05, ease: 'power2.out' }
            );
        } else {
            card.style.display = 'none';
        }
    });
}

// ===== GSAP ANIMATIONS =====
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero animations
    const heroTl = gsap.timeline();
    heroTl
        .from('.hero-badge', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' })
        .from('.hero-title', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' }, '-=0.5')
        .from('.hero-subtitle', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.6')
        .from('.hero-cta', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from('.scroll-indicator', { opacity: 0, duration: 1 }, '-=0.3');
    
    // Hero parallax on scroll
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        opacity: 0.3
    });
    
    // Features section
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // Products section
    gsap.from('.section-header', {
        scrollTrigger: {
            trigger: '.products',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.category-tabs', {
        scrollTrigger: {
            trigger: '.products',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out'
    });
    
    gsap.from('.product-card', {
        scrollTrigger: {
            trigger: '.products-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out'
    });
    
    // About section
    gsap.from('.about-visual', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -80,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 80,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.stat', {
        scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Testimonials section
    gsap.from('.testimonial-card', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
    
    // Contact section
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -60,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form-wrapper', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 60,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Footer
    gsap.from('.footer-grid > div', {
        scrollTrigger: {
            trigger: '.main-footer',
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out'
    });
    
    // 3D hover effect on product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                transformPerspective: 1000,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'power2.out'
            });
        });
    });
    
    // Floating animation for hero particles (enhanced)
    gsap.to('.hero-particles span', {
        y: 'random(-30, 30)',
        x: 'random(-20, 20)',
        scale: 'random(0.5, 1.5)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
            amount: 2,
            from: 'random'
        }
    });
}

// ===== FORMS =====
function initForms() {
    // Contact form
    elements.contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success animation
        const btn = elements.contactForm.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = currentLang === 'ar' ? 'تم الإرسال!' : currentLang === 'fr' ? 'Envoyé!' : currentLang === 'it' ? 'Inviato!' : 'Sent!';
        btn.style.background = '#4CAF50';
        
        gsap.fromTo(btn, 
            { scale: 1 },
            { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 }
        );
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            elements.contactForm.reset();
        }, 2000);
    });
    
    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.textContent = '✓';
        btn.style.background = '#4CAF50';
        
        setTimeout(() => {
            btn.textContent = '→';
            btn.style.background = '';
            e.target.reset();
        }, 2000);
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: target, offsetY: 80 },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString() + '+';
    }, 16);
}

// Trigger counter animation when stats are visible
ScrollTrigger.create({
    trigger: '.about-stats',
    start: 'top 85%',
    onEnter: () => {
        document.querySelectorAll('.stat-number').forEach(stat => {
            const text = stat.textContent;
            const num = parseInt(text.replace(/[^0-9]/g, ''));
            if (!isNaN(num)) {
                stat.textContent = '0';
                animateCounter(stat, num);
            }
        });
    },
    once: true
});

// ===== MAGNETIC BUTTON EFFECT =====
document.querySelectorAll('.btn-primary, .add-to-cart').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
            x: x * 0.2,
            y: y * 0.2,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});

// ===== TEXT SCRAMBLE EFFECT (Optional luxury touch) =====
class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }
    
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];
        
        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }
        
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    
    update() {
        let output = '';
        let complete = 0;
        
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="scramble-char">${char}</span>`;
            } else {
                output += from;
            }
        }
        
        this.el.innerHTML = output;
        
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

// Apply scramble effect to hero title on load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const fx = new TextScramble(heroTitle);
        fx.setText('Lumiere');
    }
});

// ===== CURSOR GLOW EFFECT =====
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
cursorGlow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(196, 149, 106, 0.08) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursorGlow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Hide cursor glow on mobile
if (window.matchMedia('(pointer: coarse)').matches) {
    cursorGlow.style.display = 'none';
}

// ===== PRELOADER (Optional) =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => preloader.remove()
        });
    }
});

// ===== PERFORMANCE: Debounce scroll events =====
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// ===== LAZY LOADING FOR IMAGES (if any) =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('%c Lumiere ', 'background: #C4956A; color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 10px;');
console.log('%c Luxury Lifestyle Website ', 'color: #C4956A; font-size: 14px;');
console.log('%c Created by Nadir Salaheddine ', 'color: #666; font-size: 12px;');
console.log('%c Value: $1,000 ', 'color: #D4AF37; font-size: 12px; font-weight: bold;');
