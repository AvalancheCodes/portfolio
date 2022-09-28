import {loadHtml} from "../assets/js/helper.js";
import {routes} from "./routes.js";

export const address = (event) => {
    event = event || window.event;
    event.preventDefault()
    // const path = event.target.getAttribute('href');
    // todo: remove this as it is just for testing
    const href = event.target.href.replace(':id', '1');

    history.pushState({}, '', href);
    const event2 = new Event('popstate');
    window.dispatchEvent(event2);
    resolveRoute();
}

export const resolveRoute = async () => {
    const path = location.pathname;
    const route = routes.find(route => route.path === path);
    if(route) {
        const filename = 'pages/' + route.name + '.html';
        loadHtml(filename).then(data => {
            document.querySelector('#app').innerHTML = data;
        });
        return;
    }

    // check if the route matches a blog post with id via regex
    const blogRoute = routes.find(route => route.name === 'blog');
    const regex = new RegExp(blogRoute.path.replace(':id', '([0-9]+)'));
    const match = path.match(regex);

    if(match) {
        const filename = location.origin + '/pages/blog.html';
        loadHtml(filename).then(data => {
            document.querySelector('#app').innerHTML = data;
        });
        return;
    }

    // else {
    //     const path = 'pages/404.html';
    //     loadHtml(path).then(data => {
    //         document.querySelector('#app').innerHTML = data;
    //     });
    // }
}