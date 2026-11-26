
/* =========================================================
   AVENOR — COMPLETE SCRIPT.JS
   100 Clothing + 100 Accessories
========================================================= */

/* ---------- PRODUCT CATALOGUE ---------- */

const clothingProducts = [
    ["The Oxford White Shirt", 2499, "A refined everyday essential."],
    ["The Midnight Linen Shirt", 3299, "Lightweight linen with a relaxed fit."],
    ["The Heritage Polo", 2799, "A timeless polo with understated detailing."],
    ["The Riviera Knit Polo", 3499, "Soft knitted texture and a tailored silhouette."],
    ["The Monaco Tailored Trousers", 3999, "Clean lines and a sophisticated fit."],
    ["The Regent Pleated Trousers", 4299, "Classic pleats with modern proportions."],
    ["The Chelsea Chinos", 3199, "Versatile chinos for effortless styling."],
    ["The Savile Row Blazer", 8999, "Structured tailoring for elevated occasions."],
    ["The Windsor Double-Breasted Blazer", 10999, "A confident classic with refined details."],
    ["The Kensington Wool Coat", 12999, "A polished outer layer for cooler days."],
    ["The Heritage Cable Knit", 4999, "A textured knit inspired by classic style."],
    ["The Alpine Quarter-Zip", 4299, "A versatile layer with a clean finish."],
    ["The Milan Mock Neck", 3799, "Minimal design with a refined neckline."],
    ["The Portofino Resort Shirt", 2999, "An easygoing warm-weather essential."],
    ["The Oxford Blue Shirt", 2599, "A versatile shirt in a timeless shade."],
    ["The Sandstone Linen Shirt", 3299, "Breathable linen in a neutral tone."],
    ["The Black Signature Tee", 1499, "A premium everyday cotton tee."],
    ["The Ivory Essential Tee", 1499, "A minimalist wardrobe staple."],
    ["The Classic Crewneck Sweatshirt", 2999, "Comfortable layering with a clean profile."],
    ["The Varsity Weekend Jacket", 6999, "A contemporary take on collegiate style."],
    ["The Harrington Jacket", 7499, "A timeless transitional jacket."],
    ["The Suede Effect Overshirt", 5999, "A refined layer with a soft finish."],
    ["The Camel Travel Blazer", 8999, "Smart tailoring made for modern travel."],
    ["The Navy Club Blazer", 9499, "A classic blazer for formal and casual wear."],
    ["The Weekend Linen Shorts", 2199, "Relaxed tailoring for warmer days."],
    ["The Tailored Summer Shorts", 2499, "Clean-cut shorts with a polished finish."],
    ["The Riviera Drawstring Trousers", 3499, "Comfort meets understated elegance."],
    ["The Vintage Wash Denim", 3799, "Classic denim with a subtle vintage wash."],
    ["The Dark Indigo Jeans", 3999, "A versatile dark denim essential."],
    ["The Straight Fit Denim", 3699, "A timeless straight-leg silhouette."],
    ["The Heritage Track Jacket", 4499, "Sport-inspired style with refined details."],
    ["The Clubhouse Sweatpants", 2999, "Relaxed comfort with a tailored appearance."],
    ["The Merino Wool Cardigan", 5999, "A sophisticated layer in soft merino."],
    ["The Cashmere Blend Sweater", 7999, "A luxurious-feel knit for cooler days."],
    ["The Textured Cotton Sweater", 4299, "A versatile knit with subtle texture."],
    ["The Classic Rugby Shirt", 3299, "A heritage-inspired casual classic."],
    ["The Striped Breton Shirt", 2799, "An enduring striped design."],
    ["The Signature Linen Kurta", 2999, "A contemporary take on traditional dressing."],
    ["The Nehru Collar Shirt", 3199, "Minimal tailoring with a distinctive collar."],
    ["The Grandad Collar Shirt", 2699, "An understated alternative to the classic shirt."],
    ["The Formal Pinstripe Shirt", 2899, "Sharp stripes for a polished wardrobe."],
    ["The Evening Black Shirt", 2999, "A refined option for after-dark dressing."],
    ["The Textured Resort Shirt", 3199, "A relaxed statement for holidays."],
    ["The Forest Green Polo", 2799, "A versatile polo in a rich colour."],
    ["The Burgundy Knit Polo", 3499, "A distinctive knit for elevated casual looks."],
    ["The Stone Chino", 3199, "An easy-to-style neutral essential."],
    ["The Olive Tailored Trouser", 3799, "Modern tailoring in a versatile shade."],
    ["The Charcoal Formal Trouser", 3999, "A refined foundation for formal outfits."],
    ["The Cream Pleated Trouser", 4299, "A relaxed, sophisticated silhouette."],
    ["The Midnight Dinner Jacket", 11999, "A polished jacket for evening occasions."],
    ["The Classic Tuxedo Trouser", 5999, "Formal dressing with timeless proportions."],
    ["The Heritage Trench Coat", 13999, "A classic outerwear silhouette."],
    ["The City Mac Coat", 10999, "Minimal outerwear for everyday refinement."],
    ["The Quilted Country Jacket", 8499, "A countryside-inspired layering piece."],
    ["The Corduroy Overshirt", 4999, "Textured casualwear with heritage appeal."],
    ["The Herringbone Waistcoat", 4999, "A tailored finishing layer."],
    ["The Linen Blend Waistcoat", 4299, "Lightweight formal styling."],
    ["The Classic Henley", 1999, "A simple staple with a distinctive neckline."],
    ["The Long Sleeve Essential Tee", 1799, "A versatile everyday layer."],
    ["The Premium Pocket Tee", 1699, "A clean tee with subtle detailing."],
    ["The Graphic-Free Heavyweight Tee", 1999, "Premium cotton and a structured fit."],
    ["The Relaxed Camp Collar Shirt", 2899, "An easy silhouette for off-duty dressing."],
    ["The Micro-Check Shirt", 2799, "Subtle patterning for everyday refinement."],
    ["The Windowpane Check Shirt", 2999, "A classic check with modern styling."],
    ["The Heritage Flannel Shirt", 3299, "A soft layer for relaxed days."],
    ["The Brushed Cotton Shirt", 2999, "Comfortable cotton with a refined finish."],
    ["The Premium Denim Overshirt", 4999, "A versatile layer in durable denim."],
    ["The Suede Collar Jacket", 8999, "A smart jacket with heritage character."],
    ["The Minimal Bomber Jacket", 7499, "Clean styling for transitional weather."],
    ["The Flight-Inspired Jacket", 7999, "A modern classic with understated detailing."],
    ["The Textured Blouson", 6999, "A refined casual outer layer."],
    ["The Wool Blend Overshirt", 6499, "A smart layering option."],
    ["The Weekend Hoodie", 3299, "A comfortable essential with a clean look."],
    ["The Minimal Zip Hoodie", 3499, "An easy layer for everyday wear."],
    ["The Premium Jogger", 2799, "Comfortable styling with a neat silhouette."],
    ["The Travel Performance Trouser", 4499, "A versatile trouser for life on the move."],
    ["The Lightweight Summer Blazer", 7999, "Relaxed tailoring for warmer occasions."],
    ["The Linen Suit Jacket", 9999, "A breathable formal layer."],
    ["The Linen Suit Trouser", 5999, "A polished warm-weather essential."],
    ["The Classic Three-Piece Waistcoat", 5499, "Traditional tailoring with a modern fit."],
    ["The Signature Bandhgala", 10999, "Elegant formalwear with a distinctive profile."],
    ["The Modern Jodhpuri Jacket", 11999, "A contemporary heritage-inspired statement."],
    ["The Festive Textured Kurta", 3999, "Refined traditional styling."],
    ["The Minimal Cotton Kurta", 2499, "A versatile everyday kurta."],
    ["The Mandarin Collar Kurta", 2799, "A clean silhouette with subtle detail."],
    ["The Premium Chikankari Kurta", 4499, "Detailed craftsmanship and understated styling."],
    ["The Classic Nehru Jacket", 5999, "A versatile finishing layer."],
    ["The Textured Nehru Jacket", 6499, "A refined statement for special occasions."],
    ["The Summer Seersucker Shirt", 3299, "Light texture for warm-weather dressing."],
    ["The Gingham Weekend Shirt", 2799, "A timeless pattern for relaxed occasions."],
    ["The Heritage Polo Sweater", 3999, "A smart knit with a classic collar."],
    ["The Merino Zip Cardigan", 6499, "A refined layering essential."],
    ["The Ribbed Knit Turtleneck", 4499, "A sophisticated cold-weather staple."],
    ["The Classic Shawl Collar Knit", 4999, "A relaxed yet polished silhouette."],
    ["The Signature Avenor Overshirt", 5499, "A versatile layer from the AVENOR collection."],
    ["The Avenor Tailored Shirt", 3299, "Clean design with signature finishing."],
    ["The Avenor Weekend Polo", 2999, "An elevated casual essential."],
    ["The Avenor Heritage Jacket", 8999, "A modern classic inspired by timeless style."]
];

