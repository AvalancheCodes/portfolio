import {loadHtml} from "../../assets/js/helper.js";


class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    loadHtml("/components/footer/footer.html").then(
        data => {
          this.innerHTML = data;

          // Set the margin of <main> to the height of the footer
            const main = document.querySelector('main');
            const footer = document.querySelector('footer');
            main.style.marginBottom = footer.offsetHeight + 'px';

            console.log(footer);
        });
    }
}

customElements.define("bdj-footer", Footer);

export default Footer;