import Vue from 'vue'
import Router from 'vue-router'
import i18n from '../i18n'

import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // Redirect to configured language in i18n config
        {
            path: '/',
            redirect: `/${i18n.locale}`
        },
        // Adding language variable as a route parameter
        {
            path: '/:lang',
            component: {
                render(c) { return c('router-view') }
            },
            children: [{
                path: '/',
                name: 'home',
                component: Home
            }]
        }
    ]
})


// Rediredct to set pages
// use this to header if
// v-if="['PriosEvents', 'Bachelor'].includes($route.name)"

// let availableSites = ["/"];

// // If the site is not in availableSites redirect to 
// router.beforeEach((to, from, next) => {
//     if (availableSites.includes(to.path)) {
//         next()
//     } else {
//         next("/")
//     }
// });

// export default router