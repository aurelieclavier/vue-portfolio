<template>
  <header id="header">
    <svg>
      <text text-anchor="middle" x="50%" y="50%" class="title">{{ name }}</text>
      <text text-anchor="middle" x="50%" y="100%" class="detail">{{ job }}</text>
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

