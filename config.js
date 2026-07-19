/* ============================================================================
   FILM LEVANT — SITE CONFIG   ← THIS IS THE ONLY FILE YOU EDIT FOR INTEGRATIONS
   Loaded by BOTH index.html and thank-you.html. Fill each value in as you
   collect it (the page works with blanks — trackers just stay off until set).
   ============================================================================ */

// Google Tag Manager container id, e.g. "GTM-XXXXXXX"  (Phase 5)
window.GTM_ID = "GTM-KK2P9ZDR";

window.SITE = {
  // Meta Pixel ID — a number, e.g. "1234567890"  (Phase 3)
  pixelId: "2115976189199858",

  // Agenci.io Inbound Webhook URL — the form POSTs the lead JSON here  (Phase 2)
  // e.g. "https://api.agenci.io/webhooks/inbound/abc123..."
  agenciWebhook: "https://services.leadconnectorhq.com/hooks/hj1YDq6Ep2wSH4nrh7iU/webhook-trigger/880bd087-13d1-4179-b6d0-020b9b2d540b",

  // Agenci.io External Tracking — copy the src + tracking id from
  // Agenci.io → Settings → Business Profile → External Tracking  (Phase 4)
  agenciTracking: {
    src: "https://filmlevant.com/js/external-tracking.js",
    id: "tk_0393281de65a409088ca0a78c8be38ae"
  },

  // After the opt-in form submits, send the lead to the survey.
  surveyUrl: "survey",

  // Post-booking confirmation page (Agenci calendar redirects here after booking).
  thankYouUrl: "thank-you"
};

window.dataLayer = window.dataLayer || [];
