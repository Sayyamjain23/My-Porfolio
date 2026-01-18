## Hey, I'm Sayyam Jain 👋

I’m a final-year Computer Engineering undergrad at DJ Sanghvi College of Engineering. I build modern web experiences that blend performance, aesthetics, and motion. I love shipping products, automating workflows, and designing interfaces that feel alive. When I’m not coding, you’ll find me on a football field or sketching ideas to turn into real projects.


- Email: [sayyamjain535@gmail.com](mailto:sayyamjain535@gmail.com)
- LinkedIn: [`@sayyamjain-developer`](https://www.linkedin.com/in/sayyamjain-developer/)
- LeetCode: [`@sayyam_jain`](https://leetcode.com/u/Sayyam_jain/)


## Table of Contents
- About the Project
- Live Demo
- Features
- Tech Stack
- How It Works (Implementation)
- Optimization Principles
- Getting Started
- Project Structure
- Assets and Licenses
- Feedback and Contributions

---

## About the Project
A visually rich, performant portfolio built with Next.js and Three.js. It features smooth scrolling, subtle micro‑interactions, immersive 3D scenes, and scroll‑driven storytelling.


---

## Features
- Smooth, inertial scroll with Lenis
- Hero with a realtime 3D computer model (R3F + Drei)
- Scroll‑revealed “About Me” with GSAP mask transitions
- Horizontal pinned Work Experience timeline
- Projects with live link previews and animated entry
- Interactive 3D Earth on the contact section
- Contact form with Resend email delivery and a custom React Email template
- Responsive nav with animated show/hide and blur on scroll
- SEO metadata, OG/Twitter cards, and favicons

---

## Tech Stack
- Framework: Next.js 15, React 18
- 3D: Three.js, @react-three/fiber, @react-three/drei
- Animation: GSAP (ScrollTrigger, ScrollTo), Framer Motion
- Scrolling: @studio-freight/lenis
- Styling: Tailwind CSS, SCSS
- State: Zustand
- Email: Resend, React Email (@react-email/components)
- UI Utils: Radix Hover Card, clsx, tailwind-merge, react-icons, @tabler/icons-react

---

## How It Works (Implementation)

### Fonts, Metadata, and Global Shell
- `app/layout.js` loads Inter and Roboto via `next/font` with `display: 'swap'` and only the weights used.
- Comprehensive `metadata` includes Open Graph, Twitter, favicons, and a manifest.
- `GoogleAnalytics.jsx` injects analytics if `NEXT_PUBLIC_GOOGLE_ANALYTICS` is set.
- `Preloader` + `AppContentGate` keep content hidden until initial 3D/model loading progresses.

### Smooth Scrolling
- `lib/LenisScroll.js` initializes Lenis, drives a `requestAnimationFrame` loop, and detects mobile via a store.

### Hero Section
- `components/Header.jsx`
  - Dynamic import of `Computers.jsx` (R3F Canvas) with a loading spinner.
  - `MorphingText` creates a threshold/blur morph effect between roles.
  - GSAP `ScrollToPlugin` provides smooth anchor navigation.

### 3D Models
- `components/Computers.jsx`
  - R3F `Canvas` tuned for perf: `dpr={[1,2]}`, `antialias: false`, `powerPreference: 'high-performance'`.
  - Handles WebGL context lost/restored and remounts the canvas for resilience.
  - `ModelComputer` preloads `/desktop_pc/scene.gltf`, sets lights, and scales for mobile.
- `components/Earth.jsx`
  - Preloads `/planet/scene.gltf`, renders a rotating earth with `OrbitControls`.

### About Me (Scroll‑Mask Story)
- `components/MaskedAbout.jsx`
  - GSAP `ScrollTrigger` animates a circular mask growth and reveals paragraphs progressively.

### Skills
- `components/IKnow.jsx` pulls skill data from `constants/index.js` and animates progress bars with Framer Motion.

### Work Experience (Horizontal Scroll)
- `components/WorkExperience.jsx` uses a pinned horizontal scroll timeline with GSAP `ScrollTrigger`, responsive widths via `useResponsiveJSX`.

### Projects
- `components/MyProjects.jsx` renders animated cards, lazy images, and a `LinkPreview` hover card using Microlink screenshots (`qss` for URL params).

### Contact
- `components/ContactMe.jsx` composes a 3D earth alongside a form.
- `components/privateClientComponents/ContactForm.jsx` posts to `app/api/email/route.js` and shows toasts.
- `app/api/email/route.js` sends two emails via Resend: one to admin and one confirmation to the user using a custom React Email template (`components/emails/WelcomeTemplate.jsx`).

### Navigation
- `components/ui/resizable-navbar.jsx` + `components/Navbar.jsx` build a responsive, animated navbar that blurs/shrinks on scroll and hides on downward scroll.

### Business Pages
- Static T&C, Privacy, and Refund pages under `app/(business-pages)/` with consistent layout and return navigation.

---

## Optimization Principles
- Font performance: `next/font` with `display: 'swap'`, limited weights.
- Code splitting: dynamic imports for heavy 3D sections.
- Loading UX: `Preloader` overlay + `AppContentGate` visibility gate.
- 3D perf: no antialiasing, controlled `dpr`, `powerPreference: 'high-performance'`, minimal lights.
- Model preloading: `useGLTF.preload` for both desktop and earth models.
- Scroll perf: Lenis RAF loop, GSAP `scrub` animations to avoid layout thrash.
- Image perf: Next/Image, lazy loading, remote previews pre-warmed in a hidden image.
- State: lightweight global state with Zustand for loader and mobile flags only.
- Resilience: WebGL context lost/restored handling, guarded effects, and error boundaries.
- SEO: `metadataBase`, OG/Twitter images, and favicons.

---

## Getting Started

### Prerequisites
- Node.js 18+

### Install
```bash
npm install
```

### Configure Environment
Create `.env.local` at the project root:
```bash
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXXXX
```

### Run Dev Server
```bash
npm run dev
```
Visit `http://localhost:3000`.

### Build and Start
```bash
npm run build
npm start
```

---

## Project Structure
```
app/
  layout.js, page.js, (business-pages)/, api/email/route.js
components/
  Header, Navbar, MaskedAbout, IKnow, WorkExperience, MyProjects,
  ContactMe (Earth + ContactForm), 3D (Computers, ModelComputer, ModelLoader),
  ui/ (resizable-navbar, link-preview), magicui/ (morphing-text, scroll-based-velocity)
constants/ (skills, experience, projects)
hooks/ (useResponsiveJSX)
lib/ (LenisScroll, GoogleAnalytics, utils)
stores/ (loader, isMobile)
public/ (desktop_pc, planet, assets, favicon)
```

---

## Assets and Licenses
- 3D models and textures live under `public/desktop_pc/` and `public/planet/` with their respective `license.txt` files.
- All other images and assets are either self‑produced or attributed where applicable.

---

## Feedback and Contributions
Recommendations, ideas, and PRs are welcome. If something can be faster, cleaner, or more delightful—please open an issue or a pull request. You can also reach me directly:

- Email: [sayyamjain535@gmail.com](mailto:sayyamjain535@gmail.com)
- WhatsApp: [`+91 9422115276`](https://wa.me/+919422115276?text=Hii%20Sayyam)

— Built with love, motion, and a little bit of Three.js 💙
