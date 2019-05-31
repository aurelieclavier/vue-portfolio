<template>
    <!-- Content -->
    <section id="content" class="main">
        <span class="image main">
            <img src="../assets/img/everyone.jpg" alt="" />
        </span>
        <h2>Il était une fois ...</h2>
        <p>
            J'ai passé environ quinze ans dans la grande distribution à excercer différents métiers lié à cette fillière
            (conseillère de vente, hôtesse d'acceuil, responsable d'équipe...). Après avoir exploré toutes les facettes
            de ce métier j'ai voulu me réorinté pour que le challenge soit encore plus beau.
        </p>
        <p>
            Il y a presque deux ans maintenant que j'ai choisi de devenir développeuse web. Pourquoi ? Pour son aspect créatif,
            pour sa compléxité, pour comprendre comment tout ça fonctionnait et aussi pour être dans un univers qui me correspondait.
        </p>
        <p>
            J'ai donc lancé mon dévolu sur la 3W Academy pour suivre ma formation. Celle-ci a duré trois mois,
            d'octobre à décembre 2017, durant lesquels nous avons appris les bases des principaux languages web
            (HTML, CSS, JavaScript, PHP et SQL). A la fin de mes 3 mois intensifs, j'ai obtenu un titre RNCP niveau
            bac +2 développeur intégrateur en réalisation d'application web.
        </p>
        <h2>Mais l'histoire ne s'arrête pas là !</h2>
        <p>
            En janvier 2018, j'ai poursuivi ma route avec un stage de trois mois chez Polygonal Design. Pendant cette période,
            j'ai effectué une refonte complète de leur site web en totale autonomie. Le site est maintenant une vraie boutique en
            ligne avec un joli panier dynamique développé en Vue.JS.
        </p>
        <p>
            En avril 2018, me voilà parti chez Smile, une ESN basé à Marseille. Me voilà donc dans le grand bain, je découvre
            le travail en equipe, la mise en production, l'organisation du temps de travail ...
            Mais l'histoire s'arrête en juin. Mon poste ne me correspondant pas nous avons choisi de mettre fin à notre
            collaboration.
        </p>
        <p>
            À la suite de cette première expérience, j'ai pris du temps pour concrétiser différents projets personnels et
            continuer à me former. J'ai obtenu une certification Angular après avoir suivi une formation en ligne sur le
            site d'Open ClassRoom.
        </p>
        <p>
            En mars 2019, je rejoins Jaguar-Network avec un poste de développeuse full-stack. Notre collaboration s'arêtera à la
            fin avril 2019, suite à une erreur de recrutement de leur part.
        </p>
        <p>
            Depuis la fin de cette aventure je persévers, j'apprends, je me forme sur les technologies qui me passionne comme
            Vue.JS et Angular. Je participe à plusieurs projets en collaboration avec mon entourage. Je reste motivée et passionnée
            par le web et je serais ravis d'échanger avec vous pour réaliser vos projets ou intégrer votre entreprise.
        </p>
        <!-- backButton -->
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
            }
        }
    }
}
</script>
