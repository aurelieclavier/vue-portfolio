<template>
    <section id="content" class="main">
        <div>
            <p>Quiz actu Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ratione nihil animi quisquam. Iste dignissimos placeat, minima non excepturi vero. Impedit ratione dolor sequi omnis non excepturi, iste hic. Laudantium.</p>
        </div>
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
    name: 'ProjectQuizActuComponent',
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
