# CUP2EAT — Marketing Website Project Plan

> Single source of truth. All brand data, references, 3D requirements, and build plan live here so context is never lost.

---

## 1. Brand summary

**CUP2EAT — "Eat Your Drink."** India's edible, biodegradable cup brand. Pour chai / coffee / ice-cream / brownie into a 100 ml edible cup, drink it, then eat the cup. Zero waste.

- **Founder:** Varun Khera (BBA, JPEM College Ghaziabad). Won 1st — Entrepreneur Business Plan Competition (2025-11-14). Featured at **Startup Mahakumbh 2025**, Bharat Mandapam, New Delhi.
- **Model:** Primarily **B2B wholesale** (cafés, restaurants, events, caterers) + retail.
- **Instagram:** @cup2eat · **Threads:** @cup2eat

## 2. Contact & legal

| Field | Value |
|---|---|
| Phone / WhatsApp | **+91 98181 92575** |
| Email | **Varunkhera6@gmail.com** |
| FSSAI Reg. No. | **22725105002487** (valid to 2026-12-18) |
| Registered address | 1018-B, Nyay Khand-1, Indirapuram, Ghaziabad, UP – 201014 |
| Delivery | **Pan-India, free** |

## 3. Product line & pricing

- **Capacity:** 100 ml
- **Variants (4):** Chocolate · Vanilla · Elaichi · **Chocolate Coated** (premium)
- **Retail:** ₹20 / cup
- **Standard wholesale:** ₹3,999 / 396 cups (~₹10/cup)
- **Premium (Chocolate Coated) wholesale:** ₹4,000 / 200 cups (~₹20/cup)
- **Use cases:** Chai · Coffee · Ice-cream serves · **Brownies & desserts** · Events/catering

## 4. Brand voice & copy bank (from their own creatives)

- Primary tagline: **"Eat Your Drink"**
- Secondary: **"Small Sip. Big Change."** · **"Taste the Cup, Love the Experience!"**
- Mission lines: "Say no to plastic. Choose edible. Make every sip count for the planet." · "Eco-Friendly Food for a Better Tomorrow"
- Badges: **100% Edible · Pure Veg · Vegan Friendly · Eco Friendly · FSSAI Licensed**
- Pillars: Edible Cups · Real Flavours · A Greener Planet

## 5. Visual identity

- **Logo:** circular badge, stacked "CUP 2 EAT", deep forest green + metallic gold.
- **Palette:** forest green `#1C3B2E`, gold `#C8A24B`, cream `#F5EEE1`, cocoa `#3A2317`, leaf-green accent `#4A7C59`.
- **Cup look:** tapered Indian *kulhad* shape, biscuit/wafer texture, "CUP2EAT" embossed on the wall. Chocolate-coated variant = glossy dark-chocolate shell.

## 6. Reference images (saved in `docs/references/`)

- `ref-1.png` — Wholesale promo (₹3,999/396, 3 flavours, FSSAI, order no.)
- `ref-2.png` — IG profile (bio, highlights, founder, pinned posts)
- `ref-3.png` — FSSAI registration certificate (reg no., address)
- `ref-4.png` — Logo close-up (green + gold badge)
- `ref-5.png` — Diwali banner at event (4 flavours incl. Chocolate Coated, "Small Sip Big Change", icons)

---

## 7. 3D assets — what I need from you

Build with **Next.js + React Three Fiber**. I need **GLB** files (Meshy exports GLB/GLTF). Drop them here:

```
public/models/
  cup-base.glb            <- empty edible cup (hero, recolourable)
  cup-chocolate.glb       (optional per-variant; else I recolour cup-base)
  cup-vanilla.glb
  cup-elaichi.glb
  cup-chocolate-coated.glb <- glossy chocolate shell (distinct shape/material, so do this one for sure)
```

