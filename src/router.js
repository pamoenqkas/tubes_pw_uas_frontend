//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
    path: '/',
    name: 'beranda',
    component: () => import('@/components/Navigation.vue'),
        children:[
            {
                path: "/home",
                name: "components.home",
                component: () => import('@/components/LandingPage.vue'),
             
            },
            {
            path: "/keranjang",
            name: "barang.keranjang",
            component: () => import('@/views/Barang/Keranjang.vue'),

            },
            {
                path: "/regis",
                name: "page.registerpage",
                component: () => import('@/views/Page/RegisterPage.vue'),
            },
            {
                path: "/login",
                name: "page.loginpage",
                component: () => import('@/views/Page/LoginPage.vue'),
            }
        ],
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // config routes
})

export default router;