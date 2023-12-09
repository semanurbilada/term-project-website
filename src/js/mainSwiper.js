import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.main-swiper', {
    modules: [ Pagination ],
    direction: "horizontal",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        scrollable: true
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    //TODO: grid-swiper: (popüler yazarlar ksımında kullanılacak - otomatik geçiş)
    // slidesPerView: 3,
    // grid: {
    //     rows: 2,
    // },
    // spaceBetween: 30,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: false,
    // },
}); 