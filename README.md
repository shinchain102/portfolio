# Cyberpunk Portfolio

A cyberpunk-themed portfolio website featuring dark aesthetics with neon accents, glitch animations, and CRT-style effects. Built with React, TypeScript, and GSAP.

![Preview](preview.png)

## Features

- 🌟 Authentic CRT TV-style loading screen with static noise
- 💻 Retro-futuristic UI with glitch effects
- 📸 Image carousel for photography showcase
- 🎨 Dynamic content with typewriter animations
- 🔮 Marketing insights section
- 🔗 Social media integration
- 📱 Fully responsive design

## Tech Stack

- React + TypeScript
- GSAP for animations
- Tailwind CSS
- Shadcn UI components
- Express.js backend

## Prerequisites

- Node.js 18+ (20.x recommended)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cyberpunk-portfolio.git
cd cyberpunk-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add any necessary environment variables:
```env
# Add your environment variables here
VITE_SOME_KEY=your_value
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5000`.

## Project Structure

```
├── client/              # Frontend code
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── lib/        # Utilities and animations
│   │   └── pages/      # Page components
├── server/              # Backend code
│   └── routes.ts       # API routes
└── shared/             # Shared types and schemas
```

## Building for Production

```bash
npm run build
```

## Deployment

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

Alternatively, connect your GitHub repository to Netlify/Vercel for automatic deployments.

## Environment Variables

Required environment variables for deployment:

```env
DATABASE_URL=your_database_url  # If using a database
NODE_ENV=production
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful components
- [GSAP](https://greensock.com/gsap/) for powerful animations
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Support

For support, please open an issue in the repository.
