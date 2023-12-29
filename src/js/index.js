// Show Sub-Navbar Function
let menuItems = document.getElementById('menuItems');
let menuIcon = document.getElementById('menuIcon');

// Initial styles
menuItems.style.maxHeight="0px";
menuItems.style.opacity="0%";
menuItems.style.pointerEvents="none";

menuIcon.name="menu";

function showMenu() {
    // Logic of toggle
    if(menuItems.style.maxHeight=="0px") {
        
        menuItems.style.maxHeight="400px";
        menuItems.style.opacity="100%";
        menuItems.style.pointerEvents="auto";
    
        menuIcon.name="close";
    }
    else {
        menuItems.style.maxHeight="0px"; 
        menuItems.style.opacity="0%";
        menuItems.style.pointerEvents="none";

        menuIcon.name="menu";
    }
}


// Navbar Color Change Function
function changeNavbarBg() {
    let navbar = document.getElementById('header');

    // Change navbar bg-color based on scroll position
    if (window.scrollY > 30) {
        navbar.style.backgroundColor = "var(--navbar-scroll)";
    } else {
        navbar.style.backgroundColor = "var(--navbar)";
    }
}
// call the function on scroll
document.addEventListener('scroll', changeNavbarBg);



// Scrolling to top from the bottom
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


//Cart Add Function - DENEME
let cartItems = [];
let totalPrice = 0;

function addToCart() {
    const productName = "Product Name"; // You can replace this with the actual product name
    const productPrice = 19.99; // You can replace this with the actual product price

    // Add item to cart
    cartItems.push({ name: productName, price: productPrice });

    // Update total price
    totalPrice += productPrice;

    // Update UI
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById("cartItems");
    const totalSpan = document.getElementById("totalPrice");

    // Clear previous items
    cartList.innerHTML = "";

    // Populate the cart
    cartItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    // Update total price
    totalSpan.textContent = totalPrice.toFixed(2);
}