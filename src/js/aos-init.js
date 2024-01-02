import AOS from 'aos';
import 'aos/dist/aos.css';

// Base aos-animation func. to use other pages;
AOS.init({
    //once: true,
    //duration: 1000,
    disable: false,
});


// Complex aos-animation func. for responsive;
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

// initializeAOS();

// window.addEventListener('resize', initializeAOS);