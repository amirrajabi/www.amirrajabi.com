import delay from './delay';

const items = [
    {
        id: '/',
        title: 'Home',
    },
    {
        id: '/portfolio',
        title: 'Portfolio',
    },
    {
        id: '/skills',
        title: 'Skills',
    },
    {
        id: '/about',
        title: 'About',
    },
    {
        id: '/contact',
        title: 'Contact',
    }
];

class MenuItemsApi {
    static getAllItems() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], items));
            }, delay);
        });
    }
}

export default MenuItemsApi;
