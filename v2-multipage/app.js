
(function(){var K='site-lang',L=localStorage.getItem(K)||'th';function S(l){L=l;localStorage.setItem(K,l);document.documentElement.lang=l;document.querySelectorAll('[data-lang-th]').forEach(function(e){var t=e.getAttribute('data-lang-'+l);if(t!==null){if(/[<&]/.test(t)){e.innerHTML=t}else{e.textContent=t}}});var lb=document.querySelector('.lang-sw__label');if(lb){lb.textContent=l.toUpperCase()}}var sw=document.querySelector('.lang-sw');if(sw){sw.addEventListener('click',function(){S(L==='th'?'en':'th')});sw.style.cursor='pointer'}if(L!=='th'){S(L)}})();

// header scroll + hamburger
(function(){
  var header=document.getElementById('siteHeader');
  /* sub-pages have no hero, so the first section needs to clear this header */
  function measureHeader(){
    document.documentElement.style.setProperty('--hdr-h', Math.ceil(header.getBoundingClientRect().height)+'px');
  }
  measureHeader();
  window.addEventListener('resize', measureHeader);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(measureHeader);
  window.addEventListener('scroll',function(){
    if(window.scrollY>10){header.classList.add('scrolled');}else{header.classList.remove('scrolled');}
  });
  var btn=document.getElementById('hamburgerBtn');
  var nav=document.getElementById('siteNav');
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
    if(window.lucide && lucide.createIcons) lucide.createIcons();  /* CDN may be blocked */
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click',function(){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded','false');
      btn.innerHTML='<i data-lucide="menu"></i>';
      if(window.lucide && lucide.createIcons) lucide.createIcons();  /* CDN may be blocked */
    });
  });
})();

// reveal on scroll
(function(){
  var els=document.querySelectorAll('.reveal');
  function showAll(){els.forEach(function(el){el.classList.add('in-view');});}
  if(typeof IntersectionObserver==='undefined'){showAll();return;}
  var delivered=0;
  var io=new IntersectionObserver(function(entries){
    delivered+=entries.length;
    entries.forEach(function(entry){
      if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target);}
    });
  },{threshold:0.15});
  els.forEach(function(el){io.observe(el);});
  /* a working observer always delivers an initial entry per target; if none
     arrives the content would stay invisible, so reveal it unconditionally */
  setTimeout(function(){if(delivered===0)showAll();},1500);
})();

if(window.lucide && lucide.createIcons) lucide.createIcons();  /* CDN may be blocked */
