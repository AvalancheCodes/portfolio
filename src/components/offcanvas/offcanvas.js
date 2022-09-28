// web components: offcanvas
import { loadHtml } from "../../assets/js/helper.js";
import { routes } from "../../router/routes.js";
import { address } from "../../router/router.js";

class Offcanvas extends HTMLElement {
  constructor() {
    super();
    this.routes = routes;
  }

  connectedCallback() {
    loadHtml("/components/offcanvas/offcanvas.html", this)
        .then(data => {
            this.innerHTML = data;
            this._populateRoutes();
            const links = this.querySelectorAll('.nav-link');
            links.forEach(link => {
                link.addEventListener('click', address)
            })
    })
  }
  _populateRoutes() {
    const ul = this.querySelector("ul");
    this.routes.map(route => {
        ul.innerHTML += `
            <li class="nav-item">
                 <a class="nav-link text-white-stroke display-6 h5" 
                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasEnd"
                    href="${route.path}">${route.friendlyName}</a>
            </li>
        `
    })
  }
}
customElements.define("djb-off-canvas", Offcanvas);

export default Offcanvas;