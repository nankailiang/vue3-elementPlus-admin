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
];

export default routes;