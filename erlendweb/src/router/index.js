import Vue from 'vue'
import Router from 'vue-router'
import i18n from '../i18n'

import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    // Enables automatic scrolling to ID's across pages
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            const position = {}
            if (to.hash) {
                position.selector = to.hash
                if(document.querySelector(to.hash)) {
                    return position;
                }
                return false;
            }
        }
    },

    routes: [
        // Redirect to configured language in i18n config
        {
            path: '/',
            redirect: `/${i18n.locale}/`
        },
        // Adding language variable as a route parameter
        {
            path: '/:lang',
            component: {
                render(c) { return c('router-view') }
            },
            children: [
                {
                path: '/',
                name: 'home',
                component: Home
            },
          ]
        }
    ]
})


// Rediredct to set pages
// use this to v-if change in links or something when on different pages
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