//Primary-card component class
import {loadHtml} from "../../../assets/js/helper.js";

class PrimaryCard extends HTMLElement {
    constructor() {
        super();
        console.log('PrimaryCard created');
        this.template = '/components/cards/primary/primary-card.html';
    }

    connectedCallback() {
        loadHtml(this.template, this)
            .then(data => {
                this.innerHTML = data;
                console.log('PrimaryCard added to page');
            });
    }

    disconnectedCallback() {
        console.log('PrimaryCard removed from page');
    }
}

customElements.define('djb-primary-card', PrimaryCard);

export default PrimaryCard;