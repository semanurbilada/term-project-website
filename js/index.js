// Show Sub-Navbar Function
let menuItems=document.getElementById('menuItems');

menuItems.style.maxHeight="0px";
menuItems.style.opacity="0%";
menuItems.style.pointerEvents="none";

function showMenu(){
    if(menuItems.style.maxHeight=="0px"){
        menuItems.style.maxHeight="400px";
        menuItems.style.opacity="100%";
        menuItems.style.pointerEvents="auto";
    }
    else {
        menuItems.style.maxHeight="0px"; 
        menuItems.style.opacity="0%";
        menuItems.style.pointerEvents="none";
    }
}