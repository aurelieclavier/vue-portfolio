<template>
    <!-- Content -->
    <section id="content" class="main">
        <span class="image main">
            <img src="../assets/img/everyone.jpg" alt="" />
        </span>
        <h2>Il était une fois ...</h2>
        <p>
            J'ai passé environ quinze ans dans la grande distribution à excercer différents métiers lié à cette fillière
            (conseillère de vente, hotesse d'acceuil, responsable d'équipe ...). Après avoir exploré toute les facettes
            de ce métier j'ai voulu me réorinté pour que le challenge soit encore plus beau.
        </p>
        <p>
            Il y a un peu plus d'un an maintenant que j'ai choisi de devenir développeuse web. Pourquoi ? Pour son aspect créatif,
            pour sa compléxité, pour comprendre comment tout ça fonctionnait et aussi pour être dans un univers qui me correspondait.
        </p>
        <p>
            J'ai donc lancé mon dévolu sur la 3W Academy pour suivre ma formation. Celle-ci a duré trois mois,
            d'octobre à décembre 2017, durant lesquels nous avons appris les bases des principaux langugas web
            (HTML, CSS, JavaScript, PHP et SQL). A la fin de mes 3 mois intensif, j'ai obtenu un titre RNCP niveau
            bac+2 développeur intégrateur en réalisation d'application web.
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
            Depuis la fin de cette aventure je persévers, j'apprends, je me forme sur les technologies qui me passionne comme
            Vue.JS et Ionic. Je participe à plusieurs projets en collaboration avec mon entourage. Je reste motivée et passionnée
            par le web et je serais ravis d'échanger avec vous pour réaliser vos projets ou intégrer votre entreprise.
        </p>
        <!-- Back -->
        <div class="button">
             <router-link :to="lien.url" class="router">
                <font-awesome-icon prefix="fa" icon="chevron-left" class="icon icon-chevron"/>
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
