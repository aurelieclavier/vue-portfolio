<template>
    <section id="exp" class="main">
        <header class="major">
            <h2>Mes expériences</h2>
        </header>
        <section id="conference-timeline">
            <div class="conference-center-line"></div>
            <div class="conference-timeline-content">
                <div v-for="item in items" :key="item.id" class="timeline-article">
                    <div v-bind:class="item.class">
                        <div v-bind:class="item.subClass">
                            <span class="article-number">{{ item.articleNumber }}</span>
                            <span class="article-title">{{ item.articleTitle }}</span>
                            <ul v-for="exp in item.details" v-bind:key="exp.id">
                                <li>{{ exp.text }}</li>
                            </ul>
                            <p>Environnement : {{ item.stack }}</p>
                        </div>
                    </div>
                    <div class="meta-img">
                        <img :src="item.image" :alt="item.altImage" v-bind:class="item.classImage">
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: 'ExperienceComponent',
    data () {
        return {
            items: [
                {
                    id: 9,
                    class: "content-left-container",
                    subClass: "content-left",
                    articleNumber: "2021 - 2022",
                    articleTitle: "Développeuse front- end - Drapo Solutions",
                    details: [
                        {
                            id: 0,
                            text: `Développement de nouvelles interfaces pour l’intranet `
                        },
                        {
                            id: 1,
                            text: "Maintenance corrective et évolutive des sites existants"
                        },
                        {
                            id: 2,
                            text: "Utilisation de React pour développer le nouveau site de l’entreprise"
                        },
                        {
                            id: 3,
                            text: "Création d’un plugin Gatsby afin d’utiliser l’API Notion et développement du site"
                        },
                        {
                            id: 4,
                            text: "Développement du nouveau site vitrine de l'entreprise"
                        },
                        {
                            id: 5,
                            text: "Mise en place de tests one to one"
                        },
                        {
                            id: 6,
                            text: "Développement d'un design system via storybook"
                        }
                    ],
                    stack: "ReactJS, Gatsby, StoryBook, VueJS, HTML, SCSS, PlayWright, Git  ",
                    image: [require("../assets/img/job/drapo.png")],
                    altImage: "Drapo",
                    classImage: "reduc-img-seventy drapo"
                },
                {
                    id: 8,
                    class: "content-right-container",
                    subClass: "content-right",
                    articleNumber: "2021",
                    articleTitle: "Développeuse Jave JEE - Virtual Expo",
                    details: [
                        {
                            id: 0,
                            text: `Maintenance applicative du système intranet`
                        },
                        {
                            id: 1,
                            text: "Utiliser les technologies Java JEE pour corriger l'application"
                        },
                        {
                            id: 2,
                            text: "Mise à jour de la base de données PLSQL"
                        },
                        {
                            id: 3,
                            text: "Prise en compte des compatibilités cross-navigateurs"
                        }
                    ],
                    stack: "Java JEE, Hibernate, PL SQL, XHTML, Jenkins, Jira, Git",
                    image: [require("../assets/img/job/ve.png")],
                    altImage: "Pokémon card",
                    classImage: "reduc-img-seventy"
                },
                {
                    id: 7,
                    class: "content-left-container",
                    subClass: "content-left",
                    articleNumber: "2020",
                    articleTitle: "Développeuse Full-satck - Exotismes",
                    details: [
                        {
                            id: 0,
                            text: `Développement d'une brochure dématérialisée en JavaScript`
                        },
                        {
                            id: 1,
                            text: "Maintenance corrective et évolutive de l'intranet"
                        },
                        {
                            id: 2,
                            text: "Conception et développement de nouvelles fonctionnalités"
                        },
                        {
                            id: 3,
                            text: "Conception et développement du backend Java JEE"
                        },
                        {
                            id: 4,
                            text: "Maintenance corrective et évolutive d'une base de données PLSQL"
                        },
                        {
                            id: 5,
                            text: "Prise en compte des compatibilités cross-navigateurs"
                        }
                    ],
                    stack: "PLSQL, Hibernate, Java JEE, JSF, JavaScript, CSS, Git",
                    image: [require("../assets/img/job/exotismes.png")],
                    altImage: "Exotismes",
                    classImage: "reduc-img-seventy"
                },
                {
                    id: 6,
                    class: "content-right-container",
                    subClass: "content-right",
                    articleNumber: "2020",
                    articleTitle: "Gestion de collection de cartes - Projet personnel",
                    details: [
                        {
                            id: 0,
                            text: "Conception des différents diagrammes UML à l’aide de StarUML"
                        },
                        {
                            id: 1,
                            text: "Utilisation de la méthode MERISE pour la conception de la base de données MySQL"
                        },
                        {
                            id: 2,
                            text: "Conception de la base de données"
                        },
                        {
                            id: 3,
                            text: "Implémentation d’une API Rest"
                        },
                        {
                            id: 4,
                            text: "Conception et développement du backend Java Spring"
                        },
                        {
                            id: 5,
                            text: "Prise en compte des compatibilités cross-navigateurs"
                        }
                    ],
                    stack: "Java Spring Boot, Hibernate, Angular 8, SCSS, Git",
                    image: [require("../assets/img/job/pokemon/pokemon.png")],
                    altImage: "Pokémon card",
                    classImage: "reduc-img-seventy"
                },
                {
                    id: 5,
                    class: "content-left-container",
                    subClass: "content-left",
                    articleNumber: "2019",
                    articleTitle: "quiz'actu - projet de formation",
                    details: [
                        {
                            id: 0,
                            text: "Analyse des besoins du client"
                        },
                        {
                            id: 1,
                            text: "Utilisation de la méthodologie Agile SCRUM"
                        },
                        {
                            id: 2,
                            text: "Réalisation d’un prototype de la solution pour validation par le client"
                        },
                        {
                            id: 3,
                            text: "Conception des différents diagrammes UML à l’aide de StarUML"
                        },
                        {
                            id: 4,
                            text: "Utilisation de la méthode MERISE pour la conception de la base de données MySQL"
                        },
                        {
                            id: 5,
                            text: "Conception de la base de données"
                        },
                        {
                            id: 6,
                            text: "Conception et développement de l’application web"
                        },
                        {
                            id: 7,
                            text: "Prise en compte des compatibilités cross-navigateurs"
                        }
                    ],
                    stack: "Java Spring Boot, Hibernate, Thymeleaf, Bootstrap, JQuery, Ajax, CSS, Balsamiq, Git",
                    image: [require("../assets/img/job/quizactu/quizactu.png")],
                    altImage: "Quiz'actu",
                    classImage: "reduc-img-seventy-five"
                },
                {
                    id: 4,
                    class: "content-right-container",
                    subClass: "content-right",
                    articleNumber: "2019",
                    articleTitle: "wild code school - formation développeuse java jee",
                    details: [
                        {
                            id: 0,
                            text: "Formation au langage Java JSE et JEE"
                        },
                        {
                            id: 1,
                            text : "Formation au framework Spring"
                        },
                        {
                            id: 2,
                            text: "Utilisation de l'API Rest"
                        },
                        {
                            id: 3,
                            text: "Participation au hackathon du Frioul"
                        },
                        {
                            id: 4,
                            text: "Participation à un hackathon en interne"
                        }
                    ],
                    stack: "Java JSE et JEE, Spring Boot, Hibernate, Thymeleaf",
                    image: [require("../assets/img/formations/wcs.png")],
                    altImage: "Wild code school",
                    classImage: "reduc-img-seventy-five"
                },
                {
                    id: 3,
                    class: "content-left-container",
                    subClass: "content-left",
                    articleNumber: "2019",
                    articleTitle: "jaguar-network - développeuse full-stack",
                    details: [
                        {
                            id: 0,
                            text : "Maintenance corrective et évolutive de l'intranet"
                        },
                        {
                            id: 1,
                            text: "Conception et développement de nouvelles fonctionnalités"
                        },
                        {
                            id: 2,
                            text: "Intégration d’un web service SOAP"
                        }
                    ],
                    stack: "PLSQL, Perl, PHP (Khoana), Twig, Vue.JS, Sass, Debian",
                    image: [require("../assets/img/job/jaguarnetwork.png")],
                    altImage: "Jaguar-network",
                    classImage: ""
                },
                {
                    id: 2,
                    class: "content-right-container",
                    subClass: "content-right",
                    articleNumber: "2018",
                    articleTitle: "smile - développeuse front-end",
                    details: [
                        {
                            id: 0,
                            text: "Maintenance corrective et évolutive d’un site e-commerce Magento 2"
                        },
                        {
                            id: 1,
                            text : "Intégration d’une maquette HTML, CSS pour le client"
                        }
                    ],
                    stack: "Magento 2 , Symfony 3 et 4, HTML, Less, Slick, Linux",
                    image: [require("../assets/img/job/logoSmile.png")],
                    altImage: "Smile",
                    classImage: ""
                },
                {
                    id: 1,
                    class: "content-left-container",
                    subClass: "content-left",
                    articleNumber: "2018",
                    articleTitle: "polygonal-design - développeuse full-stack (stage)",
                    details: [
                        {
                            id: 0,
                            text : "Analyse des besoins du client"
                        },
                        {
                            id: 1,
                            text: "Réalisation d’un prototype de la solution pour validation par le client"
                        },
                        {
                            id: 2,
                            text: "Conception de la base de données"
                        },
                        {
                            id: 3,
                            text: "Conception et développement de l’application web"
                        },
                        {
                            id: 4,
                            text: "Prise en compte des compatibilités cross-navigateurs"
                        },
                        {
                            id: 5,
                            text: "Mise en place d’une solution de paiement"
                        },
                        {
                            id: 6,
                            text: "Configuration de l’hébergement"
                        }

                    ],
                    stack: "HTML, CSS, Bootstrap, JavaScript (Vue.JS), PHP, SQL",
                    image: [require("../assets/img/job/polygonal/logoPolygonal.png")],
                    altImage: "Polygonal Design",
                    classImage: "reduc-img-seventy"
                },
                {
                    id: 0,
                    class: "content-right-container",
                    subClass: "content-right",
                    articleNumber: "2017",
                    articleTitle: "3w academy - formation développeuse web",
                    details: [
                        {
                            id: 0,
                            text: "Initiation aux différents langages du web"
                        },
                        {
                            id: 1,
                            text : "Mise en pratique via différents exercices"
                        }
                    ],
                    stack: "HTML, CSS, Bootstrap, JavaScript, PHP, SQL",
                    image: [require("../assets/img/formations/3wa.png")],
                    altImage: "3W Academy",
                    classImage: "academy reduc-img-seventy"
                }
            ]
        }
    }
}
</script>