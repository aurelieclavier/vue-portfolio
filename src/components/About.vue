<template>
    <section id="intro" class="main">
        <header class="major">
            <h2>{{ content.title }}</h2>
        </header>
        <div class="spotlight">
            <div class="content">
                <article>
                    <p>{{ content.text }}</p>
                    <div class="button">
                        <router-link :to="liens.url" class="router">
                            {{ liens.label }}
                            <font-awesome-icon prefix="fa" icon="chevron-right" class="icon icon-chevron right"/>
                        </router-link>
                    </div>
                </article>
            </div>
            <span class="image">
                <img src="../assets/img/myAvatar.png" alt="aurelie_clavier" />
            </span>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AboutComponent',
    data () {
        return {
            liens:{
                id: 0,
                label: 'En savoir plus',
                url: 'introduction'
            },
            content:{
                title: 'Mon histoire',
                text: 'Il y a un peu plus d\'un an maintenant que j\'ai choisi de devenir développeuse web. Pourquoi ? Pour son aspect créatif, pour sa compléxité, pour comprendre comment tout ça fonctionnait et aussi pour être dans un univers qui me correspondait.'
            }
        }
    }
}
</script>
