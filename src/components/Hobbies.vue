<template>
  <main class="hobbies">
    <section>
      <article>
        <h3>La photographie</h3>
        <p>Une de mes premières passion</p>
        <div class="pictures">
          <vue-flux
            :options="fluxOptions"
            :images="fluxImages"
            :transitions="fluxTransitions"
            ref="slider">
            <flux-pagination slot="pagination" :slider="$refs.slider"></flux-pagination>
            <flux-controls slot="controls" :slider="$refs.slider"></flux-controls>
          </vue-flux>
        </div>
      </article>

      <article>
        <h3>Star Wars</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor est itaque laudantium corporis aut,
          vero earum eaque optio quaerat, qui recusandae, explicabo aspernatur magnam porro? Vero, modi! Atque, aspernatur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus distinctio libero incidunt nisi. In consequatur
          similique cumque excepturi officiis nisi, error consectetur quasi nulla aperiam commodi eius reiciendis. Deleniti.</p>
      </article>

      <article>
        <h3>Star Wars</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor est itaque laudantium corporis aut,
          vero earum eaque optio quaerat, qui recusandae, explicabo aspernatur magnam porro? Vero, modi! Atque, aspernatur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus distinctio libero incidunt nisi. In consequatur
          similique cumque excepturi officiis nisi, error consectetur quasi nulla aperiam commodi eius reiciendis. Deleniti.</p>
      </article>

      <article>
        <h3>Star Wars</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor est itaque laudantium corporis aut,
          vero earum eaque optio quaerat, qui recusandae, explicabo aspernatur magnam porro? Vero, modi! Atque, aspernatur.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus distinctio libero incidunt nisi. In consequatur
          similique cumque excepturi officiis nisi, error consectetur quasi nulla aperiam commodi eius reiciendis. Deleniti.</p>
      </article>
    </section>
  </main>
</template>

<script>
import {VueFlux, Transitions, FluxPagination, FluxControls} from 'vue-flux'
export default {
  name: 'HobbiesPage',
  components: {
    'vue-flux': VueFlux,
    'flux-pagination': FluxPagination,
    'flux-controls': FluxControls
  },
  data () {
    return {
      title: 'Page des hobbies',
      fluxOptions: {
        autoplay: true,
        controls: true,
        pagination: true,
        delay: 2000
      },
      fluxImages: [
        require('../assets/img/dkr.jpg'),
        require('../assets/img/girafes.jpg'),
        require('../assets/img/mucem.jpg'),
        require('../assets/img/nyc.jpg'),
        require('../assets/img/dkr2.jpg'),
        require('../assets/img/plage.jpg'),
        require('../assets/img/sable.jpg')
      ],
      fluxTransitions: {
        transitionTurn3d: Transitions.transitionFade
      }
    }
  }
}
</script>
