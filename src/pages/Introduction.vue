<template>
    <div id="wrapper">
        <!-- Header -->
        <IntroductionHeaderComponent></IntroductionHeaderComponent>
        <!-- Main -->
        <main id="main">
            <IntroductionContentComponent></IntroductionContentComponent>
        </main>
    </div>
</template>

<script>
import IntroductionHeaderComponent   from '../components/IntroductionHeader'
import IntroductionContentComponent  from '../components/IntroductionContent'
export default {
  name: 'IntroductionPage',
  data () {
    return {

    }
  },
  components: {
    'IntroductionHeaderComponent'   : IntroductionHeaderComponent,
    'IntroductionContentComponent'  : IntroductionContentComponent
  },
  mounted: function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
}
</script>