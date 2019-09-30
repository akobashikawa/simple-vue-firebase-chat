import Home from './Home.js';
import Login from './Login.js';
import About from './About.js';

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});

export default router;