# Tyler Olli - Portfolio

A highly polished, visually striking Next.js portfolio showcasing expertise in scalable fintech platforms and AI-accelerated development.

## Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
- **Responsive Design**: Mobile-first, premium UI with excellent typography
- **Single-Page Layout**: Smooth scrolling with sticky navigation and active section highlighting
- **Key Sections**:
  - Hero with gradient background and noise texture
  - Proof Highlights (metrics)
  - Selected Case Studies
  - ModelTriage Product Spotlight (standout section)
  - AI in Engineering workflow
  - Experience Summary
  - Tech Stack
  - Contact

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Customization

### Replace Placeholder Content

1. **Resume PDF**: Replace `/public/Tyler-Olli-Resume.pdf` with your actual resume
2. **OG Image**: Replace `/public/og-image.png` with a 1200x630 social share image
3. **Contact Links**: All links have been updated in `app/page.tsx`:
   - GitHub: `https://github.com/TylerOlli`
   - LinkedIn: `https://www.linkedin.com/in/tylerolli/`
   - Email: `ollityler@gmail.com`
   - ModelTriage: `https://modeltriage.com`

### Customize Content

Edit `app/page.tsx` to update:
- Hero text and tagline
- Metrics in Proof Highlights
- Case study details
- ModelTriage features and description
- AI workflow details
- Experience bullets
- Tech stack items

### Design Tokens

Tailwind configuration in `tailwind.config.ts` with custom:
- Colors (CSS variables in `app/globals.css`)
- Typography scale
- Spacing
- Border radius
- Animations

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, nav
│   ├── page.tsx            # Main single-page portfolio
│   ├── globals.css         # Global styles and CSS variables
│   └── resume/
│       └── route.ts        # Resume PDF route handler
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── separator.tsx
│   ├── navigation.tsx      # Sticky nav with scroll detection
│   ├── section.tsx         # Section wrapper
│   ├── container.tsx       # Container with max-width
│   ├── metric-card.tsx     # Animated metric display
│   ├── case-study-card.tsx # Case study card with hover effects
│   ├── feature-card.tsx    # Feature card with icons
│   └── tech-tag.tsx        # Tech stack tag with animation
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── public/
    ├── Tyler-Olli-Resume.pdf
    └── og-image.png

```

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy to Vercel, Netlify, or any hosting platform that supports Next.js:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## License

© 2026 Tyler Olli. All rights reserved.