const accessoryProducts = [
    ["The Montrose Leather Belt", 2499, "A timeless leather belt."],
    ["The Sterling Minimal Watch", 8999, "A clean everyday timepiece."],
    ["The Heritage Chronograph", 12999, "A classic chronograph-inspired design."],
    ["The Riviera Sunglasses", 3499, "Elegant frames for sunny days."],
    ["The Clubmaster Sunglasses", 3999, "A timeless statement frame."],
    ["The Windsor Leather Wallet", 2299, "A refined everyday wallet."],
    ["The Slim Card Holder", 1499, "Compact storage with a minimal profile."],
    ["The Executive Briefcase", 9999, "A polished companion for work."],
    ["The Weekender Duffel", 7999, "A spacious bag for short escapes."],
    ["The Heritage Travel Bag", 10999, "Classic styling for modern travel."],
    ["The Leather Laptop Sleeve", 3299, "Protective storage with refined styling."],
    ["The Canvas Weekend Tote", 2499, "A versatile everyday carry."],
    ["The Signature Baseball Cap", 1799, "A clean casual essential."],
    ["The Cotton Twill Cap", 1499, "Classic headwear with understated detail."],
    ["The Cashmere Touch Scarf", 2999, "A soft finishing layer."],
    ["The Merino Winter Scarf", 3499, "A classic cold-weather accessory."],
    ["The Silk Pocket Square", 1299, "A refined detail for formal looks."],
    ["The Paisley Pocket Square", 1499, "A subtle patterned accent."],
    ["The Classic Silk Tie", 1799, "An essential for formal dressing."],
    ["The Textured Knit Tie", 1599, "A relaxed alternative to classic silk."],
    ["The Leather Card Case", 1899, "A compact everyday essential."],
    ["The Travel Document Holder", 2499, "Organised storage for travel."],
    ["The Passport Wallet", 2299, "A smart companion for journeys."],
    ["The Brass Keychain", 999, "A small detail with timeless appeal."],
    ["The Leather Key Holder", 1299, "A neat way to carry your keys."],
    ["The Minimal Cufflinks", 1999, "A polished formal finishing touch."],
    ["The Silver Knot Cufflinks", 2499, "A classic design for special occasions."],
    ["The Tie Bar", 1199, "A subtle detail for tailored looks."],
    ["The Heritage Signet Ring", 2999, "A bold yet understated accessory."],
    ["The Minimal Silver Bracelet", 2499, "A simple finishing detail."],
    ["The Leather Wrap Bracelet", 1799, "Relaxed styling with a refined finish."],
    ["The Stainless Steel Bracelet", 2799, "A modern everyday accessory."],
    ["The Classic Chain Necklace", 2499, "A clean and versatile design."],
    ["The Minimal Pendant Necklace", 2999, "Understated styling for everyday wear."],
    ["The Aviator Sunglasses", 3799, "A timeless frame with classic appeal."],
    ["The Round Frame Sunglasses", 3299, "A distinctive minimalist silhouette."],
    ["The Polarised Travel Sunglasses", 4499, "A practical choice for bright days."],
    ["The Leather Duffle Tag", 899, "A personalised-looking travel detail."],
    ["The Monogram Luggage Tag", 1199, "A refined addition to your luggage."],
    ["The Compact Travel Organiser", 1999, "Keep everyday essentials in order."],
    ["The Leather Watch Strap", 1799, "A classic replacement strap."],
    ["The Stainless Watch Strap", 2299, "A sleek metal finishing detail."],
    ["The Minimal Desk Clock", 3499, "A refined addition to your workspace."],
    ["The Executive Pen", 1999, "A sophisticated writing instrument."],
    ["The Brass Fountain Pen", 3299, "A classic writing accessory."],
    ["The Leather Notebook Cover", 2499, "A refined cover for daily notes."],
    ["The Premium Travel Notebook", 999, "A simple companion for ideas."],
    ["The Avenor Signature Mug", 1299, "A clean design for daily coffee."],
    ["The Insulated Travel Flask", 1799, "A practical companion on the move."],
    ["The Leather Valet Tray", 2299, "A neat home for everyday essentials."],
    ["The Wooden Watch Box", 4999, "An elegant way to store timepieces."],
    ["The Six-Slot Watch Case", 5999, "Organised storage for a collection."],
    ["The Classic Shoe Horn", 999, "A useful detail for your wardrobe."],
    ["The Cedar Shoe Tree", 1999, "A practical shoe-care essential."],
    ["The Leather Shoe Care Kit", 2499, "A complete kit for shoe maintenance."],
    ["The Cotton Handkerchief Set", 999, "A classic everyday accessory."],
    ["The Linen Pocket Square Set", 1799, "A versatile set for formal styling."],
    ["The Heritage Suspenders", 1999, "A classic tailoring accessory."],
    ["The Leather Money Clip", 1499, "A minimal way to carry essentials."],
    ["The Slim Metal Money Clip", 1199, "Compact and understated."],
    ["The Travel Jewellery Case", 2499, "Organised storage for accessories."],
    ["The Leather Toiletry Bag", 3999, "A smart travel companion."],
    ["The Canvas Toiletry Pouch", 1999, "Simple storage for everyday travel."],
    ["The Weekender Wash Bag", 2799, "A practical travel essential."],
    ["The Classic Laptop Backpack", 5999, "A polished bag for everyday use."],
    ["The Leather Commuter Backpack", 8999, "A refined workday companion."],
    ["The Canvas Heritage Backpack", 4499, "Relaxed styling with useful storage."],
    ["The Minimal Crossbody Bag", 3299, "Compact everyday carry."],
    ["The Leather Sling Bag", 4999, "A smart hands-free accessory."],
    ["The Classic Messenger Bag", 6499, "A versatile bag for work and travel."],
    ["The Travel Shoe Bag", 1499, "Keep footwear organised on the move."],
    ["The Leather Passport Sleeve", 1799, "Minimal protection for your passport."],
    ["The Aluminium Card Wallet", 1999, "A modern compact wallet."],
    ["The RFID Travel Wallet", 2299, "Organised storage for travel cards."],
    ["The Reversible Leather Belt", 2999, "Two versatile looks in one belt."],
    ["The Woven Leather Belt", 2799, "A textured alternative to the classic."],
    ["The Suede Belt", 2499, "A refined casual accessory."],
    ["The Leather Gloves", 3299, "A classic cold-weather accessory."],
    ["The Wool Beanie", 1799, "A simple winter essential."],
    ["The Cashmere Beanie", 2999, "A refined cold-weather layer."],
    ["The Silk Bandana", 1499, "A versatile styling accent."],
    ["The Patterned Silk Scarf", 2499, "A statement accessory with classic appeal."],
    ["The Minimal Lapel Pin", 999, "A small detail for tailored outfits."],
    ["The Enamel Crest Pin", 1299, "A heritage-inspired finishing touch."],
    ["The Silver Collar Stays", 899, "A subtle detail for crisp collars."],
    ["The Travel Shoe Horn", 1299, "A compact shoe-care accessory."],
    ["The Premium Cotton Socks Set", 999, "Everyday comfort in a refined set."],
    ["The Merino Dress Socks", 1299, "A smart essential for formal looks."],
    ["The Ribbed Casual Socks Set", 899, "A versatile everyday set."],
    ["The Leather Watch Roll", 4499, "Travel storage for your timepiece."],
    ["The Heritage Cufflink Box", 2999, "A neat home for formal accessories."],
    ["The Executive Gift Set", 4999, "A considered collection of essentials."],
    ["The Avenor Signature Wallet", 2799, "A refined wallet from the AVENOR collection."],
    ["The Avenor Travel Companion", 6999, "A versatile travel essential."],
    ["The Avenor Classic Sunglasses", 3999, "Timeless eyewear from AVENOR."],
    ["The Avenor Leather Portfolio", 5499, "A polished everyday work accessory."]
];

