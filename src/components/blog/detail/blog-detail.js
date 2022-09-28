// Custom component class for blog detail page
import {loadHtml} from "../../../assets/js/helper.js";

class BlogDetail extends HTMLElement {
    constructor() {
        super();
        console.log('BlogDetail created');
        this.template = '/components/blog/detail/blog-detail.html';
    }

    connectedCallback() {
        loadHtml(this.template, this)
            .then(data => {
                this.innerHTML = data;
                console.log('BlogDetail added to page');
            });
        //
        // const blogId = this.getAttribute('blog-id');
        // const blog = blogs.find(blog => blog.id === blogId);
    }

    disconnectedCallback() {
        console.log('BlogDetail removed from page');
    }
}

customElements.define('djb-blog-detail', BlogDetail);

export default BlogDetail;