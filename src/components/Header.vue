<template>
  <header id="header" class="alt">
    <svg>
      <text text-anchor="middle" x="50%" y="90%" class="name">{{ name }}</text>
    </svg>
    <svg>
      <text text-anchor="middle" x="50%" y="50%" class="job">{{ job }}</text>
    </svg>
  </header>
</template>


<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      name: 'Aurélie',
      job: 'Développeuse Java'
    }
  }
}
</script>

