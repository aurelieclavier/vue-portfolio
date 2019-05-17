<template>
    <section id="skills" class="main">
        <header class="major">
            <h2>Languages</h2>
        </header>
        <ul class="features">
            <li v-for="item in items" :key="item.id">
                <div>
                    <font-awesome-icon prefix="fa" v-bind:icon="item.icon" v-bind:class="item.classIcon"/>
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
                    icon: 'code',
                    classIcon: 'icon icon-code',
                    h3: 'Languages',
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
                    id: 2,
                    icon: 'cogs',
                    classIcon: 'icon icon-cogs',
                    h3: 'Frameworks / CMS',
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
                    id: 3,
                    icon: 'plus',
                    classIcon: 'icon icon-plus',
                    h3: 'Librairies',
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
                },
                {
                    id: 4,
                    icon: 'wrench',
                    classIcon: 'icon icon-wrench',
                    h3: 'Outils',
                    text: [
                        {
                            id: 0,
                            label: 'MySQL Workbench'
                        },
                        {
                            id: 1,
                            label: 'Git'
                        },
                        {
                            id: 2,
                            label: 'GitLab'
                        },
                        {
                            id: 3,
                            label: 'Mercurial'
                        },
                        {
                            id: 4,
                            label: 'Gescom'
                        },
                        {
                            id: 5,
                            label: 'Redmine'
                        },
                        {
                            id: 6,
                            label: 'Photoshop'
                        },
                    ],
                }
            ]
        }
    }
}
</script>

