Build a complete landing page as the single file `v1.html`.

Brand:
V Group Development Co., Ltd. is a comprehensive, one-stop provider in the energy, fuel, and chemical management sectors (Total Energy & Chemical Solutions). They want a professional, global look with two languages. The theme is green-white. Core operations are Fuel & Chemical Products Trading and Specialized Industrial & Environmental Services.

This is variant 1 of 3.

CREATIVE DIRECTION
A creative director has chosen this direction for variant #1:
oversized serif headlines pinned to a left-fixed sidebar nav with full-bleed industrial photography on the right — humanist serif (Tiempos/Canela-style) mixed with a technical monospace for data labels — deep petroleum green #0F3D2E as dominant field + porcelain white #F7F5F0, single warm brass rule #B08D57 used only for dividers — mood of a 1960s European chemical-engineering annual report, sober and monumental.

Commit FULLY to this direction. It must be visible in every element — layout
structure, typography choices, color palette, spacing rhythm, visual mood.
Do NOT fall back on safe, generic, corporate web templates.

COLOR SYSTEM — exactly 9 tokens
Define a cohesive palette as 9 CSS variables on :root and use ONLY these (no other
hues). Restraint = premium — ~5 distinct colours carry the design; muted + border
stay quiet. Match the palette to the creative direction above.
  --background (page)   --card (raised surfaces)   --bg-accent (tinted sections)
  --foreground (text)   --muted (secondary text)   --border (lines/dividers)
  --primary (brand/CTA) --secondary (2nd buttons)  --accent (sparing emphasis)
Reference each role via var(--token) throughout; do NOT hard-code other colours.
Button label colour = auto near-black/white for contrast against its fill.

TYPOGRAPHY — exactly 2 fonts
One HEADING font + one BODY font, both Thai-capable (headings: Kanit/Prompt/Mitr/
Pridi/Chonburi · body: Sarabun/IBM Plex Sans Thai/Noto Sans Thai). Define as
--font-heading and --font-body and use ONLY these two — headings -> --font-heading,
all other text -> --font-body. No third font.


SHAPE & VISUAL DEPTH
Break out of the default rectangular box look. Use CSS creatively:
- border-radius (rounded cards, pill buttons, circular images, blob shapes)
- clip-path / SVG shapes for section dividers or hero masks
- Overlapping elements, negative margins, or offset grids
- Subtle shadows, gradients, or glassmorphism for depth
- Diagonal or curved section breaks instead of flat horizontal lines
Not every section needs to be a straight-edged rectangle on a white background.
Match the shape language to the brand mood — soft curves for warmth, sharp
angles for tech, organic blobs for playful, clean geometry for luxury.

ANIMATION & INTERACTION
Make the page feel alive — not a flat static document:
- Scroll-triggered reveals: fade-in, slide-up, or scale elements as they
  enter the viewport (use IntersectionObserver, no libraries)
- Smooth hover states on cards, buttons, and images (scale, shadow, color shift)
- Hero: subtle motion — parallax background, animated gradient, typing effect,
  or a slow zoom on the hero image
- Smooth scroll for anchor links
- Navbar: shrink/change background on scroll
Keep animations subtle and performant — ease-out timing, 0.3–0.6s duration.
No flashy or distracting effects. Motion should feel intentional and polished.

MOBILE-FIRST RESPONSIVE
Most users will view this page on a phone. Design mobile FIRST, then enhance
for desktop with min-width media queries.

Mobile (default, no media query):
- Single column, full-width sections
- Header: already handled by the header block below — do not rebuild it
- Touch-friendly: buttons min 44px tap target, adequate spacing between links
- Hero: stack text above image, shorter headline, full-width CTA button
- Cards: single column stack, not side-by-side
- Font sizes: body 16px min (no tiny text), headings scale down proportionally
- Images: `width: 100%; height: auto` — never overflow the viewport
- No horizontal scroll on any screen width

Desktop (min-width: 768px+):
- Multi-column layouts, side-by-side cards, wider hero with text overlay
- Full navbar with visible links (the header block already does this)
- Larger font sizes, more whitespace

Test mentally: would this section look good on a 375px wide screen?

