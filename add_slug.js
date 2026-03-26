const fs = require('fs');

const data = fs.readFileSync('src/data/homePageData.ts', 'utf8');

// Extract the array part
const start = data.indexOf('export const HomeData = [');
const end = data.lastIndexOf('];') + 2;
const arrayStr = data.substring(start, end);

// Parse the array (this might be tricky, but since it's JS, I can eval it safely)
let HomeData;
try {
  // Remove export and const
  const code = arrayStr.replace('export const HomeData = ', '').replace(';', '');
  HomeData = eval(code);
} catch (e) {
  console.error('Error parsing data');
  process.exit(1);
}

// Function to create slug
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // remove special chars except spaces and hyphens
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ''); // trim hyphens
}

// Add slug to each product
HomeData.forEach(product => {
  product.slug = createSlug(product.title);
});

// Now, write back
const newArrayStr = 'export const HomeData = ' + JSON.stringify(HomeData, null, 2) + ';';

// Replace in the file
const newData = data.replace(arrayStr, newArrayStr);

fs.writeFileSync('src/data/homePageData.ts', newData);

console.log('Slugs added successfully');