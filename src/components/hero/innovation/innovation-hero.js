// Innovation hero component class
import {loadHtml} from "../../../assets/js/helper.js";

class InnovationHero extends HTMLElement {
    constructor() {
        super();
        console.log('InnovationHero created');
        this.template = '/components/hero/innovation/innovation-hero.html';
    }

    connectedCallback() {
        loadHtml(this.template, this)
            .then(data => {
                this.innerHTML = data;
                console.log('InnovationHero added to page');
            });
    }

    disconnectedCallback() {
        console.log('InnovationHero removed from page');
    }
}

customElements.define('djb-innovation-hero', InnovationHero);

export default InnovationHero;