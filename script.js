// ============================================================
// Content data — mirrors the design handoff. First 3 video
// testimonials are sample content; the rest are placeholders.
// Feature/copy text is final; the images/videos are placeholders.
// ============================================================

const problems = [
  { title: "You're Posting But Nobody's Watching", body: "You create content consistently, but your reach is declining, engagement is non-existent, and you're not getting any client inquiries.", bullets: ['Your Content looks amateur compared to competitions', 'You have no clear strategy or messaging', "You're wasting hours filming with zero ROI"] },
  { title: 'Your Competitors Are Winning', body: "Less skilled professionals are stealing your clients simply because they're more visible online. You know you're better, but nobody sees you.", bullets: ['They dominate search results and social feeds', "They're perceived as the authority in your niche", 'Clients choose them first because of their content'] },
  { title: "You Don't Have Time to Figure It Out", body: "Between running your business and serving clients, you don't have time to learn filming, editing, strategy, and algorithms.", bullets: ['Conflicting advice online leaves you confused', "You've tried multiple approaches with no result", 'You need a partner who handles everything A to Z'] },
];

const compare = [
  { old: 'Posting random content hoping something sticks', ours: 'Strategic content plan based on your ICP and goals' },
  { old: 'Filming yourself with poor lighting and audio', ours: 'Professional filming with cinema-quality production' },
  { old: 'Spending hours editing and still looking amateur', ours: 'Expert editing that makes you look like an authority' },
  { old: 'Inconsistent posting that kills your momentum', ours: '22 reels + 8 carousels delivered monthly like clockwork' },
  { old: 'No clear messaging or positioning', ours: 'Crystal-clear offer and profile optimization' },
  { old: 'Guessing what content will work', ours: 'Data-driven strategy and proven frameworks' },
  { old: 'Wasting time learning algorithms and trends', ours: 'We handle everything while you focus on your business' },
  { old: 'Getting zero client inquiries from content', ours: 'Predictable lead flow and authority positioning' },
];

const videos = [
  { id: 'Q2ia-DrBbCk', name: 'Shirine', role: 'Founder of Synthe Label', country: 'Lebanon', flag: '🇱🇧', result: 'Gained 12,000 followers in ~3 months' },
  { id: 'rxw_T8n-hL8', name: 'Nour El Boubou', role: 'Founder of a Souvenir Brand', country: 'Lebanon', flag: '🇱🇧', result: 'Built a recognizable souvenir brand through Film Levant\'s content system' },
  { id: 'yOzWALWUTGI', name: 'Mariam Ayach', role: 'PhD in Biochemistry', country: 'Lebanon', flag: '🇱🇧', result: 'Grew from scratch to nearly 500,000 followers' },
  { id: 'FeKmsaKkG7o', name: 'Mariam', role: 'Dentist', country: 'Tripoli, Lebanon', flag: '🇱🇧', result: 'Built a stronger personal brand and online presence through strategic content' },
  { id: 'me_10Nio1g8', name: 'Wafaa', role: 'Pharmacist', country: 'Lebanon', flag: '🇱🇧', result: 'Grew from scratch to nearly 250,000 followers and built two successful businesses' },
  { id: 'OTY1BiaYH_I', name: 'Dr. Ali Moghniyeh', role: 'Doctor & Entrepreneur', country: 'Lebanon', flag: '🇱🇧', result: 'Grew from scratch to 110,000 followers and built the successful ONAD brand' },
];

const aliStats = [
  { value: '22', label: 'Reels Filmed Monthly' },
  { value: '8', label: 'Carousels Monthly' },
  { value: 'A–Z', label: 'Done-With-You' },
  { value: 'Dozens', label: 'Experts Scaled' },
];

const steps = [
  { n: '1', title: 'Profile & Strategy Audit', body: 'We analyze your current positioning, optimize your profile, refine your ICP, and create a custom content strategy designed to attract your ideal clients.' },
  { n: '2', title: 'Content Planning & Scripting', body: 'We ideate, script, and storyboard all your content for the month. Every piece is strategically designed to build authority and generate leads' },
  { n: '3', title: 'Professional Filming', body: 'You show up for shooting sessions. We handle all the filming with professional equipment, lighting, and direction. Quick, easy, and stress-free.' },
  { n: '4', title: 'Editing & Publishing', body: 'We edit all your content to perfection and publish it strategically. You get 22 reels and 8 carousels delivered monthly, building your authority consistently.' },
];

