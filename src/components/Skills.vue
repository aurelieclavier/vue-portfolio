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
                            label: 'Java JEE'
                        },
                        {
                            id: 1,
                            label: 'Javascript'
                        },
                        {
                            id: 2,
                            label: 'SQL'
                        },
                        {
                            id: 3,
                            label: 'PHP'
                        },
                        {
                            id: 4,
                            label: 'HTML'
                        },
                        {
                            id: 5,
                            label: 'CSS'
                        }
                    ],
                },
                {
                    id: 1,
                    image : [require("../assets/img/rocket.png")],
                    h3: 'Frameworks',
                    text: [
                        {
                            id: 0, 
                            label: 'Spring'
                        },
                        {
                            id: 1,
                            label: 'Hibernate'
                        },
                        {
                            id: 2,
                            label: 'VueJS'
                        },
                        {
                            id: 3,
                            label: 'Angular 2+'
                        },
                        {
                            id: 4,
                            label: 'Ionic'
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
                            label: 'Eclipse'
                        },
                        {
                            id: 1,
                            label: 'Maven'
                        },
                        {
                            id: 2,
                            label: 'MySQL Workbench'
                        },
                        {
                            id: 3,
                            label: 'Git'
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