/* ---------- IMAGE COLLECTIONS ---------- */
/* Distinct image URLs are assigned to individual products.
   Replace these with your own product photographs when ready. */

const clothingImages = [
    "photo-1598033129183-c4f50c736f10",
    "photo-1603252110481-7ba873bf42ab",
    "photo-1618354691373-d851c5c3a990",
    "photo-1620012253295-c15a3e2a6c7e",
    "photo-1591047139829-d91aecb6caea",
    "photo-1617137968427-85924c800a22",
    "photo-1596755094514-f87e34085b2c",
    "photo-1602810318383-e386cc2a3ccf",
    "photo-1627225924765-552d49cf47ad",
    "photo-1618354691229-88d47f285158",
    "photo-1620799140408-edc6dcb6d633",
    "photo-1618354691438-25bc04584c23",
    "photo-1604695573706-53170668f6a6",
    "photo-1603252109303-2751441dd157",
    "photo-1598554747436-c9293d6a588f",
    "photo-1603344797033-f0f4f587ab60",
    "photo-1608748010899-18f300247112",
    "photo-1598033129183-c4f50c736f10",
    "photo-1603252110481-7ba873bf42ab",
    "photo-1618354691373-d851c5c3a990"
];

const accessoryImages = [
    "photo-1523275335684-37898b6baf30",
    "photo-1508685096489-7aacd43bd3b1",
    "photo-1511499767150-a48a237f0083",
    "photo-1553062407-98eeb64c6a62",
    "photo-1622560480654-d96214fdc887",
    "photo-1627123424574-724758594e93",
    "photo-1548036328-c9fa89d128fa",
    "photo-1553062407-98eeb64c6a62",
    "photo-1526170375885-4d8ecf77b99f",
    "photo-1524805444758-089113d48a6d",
    "photo-1611923134239-b9be5816e23c",
    "photo-1584917865442-de89df76afd3",
    "photo-1572635196237-14b3f281503f",
    "photo-1511499767150-a48a237f0083",
    "photo-1523170335258-f5ed11844a49",
    "photo-1526170375885-4d8ecf77b99f",
    "photo-1553062407-98eeb64c6a62",
    "photo-1548036328-c9fa89d128fa",
    "photo-1627123424574-724758594e93",
    "photo-1524805444758-089113d48a6d"
];

