<template>
    <section id="project" class="main">
        <header class="major">
            <h2>Mes projets</h2>
        </header>
        <section>
            <ul>
                <li v-for="item in items" :key="item.id">
                    <div class="container">
                        <router-link :to="item.link">
                            <h6 class="caption">{{ item.title }}</h6>
                            <img v-bind:src="item.img"/>
                            <div class="overlay-img"></div>
                        </router-link>
                    </div>
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
export default {
    name: 'ProjectComponent',
    data () {
        return {
            items: [
                {
                    id: 0,
                    link: '/ProjectPolygonal',
                    title: 'Polygonal-Design',
                    img: require('../assets/img/job/polygonal/polygonal.jpg')
                },
                {
                    id: 1,
                    link: '/ProjectAngular',
                    title: 'Logiciel de gestion d\'événement',
                    img: require('../assets/img/job/angular/projetangular.jpg')
                }
            ]
        }
    }
}
</script>
