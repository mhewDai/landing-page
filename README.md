# Portfolio Website

A modern, fast-loading portfolio website built with Astro and Tailwind CSS, showcasing projects in AI, web development, and research.

## 🚀 Features

- **High Performance**: Built with Astro for optimal loading speeds and Core Web Vitals
- **Responsive Design**: Works seamlessly across all devices and screen sizes
- **Modern Stack**: Astro + Tailwind CSS + TypeScript
- **SEO Optimized**: Complete meta tags, Open Graph, and structured data
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS 3.x
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
/
├── .github/workflows/     # GitHub Actions deployment
├── src/
│   ├── components/        # Reusable Astro components
│   ├── data/             # Project data and content
│   ├── pages/            # Site pages
│   ├── styles/           # Global styles
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
└── dist/                 # Built site (generated)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/landing-page.git
cd landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Building for Production

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📝 Content Management

### Adding Projects

Edit `src/data/projects.json` to add or modify projects. Each project should follow this structure:

```json
{
  "slug": "unique-identifier",
  "title": "Project Name",
  "summary": "Brief description",
  "description": "Detailed description",
  "tech": ["Technology", "Stack"],
  "links": {
    "demo": "https://demo-url.com",
    "code": "https://github.com/user/repo"
  },
  "badges": ["Live", "Featured"],
  "cover": "./assets/images/project-cover.svg",
  "featured": true,
  "dateCreated": "2024-01-15"
}
```

### Updating Content

- **Hero Section**: Edit `src/components/Hero.astro`
- **About Section**: Edit the about section in `src/pages/index.astro`
- **Contact Info**: Update links in `src/components/Layout.astro`

## 🚀 Deployment

This site is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://yourusername.github.io/landing-page`

### Manual Deployment

You can also deploy manually:

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 🎨 Customization

### Colors and Styling

The site uses Tailwind CSS with a custom color palette defined in `tailwind.config.mjs`. Update the primary colors to match your brand:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    900: '#1e3a8a',
  }
}
```

### Fonts

The site uses Inter font from Google Fonts. Update the font in `src/styles/global.css` and `tailwind.config.mjs`.

## 📊 Performance

This site is optimized for performance:

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: < 150KB CSS, < 200KB JS
- **Image Optimization**: Automatic WebP conversion and lazy loading
- **Critical CSS**: Inlined above-the-fold styles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site**: [https://yourusername.github.io/landing-page](https://yourusername.github.io/landing-page)
- **Repository**: [https://github.com/yourusername/landing-page](https://github.com/yourusername/landing-page)

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)