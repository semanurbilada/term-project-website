export default {}

// Kullanılabilir;

// import { defineConfig } from 'vite';
// import path from 'path';

// export default defineConfig({
//     root: path.resolve(__dirname, 'src'),
//     resolve: {
//         alias: {
//             "~swiper": path.resolve(__dirname, "node_modules/swiper"),
//             '~aos': path.resolve(__dirname, 'node_modules/aos'),
//         },
//     },
//     server: {
//         port: PORT,
//         hot: true,
//     },
//     base: '/index.html',
//     outDir: path.resolve(__dirname, 'dist'),
//     build: {
//         rollupOptions: {
//             input: {
//                 index: path.resolve(__dirname, "src/js/index.js"),
//                 about: path.resolve(__dirname, "src/html/about.html"),
//                 blog: path.resolve(__dirname, "src/html/blog.html"),
//                 cart: path.resolve(__dirname, "src/html/cart.html"),
//                 contact: path.resolve(__dirname, "src/html/contact.html"),
//                 favourites: path.resolve(__dirname, "src/html/favourites.html"),
//                 login: path.resolve(__dirname, "src/html/login.html"),
//                 shop: path.resolve(__dirname, "src/html/shop.html"),
//                 signup: path.resolve(__dirname, "src/html/signup.html"),
//                 support: path.resolve(__dirname, "src/html/support.html"),
//             },
//             external: [
//                 '../src/js/mainSwiper.js',
//                 '../src/js/gridSwiper.js',
//                 '../src/js/aos-init.js',
//                 '../src/css/global.css',
//                 '../src/css/style.css',
//             ],
//         },
//     },
//     optimizeDeps: {
//         entries: [],
//     },
//     plugins: [],
// })