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