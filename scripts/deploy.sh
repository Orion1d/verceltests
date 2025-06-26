#!/bin/bash

# Deployment script for Mindful Factory Landing Page

set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null; then
    echo "🌐 Deploying to Vercel..."
    vercel --prod
else
    echo "📁 Build files are ready in the 'dist' directory."
    echo "You can now upload these files to your hosting provider."
    echo ""
    echo "For Vercel deployment, install the CLI: npm i -g vercel"
    echo "For Netlify, drag and drop the 'dist' folder to your Netlify dashboard"
    echo "For traditional hosting, upload the contents of 'dist' to your web server"
fi

echo "🎉 Deployment process completed!" 