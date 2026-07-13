# Film Levant — Go Live Checklist

Everything the visitor-facing page needs is **built and tested**. What's left is
(1) pasting your IDs into `config.js`, (2) pushing to GitHub, (3) deploying on
Vercel, (4) pointing your domain, and (5) wiring Agenci.io. Do the phases in
order. Every ID you collect goes into **one file: `config.js`**.

The page that goes live is this `full/` folder:
```
full/
├─ index.html        ← the landing page
├─ thank-you.html    ← confirmation page (greets by ?name=)
├─ config.js         ← ★ the ONLY file you edit for integrations
├─ styles.css
└─ script.js
```

---

## config.js — the one file you edit

```js
window.GTM_ID = "";                       // Phase 4  → "GTM-XXXXXXX"
window.SITE = {
  pixelId: "",                            // Phase 3  → a number
  agenciWebhook: "",                      // Phase 1  → Agenci Inbound Webhook URL
  agenciTracking: { src: "https://api.agenci.io/js/external-tracking.js",
                    id: "" },             // Phase 2  → External Tracking id
  thankYouUrl: "thank-you.html"
};
```
The page runs fine with blanks — each tracker simply stays off until its value
is filled. You can paste them in any time and redeploy.

---

## ★ Exact strings the form sends (must match Agenci EXACTLY)

The "What best describes you?" chips submit these literal values. If you build
Agenci workflow conditions on them, match character-for-character:

- `Doctor`
- `Coach`
- `Consultant`
- `Agency Owner`
- `Other Professional`

The lead JSON posted to Agenci looks like:
```json
{
  "firstName": "Jane",
  "email": "jane@example.com",
  "phone": "+96171234567",
  "instagram": "@jane",
  "describes": "Coach",
  "source": "Landing Page",
  "submittedAt": "2026-07-13T09:00:00.000Z",
  "pageUrl": "https://yourdomain.com/"
}
```

---

## Phase 1 — Agenci.io: capture the lead (Inbound Webhook)

1. Agenci.io → **Automation → Workflows → Create Workflow**.
2. Trigger → **Inbound Webhook** → **copy the generated URL**.
3. Paste it into `config.js` → `SITE.agenciWebhook`.
4. Send one test so Agenci learns the field names — easiest is to deploy first
   and submit the live form once, **or** run this from a terminal:
   ```bash
   curl -X POST "<YOUR_WEBHOOK_URL>" -H "Content-Type: application/json" \
     -d '{"firstName":"Test","email":"test@example.com","phone":"+96171234567","instagram":"@test","describes":"Coach","source":"Landing Page"}'
   ```
5. Back in the trigger, click **Fetch Sample Request** so the fields appear.
6. Add action → **Create/Update Contact** and map:

   | JSON field | Contact field |
   |---|---|
   | `firstName` | First Name |
   | `email` | Email |
   | `phone` | Phone |
   | `instagram` | custom field "Instagram handle" |
   | `describes` | tag or custom field |
   | `source` | Source |

7. **Save & turn the workflow ON.**

---

## Phase 2 — Agenci.io: External Tracking

1. Agenci.io → **Settings → Business Profile → External Tracking**.
2. Copy the **`data-tracking-id`** (and confirm the `src`).
3. Paste the id into `config.js` → `SITE.agenciTracking.id`.
   (The form already has `id="opt-in-form"` and `name="Opt-in Form"` so Agenci
   labels it correctly instead of "Unidentified Form".)

---

## Phase 3 — Meta Pixel

1. business.facebook.com → **Events Manager** → your Pixel → copy the **Pixel ID**.
2. Paste it into `config.js` → `SITE.pixelId`.
   Already wired: `PageView` (load) · `InitiateCheckout` (modal opens) ·
   `Lead` (thank-you page).

---

## Phase 4 — Google Tag Manager

