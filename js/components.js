/* ============================================================
   COMPONENTS.JS — Shared Header, Footer, Mobile Drawer & Toast
   Multi-page version: uses href links instead of SPA navigate()
   ============================================================ */

/* ---------- Detect current page for active nav highlighting ---------- */
function getCurrentPage() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('shop.html')) return 'shop';
  if (path.includes('product.html')) return 'product';
  if (path.includes('cart.html')) return 'cart';
  if (path.includes('checkout.html')) return 'checkout';
  if (path.includes('about.html')) return 'about';
  if (path.includes('contact.html')) return 'contact';
  if (path.includes('admin.html')) return 'admin';
  return 'home';
}

function activeClass(page) {
  return getCurrentPage() === page ? 'active' : '';
}

/* ---------- Header ---------- */
const HEADER_HTML = `<header class="site-header" id="siteHeader">
  <div class="header-inner wrap">
    
    <div class="header-hamburger">
      <button class="icon-btn menu-trigger" onclick="toggleDrawer(true)" aria-label="Open menu">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <div class="header-logo">
      <a href="index.html" class="brand-logo" aria-label="Adwa Supplements home">
        <div class="brand-emblem">
          <img src="images/adwa.jpg" alt="Adwa Logo" onerror="this.onerror=null; this.parentElement.innerHTML='<svg viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot;><path d=&quot;M24 2 L30 20 L46 20 L33 30 L38 46 L24 36 L10 46 L15 30 L2 20 L18 20 Z&quot; fill=&quot;#4F46E5&quot; opacity=&quot;.9&quot;/></svg>';">
        </div>
        <div class="brand-text">
          <span class="brand-title">ADWA</span>
          <span class="brand-subtitle">Supplements</span>
        </div>
      </a>
    </div>

    <div class="header-search">
      <form class="header-search-form" action="shop.html" method="GET">
        <div class="search-input-wrapper">
          <input type="text" name="q" class="header-search-input" placeholder="Search for Supplements..." aria-label="Search">
          <button type="submit" class="header-search-btn" aria-label="Submit Search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>

    <div class="header-actions-wrapper">
      <nav class="main-nav" id="mainNav">
        <a href="index.html" class="nav-link ${activeClass('home')}" data-page="home" data-i18n="nav_home">Home</a>
        <a href="shop.html" class="nav-link ${activeClass('shop')}" data-page="shop" data-i18n="nav_shop">Shop</a>
        <a href="about.html" class="nav-link ${activeClass('about')}" data-page="about" data-i18n="nav_about">About</a>
        <a href="contact.html" class="nav-link ${activeClass('contact')}" data-page="contact" data-i18n="nav_contact">Contact</a>
      </nav>
      <div class="header-actions">
        <div class="lang-toggle header-lang-toggle">
          <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
          <button class="lang-btn" data-lang="am" onclick="setLanguage('am')">አማ</button>
        </div>
        <a href="javascript:void(0)" onclick="goToProfile()" class="icon-btn profile-btn" aria-label="User Profile">
          <i class="fa-regular fa-user"></i>
        </a>
        <a href="cart.html" class="icon-btn cart-btn" aria-label="View cart">
          <i class="fa-solid fa-cart-shopping"></i>
          <span class="cart-badge" id="cartBadge">0</span>
        </a>
      </div>
    </div>

  </div>
</header>

<!-- Mobile Drawer -->
<div class="mobile-drawer" id="mobileDrawer" onclick="if(event.target===this) toggleDrawer(false)">
  <div class="drawer-panel">
    <div class="drawer-head">
      <span style="font-weight:700;font-size:1.1rem;">Menu</span>
      <button onclick="toggleDrawer(false)" aria-label="Close menu" style="font-size:1.3rem;color:var(--blue-deep);">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="drawer-links">
      <a href="index.html" class="${activeClass('home')}"><span data-i18n="nav_home">Home</span> <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;color:var(--ink-muted);"></i></a>
      <a href="shop.html" class="${activeClass('shop')}"><span data-i18n="nav_shop">Shop</span> <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;color:var(--ink-muted);"></i></a>
      <a href="about.html" class="${activeClass('about')}"><span data-i18n="nav_about">About</span> <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;color:var(--ink-muted);"></i></a>
      <a href="contact.html" class="${activeClass('contact')}"><span data-i18n="nav_contact">Contact</span> <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;color:var(--ink-muted);"></i></a>
      <a href="cart.html" class="${activeClass('cart')}"><span data-i18n="nav_cart">Cart</span> <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;color:var(--ink-muted);"></i></a>
      <a href="javascript:void(0)" onclick="toggleDrawer(false); goToProfile();"><span>Account / Profile</span> <i class="fa-solid fa-chevron-right" style="font-size:0.7rem;color:var(--ink-muted);"></i></a>
    </div>
    <div style="padding:16px 20px;border-top:1px solid var(--line, #e2e8f0);display:flex;align-items:center;justify-content:space-between;">
      <span style="font-size:0.84rem;font-weight:600;color:var(--ink-muted, #64748b);">Language / ቋንቋ</span>
      <div class="lang-toggle" style="margin:0;">
        <button class="lang-btn" data-lang="en" onclick="setLanguage('en')">EN</button>
        <button class="lang-btn" data-lang="am" onclick="setLanguage('am')">አማ</button>
      </div>
    </div>
  </div>
</div>`;

