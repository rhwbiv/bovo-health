# Bovo Health — Next.js App

**Strong teams. Stronger communities.**

Employer-funded wellness marketplace with a virtual Visa card and a 3% clinic fund that covers free preventive cancer screenings for underserved patients.

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Inline CSS with CSS custom properties |
| Auth | Supabase Auth (to be wired) |
| Database | Supabase Postgres |
| Card issuing | Stripe Issuing |
| Hosting | Vercel |

---

## Project structure

```
src/
  app/
    page.tsx              ← Landing (public)
    login/page.tsx        ← Login
    onboarding/page.tsx   ← Employee sign-up
    dashboard/page.tsx    ← Employee dashboard
    marketplace/page.tsx  ← Wellness marketplace
    hr-dashboard/page.tsx ← Employer HR dashboard
    claims/page.tsx       ← Claims & reimbursement
    pricing/page.tsx      ← Pricing
    about/page.tsx        ← About / mission
  components/
    BovoLogo.tsx          ← Logo mark + wordmark
    PublicNav.tsx         ← Sticky marketing nav
    AppSidebar.tsx        ← Employee + employer sidebar
  styles/
    globals.css           ← Bovo design system CSS variables
```

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

---

## Deploy to Vercel

```bash
# Option A — Vercel CLI
npm i -g vercel
vercel

# Option B — GitHub
# Push to GitHub → import at vercel.com/new → auto-detected as Next.js
```

### Environment variables to add in Vercel dashboard

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
CLINIC_FUND_RATE=0.03
```

---

## Brand design system

| Token | Value |
|---|---|
| `--slate` | `#2A4A6B` |
| `--coral` | `#E8603C` |
| `--ink` | `#1A2D3D` |
| `--green` | `#3B6D11` |
| Display font | Playfair Display (700) |
| Body font | Plus Jakarta Sans (300–600) |

---

## Clinic fund model

- **3%** of every eligible employee card transaction is auto-routed to the clinic partner fund
- Disbursed monthly via ACH to vetted clinic partners
- Physicians decide who receives free preventive cancer screenings
- No employee health data is ever accessed or analysed by Bovo

---

## Webhook handler

See `webhook-handler.js` in the root of the parent package.
Handles Stripe Issuing card transactions, routes clinic fund, updates balances in real time.

---

## Pending to-dos

- [ ] Wire Supabase auth into login/onboarding pages
- [ ] Connect Stripe Issuing for virtual card provisioning
- [ ] Set up webhook handler as a Next.js API route at `/api/webhooks/card-transaction`
- [ ] Build out public Impact Dashboard (fund totals, screenings funded)
- [ ] Employer impact report feature
- [ ] Register domain: bovohealth.com or bovo.health
- [ ] File USPTO trademark (Class 44 + Class 36) for BOVO