1. tagmanager.google.com → your container → copy the **container ID** (`GTM-XXXXXXX`).
2. Paste it into `config.js` → `GTM_ID`.
   The page already pushes to `dataLayer`: `begin_checkout` (modal opens),
   `generate_lead` (submit; includes `lead_type`), `lead_confirmed` (thank-you).
3. In GTM, build a Tag with **Trigger → Custom Event → `generate_lead`**
   (or `lead_confirmed`), then **Submit / Publish**.

---

## Phase 5 — Push to GitHub

**Option A — CLI (from this folder):**
```bash
cd "full"
git init
git add .
git commit -m "Film Levant landing page"
git branch -M main
git remote add origin https://github.com/<you>/film-levant-landing.git
git push -u origin main
```
(Create the empty repo first at github.com → **New repository**, keep it Private.)

**Option B — drag & drop:** create the repo on github.com → **uploading an
existing file** → drag in `index.html`, `thank-you.html`, `config.js`,
`styles.css`, `script.js` → **Commit**.

> Deploying only the `full/` folder means `index.html` sits at the repo root, so
> Vercel serves it at your domain root.

---

## Phase 6 — Deploy on Vercel

1. vercel.com → **Add New → Project → Import** your repo.
2. Framework Preset: **Other**. No build command; output = root.
   *(If you pushed the whole project instead of just `full/`, set
   **Root Directory = `full`** here.)*
3. **Deploy.** In ~30–60s it's live at a `*.vercel.app` URL — open it and submit
   the form once to confirm the full flow works.

> After every future change: push to GitHub → Vercel auto-redeploys (~60s) →
> hard-refresh (Ctrl/Cmd+Shift+R) to beat the cache.

---

## Phase 7 — Connect your domain

1. Vercel project → **Settings → Domains** → add your domain (e.g.
   `filmlevant.com` + `www.filmlevant.com`, or a subdomain like
   `join.filmlevant.com`).
2. At your registrar's DNS, add exactly what Vercel shows:
   - **Apex** (`filmlevant.com`) → **A record** to Vercel's IP.
   - **`www` / subdomain** → **CNAME** to the value Vercel shows.
3. Leave nameservers at your registrar. Wait a few minutes → Vercel flips the
   domain to **Valid** and issues **SSL** automatically.
4. *(Optional)* add `www` → **Redirect to** the apex (308) so both work.

---

## Phase 8 — Verify domain in Meta (recommended)

Events Manager → **Brand Safety → Domains** → add your domain → verify via the
**DNS TXT** method (add the TXT record at your registrar).

---

## Phase 9 — Automated follow-up (Agenci.io)

In the Phase-1 workflow (or a new one triggered by the new contact/tag), add a
**WhatsApp or SMS** message that fires on submission — greet by first name,
confirm you'll reach out to schedule the call. Keep it short and personal.

---

## Final end-to-end test

- [ ] `config.js` filled: webhook, pixelId, agenciTracking.id, GTM_ID
- [ ] Chip values match Agenci workflow conditions exactly
- [ ] Live URL opens; every "Book Your Strategy Call" opens the modal
- [ ] Submit a real test → **contact appears in Agenci.io**
- [ ] Redirects to `thank-you.html?name=…` and greets by name
- [ ] Meta Events Manager (Test Events) shows PageView + Lead
- [ ] GTM Preview shows `generate_lead` / `lead_confirmed`
- [ ] Custom domain = **Valid** with SSL; Meta domain verified
- [ ] Follow-up WhatsApp/SMS received

---

## Still placeholders (swap when you have the assets)

- Hero **VSL video** — replace the striped box in `index.html` ("paste your VSL
  embed here") with your video/iframe embed.
- **15 testimonial videos** + names/results — in `script.js` (`videos` array).
- **Problem / feature images** and section imagery.
- **Ali Komeiha portrait** — the striped box in the founder section.
- Written testimonials copy is already real; edit in `script.js` if needed.
