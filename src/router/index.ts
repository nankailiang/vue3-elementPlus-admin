import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

// vite2
const routes: RouteRecordRaw[] = [];

// 引进所有路由模块
const modules = import.meta.globEager('./module/*.ts')
for (const path in modules) {
    routes.push(...modules[path].default)
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});

export default router