# Bharatiya Antriksh Hackathon 2026 - Landing Page

A pixel-perfect, responsive landing page for the Bharatiya Antriksh Hackathon 2026, built with **Astro** and **Tailwind CSS**.

## 🚀 Tech Stack

- **Astro** - Modern static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Dynamic interactions
- **HTML5** - Semantic markup

## 📁 Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Navigation.astro # Top navigation bar
│   ├── Hero.astro      # Hero section with video support
│   ├── About.astro     # About/Description section
│   ├── Features.astro  # Why Participate section
│   ├── Timeline.astro  # Key dates & timeline
│   └── Footer.astro    # Footer
├── layouts/
│   └── Layout.astro    # Main layout template
├── pages/
│   └── index.astro     # Homepage
└── styles/
    └── globals.css     # Global styles & animations
```

## 🎨 Features

✅ **Pixel-Perfect Design** - Matches the Figma design  
✅ **Responsive Layout** - Mobile, tablet, and desktop  
✅ **Video Hero Section** - Ready for video background (placeholder support)  
✅ **Dark Theme** - Space-themed dark design  
✅ **Smooth Animations** - Fade-in, hover effects, scroll animations  
✅ **Custom Tailwind Colors** - Orange (`#FF6B35`) and Blue (`#004E89`) accents  
✅ **Performance Optimized** - Fast load times, minimal CSS  

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Steps

1. **Navigate to the project directory:**
   ```bash
   cd landingPage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎬 Adding Your Video

The hero section supports a video background. To add your video:

1. **Upload your video** to a public URL or place it in `public/` folder
2. **Update the Hero component** in `src/pages/index.astro`:
   ```astro
   <Hero videoSrc="/path/to/your-video.mp4" />
   ```

Supported formats: MP4, WebM, OGV

## 🎨 Customization

### Colors
Update colors in `tailwind.config.mjs`:
```javascript
colors: {
  primary: '#FF6B35',      // Orange accent
  secondary: '#004E89',    // Blue accent
  dark: '#0A0E27',         // Dark background
  darkGray: '#1a1f35',     // Card background
}
```

### Typography
Fonts are defined in `tailwind.config.mjs`:
- **Display Font**: Poppins (headings)
- **Body Font**: Inter (body text)

### Images
Replace placeholder images in components:
- **About section**: Update `imageUrl` prop in `src/pages/index.astro`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are optimized for these breakpoints.

## 🔧 Component Props

### Hero Component
```astro
<Hero videoSrc="/video.mp4" />
```

### About Component
```astro
<About imageUrl="https://example.com/image.jpg" />
```

### Timeline Component
```astro
<Timeline submissionClosingDays="20" submissionClosingMins="45" />
```

## 🎯 Key Sections

1. **Navigation** - Fixed navbar with menu and CTA button
2. **Hero** - Full-screen video hero with title and CTAs
3. **About** - Description with stats
4. **Features** - 6-card grid of why participate
5. **Timeline** - 4 key phases + submission countdown
6. **Footer** - Links, contact, copyright

## 📦 Dependencies

```json
{
  "astro": "^4.0.0",
  "@astrojs/tailwind": "^5.0.0",
  "tailwindcss": "^3.3.0"
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically on push

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Static Hosting
1. Run `npm run build`
2. Upload `dist/` folder to your hosting provider

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions, contact: **info@iiss.space**

---

**Built with ❤️ for Bharatiya Antriksh Hackathon 2026**
