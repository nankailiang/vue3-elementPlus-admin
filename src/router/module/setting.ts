import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue')
    },
];

export default routes;