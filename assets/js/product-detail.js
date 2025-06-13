// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Sample product data (in real application, this would come from a database)
const products = {
  '1': {
    title: 'Baby Fabric Shoes',
    price: 4.00,
    originalPrice: 5.00,
    description: 'Comfortable and stylish fabric shoes for babies. Made from high-quality materials that are gentle on baby\'s feet.',
    images: [
      './assets/images/products/1.jpg',
      './assets/images/products/1.jpg',
      './assets/images/products/1.jpg'
    ],
    category: 'Baby Products',
    sku: 'BS-001'
  },
  '2': {
    title: 'Men\'s Hoodies T-Shirt',
    price: 7.00,
    originalPrice: 17.00,
    description: 'Stylish and comfortable hoodies t-shirt for men. Perfect for casual wear and outdoor activities.',
    images: [
      './assets/images/products/2.jpg',
      './assets/images/products/2.jpg',
      './assets/images/products/2.jpg'
    ],
    category: 'Men\'s Clothing',
    sku: 'MH-001'
  },
  '3': {
    title: 'Girls T-Shirt',
    price: 3.00,
    originalPrice: 5.00,
    description: 'Cute and comfortable t-shirt for girls. Made from soft, breathable fabric.',
    images: [
      './assets/images/products/3.jpg',
      './assets/images/products/3.jpg',
      './assets/images/products/3.jpg'
    ],
    category: 'Girls\' Clothing',
    sku: 'GT-001'
  },
  '4': {
    title: 'Woolen Hat for Men',
    price: 12.00,
    originalPrice: 15.00,
    description: 'Warm and stylish woolen hat for men. Perfect for cold weather.',
    images: [
      './assets/images/products/4.jpg',
      './assets/images/products/4.jpg',
      './assets/images/products/4.jpg'
    ],
    category: 'Men\'s Accessories',
    sku: 'WH-001'
  },
  '5': {
    title: 'Relaxed Short Full Sleeve T-Shirt',
    price: 45.00,
    originalPrice: 12.00,
    description: 'Comfortable and stylish t-shirt with full sleeves. Perfect for casual wear.',
    images: [
      './assets/images/products/clothes-1.jpg',
      './assets/images/products/clothes-1.jpg',
      './assets/images/products/clothes-1.jpg'
    ],
    category: 'Clothes',
    sku: 'TS-001'
  },
  '6': {
    title: 'Girls Pink Embro Design Top',
    price: 61.00,
    originalPrice: 9.00,
    description: 'Beautiful pink top with embroidered design. Perfect for special occasions.',
    images: [
      './assets/images/products/clothes-2.jpg',
      './assets/images/products/clothes-2.jpg',
      './assets/images/products/clothes-2.jpg'
    ],
    category: 'Clothes',
    sku: 'GT-002'
  },
  '7': {
    title: 'Black Floral Wrap Midi Skirt',
    price: 76.00,
    originalPrice: 25.00,
    description: 'Elegant black midi skirt with floral wrap design. Perfect for both casual and formal occasions.',
    images: [
      './assets/images/products/clothes-3.jpg',
      './assets/images/products/clothes-3.jpg',
      './assets/images/products/clothes-3.jpg'
    ],
    category: 'Clothes',
    sku: 'SK-001'
  },
  '8': {
    title: 'Pure Garment Dyed Cotton Shirt',
    price: 68.00,
    originalPrice: 31.00,
    description: 'High-quality cotton shirt with garment dyeing. Perfect for formal occasions.',
    images: [
      './assets/images/products/shirt-1.jpg',
      './assets/images/products/shirt-1.jpg',
      './assets/images/products/shirt-1.jpg'
    ],
    category: 'Mens Fashion',
    sku: 'MS-002'
  },
  '9': {
    title: 'Mens Winter Leathers Jackets',
    price: 48.00,
    originalPrice: 75.00,
    description: 'Stylish and warm winter leather jacket for men. Perfect for cold weather with premium leather material.',
    images: [
      './assets/images/products/jacket-3.jpg',
      './assets/images/products/jacket-4.jpg',
      './assets/images/products/jacket-3.jpg'
    ],
    category: 'Jacket',
    sku: 'MJ-001'
  },
  '10': {
    title: 'Pure Garment Dyed Cotton Shirt',
    price: 45.00,
    originalPrice: 56.00,
    description: 'High-quality cotton shirt with garment dyeing technique. Perfect for both casual and formal occasions.',
    images: [
      './assets/images/products/shirt-1.jpg',
      './assets/images/products/shirt-2.jpg',
      './assets/images/products/shirt-1.jpg'
    ],
    category: 'Shirt',
    sku: 'MS-003'
  },
  '11': {
    title: 'MEN Yarn Fleece Full-Zip Jacket',
    price: 58.00,
    originalPrice: 65.00,
    description: 'Comfortable and warm fleece jacket with full-zip design. Perfect for outdoor activities in cold weather.',
    images: [
      './assets/images/products/jacket-5.jpg',
      './assets/images/products/jacket-6.jpg',
      './assets/images/products/jacket-5.jpg'
    ],
    category: 'Jacket',
    sku: 'MJ-002'
  }
};

// Function to load product details
function loadProductDetails() {
  const product = products[productId];
  
  if (!product) {
    // Handle product not found
    document.querySelector('.product-detail').innerHTML = '<h2>Product not found</h2>';
    return;
  }

  // Update product details
  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-price').innerHTML = `
    <del>$${product.originalPrice}</del>
    <span class="price">$${product.price}</span>
  `;
  document.getElementById('product-description').textContent = product.description;
  document.getElementById('product-category').textContent = product.category;
  document.getElementById('product-sku').textContent = product.sku;

  // Set main product image
  const mainImage = document.getElementById('main-product-image');
  mainImage.src = product.images[0];
  mainImage.alt = product.title;

  // Create thumbnails
  const thumbnailsContainer = document.querySelector('.product-detail-thumbnails');
  product.images.forEach((image, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = image;
    thumbnail.alt = `${product.title} - Image ${index + 1}`;
    thumbnail.addEventListener('click', () => {
      mainImage.src = image;
    });
    thumbnailsContainer.appendChild(thumbnail);
  });
}

// Quantity selector functionality
const minusBtn = document.querySelector('.quantity-btn.minus');
const plusBtn = document.querySelector('.quantity-btn.plus');
const quantityInput = document.querySelector('.quantity-input');

minusBtn.addEventListener('click', () => {
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

plusBtn.addEventListener('click', () => {
  const currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});

// Add to cart functionality
const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value);
  const product = products[productId];
  
  // Here you would typically add the product to a cart
  alert(`Added ${quantity} ${product.title} to cart!`);
});

// Add to wishlist functionality
const addToWishlistBtn = document.querySelector('.add-to-wishlist-btn');
addToWishlistBtn.addEventListener('click', () => {
  const product = products[productId];
  alert(`Added ${product.title} to wishlist!`);
});

// Load product details when page loads
document.addEventListener('DOMContentLoaded', loadProductDetails); 