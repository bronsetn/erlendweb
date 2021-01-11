import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",

    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },

    ]
})

// Rediredct to set pages
// use this to header if
// v-if="['PriosEvents', 'Bachelor'].includes($route.name)"

let availableSites = ["/"];

// If the site is not in availableSites redirect to 
router.beforeEach((to, from, next) => {
    if (availableSites.includes(to.path)) {
        next()
    } else {
        next("/")
    }
});

export default router