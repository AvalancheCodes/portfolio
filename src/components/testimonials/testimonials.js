import {loadHtml} from "../../assets/js/helper.js";
import { tns } from "/assets/vendor/tiny-slider/tiny-slider.js";

class Testimonials extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const route = "/components/testimonials/testimonials.html";
    loadHtml(route).then(
      data => {
        this.innerHTML = data;
        console.log('testimonials loaded and tns: ', tns);
        const slider = tns({
            container: ".tiny-slider-inner",
            items: 1,
            autoplay: true,
            autoplayButtonOutput: false,
        } );
      }
    );
  }
}

customElements.define("djb-testimonials", Testimonials);

export default Testimonials;