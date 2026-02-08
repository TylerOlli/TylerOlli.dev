# Tech Stack Color System

This document defines the semantic color system used in the Tech Stack section of the portfolio.

## Design Principles

- **Semantic naming**: Colors are named by purpose, not by hue
- **Centralized control**: All accent colors are defined in CSS variables
- **Opacity support**: RGB format enables Tailwind opacity modifiers
- **Consistent hierarchy**: Each accent has base, light, mid, and dark variants

## Accent Colors

### Core Stack Accent
**Purpose**: Neutral foundation representing the core technology primitives  
**Color**: Gray (`--accent-core`)  
**RGB**: `156 163 175` (gray-400)  

**Usage**:
- Core Stack card borders and dividers
- Neutral elements that don't belong to a specific category

**Example classes**:
- `bg-accent-core/10` - Very light background tint
- `border-accent-core/25` - Subtle border divider

---

### UI Frameworks Accent
**Purpose**: Represents frontend and UI frameworks (React, Next.js, Angular, Vue)  
**Color**: Blue (`--accent-ui`)  
**RGB**: `96 165 250` (blue-400)  

**Variants**:
- `--accent-ui` (base): `96 165 250` - Primary accent
- `--accent-ui-light`: `191 219 254` (blue-200) - Hover border
- `--accent-ui-mid`: `147 197 253` (blue-300) - Gradient end
- `--accent-ui-dark`: `59 130 246` (blue-500) - Hover gradient

**Usage**:
- UI Frameworks card accent bar
- Shape icon background
- Hover border color

**Example classes**:
- `bg-accent-ui/5` - Light background tint
- `from-accent-ui to-accent-ui-mid` - Gradient accent bar
- `hover:border-accent-ui-light` - Hover border

---

### Data Systems Accent
**Purpose**: Represents databases, storage, and data infrastructure (PostgreSQL, MongoDB, Redis, S3, Snowflake)  
**Color**: Green (`--accent-data`)  
**RGB**: `74 222 128` (green-400)  

**Variants**:
- `--accent-data` (base): `74 222 128` - Primary accent
- `--accent-data-light`: `187 247 208` (green-200) - Hover border
- `--accent-data-mid`: `134 239 172` (green-300) - Gradient end
- `--accent-data-dark`: `34 197 94` (green-500) - Hover gradient

**Usage**:
- Data Systems card accent bar
- Shape icon background (triangle)
- Hover border color

**Example classes**:
- `bg-accent-data/5` - Light background tint
- `from-accent-data to-accent-data-mid` - Gradient accent bar
- `hover:border-accent-data-light` - Hover border

---

### AI Tools Accent
**Purpose**: Represents AI development tools and LLM platforms (Cursor, GitHub Copilot, ChatGPT, Claude, Gemini)  
**Color**: Purple (`--accent-ai`)  
**RGB**: `192 132 252` (purple-400)  

**Variants**:
- `--accent-ai` (base): `192 132 252` - Primary accent
- `--accent-ai-light`: `233 213 255` (purple-200) - Hover border
- `--accent-ai-mid`: `216 180 254` (purple-300) - Gradient end
- `--accent-ai-dark`: `168 85 247` (purple-500) - Hover gradient

**Usage**:
- AI Tools card accent bar
- Shape icon background
- Hover border color

**Example classes**:
- `bg-accent-ai/5` - Light background tint
- `from-accent-ai to-accent-ai-mid` - Gradient accent bar
- `hover:border-accent-ai-light` - Hover border

---

## Pattern: Card Accent System

All Tech Stack cards follow this pattern:

```tsx
<div className="group relative bg-white border border-gray-200 rounded-lg p-4 
     shadow-sm hover:shadow-md hover:border-accent-{category}-light 
     transition-all duration-200 ease-out overflow-hidden">
  
  {/* Left accent bar */}
  <div className="absolute left-0 top-0 bottom-0 w-[2px] 
       bg-gradient-to-b from-accent-{category} to-accent-{category}-mid 
       group-hover:from-accent-{category}-dark group-hover:to-accent-{category} 
       transition-colors duration-200">
  </div>
  
  {/* Shape icon */}
  <div className="bg-accent-{category}/5 group-hover:bg-accent-{category}/10 
       transition-colors duration-200">
    <div className="bg-accent-{category}"></div>
  </div>
</div>
```

Where `{category}` is one of: `ui`, `data`, `ai`

---

## Pattern: Multi-Accent Cards (Calm Rest → Rewarding Hover)

For content cards that use different accent colors per card (e.g., "What I Help Teams Do" section), use the **calm rest → intensify hover** pattern:

