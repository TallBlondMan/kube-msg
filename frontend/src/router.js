import { createWebHistory, createRouter } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/WriteToDatabase.vue')
        }
    ],    
})

export default router;