// Split-hero component class
import {loadHtml} from "../../../assets/js/helper.js";

class SplitHero extends HTMLElement {
    constructor() {
        super();
        console.log('SplitHero created');
        this.template = '/components/hero/split/split-hero.html';
    }

    connectedCallback() {
        loadHtml(this.template, this)
            .then(data => {
                this.innerHTML = data;
                console.log('SplitHero added to page');
            });
    }

    disconnectedCallback() {
        console.log('SplitHero removed from page');
    }
}

customElements.define('djb-split-hero', SplitHero);

export default SplitHero;