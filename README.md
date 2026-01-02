# Curl Workout Landing Page

A modern landing page for Curl Workout - an AI-powered fitness tracking app.

## Tech Stack

- **Astro 5** - Static site generator
- **Tailwind CSS 4** - Utility-first CSS framework

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/     # Astro components
├── layouts/        # Layout templates
├── pages/          # Page routes
└── styles/
    └── global.css  # Tailwind config & custom styles
```

## Customization

Edit `src/styles/global.css` to customize colors and theme:

```css
@theme {
  --color-primary-500: #f97316;
  --color-dark-950: #020617;
}
```
