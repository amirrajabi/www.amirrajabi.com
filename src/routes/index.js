import Home from '../containers/home';
import Portfolio from '../containers/portfolio';
import Skills from '../containers/skills';
import About from '../containers/about';
import Contact from '../containers/contact';
import NoFind from '../containers/notFind';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/skills',
        component: Skills
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        component: NoFind,
        loadData: null
    }

];
