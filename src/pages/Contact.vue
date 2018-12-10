<template>
  <div>
    <ContactComponent/>
  </div>
</template>

<script>
import ContactComponent from '../components/Contact'
export default {
  name: 'ContactPage',
  data () {
    return {
    }
  },
  components: {
    'ContactComponent': ContactComponent
  }
}
</script>
