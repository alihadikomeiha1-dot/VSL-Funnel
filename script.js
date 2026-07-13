// ============================================================
// Content data — mirrors the design handoff. First 3 video
// testimonials are sample content; the rest are placeholders.
// Feature/copy text is final; the images/videos are placeholders.
// ============================================================

const written = [
  { name: 'Dr. Sarah Mitchell', role: 'Cosmetic Dentist', quote: '"I was spending hours trying to figure out what content to post. Film Levant gave me a complete system. Now I have 22 reels monthly and my patient inquiries tripled in 3 months."' },
  { name: 'Michael Chen', role: 'Business Coach', quote: '"My content was getting zero engagement. After working with Ali, my profile became a client-generating machine. The strategy, filming, and editing are all handled. I just show up."' },
  { name: 'Dr. James Rodriguez', role: 'Orthopedic Surgeon', quote: '"I thought I didn\'t have time for content. Film Levant made it effortless. Professional filming, strategic content, and my authority in the market has skyrocketed."' },
  { name: 'Lisa Thompson', role: 'Financial Advisor', quote: '"I was invisible in my industry. Now I\'m seen as the go-to expert. The content system works, and I finally have predictable lead flow from Instagram."' },
  { name: 'David Park', role: 'Marketing Consultant', quote: '"I tried doing content myself for 2 years with mediocre results. In 4 months with Film Levant, I\'ve generated more clients than the previous 2 years combined."' },
  { name: 'Dr. Amanda Foster', role: 'Dermatologist', quote: '"The professionalism and strategy behind every piece of content is what sets Film Levant apart. My patients now find me online before I even advertise."' },
  { name: 'Robert Williams', role: 'Executive Coach', quote: '"I was skeptical about investing in content production. But after seeing competitors dominate with video, I knew I needed help. Film Levant didn\'t just film content—they transformed my entire positioning. My profile went from amateur to authority. I went from chasing clients to having them reach out to me. The ROI has been 10x what I invested."' },
];

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
  { name: 'Dr. Emily Watson', result: 'Went from 0 to 50K followers in 6 months' },
  { name: 'Dr. Emily Watson', result: 'Generated $120K in new clients' },
  { name: 'Dr. Emily Watson', result: 'Became the #1 authority in her niche' },
];
while (videos.length < 15) videos.push({ name: 'Client Name', result: 'Their result in one line' });

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

set('written-list', written.map((w) => `
  <div class="written__card">
    <div class="written__head">
      <div class="written__avatar" data-placeholder="avatar"></div>
      <div>
        <div class="written__name">${esc(w.name)}</div>
        <div class="written__role">${esc(w.role)}</div>
      </div>
    </div>
    <p class="written__quote">${esc(w.quote)}</p>
  </div>`).join(''));

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
  <div class="testimonial">
    <div class="testimonial__video" data-placeholder="testimonial-video">
      <div class="testimonial__video-center">
        <div class="play-btn play-btn--sm"><span class="play-btn__triangle play-btn__triangle--sm"></span></div>
      </div>
      <div class="sound-pill sound-pill--sm"><span class="dot dot--sm"></span>Enable sound</div>
    </div>
    <div>
      <div class="testimonial__name">${esc(v.name)}</div>
      <div class="testimonial__result">${esc(v.result)}</div>
    </div>
  </div>`).join(''));

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
