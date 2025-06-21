# AI Portfolio Website

A modern, responsive AI portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases AI and machine learning projects with a clean, professional design.

## Features

- 🎨 Modern, clean design with dark/light mode toggle
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 15 and App Router
- 🎭 Smooth animations and transitions
- 🧠 AI-themed particle animations
- 📊 Interactive skill progress bars
- 📧 Contact form with validation
- 🔗 Social media integration
- 🚀 Optimized for performance and SEO

## Sections

- **Header**: Fixed navigation with smooth scrolling
- **Hero**: Eye-catching introduction with particle animation
- **About**: Personal introduction with statistics
- **Projects**: Showcase of AI/ML projects with hover effects
- **Skills**: Technical skills with animated progress bars
- **Contact**: Contact form and social links
- **Footer**: Additional links and information

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Animations**: CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd ai-portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your personal information:

- `components/hero.tsx` - Hero section content
- `components/about.tsx` - About section content
- `components/projects.tsx` - Your projects data
- `components/skills.tsx` - Your skills and expertise
- `components/contact.tsx` - Contact information
- `app/layout.tsx` - SEO metadata

### Images

Replace placeholder images in the `public` folder:
- Profile photo for the about section
- Project thumbnails
- Any other custom images

### Colors and Styling

The color scheme can be customized in:
- `app/globals.css` - CSS custom properties
- `tailwind.config.js` - Tailwind configuration

### Content

All content is easily customizable through the component files. Update:
- Project descriptions and links
- Skill levels and categories  
- Contact information
- Social media links

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

Or use the Vercel CLI:
\`\`\`bash
npm install -g vercel
vercel --prod
\`\`\`

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for images and components
- Efficient CSS with Tailwind
- Minimal JavaScript bundle
- SEO optimized with proper meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the portfolio, please open an issue or contact me.

---

Built with ❤️ using Next.js and deployed on Vercel.
