import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Projects from '../views/Projects.vue'
// import Experiments from '../views/Experiments.vue'

// Project sites
import PriosEvents from '../projects/priosEvents.vue'
import Bachelor from '../projects/bachelor.vue'

Vue.use(VueRouter)


const router = new VueRouter({
    mode: "history",

    routes: [{
            path: '/',
            name: 'Home',
            component: Home
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
})

// Rediredct to set pages
let availableSites = ["/", "/bachelor", "/priosEvents"];

// If the site is not in availableSites redirect to 
router.beforeEach((to, from, next) => {
    if (availableSites.includes(to.path)) {
        next()
    } else {
        next("/")
    }
});

export default router