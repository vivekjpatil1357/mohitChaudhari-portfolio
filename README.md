# Mohit Chaudhari - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all device sizes
- Dark/light mode toggle
- Smooth animations with Framer Motion
- Showcase of work experience, projects, and skills
- Contact form for visitors
- SEO optimized

## Technologies Used

- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- React Icons

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

This site can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

### Netlify

1. Push your code to a GitHub repository
2. Connect your repository to Netlify
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

## Customization

### Updating Content

- Edit component files in the `components` directory to update content
- Update images in the `public` directory

### Changing Styles

- Edit the Tailwind configuration in `tailwind.config.js`
- Modify component-specific styles in their respective files

## License

This project is licensed under the MIT License - see the LICENSE file for details.
