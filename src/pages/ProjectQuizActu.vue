<template>
  <div id="wrapper">
    <header id="header" class="alt">
      <svg>
        <text text-anchor="middle" x="50%" y="50%" class="title">Quiz'Actu</text>
      </svg>
    </header>
    <main id="main">
      <ProjectQuizActuComponent></ProjectQuizActuComponent>
    </main>
  </div>
</template>

<script>
import ProjectQuizActuComponent from '../components/ProjectQuizActu'
export default {
  name: 'ProjectQuizActuPage',
  data () {
    return {

    }
  },
  components: {
    'ProjectQuizActuComponent': ProjectQuizActuComponent
  },
  mounted: function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
</script>