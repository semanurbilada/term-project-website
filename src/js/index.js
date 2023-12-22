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


// Countdown digital clock function
let countDownDate = new Date("Jan 1, 2024 00:00:00").getTime();

let demo = document.getElementById("demo");

let daysSection = document.getElementById("days");
let hoursSection = document.getElementById("hours");
let minutesSection = document.getElementById("minutes");
let secondsSection = document.getElementById("seconds");

// Update the count down every 1 second
let updateTime = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the results
  daysSection.innerHTML = days;
  hoursSection.innerHTML = hours;
  minutesSection.innerHTML = minutes;
  secondsSection.innerHTML = seconds;
    
  // If the count down is over, write this text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "The discount is over! Stay Tuned for the next one!";
  }
}, 1000);


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