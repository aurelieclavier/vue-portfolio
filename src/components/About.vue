<template>
  <section id="intro" class="main">
    <header class="major">
      <h2>{{ content.title }}</h2>
    </header>
    <div class="spotlight">
      <div class="content">
        <article>
          <p v-html="content.text"></p>
          <!-- <div class="button">
            <router-link :to="liens.url" class="router">{{ liens.label }}</router-link>
          </div> -->
        </article>
      </div>
      <span class="image">
        <img src="../assets/img/myAvatar.png" alt="aurelie_clavier" />
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutComponent",
  data() {
    return {
      liens: {
        id: 0,
        label: "En savoir plus",
        url: "introduction"
      },
      content: {
        title: "Mon histoire",
        text:
          `&nbsp;&nbsp;&nbsp;Cela fait maintenant ${this.counter()} que j'ai décidé de me lancer dans le développement web, en particulier dans le 
          domaine du front-end. Cette décision a été motivée par ma passion pour l'aspect créatif de ce métier, sa complexité 
          technique et ma volonté de comprendre le fonctionnement de l'écosystème web dans son ensemble. Je suis convaincue que ce 
          domaine est en constante évolution et j'apprécie les nouveaux défis qu'il offre.
          <br/><br/>
          &nbsp;&nbsp;&nbsp;En tant que développeuse front- end, j'ai acquis une expertise dans des techniques telles que le HTML, le CSS et le JavaScript, 
          qui sont les piliers de la création de sites web modernes et interactifs. Je serais ravie d'échanger avec vous sur ces sujets et 
          de vous aider à réaliser vos projets web en utilisant les dernières technologies et les meilleures pratiques du secteur. 
          N'hésitez pas à me contacter si vous avez besoin de conseils ou de services de développement front-end professionnels.`,
      }
    };
  },
  methods: {
    counter() {
      var theDate = new Date("10-02-2017");
      var _second = 1000;
      var _minute = _second * 60;
      var _hour = _minute * 60;
      var _day = _hour * 24;
      var _year = _day * 365;
      var timer;

      function count() {
        var now = new Date();
        var distance = 0;
        if (theDate > now) {
          distance = theDate - now;
          if (distance < 0) {
            clearInterval(timer);
            return;
          }
        } else {
          distance = now - theDate;
          if (distance < 0) {
            clearInterval(timer);
            return;
          }
        }
        var years = Math.floor(distance / _year);
        var days = Math.floor(
          (distance / (60 * 60 * 1000 * 24)) * 1 - 365 * years
        );
        var daytext = "";
        if (days > 1) {
          daytext = " jours ";
        } else {
          daytext = " jour ";
        }
        return years + " années et " + days + daytext;
      }
      return count();
    }
  }
};
</script>
