# isaacquezada.dev

Personal portfolio website showcasing DevOps expertise, security projects, and professional experience.

## Tech Stack

- **Framework**: Astro 5.7
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Deployment**: Static site (Vercel/Netlify compatible)

## Features

- Minimal black/silver design aesthetic
- Smooth animations and transitions
- Responsive layout for all devices
- Privacy-focused (no trackers, no analytics)
- PGP key integration
- Security.txt implementation

## Development

Install dependencies:
```bash
npm install
```

Start dev server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
/
├── public/
│   ├── images/          # Profile images and icons
│   ├── logos/           # Technology logos
│   ├── keys/            # PGP public key
│   └── .well-known/     # Security.txt
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages
│   ├── styles/          # Global styles
│   └── content/         # Blog content
└── package.json
```

## Pages

- `/` - Home page with professional summary
- `/about` - Detailed background and expertise
- `/experience` - Work history and achievements
- `/projects` - Portfolio of technical projects
- `/toolset` - Technologies and tools
- `/blog` - Technical articles and notes
- `/contact` - Contact information

## Customization

### Colors
Edit `tailwind.config.mjs` to modify the color scheme. Current palette uses black/silver/steel tones with accent green.

### Content
- Update personal info in page files under `src/pages/`
- Modify project data in `src/pages/projects.astro`
- Add blog posts in `src/content/blog/`

### Animations
Global animations are defined in `src/styles/global.css` and `tailwind.config.mjs`.

## Infrastructure

Hosted by MagueyLabs - Privacy-respecting, tracker-free infrastructure.

## License

All rights reserved © 2026 Isaac Quezada