const notFor = [
  'Are serious about building authority and visibility in their industry',
  'Understand that content is the #1 driver of trust and client acquisition',
  'Want a done-with-you system, not another DIY course',
  'Are ready to commit to 4 months of consistent execution',
  'Value professional quality and strategic positioning',
];

const guarantee = [
  "We've helped dozens of experts transform their authority through strategic content",
  'Our system is proven across doctors, coaches, consultants, and professionals',
  "We handle everything A to Z, so there's no guesswork or execution gaps",
];

const qualify = [
  { n: '01', title: 'Book Your Strategy Call', body: "Schedule a free consultation where we'll analyze your current situation, discuss your goals, and determine if Film Levant is the right fit for you." },
  { n: '02', title: 'Custom Strategy Session', body: "If we're a fit, we'll create a custom content strategy tailored to your niche, ICP, and business goals. You'll see exactly how we'll transform your authority." },
  { n: '03', title: 'Onboarding & Launch', body: "We'll optimize your profile, plan your first month of content, and schedule your first filming session. Within 30 days, you'll have professional content going live." },
];

const pathA = [
  { label: 'Month 1', body: 'You spend hours researching what content to create. You film a few videos that get minimal views. Your competitors continue to dominate' },
  { label: 'Month 3', body: "You're frustrated. You've tried multiple strategies with no results. Your reach is declining. You're still invisible to your ideal clients" },
  { label: 'Month 6', body: "You've wasted 6 months and countless hours. Your competitors have grown exponentially. You're further behind than when you started. The cycle continues" },
];
const pathB = [
  { label: 'Month 1', body: 'Your profile is optimized. Your first batch of professional content goes live. You start getting comments like "I\'ve been looking for someone like you." Inquiries begin' },
  { label: 'Month 3', body: 'You have 66 reels and 24 carousels published. Your visibility has exploded. Clients are reaching out saying they found you on Instagram. Your authority is undeniable' },
  { label: 'Month 6', body: "You're recognized as a leader in your industry. Your content generates predictable leads. You've built a sustainable authority brand that works 24/7. Growth is inevitable" },
];

// ============================================================
// Rendering helpers
// ============================================================
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

set('problem-list', problems.map((p) => `
  <div class="problem__card">
    <div class="problem__img" data-placeholder="image"><span class="img-hint">image</span></div>
    <div class="problem__body">
      <h3 class="problem__title">${esc(p.title)}</h3>
      <p class="problem__text">${esc(p.body)}</p>
      <div class="problem__bullets">
        ${p.bullets.map((b) => `<div class="problem__bullet"><span class="x">✕</span><span>${esc(b)}</span></div>`).join('')}
      </div>
    </div>
  </div>`).join(''));

set('compare-old', compare.map((c) => `
  <div class="compare__row compare__row--old"><span class="compare__icon compare__icon--old">✕</span><span>${esc(c.old)}</span></div>`).join(''));
set('compare-new', compare.map((c) => `
  <div class="compare__row compare__row--new"><span class="compare__icon compare__icon--new">✓</span><span>${esc(c.ours)}</span></div>`).join(''));

set('video-list', videos.map((v) => `
  <article class="vcard" data-video="${v.id}" role="button" tabindex="0" aria-label="Play ${esc(v.name)}'s video testimonial">
    <div class="vcard__thumb">
      <img class="vcard__img" src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="${esc(v.name)} testimonial" loading="lazy">
      <span class="vcard__play"><span class="play-btn play-btn--sm"><span class="play-btn__triangle play-btn__triangle--sm"></span></span></span>
    </div>
    <div class="vcard__body">
      <div class="vcard__stars" aria-label="Rated 5 out of 5">★★★★★</div>
      <div class="vcard__name">${esc(v.name)}</div>
      <div class="vcard__role">${esc(v.role)}</div>
      <div class="vcard__result">${esc(v.result)}</div>
      <span class="vcard__country">${v.flag} ${esc(v.country)}</span>
    </div>
  </article>`).join(''));

set('stats-list', aliStats.map((s) => `
  <div class="stat"><div class="stat__value">${esc(s.value)}</div><div class="stat__label">${esc(s.label)}</div></div>`).join(''));

set('steps-list', steps.map((s) => `
  <div class="step">
    <div class="step__num">${esc(s.n)}</div>
    <h3 class="step__title">${esc(s.title)}</h3>
    <p class="step__body">${esc(s.body)}</p>
  </div>`).join(''));

set('notfor-list', notFor.map((n) => `
  <div class="notfor__item"><span class="check">✓</span><span>${esc(n)}</span></div>`).join(''));

