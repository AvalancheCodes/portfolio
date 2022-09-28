// Hover-card component class
import {loadHtml} from "../../../assets/js/helper.js";

class HoverCard extends HTMLElement {
    constructor() {
        super();
        console.log('HoverCard created');
        this.template = '/components/cards/hover/hover-card.html';
    }

    connectedCallback() {
        loadHtml(this.template, this)
            .then(data => {
                this.innerHTML = data;
                console.log('HoverCard added to page');
            });
    }

    disconnectedCallback() {
        console.log('HoverCard removed from page');
    }
}

customElements.define('djb-hover-card', HoverCard);

export default HoverCard;
