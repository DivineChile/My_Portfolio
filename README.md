# Frontend Developer Portfolio

A high-craft, anti-AI-slop frontend developer portfolio built with **React**, **Vite**, **JavaScript**, **Tailwind CSS v4**, and the **Hallmark** design skill.

---

## ⚡ Key Highlights

- **Hallmark Cobalt Theme (`modern-minimal`)**: Engineered cool ground (`oklch(98.5% 0.004 250)`), electric cobalt signal accent (`oklch(58% 0.20 256)`), graphite dark cards, and instant light/dark mode switching.
- **2+1 Typography Discipline**: Space Grotesk (display), Inter (body), and JetBrains Mono (code/labels) — 100% roman, zero italic display headers.
- **Working ⌘K Command Palette**: Fast keyboard navigation (`⌘K` / `Ctrl+K`), theme switcher, section navigation, and project search.
- **Macro 18 · Portfolio Grid**: Filterable project cards with case-study modal drawers and architectural breakdowns.
- **Frontend Craft Lab**: Interactive 8-state button matrix (`default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`, `error`, `success`), spring tabs, and tactile sliders.
- **Tactile Contact Action**: 1-click email copy with instant checkmark state and direct inquiry form.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```

### 3. Production Build
```bash
npm run build
```

---

## 📁 Clean & Simple Architecture

```text
src/
├── components/
│   ├── Navbar.jsx          # Bordered header, ⌘K trigger, theme toggle
│   ├── Hero.jsx            # Asymmetric title + live graphite code runner
│   ├── ProjectGrid.jsx     # Category filters & Macro 18 project cards
│   ├── ProjectModal.jsx    # Accessible deep-dive architecture modal
│   ├── CraftLab.jsx        # 8-state interactive UI matrix & microinteractions
│   ├── Experience.jsx      # Engineering timeline & technical competencies
│   ├── Contact.jsx         # 1-click copy action, socials, and inquiry form
│   ├── Footer.jsx          # Statement footer with live local time & Hallmark stamp
│   └── CommandPalette.jsx  # Keyboard-accessible ⌘K command overlay
├── data/
│   └── projects.js         # Honest project data, architecture highlights, & skills
├── App.jsx                 # Simple root component & global shortcut listener
├── main.jsx                # Application entry
└── index.css               # Tailwind v4 + Hallmark Cobalt OKLCH variables
```