set('guarantee-list', guarantee.map((g) => `
  <div class="check-row"><span class="check">✓</span><span>${esc(g)}</span></div>`).join(''));

set('qualify-list', qualify.map((q) => `
  <div class="qualify__card">
    <div class="qualify__num">${esc(q.n)}</div>
    <h3 class="qualify__title">${esc(q.title)}</h3>
    <p class="qualify__body">${esc(q.body)}</p>
  </div>`).join(''));

set('path-a', pathA.map((m) => `
  <div class="paths__block paths__block--a">
    <div class="paths__label paths__label--a">${esc(m.label)}</div>
    <p class="paths__text paths__text--a">${esc(m.body)}</p>
  </div>`).join(''));
set('path-b', pathB.map((m) => `
  <div class="paths__block paths__block--b">
    <div class="paths__label paths__label--b">${esc(m.label)}</div>
    <p class="paths__text paths__text--b">${esc(m.body)}</p>
  </div>`).join(''));

// ============================================================
// Booking modal + lead capture
//  - opens on any "Book Your Strategy Call" CTA (href="#book-a-call")
//  - validates, POSTs the lead JSON to the Agenci.io webhook,
//    then redirects to thank-you.html?name=<FirstName>
//  - fires Meta Pixel + dataLayer conversion events
// ============================================================
(function () {
  const SITE = window.SITE || {};
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  const form = document.getElementById('opt-in-form');
  const errBox = document.getElementById('form-error');
  const phoneInput = document.getElementById('f-phone');
  const chipWrap = document.getElementById('chips-describes');
  let iti = null, selectedDescribes = '';

  // intl-tel-input: auto country detect, live formatting, E.164 on submit
  if (window.intlTelInput && phoneInput) {
    iti = window.intlTelInput(phoneInput, {
      initialCountry: 'auto',
      geoIpLookup: (cb) => fetch('https://ipapi.co/json/')
        .then((r) => r.json())
        .then((d) => cb(d && d.country_code ? d.country_code : 'lb'))
        .catch(() => cb('lb')),
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
    });
  }

  function openBooking() {
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (window.fbq && SITE.pixelId) fbq('track', 'InitiateCheckout');
    (window.dataLayer = window.dataLayer || []).push({ event: 'begin_checkout' });
    const first = document.getElementById('f-first');
    if (first) setTimeout(() => first.focus(), 50);
  }
  function closeBooking() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.addEventListener('click', (e) => {
    const cta = e.target.closest('a[href="#book-a-call"]');
    if (cta) { e.preventDefault(); openBooking(); return; }
    if (e.target.closest('[data-close]')) closeBooking();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeBooking();
  });

  // single-select chips
  if (chipWrap) {
    chipWrap.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      chipWrap.querySelectorAll('.chip').forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      selectedDescribes = chip.getAttribute('data-value');
    });
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = form.firstName.value.trim();
    const email = form.email.value.trim();
    let instagram = form.instagram.value.trim();
    const missing = [];

    if (!firstName) missing.push('First name');

    let phone = '';
    if (iti) {
      const hasUtils = typeof iti.isValidNumber === 'function';
      if (!phoneInput.value.trim() || (hasUtils && !iti.isValidNumber())) missing.push('a valid Phone number');
      else phone = iti.getNumber() || phoneInput.value.trim();
    } else if (!phoneInput.value.trim()) {
      missing.push('Phone');
    } else {
      phone = phoneInput.value.trim();
    }

    if (!email || !emailRe.test(email)) missing.push('a valid Email');
    if (!instagram) missing.push('Instagram handle');
    if (!selectedDescribes) missing.push('What best describes you');

    if (missing.length) {
      errBox.hidden = false;
      errBox.textContent = '⚠️ Please add: ' + missing.join(', ');
      errBox.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      return;
    }
    errBox.hidden = true;
    if (instagram[0] !== '@') instagram = '@' + instagram;

    const payload = {
      firstName,
      email,
      phone,
      instagram,
      describes: selectedDescribes,
      source: 'Landing Page',
      submittedAt: new Date().toISOString(),
      pageUrl: location.href,
    };

    // conversion event for GTM triggers
    (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', lead_type: selectedDescribes });

    const btn = form.querySelector('.form-submit');
    if (btn) { btn.disabled = true; btn.textContent = 'Booking…'; }

    let navigated = false;
    const go = () => {
      if (navigated) return;
      navigated = true;
      // hand the lead to the survey as URL params → survey/calendar prefill (sticky contact)
      const q = new URLSearchParams({
        first_name: firstName,
        email: email,
        phone: phone,
        instagram: instagram,
        describes: selectedDescribes,
      });
      location.href = (SITE.surveyUrl || 'survey.html') + '?' + q.toString();
    };

    // POST to Agenci.io — never let a slow/failed webhook block the booking
    if (SITE.agenciWebhook) {
      const ctrl = ('AbortController' in window) ? new AbortController() : null;
      const timer = setTimeout(() => { if (ctrl) ctrl.abort(); go(); }, 3000);
      fetch(SITE.agenciWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: ctrl ? ctrl.signal : undefined,
        keepalive: true,
      }).then(() => { clearTimeout(timer); go(); })
        .catch(() => { clearTimeout(timer); go(); });
    } else {
      go();
    }
  });
})();

