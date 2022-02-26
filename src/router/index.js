import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Login from '../views/login/index.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
})

export default router