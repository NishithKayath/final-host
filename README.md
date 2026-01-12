# Pradhan Ji Groups - Real Estate & Construction Website

A professional, modern website for Pradhan Ji Groups, a leading real estate and construction company based in Behror, Rajasthan.

## Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Professional design with smooth animations and transitions
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Loading**: Optimized images and minimal JavaScript for quick page loads
- **Contact Form**: Functional contact form with validation
- **Team Section**: Professional showcase of leadership team
- **Gallery**: Image gallery with lightbox functionality
- **Google Maps Integration**: Embedded map showing business location

## Technology Stack

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern CSS with animations and responsive design
- **Vanilla JavaScript**: No dependencies, pure JavaScript for interactions
- **Google Fonts**: Poppins and Noto Sans Devanagari for typography

## Project Structure

```
website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Stylesheets
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   ├── images/         # All images
│   └── icons/          # SVG icons
├── _redirects          # Netlify routing
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## Netlify Deployment

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/pradhanjigroups.git
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify](https://app.netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Authorize Netlify and select your repository
   - Build settings will be auto-configured
   - Click "Deploy site"

### Method 2: Drag & Drop

1. **Quick Deploy**:
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop the entire `website` folder
   - Your site will be live instantly

### Method 3: Netlify CLI

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy**:
   ```bash
   cd website
   netlify deploy --prod --dir .
   ```

## Configuration Files

- `_redirects`: Ensures all routes work properly with client-side routing
- `netlify.toml`: Security headers and caching optimization
- Both files are automatically processed by Netlify

## Design Features

### Color Scheme
- **Primary**: Deep Blue (#0f4c5c) - Professional and trustworthy
- **Secondary**: Teal (#2c7a7b) - Modern complement
- **Accent**: Orange (#e67e22) - Energetic call-to-action
- **Background**: Light gradient (f8fafc → ffffff) - Clean and modern

### Animations
- Hero section shimmer effect
- Smooth scroll animations
- Card hover effects with scaling
- Button sliding overlays
- Navigation transitions

## Responsive Breakpoints

- **Desktop**: > 768px
- **Mobile**: ≤ 768px

## Customization

### Colors
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #0f4c5c;
    --secondary-color: #2c7a7b;
    --accent-color: #e67e22;
    /* ... other variables */
}
```

### Content
- Update contact information in `index.html`
- Replace images in `assets/images/`
- Modify text content directly in HTML

## Contact Information

**Pradhan Ji Groups**
- Address: Behror, NCR Delhi, Rajasthan - 301701
- Email: pradhanjigroups@gmail.com
- Phone: Available in team section

## SEO Optimization

- Semantic HTML5 structure
- Meta tags for search engines
- Open Graph tags for social sharing
- Optimized image alt tags
- Fast loading performance

## License

This project is proprietary to Pradhan Ji Groups.

---

**Pradhan Ji Groups** - Building Trust, Creating Futures
