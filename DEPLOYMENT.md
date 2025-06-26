# Deployment Guide for Mindful Factory Landing Page

This guide will help you deploy your React + Vite application with Supabase backend to various hosting platforms with a custom domain.

## Prerequisites

1. **Domain Name**: Purchase a domain from a registrar (Namecheap, GoDaddy, Google Domains, etc.)
2. **Supabase Project**: Your backend is already set up at `esbovmwrbjoryndhgvvh.supabase.co`
3. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)

## Environment Setup

1. Copy `env.example` to `.env.local` for local development:
   ```bash
   cp env.example .env.local
   ```

2. Update the environment variables in `.env.local`:
   ```env
   VITE_SUPABASE_URL=https://esbovmwrbjoryndhgvvh.supabase.co
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_APP_NAME=Mindful Factory
   VITE_APP_URL=https://your-domain.com
   ```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is already configured with `vercel.json`.

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Add Custom Domain**:
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Domains
   - Add your custom domain
   - Follow the DNS configuration instructions

### Option 2: Netlify

1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Connect your Git repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Add Custom Domain**:
   - Go to Site settings → Domain management
   - Add custom domain
   - Configure DNS records as instructed

### Option 3: GitHub Pages

1. **Update package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

2. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

### Option 4: Traditional Web Hosting

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload contents** of the `dist` folder to your web hosting provider

3. **Configure .htaccess** (for Apache):
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

## DNS Configuration

### For Vercel/Netlify:
- **A Record**: Point to their IP addresses
- **CNAME Record**: Point to your subdomain (if using www)

### For GitHub Pages:
- **CNAME Record**: Point to `username.github.io`

## Supabase Configuration

### 1. Update Supabase Settings

1. Go to your Supabase dashboard
2. Navigate to Settings → API
3. Add your custom domain to the allowed origins:
   ```
   https://your-domain.com
   https://www.your-domain.com
   ```

### 2. Configure Authentication (if using)

1. Go to Authentication → Settings
2. Add your domain to Site URL:
   ```
   https://your-domain.com
   ```
3. Add redirect URLs:
   ```
   https://your-domain.com/auth/callback
   https://your-domain.com/dashboard
   ```

### 3. Update Edge Functions (if using)

If you're using the contact email function, update the CORS settings in `supabase/functions/send-contact-email/index.ts`:

```typescript
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://your-domain.com',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
```

## SSL/HTTPS Setup

### Automatic (Recommended)
- Vercel, Netlify, and GitHub Pages provide automatic SSL certificates
- No additional configuration needed

### Manual Setup
If using traditional hosting:
1. Purchase an SSL certificate from your hosting provider
2. Install the certificate following your provider's instructions
3. Force HTTPS redirects

## Performance Optimization

### 1. Enable Compression
Add to your hosting configuration or `.htaccess`:
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

### 2. Cache Headers
Static assets should be cached for 1 year:
```
Cache-Control: public, max-age=31536000, immutable
```

## Monitoring and Analytics

### 1. Google Analytics
Add your Google Analytics tracking code to `index.html`

### 2. Error Monitoring
Consider adding Sentry or similar error monitoring service

### 3. Performance Monitoring
- Use Google PageSpeed Insights
- Set up Core Web Vitals monitoring

## Troubleshooting

### Common Issues

1. **404 Errors on Refresh**: Ensure SPA routing is properly configured
2. **CORS Errors**: Check Supabase allowed origins
3. **Build Failures**: Verify all dependencies are in package.json
4. **Environment Variables**: Ensure all required env vars are set in your hosting platform

### Support

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **Supabase**: [supabase.com/docs](https://supabase.com/docs)

## Security Checklist

- [ ] Environment variables are properly configured
- [ ] Supabase API keys are secure
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] CORS is properly set up
- [ ] No sensitive data in client-side code

## Next Steps

1. Choose your preferred hosting platform
2. Set up your custom domain
3. Configure DNS records
4. Deploy your application
5. Test all functionality
6. Set up monitoring and analytics
7. Configure backups and monitoring 