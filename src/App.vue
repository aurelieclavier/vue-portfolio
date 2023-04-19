<template>
  <div id="app">
    <AnimatedBackground
      v-bind:num="200"
      v-bind:max-radius="40"
      v-bind:colors="['#42b883', '#0DF1A9','lightgrey']"
    />
    <div id="wrapper">
      <router-view />
      <FooterComponent></FooterComponent>
    </div>
  </div>
</template>

<script>
import AnimatedBackground from "./components/AnimatedBackground.vue";
import HeaderComponent from "./components/Header.vue";
import NavComponent from "./components/Nav.vue";
import AboutComponent from "./components/About.vue";
import SkillsComponent from "./components/Skills.vue";
import ExperienceComponent from "./components/Experience.vue";
import FooterComponent from "./components/Footer.vue";
import Service from './classes/Service';

export default {
  name: "app",
  components: {
    AnimatedBackground,
    HeaderComponent,
    NavComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent
  },
  data() {
    return {
      sticky: false,
      scrollPositionStart: 0
    };
  },
  methods: {
    handleScroll() {
      // var init
      var nav = document.getElementById("nav");

      if (nav != null) {
        var main = document.getElementsByClassName("main");
        var mainID = document.getElementById("main");
        var scrollPosition = document.documentElement.scrollHeight;
        var header = document.getElementById("header");
        // Scroll position
        var scrollDistance = parseInt(window.scrollY);
        var documentHeight = parseInt(scrollDistance + window.innerHeight);
        // Nav position
        var navOffsetTop = nav.offsetTop;
        var isNavOffsetTopBigger = navOffsetTop > scrollDistance;
        var isNavOffsetTOpEqual = navOffsetTop == scrollDistance;
        var isSticky = false;

        if (isNavOffsetTopBigger) {
          if (this.sticky) {
            this.sticky = false;
          }
        } else if (isNavOffsetTOpEqual) {
          if (!this.sticky) {
            this.sticky = true;
          }
        }

        if (
          document.body.getBoundingClientRect().top > this.scrollPositionStart
        ) {
          if (
            navOffsetTop == 0 &&
            scrollDistance < mainID.offsetTop + header.offsetTop &&
            !isSticky &&
            this.sticky
          ) {
            nav.style.position = "sticky";
            nav.style.transition = "all .8s";
            isSticky = true;
          }
        }

        for (let i = 0; i < main.length; i++) {
          const element = main[i];
          if (element.offsetTop + mainID.offsetTop - 80 <= scrollDistance) {
            document
              .getElementsByClassName("active")[0]
              .classList.remove("active");
            document
              .getElementsByClassName("nav-link")[i].classList.add("active");
          } else if (scrollPosition - documentHeight < 100) {
            document
              .getElementsByClassName("active")[0]
              .classList.remove("active");
            document
              .getElementsByClassName("nav-link")[main.length - 1].classList.add("active");
          }
        }
        this.scrollPositionStart = document.body.getBoundingClientRect().top;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    var text = document.getElementsByTagName("text")[0];
    var title = document.getElementsByClassName("title")[0];
    var style = window.getComputedStyle(title, null).getPropertyValue("font-size");
    var service = new Service(text, title, style);
		window.addEventListener("resize", function(){
      style = window.getComputedStyle(title, null).getPropertyValue("font-size");
      var fontNumber = style.substring(0, style.indexOf("p"))
      fontNumber = parseInt(fontNumber) 
      var fontSize = service.fontResize(fontNumber)
      title.style.fontSize = fontSize
    });
  }
};
</script>

<style src="./assets/css/import.scss" lang="scss"></style>