function makeImage(photoId) {
    return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=800&q=85`;
}

const products = [
    ...clothingProducts.map((item, index) => ({
        id: `C${index + 1}`,
        name: item[0],
        price: item[1],
        description: item[2],
        category: "clothing",
        image: makeImage(clothingImages[index % clothingImages.length])
    })),

    ...accessoryProducts.map((item, index) => ({
        id: `A${index + 1}`,
        name: item[0],
        price: item[1],
        description: item[2],
        category: "accessories",
        image: makeImage(accessoryImages[index % accessoryImages.length])
    }))
];

/* ---------- SHARED HELPERS ---------- */

const formatPrice = price =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(price);

function getProductById(id) {
    return products.find(product => product.id === id);
}

/* ---------- CART ---------- */

let cart = [];

try {
    cart = JSON.parse(localStorage.getItem("avenorCart")) || [];
} catch {
    cart = [];
}

function saveCart() {
    localStorage.setItem("avenorCart", JSON.stringify(cart));
}

function addToCart(id) {
    const product = getProductById(id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}

function changeQuantity(id, change) {
    const item = cart.find(product => product.id === id);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(product => product.id !== id);
    }

    updateCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cart-count");

    const totalQuantity = cart.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    if (cartCount) cartCount.textContent = totalQuantity;
    if (cartTotal) cartTotal.textContent = formatPrice(totalPrice);

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <p>Your bag is currently empty.</p>
                    <span>Discover something exceptional.</span>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${formatPrice(item.price)}</p>
                        <div class="quantity-controls">
                            <button onclick="changeQuantity('${item.id}', -1)"
                                aria-label="Decrease quantity">−</button>
                            <span>${item.quantity}</span>
                            <button onclick="changeQuantity('${item.id}', 1)"
                                aria-label="Increase quantity">+</button>
                        </div>
                        <button class="remove-item"
                            onclick="removeFromCart('${item.id}')">
                            Remove
                        </button>
                    </div>
                </div>
            `).join("");
        }
    }

    saveCart();
}

