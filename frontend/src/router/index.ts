import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user';

const loginRoute = { name: 'login' };

const loginGuard = async (to: any, from: any, next: Function) => {
    const { session, setUserSession } = useUserStore();
    console.log('loginGuard', session);
    if (session) {
        next();
    } else if (sessionStorage.getItem('userSession')) {
        const userSession = JSON.parse(sessionStorage.getItem('userSession') ?? '')
        console.log('stoarage session', userSession)
        setUserSession(userSession);
        next();
    } else {
        next(loginRoute);
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Rooms.vue'),
            beforeEnter: loginGuard
        },
        {
            path: '/register',
            name: 'register',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Register.vue')
        },
        {
            path: '/login',
            name: 'login',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/Login.vue')
        }
    ]
})

export default router
