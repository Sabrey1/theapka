import { createRouter, createWebHistory } from '@ionic/vue-router'

// Import your pages
import tab from "@/MiniApp/tab.vue"
import NotFound from '@/NotFound.vue'
import Home from "@/MiniApp/Home/Home.vue"

// Define routes
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/',
        component: tab,
        children: [
            {
                path: '',
                redirect: '/home',
            },
            {
                path: '/home',
                name: 'Home',
                component: Home,
            },
            {
                path: '/weddingGift',
                name: 'WeddingGift',
                component: () => import('@/MiniApp/WeddingGift/WeddingGift.vue')
            },
            {
                path: '/templatePage',
                name: 'templatePage',
                component: () => import('@/MiniApp/TemplatePage/TemplatePage.vue')
            },
            {
                path: '/userInfo',
                name: 'UserInfo',
                component: () => import('@/MiniApp/AccountInfo/UserInfo.vue')
            }    
        ],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router