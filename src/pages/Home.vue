<template>
    <div id="wrapper">
        <!-- Header -->
        <HeaderComponent></HeaderComponent>
        <!-- Nav -->
        <NavComponent></NavComponent>
        <!-- Main -->
        <main id="main">
            <!-- About -->
            <AboutComponent></AboutComponent>
            <!-- Skills -->
            <SkillsComponent></SkillsComponent>
            <!-- Experience -->
            <ExperienceComponent></ExperienceComponent>
        </main>
    </div>
</template>

<script>
import HeaderComponent      from '../components/Header'
import NavComponent         from '../components/Nav'
import AboutComponent       from '../components/About'
import SkillsComponent      from '../components/Skills'
import ExperienceComponent  from '../components/Experience'
export default {
  name: 'HomePage',
  data () {
    return {

    }
  },
  components: {
    'HeaderComponent'       : HeaderComponent,
    'NavComponent'          : NavComponent,
    'AboutComponent'        : AboutComponent,
    'SkillsComponent'       : SkillsComponent,
    'ExperienceComponent'   : ExperienceComponent
  },
  mounted: function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
}
</script>