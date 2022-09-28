import { loadHtml } from "../../assets/js/helper.js";

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const route = '/components/header/header.html'
        loadHtml(route).then(data => {
              this.innerHTML = data;
              this.querySelector('a.nav-link').onmouseover = (event) => {
                  event.target.click();
                  // const offcanvas = document.querySelector('#offcanvasEnd');
                  // debugger
                  // event.target.dataset.bsToggle = 'offcanvas';
                  // console.log(event.target);

              }
       });
    }
}
customElements.define("djb-header", Header);

export default Header;