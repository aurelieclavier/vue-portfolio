<template>
  <section id="intro" class="main">
    <header class="major">
      <h2>{{ content.title }}</h2>
    </header>
    <div class="spotlight">
      <div class="content">
        <article>
          <p>{{ content.text }}</p>
          <div class="button">
            <router-link :to="liens.url" class="router">{{ liens.label }}</router-link>
          </div>
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
          "Il y a maintenant " +
          this.counter() +
          "que j'ai choisi de devenir développeuse web. Pourquoi? Pour son aspect créatif, pour sa compléxité, pour comprendre comment tout ça fonctionnait et aussi pour être dans un univers qui me correspondait."
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