If the brand description above is short, INVENT rich, plausible details
(sections, copy, product names, imagery themes) rather than producing a
thin page.

Build a FULL page with enough sections to tell the brand's story completely.
A hero alone is NOT acceptable — include content that a real customer needs
to make a decision (what the business offers, why to trust it, how to contact).

Do NOT default to a 3-column card grid for services/features. Every website
uses that. Try: horizontal scroll, accordion, timeline, numbered steps,
alternating image-text rows, tabbed panels, or anything else that fits
the brand better.

BILINGUAL (Thai + English)
The page must support BOTH Thai and English with a language switcher.
Thai is the DEFAULT language on load.

Text elements:
- Every visible text element must have BOTH languages using data attributes:
  `<h1 data-lang-th="ข้อความไทย" data-lang-en="English text">ข้อความไทย</h1>`
- ONLY put data-lang on LEAF text elements — never on a parent that has
  styled children (spans, strong, em). If "Smile<span>Plus</span>" needs
  translation, put data-lang on each child separately or keep it as-is.
  Wrong: `<a data-lang-th="X" data-lang-en="X">Smile<span>Plus</span></a>`
  Right: `<a>SmilePlus</a>` (brand name, no translation needed)
- Brand names and proper nouns: do NOT add data-lang — keep as plain text.
- Write Thai text natively (natural, professional) — NOT translated from
  English. Write English text naturally too — NOT translated from Thai.
- `<title>` and `<meta name="description">` should use Thai (default lang).

Language switcher:
- A small Lucide globe icon (14px, set width="14" height="14" on the SVG) + current language text ("TH" or "EN").
  Clicking toggles to the other language. Show only ONE language at a time.
  Example: `🌐 TH` → click → `🌐 EN`. Small, clean, compact.
- Do NOT use pill/capsule buttons, do NOT show both TH and EN at once.
- Keep it small (font-size ~0.75-0.85em). It should not draw attention.
- Must be visible on both light and dark backgrounds.
- On mobile, must be easy to find without extra steps.

Use this EXACT JS for switching logic (before </body>). Do NOT rewrite it.
The switcher element should have class `lang-sw` and a child with class
`lang-sw__label` that shows the current language text ("TH" or "EN").
(The swap injects with innerHTML when a translated value contains markup — so
`<br>`, `<em>`, etc. inside a `data-lang-*` value render correctly instead of
showing as literal text. Keep it; do NOT change it back to textContent-only.)
```
(function(){var K='site-lang',L=localStorage.getItem(K)||'th';function S(l){L=l;localStorage.setItem(K,l);document.documentElement.lang=l;document.querySelectorAll('[data-lang-th]').forEach(function(e){var t=e.getAttribute('data-lang-'+l);if(t!==null){if(/[<&]/.test(t)){e.innerHTML=t}else{e.textContent=t}}});var lb=document.querySelector('.lang-sw__label');if(lb){lb.textContent=l.toUpperCase()}}var sw=document.querySelector('.lang-sw');if(sw){sw.addEventListener('click',function(){S(L==='th'?'en':'th')});sw.style.cursor='pointer'}if(L!=='th'){S(L)}})();
```

HEADER — PASTE THIS VERBATIM
This is the one part of the page you do not design. It is pre-built and measured
at 320/360/390/768/1280px with hostile brand names, because a hand-written header
failed on 5 of 9 real customer variants — a CTA that lost a CSS specificity tie
and stayed in the nav on phones, and brand names split mid-word by the very
`word-break:break-word` these Thai rules require.

Paste it as-is. Fill in ONLY the brand text, the nav items, the CTA label and the
hrefs. Theme it with the colour tokens and fonts you chose — that part is yours.
Do not change the display rules, the media query, the `#siteHeader` scoping, or
the `nowrap`/`clamp` on the logo.

