<template>
    <section id="skills" class="main">
        <header class="major">
            <h2>Mes compétences</h2>
        </header>
        <ul class="features">
            <li v-for="item in items" :key="item.id">
                <div class="img-skills">
                    <img :src="item.image"/>                
                </div>
                <h3>{{ item.h3 }}</h3>
                <div class="featuresDetail">
                    <p v-for="txt in item.text" :key="txt.id" >{{ txt.label }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'SkillsComponent',
    data () {
        return {
            items: [
                {
                    id: 0,
                    image : [require("../assets/img/data.png")],
                    h3: 'Langages',
                    text: [
                        {
                            id: 0,
                            label: 'HTML 5'
                        },
                        {
                            id: 1,
                            label: 'CSS 3'
                        },
                        {
                            id: 2,
                            label: 'JavaScript'
                        },
                        {
                            id: 3,
                            label: 'PHP 7'
                        },
                        {
                            id: 4,
                            label: 'SQL'
                        },
                    ],
                },
                {
                    id: 1,
                    image : [require("../assets/img/rocket.png")],
                    h3: 'Frameworks',
                    text: [
                        {
                            id: 0, 
                            label: 'VueJs'
                        },
                        {
                            id: 1,
                            label: 'Angular 2+'
                        },
                        {
                            id: 2,
                            label: 'Ionic'
                        },
                        {
                            id: 3,
                            label: 'Symfony 3'
                        },
                        {
                            id: 4,
                            label: 'Wordpress'
                        },

                    ],
                },
                {
                    id: 2,
                    image : [require("../assets/img/fix.png")],
                    h3: 'Outils',
                    text: [
                        {
                            id: 0,
                            label: 'Materialize'
                        },
                        {
                            id: 1,
                            label: 'Material Design'
                        },
                        {
                            id: 2,
                            label: 'Sass'
                        },
                        {
                            id: 3,
                            label: 'Less'
                        },
                        {
                            id: 4,
                            label: 'BootStrap'
                        },
                        {
                            id: 5,
                            label: 'JQuery'
                        }

                    ],
                }
            ]
        }
    }
}
</script>

