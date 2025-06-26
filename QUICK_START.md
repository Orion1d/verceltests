# Quick Start Guide - Deploy Your Website

## 🚀 Fastest Way to Deploy (Vercel)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Add Custom Domain**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your project
   - Settings → Domains → Add Domain
   - Follow DNS instructions

## 🌐 Alternative: Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Drag & Drop** the `dist` folder (after running `npm run build`)
3. **Add Custom Domain** in Site Settings

## 📋 Pre-Deployment Checklist

- [ ] Copy `env.example` to `.env.local`
- [ ] Update environment variables with your domain
- [ ] Test locally: `npm run dev`
- [ ] Build: `npm run build`
- [ ] Test build: `npm run preview`

## 🔧 Environment Variables

Create `.env.local`:
```env
VITE_SUPABASE_URL=https://esbovmwrbjoryndhgvvh.supabase.co
VITE_SUPABASE_ANON_KEY=your_key_here
VITE_APP_NAME=Mindful Factory
VITE_APP_URL=https://your-domain.com
```

## 🌍 Supabase Configuration

1. **Go to [supabase.com/dashboard](https://supabase.com/dashboard)**
2. **Select your project** (`esbovmwrbjoryndhgvvh`)
3. **Settings → API → Add your domain** to allowed origins
4. **Authentication → Settings → Add your domain** to Site URL

## 📞 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)

## ⚡ Quick Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Deploy to Vercel
npm run deploy:vercel

# Preview build
npm run preview
``` 