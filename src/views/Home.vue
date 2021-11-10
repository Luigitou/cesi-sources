<template>
  <div class="home">
    <HeaderAccueil />
  </div>
</template> 

<script>
// @ is an alias to /src
import HeaderAccueil from '../components/HeaderAccueil.vue'

export default {
  name: 'Home',
  components: {
    HeaderAccueil
  }
}
</script>