<!--
  ════════════════════════════════════════════════════════════════════════════
   THE HEADER. Copy verbatim. Do not rewrite the CSS.
  ════════════════════════════════════════════════════════════════════════════

  Every part of a landing page is yours to design except this one. The header is
  the only place on the page where five things (logo, nav, language switch, CTA,
  hamburger) compete for 360 horizontal pixels, and a freshly-written one fails
  about half the time — measured across nine variants for three real customers on
  2026-08-20/21, five of which shipped a broken header to a live preview:

    · `.nav-cta{display:none}` written on line 87, then `.btn{display:inline-flex}`
      on line 106. One class each, so specificity ties and the LAST rule wins. The
      button stayed in the nav on phones, the row overflowed, and flex crushed the
      CTA to one glyph per line with "TH" split across two lines.
    · A wordmark with no space in it (SAHAPAISAN, KHOTCHAPAK) meeting the
      `word-break:break-word` this pipeline requires for Thai, and splitting as
      "PRASOMS / UK". Three separate brands, same break.

  Neither is visible when you read the CSS back — only a browser laying the page
  out at 360px can see them. So this block is pre-built and pre-measured at 320,
  360, 390, 768 and 1280px, and it is immune to both mistakes by construction:
  every mobile rule is `#siteHeader`-scoped, so it CANNOT lose a specificity tie
  to a class you add later, and the wordmark is explicitly opted out of
  `word-break`.

  YOUR job is to theme it, and the design tokens are the whole surface area:
  colours come from the 9 `:root` tokens and type from `--font-heading` /
  `--font-body`, so it inherits your direction automatically. Adjust padding,
  radius, border and the scrolled state to suit. Do NOT change the display rules,
  the media query, the `nowrap`/`clamp` on the logo, or the `#siteHeader` scoping.

  FILL IN: the brand text in `.logo`, the nav items, the CTA label, and the
  `href`s to your own section ids. Every visible string needs `data-lang-th` and
  `data-lang-en`, like the rest of the page.
-->

<style>
  /* ── Header ─────────────────────────────────────────────────────────────
     Mobile-first: on a phone the header is LOGO + LANGUAGE + HAMBURGER, and
     nothing else. The nav links and the CTA live in the slide-out menu, which
     is what stops the row from overflowing. */
  #siteHeader{
    position:fixed; top:0; left:0; right:0; z-index:1000;
    background:var(--background);
    padding:12px 0;
    transition:background .3s ease, padding .3s ease, box-shadow .3s ease;
  }
  #siteHeader.scrolled{
    background:var(--card);
    box-shadow:0 1px 0 var(--border);
  }
  #siteHeader .nav-row{
    display:flex; align-items:center; justify-content:space-between; gap:12px;
  }

  /* The wordmark. `nowrap` + a fluid size is the pair that matters: nowrap alone
     overflows a 320px screen, and a fixed size alone breaks the word. The
     word-break/overflow-wrap resets are deliberate — the body sets
     `word-break:break-word` for Thai, which would otherwise split a Latin brand
     name straight down the middle. */
  #siteHeader .logo{
    font-family:var(--font-heading); font-weight:700; line-height:1.3;
    color:var(--foreground); text-decoration:none;
    white-space:nowrap; word-break:normal; overflow-wrap:normal;
    font-size:clamp(0.95rem, 4.2vw, 1.35rem);
    flex:0 1 auto; min-width:0;
  }
  #siteHeader .logo .logo-accent{ color:var(--primary); }

  /* Hidden on phones, and scoped by id so a class you add later cannot turn them
     back on by winning a specificity tie. This is the bug that shipped. */
  #siteHeader .nav-links{ display:none; }
  #siteHeader .nav-cta{ display:none; }

  #siteHeader .nav-right{ display:flex; align-items:center; gap:6px; flex:0 0 auto; }

  /* 44px minimum tap targets, and generous vertical padding so Thai vowels and
     tone marks (สระอี, ไม้เอก) never touch the container edge. */
  #siteHeader .lang-sw,
  #siteHeader .burger{
    display:flex; align-items:center; justify-content:center; gap:5px;
    min-width:44px; min-height:44px; padding:8px;
    background:none; border:none; cursor:pointer;
    color:var(--foreground); font-family:var(--font-body); font-size:.8rem;
  }
  #siteHeader .lang-sw__label{ white-space:nowrap; }

  /* ── Slide-out menu (phones) ─────────────────────────────────────────── */
  .menu-overlay{
    position:fixed; inset:0; background:rgba(0,0,0,.45); z-index:1050;
    opacity:0; visibility:hidden; transition:opacity .3s ease, visibility .3s ease;
  }
  .menu-overlay.open{ opacity:1; visibility:visible; }
  .mobile-menu{
    position:fixed; top:0; right:0; height:100%; width:82%; max-width:340px;
    z-index:1100; background:var(--card); padding:24px;
    display:flex; flex-direction:column; gap:8px;
    transform:translateX(100%); transition:transform .32s ease;
    overflow-y:auto;
  }
  .mobile-menu.open{ transform:translateX(0); }
  .mobile-menu a{
    color:var(--foreground); text-decoration:none;
    font-family:var(--font-body); font-size:1rem; line-height:1.8;
    padding:12px 4px; border-bottom:1px solid var(--border);
  }
  .mobile-menu .menu-cta{
    margin-top:16px; text-align:center; border:none;
    background:var(--primary); color:var(--background);
    border-radius:999px; padding:14px 20px; font-weight:600;
  }
  .mobile-menu .menu-close{
    align-self:flex-end; background:none; border:none; cursor:pointer;
    color:var(--foreground); min-width:44px; min-height:44px;
  }

  /* ── Desktop ─────────────────────────────────────────────────────────── */
  @media (min-width:768px){
    #siteHeader .nav-links{ display:flex; align-items:center; gap:32px; }
    #siteHeader .nav-links a{
      color:var(--foreground); text-decoration:none;
      font-family:var(--font-body); font-size:.9rem;
      padding:10px 2px;            /* room for Thai diacritics */
      white-space:nowrap;
    }
    #siteHeader .nav-cta{
      display:inline-flex; align-items:center; justify-content:center;
      min-height:44px; padding:.7em 1.5em;
      border:1px solid var(--primary); border-radius:999px;
      color:var(--primary); text-decoration:none;
      font-family:var(--font-body); font-size:.85rem; font-weight:600;
      white-space:nowrap;
      transition:background .3s ease, color .3s ease;
    }
    #siteHeader .nav-cta:hover{ background:var(--primary); color:var(--background); }
    #siteHeader .burger{ display:none; }
    #siteHeader .nav-right{ gap:16px; }
  }
