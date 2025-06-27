#!/bin/bash

# Deploy script for randomchoicewheel.com
# This script performs git operations and deploys to the server

echo "🚀 Starting deployment process..."

# Git operations
echo "📝 Adding all changes to git..."
git add .

# Create commit with current date
COMMIT_DATE=$(date '+%Y-%m-%d %H:%M:%S')
echo "💾 Creating commit with date: $COMMIT_DATE"
git commit -m "Deploy: $COMMIT_DATE"

echo "📤 Pushing to remote repository..."
git push origin main

# SSH and deploy to server
echo "🌐 Connecting to server and deploying..."
ssh root@178.16.130.178 << 'EOF'
cd /var/www/randomchoicewheel.com

echo "🔄 Actualizando código desde repositorio remoto..."
echo "Ejecutando git clean -fd..."
git clean -fd

echo "Ejecutando git reset --hard HEAD..."
git reset --hard HEAD

echo "Ejecutando git fetch origin..."
git fetch origin

echo "Ejecutando git reset --hard origin/main..."
git reset --hard origin/main

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project..."
npm run build

echo "🌍 Running international SEO deployment..."
./deploy-international-seo.sh

echo "✅ Deployment completed successfully!"
EOF

echo "🎉 Full deployment process completed!"