/* ---------- CART DRAWER ---------- */

function openCart() {
    document.getElementById("cartOverlay")?.classList.add("active");
    document.getElementById("cartDrawer")?.classList.add("active");
}

function closeCart() {
    document.getElementById("cartOverlay")?.classList.remove("active");
    document.getElementById("cartDrawer")?.classList.remove("active");
}

document.getElementById("cartBtn")?.addEventListener("click", openCart);
document.getElementById("closeCart")?.addEventListener("click", closeCart);
document.getElementById("cartOverlay")?.addEventListener("click", closeCart);

/* ---------- PRODUCT CARD ---------- */

function createProductCard(product) {
    return `
        <article class="product-card">
            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >
                <button class="add-to-cart"
                    onclick="addToCart('${product.id}')">
                    Add to Bag
                </button>
            </div>
            <div class="product-info">
                <p class="product-category">
                    ${product.category === "clothing" ? "Clothing" : "Accessories"}
                </p>
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
            </div>
        </article>
    `;
}

/* ---------- HOMEPAGE PRODUCTS ---------- */

function renderHomepageProducts() {
    const productGrid = document.getElementById("productGrid");
    const allProducts = document.getElementById("allProducts");

    if (productGrid) {
        productGrid.innerHTML = products
            .slice(0, 8)
            .map(createProductCard)
            .join("");
    }

    if (allProducts) {
        allProducts.innerHTML = products
            .slice(0, 12)
            .map(createProductCard)
            .join("");
    }
}

