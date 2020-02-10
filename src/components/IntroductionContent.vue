<template>
    <!-- Content -->
    <section id="content" class="main">
        <span class="image main">
            <img :src="imageHeader" alt="Everyone can code" />
        </span>
        <div v-for="item in items" :key="item.id">
            <h2>{{ item.title }}</h2>
            <div v-for="txt in item.content" v-bind:key="txt.id">
                <p>{{ txt.text }}</p>
            </div>
        </div>
        <div class="backButton">
             <router-link :to="lien.url" class="router">
                {{ lien.label }}
             </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IntroductionContentComponent',
    data() {
        return {
            lien:{
                id: 0,
                label: 'Retour',
                url: '/'
            },
            imageHeader: [require("../assets/img/everyone.jpg")],
            items:[
                {
                    id: 0,
                    title: "Il était une fois...",
                    content: [
                        {
                            id: 0,
                            text: "J'ai passé environ quinze ans dans la grande distribution à exercer différents métiers liés à cette filière (conseillère de vente, hôtesse d’accueil, responsable d'équipe...). Après avoir exploré toutes les facettes de ce domaine j'ai voulu me réorienter pour que le challenge soit encore plus beau."
                        },
                        {
                            id: 1,
                            text: "Il y a quelques temps maintenant que j'ai choisi de devenir développeuse. Pourquoi ? Pour son aspect créatif, pour sa complexité, pour comprendre comment fonctionne les applications et aussi pour être dans un univers qui me correspond."
                        },
                        {
                            id: 2,
                            text: "J'ai donc jeté mon dévolu sur la 3W Academy pour suivre ma formation. Celle-ci a duré trois mois, d'octobre à décembre 2017, durant lesquels nous avons appris les bases des principaux langages web (HTML, CSS, JavaScript, PHP et SQL). A la fin de ces 3 mois intensifs, j'ai obtenu un titre RNCP niveau bac+2 développeur intégrateur en réalisation d'application web."
                        }
                    ]
                },{
                    id: 1,
                    title: "Mais l'histoire ne s'arrête pas là !",
                    content: [
                        {
                            id: 0,
                            text: "En janvier 2018, j'ai poursuivi ma route avec un stage de trois mois chez Polygonal-Design. Pendant cette période, j'ai effectué une refonte complète de leur site web en totale autonomie. Le site est maintenant une vraie boutique en ligne avec un joli panier dynamique développé en Vue.JS."
                        },
                        {
                            id: 1,
                            text: "En avril 2018, j'ai été embauché chez Smile, une ESN basé à Marseille. Me voilà donc dans le grand bain, je découvre le travail en équipe, la mise en production, l'organisation du temps de travail..."
                        },
                        {
                            id: 2,
                            text: "À la suite de cette première expérience, j'ai pris du temps pour concrétiser différents projets personnels et continuer à me former. J'ai obtenu une certification Angular après avoir suivi une formation en ligne sur le site d'OpenClassRooms et je me suis auto-formée sur Vue.JS"
                        },
                        {
                            id: 3,
                            text: "En mars 2019, je rejoins Jaguar-Network pour une courte durée avec un poste de développeuse full-stack."
                        }
                    ]
                },{
                    id: 2,
                    title: "Une toute nouvelle personne est née",
                    content: [
                        {
                            id: 0,
                            text: "Après mon passage chez Jaguar-Network, j'ai choisi de sortir de ma zone de confort et de m'orienter vers les langages back-end. Après quelques recherches, j'ai pu voir que le langage Java était très utilisé. J'ai donc choisi de me former sur cette technologie."
                        },
                        {
                            id: 1,
                            text: "J'ai eu le plaisir de suivre une formation de développeur Java à la Wild Code School. Pendant ces trois mois nous avons pu apprendre à coder en Java et se familiariser entre autres avec le framework Spring ou encore Hibernate."
                        },
                        {
                            id: 2,
                            text: "Pendant cette formation, nous avons développé en équipe une application pour deux journalistes Marseillais qui souhaitaient \"gamifier\" l'information. Nous avons créé une application qui permet de jouer à des quiz sur l'actualité. Les points obtenus définissent le classement de l'utilisateur."
                        },
                        {
                            id: 3,
                            text: "Java a été pour moi un réel coup de cœur. N'hésitez pas me contacter pour plus de renseignements ou si mon profil vous intéresse."
                        },
                    ]
                }
            ]
        }
    }
}
</script>
