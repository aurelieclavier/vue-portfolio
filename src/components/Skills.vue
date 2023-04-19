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
                            label: 'Javascript'
                        },
                        {
                            id: 1,
                            label: 'HTML'
                        },
                        {
                            id: 2,
                            label: 'CSS'
                        },
                        {
                            id: 3,
                            label: 'Java JEE'
                        },
                        {
                            id: 4,
                            label: 'SQL'
                        },
                        {
                            id: 5,
                            label: 'PHP'
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
                            label: 'ReactJS'
                        },
                        {
                            id: 1,
                            label: 'VueJS'
                        },
                        {
                            id: 2,
                            label: 'JQuery'
                        },
                        {
                            id: 3,
                            label: 'Bootstrap'
                        },
                        {
                            id: 4,
                            label: 'Tailwind'
                        },
                        {
                            id: 5,
                            label: 'Spring'
                        },
                        {
                            id: 6,
                            label: 'Hibernate'
                        },
                        {
                            id: 7,
                            label: 'JSF'
                        },
                        {
                            id: 7,
                            label: 'JPA'
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
                            label: 'Storybook'
                        },
                        {
                            id: 1,
                            label: 'Gatsby'
                        },
                        {
                            id: 2,
                            label: 'Figma'
                        },
                        {
                            id: 3,
                            label: 'Adobe XD'
                        },
                        {
                            id: 4,
                            label: 'Git'
                        },
                        {
                            id: 5,
                            label: 'Linear'
                        },
                        {
                            id: 6,
                            label: 'Jira'
                        },
                        {
                            id: 7,
                            label: 'MySQL WorkBench'
                        }

                    ],
                }
            ]
        }
    }
}
</script>

