# MATW Project - Website Clone

A pixel-faithful recreation of the MATW Project (matwproject.org.uk) website.

## Files

```
matw-project/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # Full stylesheet
├── js/
│   └── main.js         # Interactive functionality
├── images/             # Place your images here (see below)
└── README.md
```

## Features

- ✅ Sticky navigation with dropdown menus
- ✅ Language + Zakat quick access buttons
- ✅ Gaza alert banner (pink)
- ✅ Quick Donate bar (currency, amount presets, category, payment icons)
- ✅ Auto-playing hero slider with 3 slides + touch/swipe support
- ✅ Causes grid with animated progress bars
- ✅ Impact stats with animated counter
- ✅ Featured projects grid
- ✅ Newsletter signup
- ✅ Full footer with social links
- ✅ Mobile responsive + hamburger menu
- ✅ Scroll reveal animations

## Adding Real Images

Place images in the `images/` folder with these names:

| File name         | Used for              |
|-------------------|-----------------------|
| `slide-water.jpg` | Slide 1 (Water Well)  |
| `slide-gaza.jpg`  | Slide 2 (Gaza)        |
| `slide-orphan.jpg`| Slide 3 (Orphan)      |

The site uses beautiful gradient fallbacks when images are missing.

## Running Locally

Just open `index.html` in any web browser — no build step needed!

Or serve with any static server:
```bash
npx serve .
# or
python -m http.server 8080
```

## Customization

- Colors: Edit CSS variables at the top of `css/style.css`
- Content: Edit `index.html` directly
- Donation amounts: Change preset buttons in the Quick Donate Bar section
