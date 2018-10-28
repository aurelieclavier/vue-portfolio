<template>
    <header id="header" class="alt">
        <h1>{{ name }}
          <span class="hidden-mobil">
             -
          </span>
          <br class="hidden-tablet">
          {{ job }}
        </h1>
        <p>{{ presentation }}</p>
    </header>
</template>


<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      name: 'Aurélie',
      job: 'Développeur web',
      presentation: 'Bonjour, j\'ai 29 ans et je vis à Marseille.'
    }
  }
}
</script>