/* ---------- CATEGORY PAGE ---------- */

let activeCategory = "clothing";

function showCategory(category) {
    activeCategory = category;

    const categoryCards = document.getElementById("categoryCards");
    const catalogue = document.getElementById("catalogue");
    const catalogueTitle = document.getElementById("catalogueTitle");

    if (categoryCards) categoryCards.style.display = "none";
    if (catalogue) catalogue.style.display = "block";

    if (catalogueTitle) {
        catalogueTitle.textContent =
            category === "clothing" ? "Clothing Collection" : "Accessories Collection";
    }

    displayCategoryProducts();
}

function displayCategoryProducts() {
    const container = document.getElementById("categoryProducts");
    if (!container) return;

    const searchValue =
        document.getElementById("catalogueSearch")?.value.toLowerCase() || "";

    const sortValue =
        document.getElementById("sortProducts")?.value || "featured";

    let filtered = products.filter(product =>
        product.category === activeCategory &&
        (
            product.name.toLowerCase().includes(searchValue) ||
            product.description.toLowerCase().includes(searchValue)
        )
    );

    if (sortValue === "low-high") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === "high-low") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    container.innerHTML = filtered.length
        ? filtered.map(createProductCard).join("")
        : "<p>No products found. Try another search.</p>";

    const count = document.getElementById("productCount");
    if (count) count.textContent = `${filtered.length} products`;
}

document.getElementById("catalogueSearch")
    ?.addEventListener("input", displayCategoryProducts);

document.getElementById("sortProducts")
    ?.addEventListener("change", displayCategoryProducts);

document.getElementById("backToCategories")
    ?.addEventListener("click", () => {
        document.getElementById("catalogue").style.display = "none";
        document.getElementById("categoryCards").style.display = "grid";
    });

/* ---------- HOMEPAGE SEARCH ---------- */

document.getElementById("searchToggle")?.addEventListener("click", () => {
    document.getElementById("searchPanel")?.classList.toggle("active");
});

document.getElementById("searchInput")?.addEventListener("input", event => {
    const query = event.target.value.toLowerCase();
    const allProducts = document.getElementById("allProducts");

    if (!allProducts) return;

    const results = products.filter(product =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    allProducts.innerHTML = results.length
        ? results.map(createProductCard).join("")
        : "<p>No matching products found.</p>";
});

/* ---------- MOBILE MENU ---------- */

document.getElementById("mobileMenu")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("active");
});

/* ---------- NEWSLETTER ---------- */

document.getElementById("newsletterForm")?.addEventListener("submit", event => {
    event.preventDefault();

    const email = event.target.querySelector("input")?.value;
    if (!email) return;

    alert("Thank you for joining the AVENOR list.");
    event.target.reset();
});

/* ---------- CHECKOUT ---------- */

const checkoutModal = document.getElementById("checkoutModal");

document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your bag is empty!");
        return;
    }

    checkoutModal?.classList.add("active");
});

document.getElementById("closeCheckout")?.addEventListener("click", () => {
    checkoutModal?.classList.remove("active");
});

document.getElementById("checkoutForm")?.addEventListener("submit", event => {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Your bag is empty!");
        return;
    }

    alert("Thank you! Your AVENOR demo order has been placed.");

    cart = [];
    updateCart();

    checkoutModal?.classList.remove("active");
    closeCart();
    event.target.reset();
});

/* ---------- INITIALISE WEBSITE ---------- */

document.addEventListener("DOMContentLoaded", () => {

    renderHomepageProducts();
    updateCart();

    const categoryContainer =
        document.getElementById("categoryProducts");

    if (categoryContainer) {

        const params = new URLSearchParams(window.location.search);
        const requestedCategory = params.get("category");

        if (
            requestedCategory === "clothing" ||
            requestedCategory === "accessories"
        ) {
            showCategory(requestedCategory);
        }

    }

});