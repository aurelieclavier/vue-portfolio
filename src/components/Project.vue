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
                <!-- <li>
                    <div class="container">
                        <a href="#">
                            <h6 class="caption">Logiciel de gestion d'événement</h6>
                            <img src="../assets/img/projetangular.jpg"/>
                            <div class="overlay-img"></div>
                        </a>
                    </div>
                </li> -->
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
                    link: '/Project',
                    title: 'Polygonal-Design',
                    img: require('../assets/img/polygonal.jpg')
                },
                {
                    id: 1,
                    link: '/ProjectAngular',
                    title: 'Logiciel de gestion d\'événement',
                    img: require('../assets/img/projetangular.jpg')
                }
            ]
        }
    }
}
</script>
