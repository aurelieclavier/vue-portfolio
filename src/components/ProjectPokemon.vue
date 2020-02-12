<template>
    <section id="content" class="main">
        <div>
            <p>Pokemon Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem officia optio alias quisquam corrupti repellat! Quod necessitatibus veniam at qui soluta, eius tempora maxime delectus, dolor error, alias obcaecati.</p>
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
    name: 'ProjectPokemonComponent',
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
