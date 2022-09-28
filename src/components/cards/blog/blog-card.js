import Card from "../card.js";
import {address} from "../../../router/router.js";
import {loadHtml} from "../../../assets/js/helper.js";

class BlogCard extends Card {
    constructor() {
        const template = '/components/cards/blog/blog-card.html';
        super(template);
    }

    _render() {
       this.querySelector('.featured-label').setAttribute('title', this.content.featuredTitle);
       this.querySelector('.author-name').innerHTML = this.content.authorName;
       this.querySelector('.created-date').innerHTML = this.content.createdDate;
       this.querySelector('.category').innerHTML = this.content.category;
       this.querySelector('.read-times').innerHTML = this.content.readTimes;
       this.querySelector('.title').innerHTML = this.content.title;
       this.querySelector('.blog-image').src = this.content.mainImage;
       this.querySelector('.avatar-img').src = this.content.avatar;
       this.querySelector('.short-description').innerHTML = this.content.shortDescription;
       this.querySelector('a.title').href = `/blog/${this.content.id}`;
        this.querySelector('a.title').addEventListener('click', address);
    }
}

customElements.define("djb-blog-card", BlogCard);

export default BlogCard;