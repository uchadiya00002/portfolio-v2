# Avinash Uchadiya - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional experience, projects, skills, and achievements with a beautiful, animated UI.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Built-in theme switcher with system preference detection
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Automatic image optimization (AVIF/WebP) and server rendering via Vercel
- **SEO Friendly**: Optimized metadata and semantic HTML
- **Interactive Sections**:
  - Hero section with animated stats
  - About section with professional summary
  - Experience timeline with company logos
  - Projects showcase with detailed modals
  - Skills section with categorized technologies
  - Contact form with validation
  - Tech stack ticker animation

## 🛠️ Tech Stack

### Core
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework

### UI & Animation
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **React Icons** - Additional icon sets
- **Radix UI** - Accessible component primitives

### Styling & Theming
- **next-themes** - Theme management (dark/light mode)
- **Tailwind CSS Animate** - Animation utilities
- **Custom CSS** - Glass morphism effects and gradients

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Type checking

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **pnpm** (recommended — this project uses a `pnpm-lock.yaml`)

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/uchadiya00002/portfolio-v2.git
   cd portfolio-v2
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
pnpm build
```

This builds the app with Next.js's standard server runtime (`.next` directory), which Vercel deploys directly.

### Preview Production Build

To preview the production build locally:

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
portfolio-v2/
├── public/
│   ├── images/          # Image assets
│   └── resume/          # Resume PDF files
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/
│   │   ├── sections/    # Page sections (Hero, About, etc.)
│   │   ├── ui/          # Reusable UI components
│   │   ├── navbar.tsx   # Navigation bar
│   │   └── theme-provider.tsx
│   ├── data/
│   │   └── portfolio-data.ts  # All portfolio content
│   └── lib/
│       ├── skill-icons.tsx    # Skill icon mappings
│       └── utils.ts           # Utility functions
├── next.config.mjs     # Next.js configuration
├── vercel.json         # Vercel deployment configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Updating Content

All portfolio content is stored in `src/data/portfolio-data.ts`. Update the following objects:

- `personalInfo` - Personal information, contact details, social links
- `heroData` - Hero section content and stats
- `aboutData` - About section content
- `experiences` - Work experience entries
- `projects` - Project showcase items
- `skills` - Skills categorized by type
- `education` - Educational background
- `journeyData` - Personal journey narrative

### Styling

- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Fonts**: Modify font imports in `src/app/layout.tsx`
- **Animations**: Adjust Framer Motion animations in component files

### Images

Place images in `public/images/` and reference them in your data files:
- Profile images
- Project screenshots
- Company logos
- Other assets

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (`.next` directory)
- `pnpm start` - Start production server (requires build first)
- `pnpm lint` - Run ESLint

## 🔧 Configuration

### Image Optimization

`next.config.mjs` enables Next.js's built-in image optimization (`next/image`), which serves resized AVIF/WebP images on demand instead of the original files. This requires the Next.js server runtime (not static export), which is what Vercel provides.

### Deployment

The project includes a `vercel.json` for deployment on [Vercel](https://vercel.com/), using Vercel's native Next.js runtime (not a static export).

### Environment Variables

No environment variables are required.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template:

1. Fork the repository
2. Update all content in `src/data/portfolio-data.ts`
3. Replace images in `public/images/`
4. Customize colors and styling
5. Deploy to your preferred hosting service

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Avinash Uchadiya**

- Website: [avinashuchadiya.vercel.app](https://avinashuchadiya.vercel.app/)
- LinkedIn: [avinashuchadiya](https://www.linkedin.com/in/avinashuchadiya/)
- GitHub: [@uchadiya00002](https://github.com/uchadiya00002)
- Twitter/X: [@UchadiyaAvinash](https://x.com/UchadiyaAvinash)
- Instagram: [@nautankii.saala](https://www.instagram.com/nautankii.saala/)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ If you find this project helpful, please consider giving it a star!
