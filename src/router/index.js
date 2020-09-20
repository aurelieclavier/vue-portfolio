import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/Home'
import IntroductionPage from '@/pages/Introduction'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/introduction',
            name: 'IntroductionPage',
            component: IntroductionPage
        }
    ]
})
