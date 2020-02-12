<template>
  <div id="wrapper">
    <header id="header" class="alt">
      <svg>
        <text text-anchor="middle" x="50%" y="50%" class="title">Pokémon</text>
      </svg>
    </header>
    <main id="main">
      <ProjectPokemonComponent></ProjectPokemonComponent>
    </main>
  </div>
</template>

<script>
import ProjectPokemonComponent   from '../components/ProjectPokemon'
export default {
  name: 'ProjectPokemonPage',
  data () {
    return {

    }
  },
  components: {
    'ProjectPokemonComponent': ProjectPokemonComponent
  },
  mounted: function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>