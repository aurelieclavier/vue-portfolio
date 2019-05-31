<template>
  <div id="wrapper">
    <header id="header">
      <h1>Polygonal-Design</h1>
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