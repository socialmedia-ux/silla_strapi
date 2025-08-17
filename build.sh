#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🔧 Installing libvips (for sharp)..."
apt-get update && apt-get install -y libvips-dev

echo "📦 Installing Node dependencies..."
npm install

echo "⚙️ Building Strapi app..."
npm run build