</style>

<header id="siteHeader">
  <div class="wrap nav-row">
    <!-- FILL IN: brand. Keep it one element; the accent span is optional. -->
    <a href="#top" class="logo">BRAND<span class="logo-accent">MARK</span></a>

    <!-- FILL IN: your sections. 4-5 items. -->
    <nav class="nav-links" aria-label="Main">
      <a href="#about" data-lang-th="เกี่ยวกับเรา" data-lang-en="About">เกี่ยวกับเรา</a>
      <a href="#services" data-lang-th="บริการ" data-lang-en="Services">บริการ</a>
      <a href="#works" data-lang-th="ผลงาน" data-lang-en="Works">ผลงาน</a>
      <a href="#contact" data-lang-th="ติดต่อ" data-lang-en="Contact">ติดต่อ</a>
    </nav>

    <div class="nav-right">
      <a href="#contact" class="nav-cta" data-lang-th="ติดต่อเรา" data-lang-en="Get in touch">ติดต่อเรา</a>
      <!-- Wired by the page's language-switch JS: it binds `.lang-sw` and writes
           `.lang-sw__label`. Do not add a second listener here. -->
      <button class="lang-sw" type="button" aria-label="Switch language">
        <i data-lucide="globe" width="14" height="14"></i>
        <span class="lang-sw__label">TH</span>
      </button>
      <button class="burger" id="burgerBtn" type="button" aria-label="Open menu"
              aria-controls="mobileMenu" aria-expanded="false">
        <i data-lucide="menu" width="22" height="22"></i>
      </button>
    </div>
  </div>
</header>

