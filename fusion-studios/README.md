# Fusion Studios — Premium Website

## Image paths
Add your own images using these exact paths/names:

```text
fusion-studios/
└── assets/
    ├── logo.png
    ├── hero.jpg
    ├── experience.jpg
    └── gallery/
        ├── gallery-01.jpg
        ├── gallery-02.jpg
        ├── gallery-03.jpg
        └── gallery-04.jpg
```

### Logo
The navigation logo is loaded from:

`assets/logo.png`

The footer uses the same file. A transparent PNG or WebP-style logo with clean edges works best. Keep the logo artwork itself free of a large rectangular background so it sits naturally on the dark page.

## Colour theory used
The visual system is built around a **dark neutral + warm analogous luxury accent + warm complementary energy accent**:

- **Near-black `#090909`** — dominant neutral. Creates depth, contrast and a premium editorial/spa atmosphere.
- **Gold `#F2B84B`** — primary accent. Gold reads as warmth, craftsmanship, indulgence and premium service. It is used for important emphasis, headings, rating, borders and primary booking actions.
- **Red `#E11920`** — secondary accent. Red adds energy and urgency without taking over the dark canvas. It is used for hover states, review details, service links, marquee accents and secondary CTAs.
- **Warm ivory `#F3EFE7`** — softer reading colour than pure white. This keeps large typography luxurious and less clinical.

### Why this works
Black gives the page visual weight. Gold attracts attention and communicates luxury. Red creates contrast and movement. Keeping the red area smaller than the black/gold areas prevents the page from feeling aggressive or inexpensive.

## Suggested colour ratios
A good starting point for future design additions:

- **65–75%** near-black / charcoal
- **15–20%** warm ivory / neutral text
- **8–12%** gold
- **3–6%** red

Use red sparingly. If too much red is added, it will compete with the gold and reduce the premium feel.

## Future colour suggestions
If you want to tune the brand later:

### More luxury / understated
- Black: `#080808`
- Champagne: `#D6A85C`
- Burgundy: `#7E1016`
- Ivory: `#F2EDE4`

### More bold / fashion-forward
- Black: `#050505`
- Bright gold: `#F6C65B`
- Signal red: `#F01E2B`
- Soft white: `#FFF9F0`

### More spa / softer
- Charcoal: `#101010`
- Muted brass: `#C49A55`
- Deep wine: `#64151A`
- Cream: `#EFE8DD`

## Interaction notes
- The cursor uses `mix-blend-mode: difference` so it remains visible over the dark imagery.
- The navigation no longer uses negative blending, so the **Book appointment** button stays bold, gold and readable.
- The marquee is a seamless horizontal loop using duplicated content groups.
- Service cards have spacing, rounded corners, subtle lift, shadow and border transitions.
- The floating Fusion Feel note stays horizontal and gently scales in/out.
- Reviews use individual cards with Google-review labels, stars, quote hierarchy and reviewer information.
- Scroll reveals and hover effects can be reduced automatically with `prefers-reduced-motion`.

## Business information used
Fusion Studios — Srishti Harmony 3, Shop No. 6, Ground Floor, C Wing, III, Saki Vihar Rd, Powai, Mumbai, Maharashtra 400072.
Phone: 07738 780223.
Displayed rating: 4.9 / 5 from 176 Google reviews.
