import {address, resolveRoute} from "./router/router.js";
import IllustratedHero from "./components/hero/illustrated/illustrated-hero.js";
import Header from "./components/header/header.js";
import Offcanvas from "./components/offcanvas/offcanvas.js";
import Footer from "./components/footer/footer.js";
import BlogCard from "./components/cards/blog/blog-card.js";
import BlogCards from "./components/cards/blog/blog-cards.js";
import Testimonials from "./components/testimonials/testimonials.js";
import BlogDetail from "./components/blog/detail/blog-detail.js";


resolveRoute().then(() => {
    console.log('route resolved');
});

window.addEventListener('popstate', () => {
    resolveRoute().then(() => {
            console.log('route resolved');
        }
    );
});

// // Create reveal footer on scroll
// window.addEventListener('scroll', () => {
//
// }

window.addEventListener('change', (event) => {
    console.log()
    window.alert('change');
});


//

console.log('index.js loaded');
