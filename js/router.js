import Home from './Home.js';
import Login from './Login.js';
import Chat from './Chat.js';
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
            path: '/chat',
            name: 'chat',
            component: Chat
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
});

export default router;