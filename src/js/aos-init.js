import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    once: true,
    //duration: 1000,
    disable: false,
});

// Base aos animation file to use other pages!

// function initializeAOS() {
//     const screenWidth = window.innerWidth;

//     if (screenWidth > 768) {
//         AOS.init({
//         once: true,
//         duration: 1500,
//         });
//     } else {
//         AOS.init({
//         disable: true,
//         });
//     }
// }
// // Call the function on page load
// initializeAOS();

// window.addEventListener('resize', initializeAOS);