<template>
    <section id="content" class="main">
        <div>
            <img src="../assets/img/job/polygonal/polygonal.jpg" alt="">
            <img src="../assets/img/job/polygonal/unfold1.jpg" alt="">
            <img src="../assets/img/job/polygonal/unfold2.jpg" alt="">
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
    name: 'ProjectPolygonalComponent',
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
