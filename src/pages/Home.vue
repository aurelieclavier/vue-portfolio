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
            <!-- Projets -->
            <ProjectComponent></ProjectComponent>
        </main>
    </div>
</template>

<script>
import HeaderComponent      from '../components/Header'
import NavComponent         from '../components/Nav'
import AboutComponent       from '../components/About'
import SkillsComponent      from '../components/Skills'
import ExperienceComponent  from '../components/Experience'
import ProjectComponent     from '../components/Project'
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
    'ExperienceComponent'   : ExperienceComponent,
    'ProjectComponent'      : ProjectComponent
  }
}
</script>