// ============================================================
// Smooth reveal-on-scroll (safe: content stays visible if JS/IO absent)
// ============================================================
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const reveal = (el) => el.classList.remove('reveal--pre');
  const inView = (el) => { const r = el.getBoundingClientRect(); return r.top < innerHeight * 0.92 && r.bottom > 0; };
  els.forEach((el) => el.classList.add('reveal--pre'));
  // reveal anything already on screen right away (no wait)
  els.forEach((el) => { if (inView(el)) reveal(el); });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((el) => { if (el.classList.contains('reveal--pre')) io.observe(el); });
  // failsafe: never leave content hidden if the observer never fires
  setTimeout(() => els.forEach(reveal), 3000);
})();

// ============================================================
// Premium VSL player — click-to-load YouTube/Vimeo facade
// ============================================================
(function () {
  const player = document.querySelector('.vsl-player');
  if (!player) return;
  const btn = player.querySelector('.vsl-player__btn');
  const hint = player.querySelector('.vsl-player__hint');
  const raw = (window.SITE && window.SITE.vslEmbed) || '';
  const src = toEmbedUrl(raw);
  if (src && hint) hint.style.display = 'none';
  if (!btn) return;
  player.addEventListener('click', () => {
    if (!src) { player.classList.add('vsl-player--empty'); return; }
    const frame = document.createElement('div');
    frame.className = 'vsl-player__frame';
    const iframe = document.createElement('iframe');
    iframe.src = src;
    iframe.title = 'Film Levant — Watch How We Build Industry Authority';
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('allowfullscreen', '');
    frame.appendChild(iframe);
    player.innerHTML = '';
    player.appendChild(frame);
  });

  function toEmbedUrl(v) {
    v = String(v || '').trim();
    if (!v) return '';
    if (/youtube\.com\/embed\/|player\.vimeo\.com\/video\//.test(v)) return v + (v.includes('?') ? '&' : '?') + 'autoplay=1';
    let m;
    if ((m = v.match(/(?:youtu\.be\/|[?&]v=|youtube\.com\/shorts\/)([\w-]{11})/))) return 'https://www.youtube.com/embed/' + m[1] + '?autoplay=1&rel=0';
    if (/^[\w-]{11}$/.test(v)) return 'https://www.youtube.com/embed/' + v + '?autoplay=1&rel=0';
    if ((m = v.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return 'https://player.vimeo.com/video/' + m[1] + '?autoplay=1';
    if (/^\d+$/.test(v)) return 'https://player.vimeo.com/video/' + v + '?autoplay=1';
    return '';
  }
})();

// ============================================================
// Video testimonial lightbox — click a card to play the video
// ============================================================
(function () {
  const grid = document.getElementById('video-list');
  if (!grid) return;
  let lb = null;

  function build() {
    lb = document.createElement('div');
    lb.className = 'vlb';
    lb.innerHTML =
      '<div class="vlb__backdrop" data-vclose></div>' +
      '<button class="vlb__close" type="button" data-vclose aria-label="Close video">&times;</button>' +
      '<div class="vlb__frame"></div>';
    document.body.appendChild(lb);
    lb.addEventListener('click', (e) => { if (e.target.closest('[data-vclose]')) close(); });
  }
  function open(id) {
    if (!lb) build();
    lb.querySelector('.vlb__frame').innerHTML =
      '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0&playsinline=1" title="Video testimonial" ' +
      'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    if (!lb) return;
    lb.classList.remove('is-open');
    lb.querySelector('.vlb__frame').innerHTML = ''; // stop playback
    document.body.style.overflow = '';
  }

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.vcard[data-video]');
    if (card) open(card.getAttribute('data-video'));
  });
  grid.addEventListener('keydown', (e) => {
    const card = e.target.closest('.vcard[data-video]');
    if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); open(card.getAttribute('data-video')); }
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
