function addToCart(productName, price) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    const existingItem = cartItems.find(item => item.name === productName);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cartItems.push({ name: productName, price: price, quantity: 1 });
    }
  
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
  
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', totalPrice);
  
    alert('Product added to cart!');
  }
  