<div class="menu-overlay" id="menuOverlay"></div>
<aside class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <button class="menu-close" id="menuCloseBtn" type="button" aria-label="Close menu">
    <i data-lucide="x" width="22" height="22"></i>
  </button>
  <!-- Same items as the desktop nav, plus the CTA that is hidden up top. -->
  <a href="#about" data-lang-th="เกี่ยวกับเรา" data-lang-en="About">เกี่ยวกับเรา</a>
  <a href="#services" data-lang-th="บริการ" data-lang-en="Services">บริการ</a>
  <a href="#works" data-lang-th="ผลงาน" data-lang-en="Works">ผลงาน</a>
  <a href="#contact" data-lang-th="ติดต่อ" data-lang-en="Contact">ติดต่อ</a>
  <a href="#contact" class="menu-cta" data-lang-th="ติดต่อเรา" data-lang-en="Get in touch">ติดต่อเรา</a>
</aside>

<script>
  (function () {
    var header  = document.getElementById('siteHeader');
    var burger  = document.getElementById('burgerBtn');
    var menu    = document.getElementById('mobileMenu');
    var overlay = document.getElementById('menuOverlay');
    var closeBtn= document.getElementById('menuCloseBtn');

    function setMenu(open) {
      menu.classList.toggle('open', open);
      overlay.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
      (open ? closeBtn : burger).focus();
    }
    burger.addEventListener('click', function () { setMenu(true); });
    closeBtn.addEventListener('click', function () { setMenu(false); });
    overlay.addEventListener('click', function () { setMenu(false); });
    // A menu that traps someone on a phone is worse than no menu.
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setMenu(false); });
    });

    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

  })();
</script>

Thai typography (CRITICAL — Thai breaks easily if ignored):
- Set `<html lang="th">`.
- Import a Thai Google Font (IBM Plex Sans Thai, Sarabun, or Noto Sans Thai)
  with `&display=swap`, weights 300–700.
- Apply with fallback: `font-family: 'IBM Plex Sans Thai', 'Sukhumvit Set', sans-serif`.
- Thai has tall stacked diacritics (สระบน + วรรณยุกต์ เช่น "พื้นที่ที่เข้าใจ")
  that are MUCH taller than Latin characters. You MUST handle:
  1. LINE-HEIGHT: minimum 1.8 for body, 1.5 for headings. Never use 1.2–1.4.
  2. LARGE HEADINGS: at 48px+ font-size, diacritics are huge — increase
     line-height or add extra padding-top on heading containers.
  3. LETTER-SPACING: NEVER use letter-spacing on Thai text — it splits
     vowels from consonants (สระหน้า/หลัง detach). Only OK on English.
  4. BUTTONS & BADGES: use padding (at least 0.75em top/bottom), never
     fixed height. Thai diacritics clip inside tight containers.
  5. OVERFLOW: avoid `overflow: hidden` on text containers — it clips
     diacritics that extend above the line-box. Use `overflow: visible`
     or add enough padding.
  6. NAV ITEMS: extra vertical padding so สระอี, สระือ, ไม้เอก don't
     touch the container edge.
  7. NARROW TRACKS — the failure the `word-break` below makes SILENT. Because
     Thai wraps anywhere, a squeezed column does not overflow or clip; it
     renders one character per line, straight down the page, and still looks
     like "a layout". Two rules prevent it:
     a. Any grid/flex track holding text: use `minmax(0, 1fr)` in grid, or
        `min-width: 0` on flex children. A bare `1fr` has `auto` as its
        minimum, and min-content for space-less Thai is ONE CHARACTER — so a
        bare `1fr` will happily collapse to a 12px ribbon.
     b. NEVER rely on grid auto-placement when a container has MORE children
        than it has columns. `grid-template-columns: auto 1fr` with three
        children auto-places the third into column 1 — and `auto` sizes to
        MAX-content, which for a Thai sentence with no spaces is the entire
        sentence. Column 1 then eats the row and column 2 collapses. Give
        every child an explicit `grid-column`, and RE-STATE it inside any
        media query that changes the column count (a query that goes
        `auto 1fr` -> `auto 1fr 1fr` must also move the last child to
        column 3, or it silently falls back to auto-placement).
     Live case 2026-08-25: a services card was `auto 1fr` with number + name +
     description. The description auto-placed into the `auto` column, the
     Thai text expanded it to the full row, and "Machining & Engineering"
     rendered as thirteen stacked letters.