/* ---------- Footer ---------- */
const FOOTER_HTML = `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <div class="footer-logo">
          <div class="brand-emblem" style="width:30px;height:30px;border-width:1.5px;">
            <img src="images/adwa.jpg" alt="Logo" onerror="this.onerror=null; this.parentElement.innerHTML='<svg viewBox=&quot;0 0 48 48&quot; fill=&quot;none&quot;><path d=&quot;M24 2 L30 20 L46 20 L33 30 L38 46 L24 36 L10 46 L15 30 L2 20 L18 20 Z&quot; fill=&quot;#4F46E5&quot;/></svg>';">
          </div>
          <span>ADWA SUPPLEMENTS</span>
        </div>
        <p style="max-width:280px;font-size:.88rem;color:rgba(250,247,240,0.75);margin-top:12px;">
          Strength like Adwa. Every day. Premium supplements and nutrition for peak performance.
        </p>
        <div class="footer-social">
          <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
      <div><h4>Shop</h4><ul>
        <li><a href="shop.html">All Products</a></li>
        <li><a href="shop.html">Supplements</a></li>
        <li><a href="shop.html">Creatine</a></li>
        <li><a href="cart.html">Cart</a></li>
      </ul></div>
      <div><h4>Company</h4><ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="admin.html">Admin</a></li>
      </ul></div>
      <div><h4>Contact</h4><ul>
        <li><i class="fa-solid fa-location-dot"></i> Bole Road, Addis Ababa</li>
        <li><i class="fa-solid fa-phone"></i> +251 91 234 5678</li>
        <li><i class="fa-solid fa-envelope"></i> hello@adwasupplements.com</li>
      </ul></div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Adwa Supplements. All rights reserved.</span>
      <span>Made with pride in Ethiopia 🇪🇹</span>
    </div>
  </div>
</footer>`;

/* ---------- Toast Element ---------- */
const TOAST_HTML = `<div class="toast" id="toast">
  <i class="fa-solid fa-circle-check"></i>
  <span id="toastMsg"></span>
</div>`;

/* ---------- Mobile Bottom Nav ---------- */
const MOBILE_NAV_HTML = `<nav class="mobile-bottom-nav">
  <a href="index.html" class="mb-nav-item ${activeClass('home')}" data-nav="home">
    <i class="fa-solid fa-house"></i>
    <span data-i18n="nav_home">Home</span>
  </a>
  <a href="shop.html" class="mb-nav-item ${activeClass('shop')}" data-nav="shop">
    <i class="fa-solid fa-store"></i>
    <span data-i18n="nav_shop">Shop</span>
  </a>
  <a href="javascript:void(0)" onclick="goToProfile()" class="mb-nav-item ${activeClass('login') || activeClass('admin') || activeClass('customer')}">
    <i class="fa-solid fa-user"></i>
    <span>Profile</span>
  </a>
  <a href="cart.html" class="mb-nav-item ${activeClass('cart')}" data-nav="cart">
    <div class="mb-cart-wrap">
      <i class="fa-solid fa-bag-shopping"></i>
      <span class="mb-cart-badge" id="mobileCartBadge">0</span>
    </div>
    <span data-i18n="nav_cart">Cart</span>
  </a>
  <a href="contact.html" class="mb-nav-item ${activeClass('contact')}" data-nav="contact">
    <i class="fa-solid fa-envelope"></i>
    <span data-i18n="nav_contact">Contact</span>
  </a>
</nav>`;

/* ---------- Inject Components on DOMContentLoaded ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const hp = document.getElementById('header-placeholder');
  if (hp) hp.innerHTML = HEADER_HTML;
    
  const fp = document.getElementById('footer-placeholder');
  if (fp) fp.innerHTML = FOOTER_HTML;
    
  const mp = document.getElementById('mobile-nav-placeholder');
  if (mp) mp.innerHTML = MOBILE_NAV_HTML;

  // Always inject toast
  document.body.insertAdjacentHTML('beforeend', TOAST_HTML);
});
