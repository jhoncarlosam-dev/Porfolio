# Developer Portfolio Template

A modern, customizable portfolio template built with React + TypeScript + Vite + Tailwind CSS. Fork this repository to create your own professional developer portfolio in minutes!

## 📋 Features

- ⚡️ Built with React 18, TypeScript, and Vite
- 🎨 Clean and modern design
- 📱 Fully responsive
- 🎯 SEO optimized
- 💼 Dedicated sections for projects, tech stack, and industries
- 📝 Easy to customize and maintain
- 🌐 Ready to be deployed in any static delivery platform ( Netlify, Cloudflare Pages)

## 🚀 Quick Start

> Small Note: I used yarn for this personally, you can use NPM or PNPM. 

1. Clone this repository
```bash
git clone https://github.com/oritromax/react-portfolio.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 🛠️ Customization Guide

### Basic Information
Modify the following files to personalize your portfolio:

1. `components/Hero.tsx`
   - Update your name, title, and introduction
   - Give a quick glance of your technical skills

2. `components/Industries.tsx`
   - Add your own Industry Experience  

3. `components/Projects.tsx`
   - Add your previous projects

3. `components/TechStack.tsx`
   - Showcase your skills and technical knowledge

2. `components/Contact.tsx`
   - Add your contact information
   - Update social media links

3. `components/SEO.tsx`
   - Update meta tags
   - Customize SEO information

### Projects
Edit `data/projects.ts` to showcase your work:
```typescript
  export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    images: ProjectImage[];
    featured: boolean;
    githubUrl?: string;
    liveUrl?: string;
  }
```

### Tech Stack
Modify `data/technologies.ts` to list your skills:
```typescript
  export interface Technology {
    name: string;
    category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'cloud';
    proficiency: number;
    brandColor: TechBrandColor;
  }
```

### Industries
Update `data/industries.ts` to highlight your industry experience:
```typescript
  export interface Industry {
    name: string;
    description: string;
    technologies: string[];
    icon?: string;
  }
```
> You can find more details in their individual files.
## 📁 Project Structure

```
├── src/
│   ├── components/       # React components
│   ├── data/            # Static data files
│   ├── assets/          # Images and other static assets
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
```

## 🔮 Future Plan 
- [ ] Add a blog section
- [ ] Add a resume section (PDF)
- [ ] Add a testimonials section (with a carousel)

> You are welcome to work on any of these or something completely brand new 
## 💻 Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


#### 🤵By Oritro [ https://iam.ioritro.com ]

