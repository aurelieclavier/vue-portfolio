import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/Home'
import ProjectPolygonal from '@/pages/ProjectPolygonal'
import ProjectQuizActu from '@/pages/ProjectQuizActu'
import ProjectPokemon from '@/pages/ProjectPokemon'
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
        },
        {
            path: '/projectPolygonal',
            name: 'ProjectPolygonalPage',
            component: ProjectPolygonal
        },
        {
            path: '/projectQuizActu',
            name: 'ProjectQuizActuPage',
            component: ProjectQuizActu
        },
        {
            path: '/projectPokemon',
            name: 'ProjectPokemonPage',
            component: ProjectPokemon
        }
    ]
})
