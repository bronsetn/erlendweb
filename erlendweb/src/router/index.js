import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Experiments from '../views/Experiments.vue'

// Project sites
import PriosEvents from '../projects/priosEvents.vue'
import Bachelor from '../projects/bachelor.vue'

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
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/experiments',
        name: 'Experiments',
        component: Experiments
    },

    // PROJECT sites
    {
        path: '/priosEvents',
        name: 'PriosEvents',
        component: PriosEvents
    },
    {
        path: '/bachelor',
        name: 'Bachelor',
        component: Bachelor
    },
]

const router = new VueRouter({
    routes
})

export default router