<template>
    <!-- Content -->
    <section id="content" class="main">
        <span class="image main">
            <img :src="imageHeader" alt="Everyone can code" />
        </span>
        <div v-for="item in items" :key="item.id">
            <h2>{{ item.title }}</h2>
            <div v-for="txt in item.content" v-bind:key="txt.id">
                <p v-html="txt.text"></p>
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
                            text: `Il y a quelque temps maintenant que j'ai choisi de devenir 
                            <strong class='text-color'>développeuse</strong>. Pourquoi ? Pour son aspect 
                            créatif, pour sa complexité, pour comprendre comment fonctionnent les 
                            applications et aussi pour être dans un univers qui me correspond.`
                        },
                        {
                            id: 1,
                            text: `J'ai donc jeté mon dévolu sur la <strong class='text-color'>
                            <a href='https://3wa.fr/' target='_blank' class='link'>3W Academy</a></strong> 
                            pour suivre ma formation. Celle-ci a duré trois mois, d'octobre à décembre 2017, 
                            durant lesquels nous avons appris les bases des principaux langages web 
                            <strong class='text-color'>(HTML, CSS, JavaScript, PHP et SQL)</strong>. 
                            À la fin de ces 3 mois intensifs, j'ai obtenu un diplôme de développeur 
                            intégrateur en réalisation d'application web (bac+2).`
                        }
                    ]
                },{
                    id: 1,
                    title: "Mais l'histoire ne s'arrête pas là !",
                    content: [
                        {
                            id: 0,
                            text: `En janvier 2018, j'ai poursuivi ma route avec un stage de trois mois chez 
                            <strong class='text-color'>Polygonal-Design</strong>. Pendant cette période, 
                            j'ai effectué une refonte complète de leur site web en totale autonomie. Le site 
                            est maintenant une vraie boutique en ligne avec un joli panier dynamique développé 
                            en Vue.JS.`
                        },
                        {
                            id: 1,
                            text: `En avril 2018, j'ai été embauchée chez <strong class='text-color'>
                            <a href='https://www.smile.eu/fr' target='_blank' class='link'>Smile,</a></strong> 
                            une ESN basée à Marseille. Me voilà donc dans le grand bain, je découvre le 
                            travail en équipe, la mise en production, l'organisation du temps de travail...`
                        },
                        {
                            id: 2,
                            text: `À la suite de cette première expérience, j'ai pris du temps pour 
                            concrétiser différents projets personnels et continuer à me former. 
                            J'ai suivi et complété une formation <strong class='text-color'>Angular</strong> 
                            sur le site d'<strong class='text-color'>
                            <a href='https://openclassrooms.com' target='_blank' class='link'>OpenClassRooms</a></strong>
                             et je me suis auto-formée sur <strong class='text-color'>Vue.JS</strong>.`
                        },
                        {
                            id: 3,
                            text: `En mars 2019, je rejoins <strong class='text-color'>
                            <a href='https://www.jaguar-network.com/' target='_blank' class='link'>Jaguar-Network</a></strong> 
                            pour une courte durée avec un poste de développeuse full-stack.`
                        }
                    ]
                },{
                    id: 2,
                    title: "Une toute nouvelle personne est née",
                    content: [
                        {
                            id: 0,
                            text: `Après mon passage chez Jaguar-Network, j'ai choisi de sortir de ma zone 
                            de confort et de m'orienter vers les langages <strong class='text-color'>
                            back-end</strong>. Après quelques recherches, j'ai pu voir que le 
                            <strong class='text-color'>langage Java</strong> était très utilisé. 
                            J'ai donc choisi de me former sur cette technologie.`
                        },
                        {
                            id: 1,
                            text: `J'ai eu le plaisir de suivre une formation de développeur Java à la 
                            <strong class='text-color'>
                            <a href='https://www.wildcodeschool.com/fr-FR' target='_blank' class='link'>
                            Wild Code School</a></strong>. Pendant ces trois mois nous avons pu apprendre à 
                            coder en Java et se familiariser entre autres avec le framework 
                            <strong class='text-color'>Spring</strong> ou encore <strong class='text-color'>
                            Hibernate</strong>.`
                        },
                        {
                            id: 2,
                            text: `Pendant cette formation, nous avons développé en équipe une application 
                            pour deux journalistes Marseillais qui souhaitaient \"gamifier\" l'information. 
                            Nous avons créé une <strong class='text-color'>
                            <a href='http://vps762572.ovh.net/login' target='_blank' class='link'>
                            QuizActu</a></strong> qui permet de jouer à des quiz sur l'actualité. 
                            Les points obtenus définissent le classement de l'utilisateur.`
                        },
                        {
                            id: 3,
                            text: `<strong class='text-color'>Java a été pour moi un réel coup de cœur</strong>. 
                            Depuis le mois de mars, j'ai rejoint la société 
                            <strong class='text-color'><a href='https://www.exotismes.fr' target='_blank' class='link'>
                            Exotismes</a></strong> 
                            en tant que développeuse full-stack. Passionnée par mon métier, je me ferais un 
                            plaisir d'échanger avec vous.`
                        },
                    ]
                }
            ]
        }
    }
}
</script>
