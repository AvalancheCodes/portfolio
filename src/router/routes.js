import { loadHtml } from "../assets/js/helper.js";

export const routes = [
    {
        name: 'version-1',
        friendlyName: 'version 1',
        path: '/'

    },
    {
        name:'version-2',
        friendlyName: 'version 2',
        path: '/version-2'
    },
    {
        name: 'version-3',
        friendlyName: 'version 3',
        path: '/version-3'
    },
    {
        name: 'blog',
        friendlyName: 'blog',
        path: '/blog/:id'
    }
];
