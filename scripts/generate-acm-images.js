const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 800;
const IMAGES = [
  {
    name: 'main.jpg',
    text: 'ACM & Exhibition 2025 - Main Hall',
    bgColor: '#1a365d'
  },
  {
    name: 'booth.jpg',
    text: 'Nyati Cement Booth',
    bgColor: '#2d3748'
  },
  {
    name: 'demo.jpg',
    text: 'Product Demonstration',
    bgColor: '#2b6cb0'
  },
  {
    name: 'interaction.jpg',
    text: 'Customer Engagement',
    bgColor: '#2c5282'
  },
  {
    name: 'session.jpg',
    text: 'Technical Presentation',
    bgColor: '#2a4365'
  }
];

// Ensure directory exists
const imageDir = path.join(__dirname, '../public/images/news/acm');
if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

// Generate placeholder images
IMAGES.forEach(({ name, text, bgColor }) => {
  const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Add text
  ctx.font = '48px Arial';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

  // Save image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imageDir, name), buffer);
  console.log(`Generated ${name}`);
});
