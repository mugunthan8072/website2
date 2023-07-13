// Get cart items from localStorage and render them in the cart
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartItemsContainer = document.querySelector('.cart-items');

if (cartItems.length === 0) {
  cartItemsContainer.innerHTML = '<p>No items in the cart.</p>';
} else {
  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <img src="https://via.placeholder.com/50" alt="">
      <div>
        <h4>${item.name}</h4>
        <p>Price: ₹${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
      </div>
    `;
    cartItemsContainer.appendChild(itemElement);
  });
}

// Get total price from localStorage and update in the cart
const totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || 0;
document.getElementById('total-price').textContent = `₹${totalPrice.toFixed(2)}`;
