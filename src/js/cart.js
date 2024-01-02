// Function to display cart items
function displayCartItems() {
    const cartContainer = document.getElementById('cartContainer');
    const priceContainer = document.getElementById('priceContainer');
  
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
        priceContainer.innerHTML = '';
    } 
    else {
        // Display each cart item
        cartContainer.innerHTML = '';
        let totalPrice = 0;

        cartItems.forEach(item => {
            const cartItemElement = document.createElement('div');

            cartItemElement.innerHTML = `
                <img src="${item.img}" alt="item">
                <p>${item.name}</p>
                <p>${item.writer}</p>
                <p>${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <ion-icon name="close" class="deleteIcon"></ion-icon>
            `;
            cartContainer.appendChild(cartItemElement);

            // Calculate the subtotal for each item and add it to the total
            totalPrice += parseFloat(item.price.replace('$', '')) * item.quantity;
        });

        priceContainer.innerHTML = `
            <p>Total Price: $${totalPrice.toFixed(2)}</p>
            <button>BUY NOW!</button>
        `;

        // Delete books from cart func
        const deleteBtn = document.querySelectorAll('.deleteIcon');
        deleteBtn.forEach(item => {
            item.addEventListener('click', function () {
                const indexToDelete = parseInt(item.dataset);
                cartItems.splice(indexToDelete, 1);
                localStorage.setItem('cart', JSON.stringify(cartItems));

                alert(`${item.name} by ${item.writer} removed from your cart!`);

                item.closest('div').remove();
                displayCartItems();
            });
        });
    }
}

displayCartItems();