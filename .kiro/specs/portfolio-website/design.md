# Portfolio Website Design Document

## Overview

The portfolio website will be built as a static site using Astro and Tailwind CSS, optimized for GitHub Pages hosting. The architecture emphasizes performance, maintainability, and ease of content updates through a centralized data model. The site will showcase multiple project types while maintaining excellent Core Web Vitals and accessibility standards.

## Architecture

### Technology Stack
- **Framework**: Astro 4.x (static site generation)
- **Styling**: Tailwind CSS 3.x
- **Deployment**: GitHub Pages via GitHub Actions
- **Content Management**: JSON-based data files
- **Performance**: Built-in Astro optimizations + manual performance budgets

### Project Structure
```
/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment
├── .kiro/
│   └── specs/
│       └── portfolio-website/   # This spec
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectModal.astro
│   │   ├── FilterBar.astro
│   │   ├── ContactSection.astro
│   │   └── Layout.astro
│   ├── data/
│   │   └── projects.json        # Single source of truth
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   └── about.astro          # About page
│   └── styles/
│       └── global.css
├── public/
│   ├── assets/
│   │   ├── images/              # Project screenshots
│   │   └── icons/               # Social icons
│   ├── projects/
│   │   └── js-exercise/         # Static project demos
│   ├── papers/
│   │   └── research-paper.pdf
│   └── favicon.ico
├── projects/                    # External project repositories
│   ├── rag-demo/               # RAG chatbot frontend
│   └── js-exercise/            # JavaScript exercise
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Components and Interfaces

### Core Components

#### Layout.astro
- Base layout with SEO meta tags
- Navigation header with smooth scrolling
- Footer with social links
- Responsive container structure

#### Hero.astro
- Value proposition headline
- Professional tagline
- Call-to-action buttons (View Projects, Contact)
- Animated background or subtle visual elements

#### ProjectCard.astro
```typescript
interface ProjectCardProps {
  project: {
    slug: string;
    title: string;
    summary: string;
    tech: string[];
    links: {
      demo?: string;
      code?: string;
      pdf?: string;
    };
    badges: string[];
    cover: string;
  };
}
```

#### FilterBar.astro
- Technology tag filters (React-like interactivity via Astro islands)
- Search input for project titles/descriptions
- Clear filters button
- Active filter indicators

#### ProjectModal.astro
- Detailed project view with larger screenshots
- Technology badges with icons
- Multiple action buttons (Demo, Code, PDF)
- Project description and key features
- Close functionality

#### ContactSection.astro
- Professional email link (mailto)
- Social media icons (LinkedIn, GitHub)
- Optional contact form (using Netlify Forms or similar)
- Professional headshot or avatar

### Data Models

#### projects.json Schema
```json
{
  "projects": [
    {
      "slug": "unique-identifier",
      "title": "Project Display Name",
      "summary": "Brief description for cards",
      "description": "Detailed description for modal",
      "tech": ["Technology", "Stack", "Tags"],
      "links": {
        "demo": "https://live-demo-url.com",
        "code": "https://github.com/user/repo/tree/commit-sha",
        "pdf": "/papers/document.pdf"
      },
      "badges": ["Live", "Backend API", "Research"],
      "cover": "/assets/images/project-cover.jpg",
      "screenshots": [
        "/assets/images/project-screenshot-1.jpg",
        "/assets/images/project-screenshot-2.jpg"
      ],
      "featured": true,
      "dateCreated": "2024-01-15",
      "fileSize": "2.3 MB"
    }
  ]
}
```

## Data Flow and State Management

### Static Generation Flow
1. Astro reads `projects.json` at build time
2. Generates static HTML for each page with embedded project data
3. Client-side JavaScript handles filtering and modal interactions
4. No runtime API calls for project data

### Interactive Features
- **Filtering**: Client-side JavaScript filters pre-loaded project array
- **Modal System**: CSS-based modal with JavaScript event handlers
- **Smooth Scrolling**: Native CSS `scroll-behavior: smooth`
- **Image Lazy Loading**: Native `loading="lazy"` attributes

## Performance Optimizations

### Image Strategy
- **Format**: WebP with JPEG fallbacks
- **Sizing**: Multiple responsive sizes (400w, 800w, 1200w)
- **Optimization**: Astro's built-in image optimization
- **Loading**: Lazy loading for below-the-fold images

### CSS Strategy
- **Tailwind Purging**: Remove unused CSS classes
- **Critical CSS**: Inline above-the-fold styles
- **Font Loading**: `font-display: swap` for web fonts
- **Budget**: Target < 150KB total CSS

### JavaScript Strategy
- **Minimal JS**: Use Astro islands only where needed
- **Bundle Splitting**: Separate chunks for interactive components
- **Budget**: Target < 200KB total JS on landing page

## Error Handling

### External API Integration (RAG Demo)
```javascript
// Graceful fallback for RAG API
async function fetchRAGResponse(query) {
  try {
    const response = await fetch(`${RAG_API_URL}/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });
    return await response.json();
  } catch (error) {
    // Fallback to mock responses
    return getMockResponse(query);
  }
}
```

### CORS Handling
- Configure RAG API backend with proper CORS headers
- Implement client-side error boundaries
- Provide offline mode toggle for API-dependent features

### 404 and Error Pages
- Custom 404 page with navigation back to main site
- Error boundaries for JavaScript failures
- Graceful degradation for missing images or broken links

## SEO and Accessibility

### SEO Implementation
- **Meta Tags**: Dynamic title, description, and Open Graph tags
- **Structured Data**: JSON-LD schema for Person and Project entities
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Proper crawling directives

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support for interactive elements
- **Color Contrast**: WCAG AA compliance (4.5:1 ratio minimum)
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Visible focus indicators and logical tab order

## Testing Strategy

### Performance Testing
- **Lighthouse CI**: Automated performance audits in GitHub Actions
- **Core Web Vitals**: Monitor LCP, FID, and CLS metrics
- **Bundle Analysis**: Track JavaScript and CSS bundle sizes

### Cross-Browser Testing
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **Mobile Testing**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Ensure core functionality without JavaScript

### Accessibility Testing
- **Automated**: axe-core integration in build process
- **Manual**: Keyboard navigation and screen reader testing
- **Color Contrast**: Automated contrast ratio validation

## Deployment Strategy

### GitHub Actions Workflow
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Environment Configuration
- **Base Path**: Configure for GitHub Pages subdirectory if needed
- **Asset URLs**: Absolute paths for proper GitHub Pages serving
- **CNAME**: Custom domain configuration in `/public/CNAME`

### Content Delivery
- **Static Assets**: Served directly from GitHub Pages CDN
- **External APIs**: RAG demo backend hosted on separate service
- **PDF Files**: Optimized and served from `/public/papers/`

## Security Considerations

### Client-Side Security
- **No API Keys**: Never embed sensitive keys in client code
- **Content Security Policy**: Restrict script sources and inline code
- **HTTPS Only**: Enforce secure connections for all external resources

### External Integrations
- **RAG API**: Implement proper authentication on backend
- **Analytics**: Use privacy-focused analytics (Plausible preferred)
- **Contact Forms**: Server-side validation and spam protection