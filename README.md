# Neo Tuber Landing Page

A modern, responsive landing page for the Neo Tuber mobile app built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **lucide-react** - Icons
- **TypeScript** - Type safety

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── AppButton.tsx
│   └── SectionContainer.tsx
├── sections/           # Page sections
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Screenshots.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── public/             # Static assets
```

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Smooth scroll animations
- ✅ SEO optimized
- ✅ Modern, clean design
- ✅ Dark mode ready (light mode default)
- ✅ Production ready

## Build

```bash
npm run build
```

## Deploy

The easiest way to deploy is using [Vercel](https://vercel.com).

