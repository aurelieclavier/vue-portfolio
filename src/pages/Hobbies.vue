<template>
  <div>
    <HobbiesComponent/>
  </div>
</template>

<script>
import HobbiesComponent from '../components/Hobbies'
export default {
  name: 'HobbiesPage',
  data () {
    return {
    }
  },
  components: {
    'HobbiesComponent': HobbiesComponent
  }
}
</script>
