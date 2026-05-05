# Rosé Pine Dark Design System

> Soft dark theme with warm, muted tones. Deep purple surfaces (#1f1d2e), Foam cyan accent (#9ccfd8), and elegant UI patterns inspired by the Rosé Pine dark colour scheme.

---

## 1. Visual Theme & Atmosphere

### Overall Aesthetic
Rosé Pine embraces a **dark, industrial gaming** design philosophy. The interface feels like a sophisticated PC gaming command center—sleek, functional, and content-forward. Every element prioritizes showcasing games while maintaining efficient navigation through a massive library and storefront.

### Mood & Feeling
- **Immersive & Cinematic**: Dark backgrounds let game artwork take center stage
- **Functional Density**: Information-rich layouts that reward exploration
- **Commerce-Driven**: Clear pricing, discounts, and purchase CTAs throughout
- **Community-Connected**: Reviews, friends activity, and social features integrated seamlessly
- **Collection-Oriented**: Library organization tools for managing hundreds of games

### Design Density
**High density** with strategic whitespace. Store pages pack significant information (screenshots, reviews, system requirements, pricing) while maintaining scannability. The library interface maximizes game visibility with compact grid/list views.

### Visual Character
- Deep navy-to-black gradients as primary surfaces
- Cyan/blue accents for interactive elements
- Green purchase buttons as primary conversion CTA
- Subtle transparency and blur effects
- Game capsule artwork as visual anchors
- Tab-based navigation for content organization
- Horizontal scrolling carousels for content discovery

---

## 2. Color Palette & Roles

### Primary Dark Theme

| Token | Hex | Role |
|-------|-----|------|
| `--background-darkest` | `#191724` | Navigation bars, deepest surfaces |
| `--background-primary` | `#1f1d2e` | Main content area, store background |
| `--background-secondary` | `#26233a` | Cards, elevated surfaces |
| `--background-tertiary` | `#21202e` | Hover states, highlighted sections |
| `--background-gradient-top` | `#1f1d2e` | Gradient backgrounds start |
| `--background-gradient-bottom` | `#191724` | Gradient backgrounds end |
| `--background-modal` | `#191724` | Modal/dialog backgrounds |
| `--background-input` | `#26233a` | Form inputs, search fields |

### Accent Colors

| Token | Hex | Role |
|-------|-----|------|
| `--accent-primary` | `#9ccfd8` | Primary accent, links, highlights |
| `--accent-hover` | `#9ccfd8` | Link hover states |
| `--accent-light` | `#e0def4` | Light accent for emphasis |
| `--accent-dark` | `#31748f` | Muted accent for secondary elements |
| `--purchase-green` | `#31748f` | Purchase buttons, "Add to Cart" |
| `--purchase-green-hover` | `#286983` | Purchase button hover |
| `--wishlist-blue` | `#403d52` | Wishlist button, secondary actions |

### Text Colors

| Token | Hex | Role |
|-------|-----|------|
| `--text-primary` | `#e0def4` | Primary body text |
| `--text-secondary` | `#908caa` | Secondary text, metadata |
| `--text-muted` | `#6e6a86` | Tertiary text, timestamps |
| `--text-bright` | `#ffffff` | Headers, important labels |
| `--text-link` | `#9ccfd8` | Hyperlinks |
| `--text-link-hover` | `#ffffff` | Link hover state |
| `--text-price` | `#f6c177` | Price displays |
| `--text-discount` | `#f6c177` | Discount percentages |

### Status & Semantic Colors

| Token | Hex | Role |
|-------|-----|------|
| `--status-online` | `#9ccfd8` | Online friends indicator |
| `--status-in-game` | `#31748f` | Currently playing game |
| `--status-away` | `#908caa` | Away status |
| `--status-offline` | `#6e6a86` | Offline status |
| `--review-positive` | `#9ccfd8` | Positive review (thumbs up) |
| `--review-negative` | `#eb6f92` | Negative review (thumbs down) |
| `--review-mixed` | `#f6c177` | Mixed reviews indicator |
| `--sale-red` | `#eb6f92` | Sale tags, limited time offers |
| `--discount-green` | `#f6c177` | Discount badge background |
| `--error` | `#eb6f92` | Error states |
| `--success` | `#31748f` | Success confirmations |

### Sale & Promotional Colors

| Token | Hex | Role |
|-------|-----|------|
| `--sale-banner` | `#21202e` | Sale event banner backgrounds |
| `--flash-sale` | `#eb6f92` | Flash deal highlights |
| `--bundle-purple` | `#c4a7e7` | Bundle indicators |
| `--early-access` | `#c4a7e7` | Early Access badge |
| `--free-to-play` | `#26233a` | F2P game indicator |

---

## 3. Typography Rules

### Font Stack

```css
/* Primary app font */
--font-primary: "Inter", Arial, Helvetica, sans-serif;

/* Fallback system fonts */
--font-fallback: Arial, Helvetica, sans-serif;

/* Marketing/Display */
--font-display: "Inter", Arial Black, sans-serif;

/* Monospace (system requirements, codes) */
--font-mono: Consolas, Monaco, "Courier New", monospace;
```

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| Game Title (Hero) | 26px | Bold | 30px | 0 | `--text-bright` |
| Game Title (Card) | 14px | Normal | 18px | 0 | `--text-primary` |
| Section Header | 14px | Bold | 18px | 0.03em (uppercase) | `--text-primary` |
| Navigation Tab | 14px | Normal | 18px | 0 | `--text-primary` |
| Body Text | 13px | Normal | 18px | 0 | `--text-primary` |
| Description | 14px | Light | 21px | 0 | `--text-secondary` |
| Price (Large) | 16px | Normal | 20px | 0 | `--text-price` |
| Price (Small) | 13px | Normal | 16px | 0 | `--text-price` |
| Discount Badge | 12px | Bold | 14px | 0 | `--text-bright` |
| Review Summary | 12px | Normal | 16px | 0 | Review color |
| Metadata/Tags | 11px | Normal | 14px | 0 | `--text-secondary` |
| Button Text | 14px | Normal | 16px | 0 | `--text-bright` |
| Tooltip | 12px | Normal | 16px | 0 | `--text-primary` |

### Font Weights

| Weight | Name | Usage |
|--------|------|-------|
| 300 | Light | Long-form descriptions, reviews |
| 400 | Normal | Body text, navigation, prices |
| 500 | Medium | Sub-headers, emphasized text |
| 700 | Bold | Game titles, section headers, CTAs |

### Marketing Typography

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| Sale Headline | 48px | Bold | Major sale event headers |
| Feature Title | 28px | Bold | Featured game callouts |
| Promo Subtext | 18px | Normal | Sale descriptions |
| Banner CTA | 16px | Bold | Call-to-action buttons |

---

## 4. Component Stylings

### Buttons

#### Primary Purchase Button (Green)
```css
.button-purchase {
  background: linear-gradient(to bottom, #31748f 5%, #286983 95%);
  border-radius: 2px;
  border: none;
  color: #e0def4;
  font-size: 15px;
  padding: 0 15px;
  height: 30px;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.button-purchase:hover {
  background: linear-gradient(to bottom, #2c7a8c 5%, #31748f 95%);
  color: #ffffff;
}
```

#### Secondary Button (Blue/Gray)
```css
.button-secondary {
  background: linear-gradient(to bottom, #403d52 5%, #26233a 95%);
  border-radius: 2px;
  color: #e0def4;
  font-size: 13px;
  padding: 0 15px;
  height: 30px;
}

.button-secondary:hover {
  background: linear-gradient(to bottom, #524f67 5%, #403d52 95%);
  color: #ffffff;
}
```

#### Wishlist Button
```css
.button-wishlist {
  background: rgba(156, 207, 216, 0.2);
  border: 1px solid #9ccfd8;
  border-radius: 2px;
  color: #9ccfd8;
  padding: 8px 16px;
}

.button-wishlist:hover {
  background: rgba(156, 207, 216, 0.4);
  color: #ffffff;
}
```

#### Text Link Button
```css
.button-link {
  background: transparent;
  color: #9ccfd8;
  padding: 0;
  border: none;
}

.button-link:hover {
  color: #ffffff;
}
```

### Inputs

#### Search Input
```css
.search-input {
  background: #26233a;
  border: 1px solid #191724;
  border-radius: 3px;
  color: #e0def4;
  font-size: 13px;
  padding: 8px 12px;
  width: 100%;
}

.search-input:focus {
  border-color: #9ccfd8;
  outline: none;
  background: #403d52;
}

.search-input::placeholder {
  color: #6e6a86;
}
```

#### Text Input
```css
.input-text {
  background: #26233a;
  border: 1px solid #191724;
  border-radius: 3px;
  color: #e0def4;
  font-size: 13px;
  padding: 10px 12px;
}

.input-text:focus {
  border-color: #9ccfd8;
  background: #403d52;
}
```

#### Select Dropdown
```css
.select {
  background: linear-gradient(to bottom, #26233a 5%, #1f1d2e 95%);
  border: 1px solid #191724;
  border-radius: 3px;
  color: #e0def4;
  font-size: 13px;
  padding: 6px 10px;
}
```

### Cards

#### Game Capsule Card (Store)
```css
.game-capsule {
  background: #21202e;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  transition: transform 150ms ease;
}

.game-capsule:hover {
  transform: scale(1.02);
  box-shadow: 0 0 15px rgba(156, 207, 216, 0.3);
}

.game-capsule-image {
  width: 100%;
  aspect-ratio: 460/215; /* Standard capsule ratio */
}

.game-capsule-info {
  padding: 8px 10px;
  background: rgba(0, 0, 0, 0.4);
}

.game-capsule-title {
  color: #e0def4;
  font-size: 14px;
  margin-bottom: 4px;
}
```

#### Library Game Card
```css
.library-card {
  background: #1f1d2e;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 1px;
  cursor: pointer;
}

.library-card:hover {
  background: #26233a;
}

.library-card.selected {
  background: #524f67;
}

.library-card-icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.library-card-name {
  color: #e0def4;
  font-size: 13px;
}
```

#### Featured Game Banner
```css
.featured-banner {
  position: relative;
  width: 100%;
  aspect-ratio: 16/7;
  overflow: hidden;
}

.featured-banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-banner-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
```

### Price Tags

#### Standard Price
```css
.price-tag {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price-final {
  color: #f6c177;
  font-size: 13px;
}
```

#### Discounted Price
```css
.price-discounted {
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  overflow: hidden;
}

.discount-badge {
  background: #26233a;
  color: #f6c177;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
}

.price-container {
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.price-original {
  color: #6e6a86;
  font-size: 11px;
  text-decoration: line-through;
}

.price-new {
  color: #f6c177;
  font-size: 13px;
}
```

### Review System

#### Review Summary Badge
```css
.review-summary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.review-summary.positive {
  color: #9ccfd8;
}

.review-summary.mixed {
  color: #f6c177;
}

.review-summary.negative {
  color: #eb6f92;
}

.review-icon {
  width: 16px;
  height: 16px;
}

.review-text {
  font-size: 12px;
}
```

#### Thumbs Up/Down
```css
.review-thumb {
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 2px;
  cursor: pointer;
}

.review-thumb.up {
  color: #9ccfd8;
}

.review-thumb.down {
  color: #eb6f92;
}

.review-thumb:hover {
  background: rgba(255, 255, 255, 0.1);
}
```

#### Review Card
```css
.review-card {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0;
  padding: 10px;
  border-left: 2px solid #9ccfd8; /* or #eb6f92 for negative */
}

.review-author {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.review-author-avatar {
  width: 32px;
  height: 32px;
}

.review-content {
  color: #e0def4;
  font-size: 13px;
  line-height: 18px;
}
```

### Navigation

#### Main Navigation Bar
```css
.nav-main {
  background: #191724;
  height: 104px;
  display: flex;
  flex-direction: column;
}

.nav-top {
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 11px;
  color: #908caa;
}

.nav-bottom {
  background: linear-gradient(to right, #26233a 5%, #1f1d2e 95%);
  padding: 0 16px;
}
```

#### Tab Navigation
```css
.nav-tabs {
  display: flex;
  gap: 0;
  height: 36px;
}

.nav-tab {
  padding: 0 17px;
  color: #908caa;
  font-size: 13px;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.nav-tab:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.nav-tab.active {
  color: #ffffff;
  background: linear-gradient(to bottom, #403d52 5%, #26233a 95%);
}
```

#### Library Sidebar
```css
.library-sidebar {
  width: 260px;
  background: #1f1d2e;
  border-right: 1px solid #191724;
}

.library-section-header {
  padding: 8px 16px;
  color: #908caa;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
```

### Friend Activity Sidebar

```css
.friends-sidebar {
  width: 240px;
  background: #1f1d2e;
  border-left: 1px solid #191724;
}

.friend-row {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  gap: 10px;
}

.friend-row:hover {
  background: #26233a;
}

.friend-avatar {
  width: 32px;
  height: 32px;
  border-radius: 0;
  border: 2px solid #6e6a86; /* changes based on status */
}

.friend-avatar.online {
  border-color: #9ccfd8;
}

.friend-avatar.in-game {
  border-color: #31748f;
}

.friend-info {
  flex: 1;
}

.friend-name {
  color: #e0def4;
  font-size: 13px;
}

.friend-status {
  color: #908caa;
  font-size: 11px;
}

.friend-status.in-game {
  color: #31748f;
}
```

### Achievement Badges

```css
.achievement-badge {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.2);
}

.achievement-icon {
  width: 64px;
  height: 64px;
  border-radius: 0;
}

.achievement-icon.locked {
  opacity: 0.4;
  filter: grayscale(100%);
}

.achievement-name {
  color: #e0def4;
  font-size: 13px;
  font-weight: bold;
}

.achievement-description {
  color: #908caa;
  font-size: 12px;
}

.achievement-rarity {
  color: #9ccfd8;
  font-size: 11px;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.8);
}

.modal {
  background: #1f1d2e;
  border: 1px solid #26233a;
  border-radius: 3px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  max-width: 600px;
}

.modal-header {
  background: linear-gradient(to bottom, #26233a 5%, #1f1d2e 95%);
  padding: 12px 16px;
  border-bottom: 1px solid #191724;
}

.modal-title {
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
}

.modal-body {
  padding: 16px;
  color: #e0def4;
}

.modal-footer {
  padding: 12px 16px;
  border-top: 1px solid #191724;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
```

### Tooltips

```css
.tooltip {
  background: #1f1d2e;
  border: 1px solid #26233a;
  border-radius: 3px;
  padding: 8px 12px;
  color: #e0def4;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  max-width: 300px;
}
```

### Shopping Cart

```css
.cart-button {
  background: linear-gradient(to bottom, #31748f 5%, #286983 95%);
  padding: 10px 20px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.cart-icon {
  width: 16px;
  height: 16px;
}

.cart-count {
  background: #f6c177;
  color: #1f1d2e;
  font-size: 11px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
}
```

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 4px | Tight gaps, inline elements |
| `--spacing-sm` | 8px | Component internal padding |
| `--spacing-md` | 12px | Standard gaps |
| `--spacing-lg` | 16px | Section spacing |
| `--spacing-xl` | 24px | Major section breaks |
| `--spacing-2xl` | 32px | Page section margins |
| `--spacing-3xl` | 48px | Hero section padding |

### Core Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  Global Navigation (Account, Community, Profile)    30px   │
├─────────────────────────────────────────────────────────────┤
│  Main Navigation (Store, Library, Community, Profile) 74px │
├─────────────────────────────────────────────────────────────┤
│ ┌─────────┬────────────────────────────────┬─────────────┐ │
│ │ Sidebar │        Main Content            │   Friends   │ │
│ │         │                                │   Activity  │ │
│ │  220px  │         Flexible               │    240px    │ │
│ │         │    (940px - 1400px)            │  (toggle)   │ │
│ │ (Store  │                                │             │ │
│ │  only)  │                                │             │ │
│ └─────────┴────────────────────────────────┴─────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Store Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│  Featured Carousel (616px × 353px capsules)                 │
├─────────────────────────────────────────────────────────────┤
│  Special Offers Row (horizontal scroll)                     │
├─────────────────────────────────────────────────────────────┤
│  Categories | New & Trending | Top Sellers | Discounts      │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐│
│  │  Game Capsule   │ │  Game Capsule   │ │  Game Capsule   ││
│  │   231×87px      │ │   231×87px      │ │   231×87px      ││
│  └─────────────────┘ └─────────────────┘ └─────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### Library Layout

```
┌─────────────────────────────────────────────────────────────┐
│ ┌────────────┬──────────────────────────────────────────┐  │
│ │   Game     │           Game Detail View               │  │
│ │   List     │  ┌────────────────────────────────────┐  │  │
│ │            │  │       Hero Background Image        │  │  │
│ │  260px     │  └────────────────────────────────────┘  │  │
│ │            │  │ Play Button │ Playtime │ Achievements│  │  │
│ │ - Search   │  │                                     │  │  │
│ │ - Filter   │  │ News │ Guides │ Workshop │ DLC      │  │  │
│ │ - Games    │  │                                     │  │  │
│ └────────────┴──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Content Widths

| Context | Width | Notes |
|---------|-------|-------|
| Store container | 940px | Centered, fixed width |
| Wide store | 1400px | Sales events, expanded views |
| Library sidebar | 260px | Fixed, scrollable |
| Game detail | Flexible | Fills remaining space |
| Modal small | 400px | Confirmations |
| Modal medium | 600px | Forms, settings |
| Modal large | 900px | Screenshots, detailed info |

### Capsule Image Sizes

| Type | Dimensions | Usage |
|------|------------|-------|
| Header | 460×215 | Main game image |
| Small | 231×87 | List views, search results |
| Large | 616×353 | Featured carousel |
| Library Hero | 1920×620 | Library detail background |
| Icon | 32×32, 64×64 | Library list, shortcuts |
| Achievement | 64×64 | Achievement display |

### Whitespace Philosophy
- **Information-dense but organized**: Clear visual groupings
- **Generous margins around carousels**: Let content breathe
- **Compact list views**: Maximize visible games
- **Hover reveals**: Additional info appears on interaction

---

## 6. Depth & Elevation

### Shadow System

| Level | Shadow | Usage |
|-------|--------|-------|
| Level 0 | None | Base surfaces, flat elements |
| Level 1 | `0 0 5px rgba(0,0,0,0.3)` | Subtle lift, cards |
| Level 2 | `0 0 10px rgba(0,0,0,0.4)` | Dropdowns, popovers |
| Level 3 | `0 0 20px rgba(0,0,0,0.5)` | Modals, dialogs |
| Glow | `0 0 15px rgba(102,192,244,0.3)` | Hover highlight effect |

### Surface Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│ Modal/Dialog                        #191724 + border       │
├─────────────────────────────────────────────────────────────┤
│ Dropdown/Popover                    #26233a                │
├─────────────────────────────────────────────────────────────┤
│ Card/Elevated                       #26233a or #21202e     │
├─────────────────────────────────────────────────────────────┤
│ Primary Content                     #1f1d2e                │
├─────────────────────────────────────────────────────────────┤
│ Navigation/Deepest                  #191724                │
└─────────────────────────────────────────────────────────────┘
```

### Z-Index Scale

| Layer | Z-Index | Elements |
|-------|---------|----------|
| Base | 0 | Main content, game cards |
| Sticky | 100 | Navigation bar, sidebar headers |
| Dropdown | 200 | Search results, filter dropdowns |
| Overlay | 300 | Sale banners, featured highlights |
| Popover | 400 | Profile cards, quick menus |
| Modal | 500 | Dialogs, confirmations |
| Toast | 600 | Notifications, download progress |
| Tooltip | 700 | Help tooltips |

### Gradient Treatments

```css
/* Navigation gradient */
.nav-gradient {
  background: linear-gradient(to right, #26233a 5%, #1f1d2e 95%);
}

/* Button gradients */
.button-gradient {
  background: linear-gradient(to bottom, #31748f 5%, #286983 95%);
}

/* Feature fade */
.feature-fade {
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

/* Card hover glow */
.card-glow:hover {
  box-shadow: 0 0 15px rgba(156, 207, 216, 0.3);
}
```

---

## 7. Do's and Don'ts

### Do's

| Guideline | Rationale |
|-----------|-----------|
| Use Rosé Pine Blue (#1f1d2e) as primary background | Brand identity, reduces eye strain |
| Keep purchase buttons green (#31748f) | Clear conversion CTA, established pattern |
| Use Foam (#9ccfd8) for links and accents | Rosé Pine's signature interactive color |
| Show prices prominently | Commerce-driven platform |
| Display discount percentages in green badges | Draws attention to deals |
| Use horizontal carousels for discovery | Efficient browsing of large catalog |
| Show review sentiment with thumbs + percentage | Trust and social proof |
| Include friend activity contextually | Social discovery, "friend is playing" |
| Use game artwork as visual anchors | Let games sell themselves |
| Provide dense but scannable layouts | Power users expect information density |

### Don'ts

| Anti-Pattern | Why to Avoid |
|--------------|--------------|
| Don't use white or light backgrounds | Off-brand, gaming aesthetic |
| Avoid rounded corners beyond 3px | Rosé Pine uses sharp/minimal rounding |
| Don't hide pricing information | Transparency is expected |
| Avoid colorful, playful UI elements | Rosé Pine is sophisticated, not casual |
| Don't remove the green purchase button | Established conversion pattern |
| Avoid tiny touch targets | Many PC users, but accessibility matters |
| Don't overcomplicate the review system | Thumbs up/down is simple and effective |
| Avoid pop-ups that block content | Users need to browse freely |
| Don't use generic placeholder images | Always show real game artwork |
| Avoid slow-loading carousels | Users expect snappy performance |

### Content Guidelines

| Do | Don't |
|----|-------|
| Use clear pricing (e.g., "$19.99") | Vague pricing or hidden costs |
| Show review counts with sentiment | Only show aggregate scores |
| Display discount percentages prominently | Bury savings information |
| Include system requirements | Assume users know compatibility |
| Show "In Library" for owned games | Let users accidentally re-purchase |
| Provide release dates | Leave users guessing |

---

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| Full Desktop | >1400px | Wide store layout, all sidebars visible |
| Desktop | 1100px - 1400px | Standard layout, friends sidebar collapsible |
| Tablet | 768px - 1099px | Simplified layout, stacked sections |
| Mobile (Big Picture) | <768px | Full-screen card view, big controls |

### Desktop Scaling

| Viewport | Store Width | Behavior |
|----------|-------------|----------|
| >1400px | 1400px | Full wide layout |
| 1200-1400px | 1200px | Standard layout |
| 940-1200px | 940px | Compact layout |
| <940px | 100% | Fluid with padding |

### Big Picture Mode (TV/Controller)

| Component | Standard | Big Picture |
|-----------|----------|-------------|
| Navigation | Tab-based | Large tiles |
| Game Grid | Small capsules | Large capsules |
| Buttons | Standard size | 60px+ height |
| Text | 13px body | 20px+ body |
| Interaction | Mouse hover | Focus states |

### Mobile/Rosé Pine Deck Adaptations

| Component | Desktop | Mobile/Deck |
|-----------|---------|-------------|
| Navigation | Horizontal tabs | Bottom navigation |
| Game List | Sidebar | Full-screen list |
| Screenshots | Thumbnail grid | Swipeable gallery |
| Reviews | Expandable cards | Full-screen view |
| Purchase | Button | Floating action |

### Touch Targets

| Element | Minimum Size | Notes |
|---------|--------------|-------|
| Navigation items | 44px × 44px | Comfortable tapping |
| Game cards | 100px × 50px minimum | Clear tap areas |
| Buttons | 44px height | Finger-friendly |
| Close buttons | 44px × 44px | Easy dismissal |

### Image Handling

| Type | Desktop | Mobile |
|------|---------|--------|
| Capsule (header) | 460×215 | Full width, maintain ratio |
| Capsule (small) | 231×87 | Full width on mobile |
| Screenshots | Thumbnail grid | Full-screen swipeable |
| Backgrounds | Fixed | Scroll with parallax |

---

## 9. Agent Prompt Guide

### Quick Reference

```yaml
Primary Background: #1f1d2e
Navigation Background: #191724
Card/Elevated: #26233a
Input Background: #26233a

Accent Primary (Foam): #9ccfd8
Accent Hover: #9ccfd8
Primary Action (Pine): #31748f
Secondary Action: #403d52

Text Primary: #e0def4
Text Secondary: #908caa
Text Muted: #6e6a86
Text Bright: #ffffff
Text Link (Foam): #9ccfd8
Price Text (Gold): #f6c177

Discount / Highlight (Gold): #f6c177
Review Positive (Foam): #9ccfd8
Review Negative (Love): #eb6f92
Review Mixed (Gold): #f6c177

Status Online (Foam): #9ccfd8
Status In-Game (Pine): #31748f
Status Offline (Muted): #6e6a86

Border Radius: 2-3px (minimal)
Border Color: #191724

Font Primary: "Inter", Arial, sans-serif
Font Size Body: 13px
Font Size Title: 14-26px
```

### Example Prompts

#### Game Store Card
```
Create a Rosé Pine game card using Rosé Pine design system:
- Card background: #21202e with no border-radius
- Game capsule image: 460×215 aspect ratio
- Title: 14px normal #e0def4
- Price tag container with #26233a discount badge
- Discount: bold 14px #f6c177
- Original price: 11px #6e6a86 strikethrough
- Final price: 13px #f6c177
- Review summary: 12px with thumbs icon
- Hover: scale(1.02) with cyan glow
```

#### Purchase Button
```
Design a Rosé Pine Add to Cart button:
- Background: gradient from #31748f to #286983
- Border-radius: 2px
- Text: 15px #e0def4 with subtle text-shadow
- Padding: 0 15px, height 30px
- Hover: gradient lightens to #2c7a8c, text becomes white
- Include shopping cart icon on left
```

#### Review Summary
```
Create a review indicator for Rosé Pine:
- Display thumbs up icon (16px)
- Text: "Very Positive" in #9ccfd8
- Subtext: "(12,345 reviews)" in #908caa, 11px
- For negative: use #eb6f92, thumbs down
- For mixed: use #f6c177
```

#### Friend Activity Row
```
Design a friends sidebar row:
- Container: 240px wide, 48px tall
- Avatar: 32px with status border (2px #31748f for in-game)
- Name: 13px #e0def4
- Status: 11px #31748f showing game name
- Hover: background #26233a
```

#### Price Discount Tag
```
Create a discounted price display:
- Wrapper: flex row, dark background
- Discount badge: #26233a background, bold #f6c177 text
- Show "-75%" in the badge
- Price stack: column aligned right
- Original: 11px #6e6a86 with line-through
- Final: 13px #f6c177
```

### CSS Variables Template

```css
:root {
  /* Backgrounds */
  --bg-darkest: #191724;
  --bg-primary: #1f1d2e;
  --bg-secondary: #26233a;
  --bg-tertiary: #21202e;
  --bg-input: #26233a;
  
  /* Accent */
  --accent-primary: #9ccfd8;
  --accent-hover: #9ccfd8;
  --purchase-green: #31748f;
  --wishlist-blue: #403d52;
  
  /* Text */
  --text-primary: #e0def4;
  --text-secondary: #908caa;
  --text-muted: #6e6a86;
  --text-bright: #ffffff;
  --text-link: #9ccfd8;
  --text-price: #f6c177;
  
  /* Status */
  --status-online: #9ccfd8;
  --status-in-game: #31748f;
  --status-offline: #6e6a86;
  
  /* Reviews */
  --review-positive: #9ccfd8;
  --review-negative: #eb6f92;
  --review-mixed: #f6c177;
  --discount-green: #f6c177;
  
  /* Typography */
  --font-primary: "Inter", Arial, sans-serif;
  --font-size-xs: 11px;
  --font-size-sm: 12px;
  --font-size-base: 13px;
  --font-size-md: 14px;
  --font-size-lg: 16px;
  --font-size-xl: 26px;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 24px;
  
  /* Borders */
  --border-radius: 2px;
  --border-color: #191724;
}
```

---

## Summary

Rosé Pine design system creates an immersive, commerce-focused digital gaming storefront through:

1. **Deep navy palette** (#1f1d2e → #191724) that lets game artwork shine
2. **Signature cyan accent (#9ccfd8)** for interactive elements and trust signals
3. **Green purchase CTAs (#31748f)** that drive clear conversion actions
4. **Minimal border-radius (2-3px)** maintaining industrial, PC-gaming aesthetic
5. **Information-dense layouts** that reward exploration of massive catalog
6. **Social integration** via friend activity, reviews, and community features
7. **Clear pricing with prominent discounts** supporting Rosé Pine's sale culture

When implementing Rosé Pine-style interfaces, prioritize:
- Dark, immersive backgrounds that showcase game artwork
- Clear price/discount visibility for commerce focus
- Thumbs up/down review sentiment at a glance
- Dense but organized information hierarchy
- Cyan accents for interactive elements, green for purchases
- Friend activity and social proof integration
- Responsive design that scales from desktop to Big Picture mode
