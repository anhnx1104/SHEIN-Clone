// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(productId, quantity = 1) {
    const product = products[productId];
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: quantity
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show success message
    showNotification('Product added to cart!');
}

// Function to update cart count in header
function updateCartCount() {
    const cartCount = document.querySelector('.action-btn .count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Function to show notification
function showNotification(message) {
    const notification = document.querySelector('[data-toast]');
    const notificationText = notification.querySelector('[data-toast-text]');
    
    notificationText.textContent = message;
    notification.classList.remove('closed');
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('closed');
    }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
}); 