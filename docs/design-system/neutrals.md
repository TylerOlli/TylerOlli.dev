# Neutral Color System

## Overview

The portfolio uses a semantic neutral color system built on CSS variables that integrate with Tailwind. This ensures consistent surfaces, text hierarchy, and borders across the site while enabling future theming (dark mode).

---

## Design Principles

1. **Semantic over literal** - Names describe purpose, not appearance
2. **RGB format** - Enables Tailwind opacity modifiers (`/10`, `/50`, etc.)
3. **Hierarchy** - Clear primary → secondary → tertiary → muted progression
4. **Consistency** - One token per use case, not multiple grays for similar purposes
5. **Theme-ready** - Variables override easily for dark mode

---

## Token Reference

### Surfaces

**Purpose**: Define background layers and visual depth

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `ui-bg-page` | White | `255 255 255` | Main page background |
| `ui-bg-surface` | White | `255 255 255` | Primary cards, modals |
| `ui-bg-surface-subtle` | Gray 50 | `249 250 251` | Slightly elevated surfaces |
| `ui-bg-surface-muted` | Gray 100 | `243 244 246` | De-emphasized backgrounds |
| `ui-bg-inverse` | Gray 900 | `17 24 39` | Dark contrast sections |

**Example classes:**
```tsx
bg-ui-bg-page          // Page background
bg-ui-bg-surface       // White cards
bg-ui-bg-surface-subtle // Section backgrounds
bg-ui-bg-surface-muted // Badge backgrounds
bg-ui-bg-inverse       // Dark ModelTriage section
```

---

### Text

**Purpose**: Establish readable text hierarchy

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `ui-text-primary` | Gray 900 | `17 24 39` | Headings, primary body text |
| `ui-text-secondary` | Gray 700 | `55 65 81` | Subheadings, important secondary text |
| `ui-text-tertiary` | Gray 500 | `107 114 128` | Supporting text, labels |
| `ui-text-muted` | Gray 400 | `156 163 175` | Separators, disabled text |
| `ui-text-inverse` | White | `255 255 255` | Text on dark backgrounds |

**Hierarchy guidelines:**
- **Primary**: Main headings, card titles, critical information
- **Secondary**: Subtitles, emphasized body text
- **Tertiary**: Body text, descriptions, secondary labels
- **Muted**: Metadata, separators, placeholder text

**Example classes:**
```tsx
text-ui-text-primary   // h1, h2, h3, card titles
text-ui-text-secondary // Subtitles, important labels
text-ui-text-tertiary  // Body text, descriptions
text-ui-text-muted     // Bullets, pipes, metadata
text-ui-text-inverse   // White text on dark
```

---

### Borders & Dividers

**Purpose**: Define edges and separation between elements

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `ui-border-subtle` | Gray 200 | `229 231 235` | Minimal borders, soft dividers |
| `ui-border-default` | Gray 300 | `209 213 219` | Standard card/section borders |
| `ui-border-strong` | Gray 400 | `156 163 175` | Emphasized borders, hover states |

**Guidelines:**
- **Subtle**: Section dividers, internal card borders
- **Default**: Card outlines, form inputs
- **Strong**: Hover states, focused elements, Core Stack dividers

**Example classes:**
```tsx
border-ui-border-subtle     // Divider lines
border-ui-border-default    // Card borders at rest
border-ui-border-strong     // Hover/focus borders
divide-ui-border-subtle     // List item dividers
```

---

### Interactive States

**Purpose**: Provide hover/focus feedback

| Token | Value | RGB | Usage |
|-------|-------|-----|-------|
| `ui-hover-subtle` | Gray 50 | `249 250 251` | Very light hover background |
| `ui-hover-default` | Gray 100 | `243 244 246` | Standard hover background |

**Example classes:**
```tsx
hover:bg-ui-hover-subtle   // Pills, subtle interactive elements
hover:bg-ui-hover-default  // Badges, secondary buttons
```

---

## Common Patterns

### Card Pattern
```tsx
<div className="
  bg-ui-bg-surface 
  border border-ui-border-subtle 
  rounded-lg p-6 
  shadow-sm 
  hover:shadow-md 
  hover:border-ui-border-strong
">
  <h3 className="text-ui-text-primary font-bold mb-2">Title</h3>
  <p className="text-ui-text-tertiary">Description text</p>
</div>
```

### Section with Subtle Background
```tsx
<section className="bg-ui-bg-surface-subtle py-16">
  <div className="bg-ui-bg-surface rounded-lg p-8">
    {/* Content */}
  </div>
</section>
```

