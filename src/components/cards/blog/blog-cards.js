import { cardsData } from "../cards-data.js";
import BlogCard from "./blog-card.js";
import {loadHtml} from "../../../assets/js/helper.js";

const testContent = {
    "id": 1,
    "featuredTitle": "Tomas",
    "authorName": "Neames",
    "createdDate": "02/04/2022",
    "category": "Rebar & Wire Mesh Install",
    "readTimes": 80,
    "title": "Cure, The",
    "mainImage": "assets/img/blog/grid/01.jpg",
    "avatar": "assets/img/avatar/02.jpg",
    "shortDescription": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus."
}

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

class BlogCards extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        loadHtml("/components/cards/blog/blog-cards.html").then(
            data => {
                this.innerHTML = data;
                this._render();
            });
    }

    _render() {
        // const cardWrapper = this.querySelector('.card-wrapper');
        const postGrid = this.querySelector('#postsGrid');
        // const mockarooUrl = 'https://my.api.mockaroo.com/blog-summary-data.json?key=3b3f0f80';
        const localDataUrl = 'components/cards/blog/blog-summary-data.json';
        getData(localDataUrl)
            .then(data => {
                data.forEach(item => {
                    // create a card wrapper
                    const cardWrapper = document.createElement('div');
                    cardWrapper.classList.add('col-lg-3', 'col-md-6', 'col-sm-12');
                    const blogCard = new BlogCard();
                    blogCard.content = item;

                    cardWrapper.appendChild(blogCard);
                    postGrid.appendChild(cardWrapper);
                });
            }).catch(err => {
                console.log(err);
            });
        }
}

customElements.define("djb-blog-cards", BlogCards);

export default BlogCards;