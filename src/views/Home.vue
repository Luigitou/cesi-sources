<template>
  <div class="home">
    <FooterAccueil />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterAccueil from '../components/common/Footer/FooterAccueil.vue'

export default {
  name: 'Home',
  components: {
    FooterAccueil
  }
}
</script>