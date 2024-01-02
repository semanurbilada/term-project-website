// Function to display cart items
function displayCartItems() {
    const cartContainer = document.getElementById('cartContainer');
  
    // Get the cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Check if the cart is empty
    if (cartItems.length === 0) {
        cartContainer.innerHTML = `
            <p>Your cart is empty :(</p>
            <a href="../html/shop.html" target="_blank">
                <button>SHOP NOW</button>
            </a>
        `;
    } 
    else {
        // Display each cart item
        cartContainer.innerHTML = '';
        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = `
                <p>${item.name} - Quantity: ${item.quantity}</p>
            `;
            cartContainer.appendChild(cartItemElement);
        });
    }
}
  
// Call the displayCartItems function to show cart items on page load
displayCartItems();  