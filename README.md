# Blue One General Trading LLC - Global Food Exporter Website

A modern, interactive React website for Blue One General Trading LLC, showcasing their global food export business with premium raw food materials shipped worldwide in containers.

## 🌟 Features

- **Modern Interactive Design**: Smooth animations and transitions throughout the site
- **Progressive Web App (PWA)**: Installable on mobile and desktop devices
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Product Management**: Easy-to-manage product catalog with show/hide, sequencing, and special offers
- **Animated Elements**: Floating vegetables/fruits, falling animations, and interactive transitions
- **Fast Loading**: Optimized performance with lazy loading and code splitting

## 🚀 Live Demo

Visit: [https://Blue One.ae](https://Blue One.ae)

## 📱 Pages

- **Home**: Hero section with animated elements and company overview
- **About**: Company story, values, and team information
- **Products**: Interactive product catalog with category filtering
- **Product Details**: Individual product pages with specifications
- **Services**: Export services and process overview
- **Contact**: Contact form, office locations, and FAQ

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **PWA**: Service Worker + Web App Manifest

## 📦 Installation & Local Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/Blue One-foods-website.git
cd Blue One-foods-website

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🚀 Deployment

### Deploy to Netlify

1. **Connect Repository**:

   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:

   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Environment Variables** (if needed):

   - Go to Site settings > Environment variables
   - Add any required environment variables

4. **Custom Domain**:
   - Go to Site settings > Domain management
   - Add custom domain: `Blue One.ae`
   - Configure DNS records as instructed

### Deploy to Render

1. **Create New Static Site**:

   - Go to [Render](https://render.com)
   - Click "New" > "Static Site"
   - Connect your GitHub repository

2. **Build Settings**:

   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Custom Domain**:
   - Go to Settings > Custom Domains
   - Add `Blue One.ae`
   - Configure DNS records

### Deploy to Vercel

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Deploy**:

   ```bash
   vercel --prod
   ```

3. **Custom Domain**:
   - Go to Vercel dashboard > Domains
   - Add `Blue One.ae`

## 📊 Product Management

### Adding New Products

1. **Edit Product Data**:

   ```typescript
   // src/data/products.ts
   export const products: Product[] = [
   	{
   		id: "new-product-id",
   		name: "Product Name",
   		category: "Fresh Fruits", // or other category
   		description: "Product description...",
   		features: ["Feature 1", "Feature 2"],
   		specifications: {
   			origin: "Country of origin",
   			packaging: "Packaging details",
   			shelfLife: "Shelf life",
   			minimumOrder: "Minimum order quantity",
   		},
   		isVisible: true, // Show/hide product
   		isFeatured: false, // Feature on homepage
   		hasSpecialOffer: false, // Special offer badge
   		specialOfferText: "Optional offer text",
   		sortOrder: 7, // Display order
   	},
   ];
   ```

2. **Product Categories**:
   ```typescript
   export const categories = [
   	"All Products",
   	"Fresh Fruits",
   	"Vegetables",
   	"Grains & Cereals",
   	"Spices & Herbs",
   	"Nuts & Seeds",
   	"Dried Fruits",
   ];
   ```

### Product Management Options

- **Show/Hide**: Set `isVisible: true/false`
- **Featured Products**: Set `isFeatured: true` to show on homepage
- **Special Offers**: Set `hasSpecialOffer: true` and add `specialOfferText`
- **Sorting**: Change `sortOrder` number (lower numbers appear first)
- **Categories**: Add new categories to the `categories` array

## 🎨 Customization

### Colors & Branding

```css
/* src/index.css */
:root {
	--primary: #155c56; /* Main brand color */
	--primary-light: #0a3a4d; /* Lighter brand color */
	--secondary: #f59e0b; /* Secondary color (amber) */
	--accent: #10b981; /* Accent color (green) */
}
```

### Logo Specifications

- **Size**: 160px width × 100px height
- **Design**: Golden eagle with "Blue One" text below
- **Text Color**: #155c56
- **Company Name**: Blue One General Trading LLC

### Animations

- **Framer Motion**: Used for page transitions and element animations
- **CSS Animations**: Custom keyframes for floating elements
- **Interactive Elements**: Hover effects and micro-interactions

## 📱 PWA Features

### Installation

- Automatic install prompt on supported browsers
- Custom install button in navigation
- Offline functionality with service worker

### Manifest Configuration

```json
{
	"name": "Blue One General Trading LLC",
	"short_name": "Blue One General Trading",
	"start_url": "/",
	"display": "standalone",
	"theme_color": "#155c56"
}
```

## 🔍 SEO Optimization

### Meta Tags

- Dynamic title and description per page
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Performance

- Lazy loading for images and components
- Code splitting with React.lazy()
- Optimized bundle size
- Fast loading animations

## 📞 Support & Updates

### Future Database Integration

Currently, all data is managed in code files. For future database integration:

1. **Replace Static Data**:

   - Move product data from `src/data/products.ts` to database
   - Create API endpoints for product management
   - Add admin panel for content management

2. **Recommended Stack**:
   - **Backend**: Node.js + Express or Next.js API routes
   - **Database**: PostgreSQL or MongoDB
   - **CMS**: Strapi or custom admin panel

### Content Updates

For now, content updates require:

1. Edit files in `src/data/` or page components
2. Commit changes to repository
3. Redeploy to hosting platform

### Contact Information

- **Website**: [Blue One.ae](https://Blue One.ae)
- **Email**: info@Blue One.ae
- **Location**: Dubai, UAE

## 📄 License

© 2024 Blue One General Trading LLC. All rights reserved.

---

**Built with ❤️ for global food export excellence**
