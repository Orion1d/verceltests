# Mindful Factory Landing Page

A modern, responsive landing page built with React, Vite, and Supabase.

## 🚀 Quick Deploy

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 2: Netlify
1. Run `npm run build`
2. Drag `dist` folder to [netlify.com](https://netlify.com)

### Option 3: Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist` folder to your web server

## 🌐 Custom Domain Setup

### 1. Deploy Your Site
Choose one of the deployment options above.

### 2. Configure DNS
- **Vercel/Netlify**: Follow their DNS configuration instructions
- **Traditional Hosting**: Point your domain to your hosting provider's servers

### 3. Update Supabase Settings
1. Go to [supabase.com/dashboard](https://supabase.com/dashboard)
2. Select your project (`esbovmwrbjoryndhgvvh`)
3. Settings → API → Add your domain to allowed origins
4. Authentication → Settings → Add your domain to Site URL

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
├── pages/              # Page components
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── integrations/       # External integrations (Supabase)
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
└── utils/              # Helper utilities
```

## 🔧 Environment Variables

Create `.env.local`:
```env
VITE_SUPABASE_URL=https://esbovmwrbjoryndhgvvh.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_APP_NAME=Mindful Factory
VITE_APP_URL=https://your-domain.com
```

## 🎨 Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Supabase (Database, Auth, Edge Functions)
- **Deployment**: Vercel/Netlify ready
- **Build Tool**: Vite
- **Package Manager**: npm

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Comprehensive deployment instructions
- [Quick Start Guide](./QUICK_START.md) - Fast deployment steps
- [Supabase Documentation](https://supabase.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

## 🔒 Security

- Environment variables for sensitive data
- CORS configuration for Supabase
- Security headers configured
- HTTPS enforcement

## 📞 Support

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)

## 📄 License

This project is private and proprietary.
