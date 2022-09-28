// cards component class
import {loadHtml} from "../../../assets/js/helper.js";

class Cards extends HTMLElement {
    constructor() {
        super();
        console.log('Cards created');
        this.template = '/components/cards/cards.html';
    }

    connectedCallback() {
        loadHtml(this.template, this)
            .then(data => {
                this.innerHTML = data;
                console.log('Cards added to page');
            });
    }

    disconnectedCallback() {
        console.log('Cards removed from page');
    }
}

customElements.define('djb-cards', Cards);

export default Cards;