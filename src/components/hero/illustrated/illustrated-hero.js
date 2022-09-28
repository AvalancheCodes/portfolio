// import html from './illustrated-hero.html'
import { loadHtml } from "../../../assets/js/helper.js";

const avatars = [
  { name: 'John Doe', image: 'https://randomuser.me/api/portraits' },
  { name: 'Jane Doe', image: 'https://randomuser.me/api/portraits' },
  { name: 'Michael Dear', image: 'https://randomuser.me/api/portraits' },
  { name: 'Shirley Goat', image: 'https://randomuser.me/api/portraits' },
]

class IllustratedHero extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
      loadHtml('/components/hero/illustrated/illustrated-hero.html', this)
          .then((data) => {
              this.innerHTML = data;

              // get the parent element of the image and change its
              // width to meet the size of the parent element
                const parentW = this.querySelector('.hero-main-img').parentElement.offsetWidth;
              this.querySelector('.hero-main-img').style.height = `${parentW}px`;

              console.log(parent);
          }
      );
  }

}

customElements.define('djb-illustrated-hero', IllustratedHero);

export default IllustratedHero;