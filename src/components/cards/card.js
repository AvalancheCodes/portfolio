// A base class for bootstrap cards
// https://getbootstrap.com/docs/4.0/components/card/

import {loadHtml} from "../../assets/js/helper.js";

class Card extends HTMLElement {
    constructor(template) {
        super();
        this.template = template;
        this.content = {};
    }
    connectedCallback() {
        // const route = '/components/cards/card.html'
        loadHtml(this.template).then(data => {
            this.innerHTML = data;
            this.content ? this._render() : console.log('No content');
        });
    }
}

customElements.define("djb-card", Card);

export default Card;