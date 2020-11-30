import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Forecast from '../views/Forecast.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/forecast',
        name: 'Forecast',
        component: Forecast
    },
]

const router = new VueRouter({
    routes
})

export default router