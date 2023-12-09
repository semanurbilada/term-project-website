import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const swiper = new Swiper('.main-swiper', {
    modules: [ Autoplay, Pagination ],
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
      delay: 4500,
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