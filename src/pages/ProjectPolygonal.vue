<template>
  <div id="wrapper">
    <header id="header" class="alt">
      <svg>
        <text text-anchor="middle" x="50%" y="50%" class="title">Polygonal-Design</text>
      </svg>
    </header>
    <main id="main">
      <ProjectPolygonalComponent></ProjectPolygonalComponent>
    </main>
  </div>
</template>

<script>
import ProjectPolygonalComponent   from '../components/ProjectPolygonal'
export default {
  name: 'ProjectPolygonalPage',
  data () {
    return {

    }
  },
  components: {
    'ProjectPolygonalComponent': ProjectPolygonalComponent
  },
  mounted: function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>