**Export settings in Meshy:** format **GLB**, with **PBR textures baked in**, keep polycount reasonable for web (ideally < 60k tris), object **centered** and **Y-up**. If possible, model the cup **empty** (no liquid) — I'll add drink/steam in-engine so one model serves all flavours.

**Minimum to unblock the build:** just **one** good `cup-base.glb` (empty edible cup). I can ship the whole site with that, recolour it per flavour in code, and swap in the chocolate-coated model later.

**Also send when ready:** logo file → `public/logo/logo.png` (or .svg), and any real product photos → `public/images/`.

---

## 8. Meshy prompts

### A. Base edible cup

**Image prompt** (generate the reference image first — Midjourney / Ideogram / DALL·E):
> A single edible biscuit-textured cup, tapered Indian kulhad shape, warm terracotta-brown baked-dough surface, the word "CUP2EAT" subtly embossed on the outer wall, empty interior, photographed at a 3/4 high angle showing both the inner rim and the outer side, perfectly centered on a pure seamless white background, soft even studio lighting, no harsh shadows, no other objects, no text overlay, sharp focus, entire object visible, product photography, 4k.

**Meshy text-to-3D prompt** (if going text-to-3D instead of image):
> A tapered edible wafer cup in an Indian kulhad shape, biscuit/cookie texture on the outer wall, smoother inner wall, slightly thick rounded rim, "CUP2EAT" embossed on the outside, hollow empty interior, realistic baked-dough PBR surface, single object, clean topology.

### B. Chocolate Coated cup (premium — model this one separately)

**Image prompt:**
> A single edible cup fully dipped in glossy dark chocolate, tapered kulhad shape, smooth shiny chocolate shell with subtle drip at the rim, empty interior, 3/4 high angle showing inner rim and outer wall, centered on a pure seamless white background, soft studio lighting, no other objects, no text, sharp product photo, full object visible, 4k.

**Meshy text-to-3D prompt:**
> A tapered kulhad-shaped edible cup fully coated in glossy dark chocolate, smooth reflective chocolate shell, slightly thick rounded rim with a soft chocolate drip, hollow empty interior, realistic PBR chocolate material, single object, clean topology.

### C. (Optional) Brownie-in-a-cup hero shot
> A chocolate-coated edible cup filled with a rich fudgy brownie topped with a drizzle, tapered kulhad shape, 3/4 angle, centered on white seamless background, soft studio lighting, appetising product photo, 4k. (Use for a dessert feature tile — static image is fine, 3D optional.)

**Tips for clean Meshy 3D:** one object only, plain white background, no props, no drop shadow, show the rim opening, fill the frame. Generate the image → run Meshy **Image to 3D** → export **GLB**.

---

## 9. Website structure (build order)

1. **Hero** — rotating 3D cup + steam, "Drink it. Then eat it.", CTAs: WhatsApp order / Bulk enquiry.
2. **Mission** — "Small Sip. Big Change." plastic → edible, waste counter.
3. **Flavours** — 4 variants, 3D cup each, hover to spin, ₹20 badge.
4. **Use cases** — Chai · Coffee · Ice-cream · Brownies/desserts · Events.
5. **For Businesses (B2B)** — wholesale tiers table, lead form → WhatsApp. (Primary revenue.)
6. **Trust** — FSSAI badge + reg no., 100% edible / veg / vegan / eco icons, Startup Mahakumbh, founder story.
7. **Social proof** — Instagram embed / feedback.
8. **Contact** — WhatsApp click-to-chat, phone, email, order form.

## 10. Build status

- [x] Next.js 14 + TS + Tailwind + App Router scaffolded
- [x] three / @react-three/fiber / @react-three/drei installed (React-18 compatible pins)
- [x] Reference images + plan saved
- [ ] Theme tokens (palette, fonts) in Tailwind + globals
- [ ] Procedural placeholder 3D cup (lathe geometry) until Meshy GLB arrives
- [ ] Build sections 1–8
- [ ] Swap placeholder → real GLB models
- [ ] Add logo + real photos
