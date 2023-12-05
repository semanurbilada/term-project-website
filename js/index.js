// Show Sub-Navbar Function
let menuItems=document.getElementById('menuItems');
let menuIcon=document.getElementById('menuIcon');

menuItems.style.maxHeight="0px";
menuItems.style.opacity="0%";
menuItems.style.pointerEvents="none";

menuIcon.name="menu";

function showMenu() {
    if(menuItems.style.maxHeight=="0px"){
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