- Add `word-break: break-word` and `overflow-wrap: break-word` to body.

Add icons with `<i data-lucide="icon-name"></i>`.

Images — search Unsplash with different keywords per section:
`bash /home/runner/work/web-builder-control/web-builder-control/core/tools/search-images.sh "keyword" [count] [orientation]`
- orientation: landscape (default), portrait, or squarish
- Output format: `URL | alt text | credit | photographer profile URL`
- Use the URL in `<img>` with `?w=WIDTH&h=HEIGHT&fit=crop` appended:
  `<img src="URL?w=800&h=500&fit=crop" alt="alt text">`
- Use portrait for tall images (team photos, about section)
- Use squarish for avatars, thumbnails, gallery grids
- Fallback: `https://picsum.photos/seed/{keyword}/{width}/{height}`

LICENSING — MANDATORY, this is a licence obligation not a nicety:
- The ONLY permitted image sources are the Unsplash URLs returned by
  search-images.sh and the picsum.photos fallback below. Never hotlink an
  image found anywhere else, never copy a logo, product shot, storefront or
  person from the customer's existing site or from a competitor, and never
  invent an `images.unsplash.com` URL — a fabricated id 404s and an image we
  do not have a licence for is a legal problem shipped to a paying customer.
- Every Unsplash photo used MUST be credited on the page. Use the 3rd and 4th
  fields of the tool output verbatim — do not retype the photographer's name
  or guess their profile handle:
  `<a href="{photographer profile URL}" target="_blank" rel="noopener nofollow">{credit}</a>`
  A single small credit line per image (under the image, or in a caption) or
  one grouped "Photo credits" list in the footer both satisfy this. Style it
  quietly — small, muted colour — but it must be REAL text in the HTML, never
  an image, never `display:none`, and never only in a comment.
- Link Unsplash itself once in that credit area:
  `<a href="https://unsplash.com/?utm_source=deelabs&utm_medium=referral" target="_blank" rel="noopener nofollow">Unsplash</a>`



FOOTER BADGE — REQUIRED ON EVERY PAGE
Every site we build carries our mark. Put this in the footer, after the
customer's own copyright line. Paste the markup as-is and theme it with your
colour tokens and font — the link, the text and the `rel` are fixed:

```html
<a class="deelabs-badge" href="https://deelabs.co/?utm_source=client-site&utm_medium=badge"
   target="_blank" rel="noopener">Powered by DeeLabs</a>
```

- Style it QUIETLY: small (≈0.75rem), muted colour token, normal weight. It is
  a mark, not a CTA — it must never compete with the customer's own footer.
- It must be REAL text in the HTML. Never an image, never `display:none`,
  never `visibility:hidden`, never zero opacity or a 0px font. A hidden link
  is cloaking and gets the customer's domain penalised, which is far worse
  than no badge at all.
- Do NOT add `nofollow` here (unlike the image credits) — this is our own
  attribution link.
- One per page, in the footer only.

BEFORE YOU FINISH — self-check these and fix any issues:
- Open the file and visually scan: does every section have real content?
- Header block pasted VERBATIM, with brand/nav/CTA filled in and hrefs pointing
  at your real section ids — CSS unchanged
- Mobile (375px): no horizontal scroll, hamburger works, cards stack, text readable
- Thai text: no letter-spacing on Thai, line-height ≥ 1.8, buttons not clipping diacritics
- Grid/flex text tracks: `minmax(0,1fr)`/`min-width:0`, and every child of a
  multi-child grid has an explicit `grid-column` (also inside media queries).
  Scan the rendered page for any text running vertically one letter per line.
- Language switcher: TH/EN toggles all visible text, default is Thai
- Images: no broken src, all have alt text, fit their containers
- Image licensing: every image is from search-images.sh (or picsum fallback), and
  every Unsplash photo has a visible photographer credit linking to their profile
- DeeLabs badge: present in the footer, visible real text, links to deelabs.co
- Colour/font discipline: ONLY the 9 :root colour tokens + 2 font families used — no stray hex, no third font