### Text Hierarchy
```tsx
<div>
  <h1 className="text-ui-text-primary text-4xl font-bold">Heading</h1>
  <h2 className="text-ui-text-secondary text-2xl font-semibold">Subheading</h2>
  <p className="text-ui-text-tertiary">Body text</p>
  <span className="text-ui-text-muted text-sm">Metadata</span>
</div>
```

### Interactive List
```tsx
<ul className="divide-y divide-ui-border-subtle">
  <li className="py-3 hover:bg-ui-hover-subtle transition-colors">
    <span className="text-ui-text-primary font-medium">Item</span>
  </li>
</ul>
```

---

## Migration Guide

### Current Color Inventory

**Surfaces** (16 instances):
- `bg-white` → `bg-ui-bg-surface` (cards, sections)
- `bg-gray-50` → `bg-ui-bg-surface-subtle` (hero gradient, section backgrounds)
- `bg-gray-100` → `bg-ui-bg-surface-muted` (badges, Core Stack gradient)

**Text** (72+ instances):
- `text-gray-900` → `text-ui-text-primary` (headings, primary text)
- `text-gray-700` → `text-ui-text-secondary` (subtitles, important text)
- `text-gray-500` → `text-ui-text-tertiary` (body text, labels)
- `text-gray-400` → `text-ui-text-muted` (separators, metadata)
- `text-white` → `text-ui-text-inverse` (dark sections)

**Borders** (36+ instances):
- `border-gray-200` → `border-ui-border-subtle` (soft dividers)
- `border-gray-300` → `border-ui-border-default` (card borders)
- `border-gray-400` → `border-ui-border-strong` (emphasis)

### Replacement Mapping

| Old | New | Context |
|-----|-----|---------|
| `bg-white` | `bg-ui-bg-surface` | Cards, modals |
| `bg-gray-50` | `bg-ui-bg-surface-subtle` | Section backgrounds |
| `bg-gray-100` | `bg-ui-bg-surface-muted` | Badges, de-emphasized areas |
| `text-gray-900` | `text-ui-text-primary` | Headings, titles |
| `text-gray-700` | `text-ui-text-secondary` | Subtitles |
| `text-gray-500` | `text-ui-text-tertiary` | Body, descriptions |
| `text-gray-400` | `text-ui-text-muted` | Metadata, separators |
| `border-gray-200` | `border-ui-border-subtle` | Soft dividers |
| `border-gray-300` | `border-ui-border-default` | Card borders |
| `border-gray-400` | `border-ui-border-strong` | Emphasis, hover |
| `hover:bg-gray-50` | `hover:bg-ui-hover-subtle` | Light hover |
| `hover:border-gray-300` | `hover:border-ui-border-strong` | Hover borders |

---

## Dark Mode Support

The system includes dark mode overrides. To enable:

```tsx
// Add to html element
<html className="dark">
```

Dark mode inverts the neutral palette:
- Surfaces become dark
- Text becomes light
- Borders adjust contrast
- Inverse colors swap

---

## Anti-Patterns

### ❌ Don't Do This:
```tsx
// Using arbitrary grays inconsistently
<div className="bg-white border-gray-300">
  <p className="text-gray-600">Text</p>  {/* What hierarchy? */}
  <span className="text-gray-500">More</span>  {/* Too similar */}
</div>

// Mixing neutral families
<div className="bg-gray-50 border-neutral-300">  {/* Inconsistent */}

// Skipping hierarchy
<h1 className="text-gray-500">  {/* Should be primary */}
```

### ✅ Do This Instead:
```tsx
// Clear semantic intent
<div className="bg-ui-bg-surface border-ui-border-default">
  <p className="text-ui-text-secondary">Important text</p>
  <span className="text-ui-text-tertiary">Supporting text</span>
</div>

// Consistent neutral system
<div className="bg-ui-bg-surface-subtle border-ui-border-subtle">

// Proper hierarchy
<h1 className="text-ui-text-primary">
```

---

## Checklist for New Components

- [ ] Use semantic surface tokens for backgrounds
- [ ] Apply proper text hierarchy (primary → secondary → tertiary → muted)
- [ ] Use appropriate border strength (subtle vs default vs strong)
- [ ] Include hover states where interactive
- [ ] Test contrast for accessibility
- [ ] Verify consistency with existing patterns

---

**Last Updated**: 2026-02-07  
**Owner**: Design System  
**Status**: Active  
**Related**: [colors.md](./colors.md) (Tech Stack accents)
