import Swiper from 'swiper';
import { Grid, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const swiper = new Swiper('.grid-swiper', {
    modules: [ Grid, Autoplay, Pagination ],
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Responsive details
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            grid: {
                rows: 2,
            },
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
            grid: {
                rows: 2,
            },
        },
        480: {
            slidesPerView: 1,
            grid: {
                rows: 2,
            },
        }
    }
});