### Design Philosophy
- **At rest**: Subtle accent hints that don't compete for attention
- **On hover**: Clear accent intensification that feels rewarding
- **Transition**: Smooth 200ms ease-out matching site-wide interaction speed

### Implementation Pattern

```tsx
<motion.div
  whileHover={{ y: -2 }}
  className="group relative rounded-lg border border-ui-border-subtle bg-ui-bg-surface p-6 
             shadow-sm hover:shadow-md hover:border-accent-{category}-light 
             transition-all duration-200 ease-out overflow-hidden"
>
  {/* Left accent bar - lighter at rest (50% opacity), intensifies on hover */}
  <div className="absolute left-0 top-0 bottom-0 w-[2px] 
       bg-gradient-to-b from-accent-{category}-light/50 to-accent-{category}-mid/50 
       group-hover:from-accent-{category} group-hover:to-accent-{category}-mid 
       transition-colors duration-200">
  </div>
  
  <div className="flex items-start gap-3">
    {/* Icon container - subtle bg at rest, intensifies on hover */}
    <div className="flex items-center justify-center w-8 h-8 
         bg-accent-{category}/5 group-hover:bg-accent-{category}/10 
         rounded transition-colors duration-200 flex-shrink-0 mt-0.5">
      {/* Icon - 70% opacity at rest, full opacity on hover */}
      <Icon className="h-5 w-5 text-accent-{category}/70 
                      group-hover:text-accent-{category} 
                      transition-colors duration-200" />
    </div>
    <div>
      <h3 className="text-xl font-bold mb-3">Card Title</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Card content...
      </p>
    </div>
  </div>
</motion.div>
```

### Rest vs Hover States

| Element | Rest | Hover | Change |
|---------|------|-------|--------|
| **Left accent bar** | `{color}-light/50` → `{color}-mid/50` | `{color}` → `{color}-mid` | 2× opacity + stronger gradient |
| **Icon container bg** | `{color}/5` | `{color}/10` | 2× opacity |
| **Icon color** | `{color}/70` | `{color}` | Full opacity |
| **Card border** | `ui-border-subtle` | `{color}-light` | Accent identity |
| **Card shadow** | `shadow-sm` | `shadow-md` | Subtle lift |
| **Card position** | `y: 0` | `y: -2` | 2px lift (Framer Motion) |

### Usage Examples

**"What I Help Teams Do" section**:
- Ship Reliably → `accent-ui` (blue)
- Scale Without Pain → `accent-ui` (blue)
- Make Smart Technical Decisions → `accent-data` (green)
- Bring AI Into Real Systems → `accent-ai` (purple)

### Key Differences from Tech Stack Cards

1. **Lighter rest state**: Uses `/50` opacity on accent bar to stay calm
2. **Icon opacity**: Icons fade in from 70% → 100% on hover
3. **Framer Motion lift**: Cards lift 2px on hover for tactile feedback
4. **Multi-accent per section**: Each card can use a different accent color

### Accessibility Notes
- Hover effects are purely additive (cards are fully functional without hover)
- Color is not the only differentiator (icons and text provide context)
- Respects `prefers-reduced-motion` via Framer Motion

---

## Implementation Notes

### Opacity Support
All accent colors use RGB format with space-separated values to support Tailwind's opacity modifier syntax:

```css
/* CSS Variable */
--accent-ui: 96 165 250;

/* Tailwind Usage */
bg-accent-ui/5     /* 5% opacity */
bg-accent-ui/10    /* 10% opacity */
bg-accent-ui       /* 100% opacity (default) */
```

### Hover States
Each accent has three variants specifically for hover interactions:
- **base** → primary color at rest
- **light** → border color on hover
- **dark** → intensified gradient on hover

### Adding New Accents
To add a new accent color:
1. Define RGB variables in `globals.css` (base, light, mid, dark)
2. Add Tailwind color mappings in `tailwind.config.ts`
3. Document purpose and usage in this file
4. Apply to components using the established pattern

---

## Migration Checklist

When refactoring a component to use semantic accents:

- [ ] Replace hardcoded `blue-*`, `green-*`, `purple-*` with semantic names
- [ ] Update gradient definitions to use base → mid variants
- [ ] Update hover states to use light (border) and dark (gradient) variants
- [ ] Test opacity modifiers (`/5`, `/10`) work correctly
- [ ] Verify hover transitions remain smooth
- [ ] Document any new usage patterns

---

**Last Updated**: 2026-02-07  
**Owner**: Design System  
**Status**: Active
