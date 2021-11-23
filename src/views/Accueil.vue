<template>
  <div class="home">
    <HeaderAccueil />
    <FooterAcceuil  />
  </div>
</template> 

<script>
// @ is an alias to /src

import HeaderAccueil from '../components/Acceuil/HeaderAccueil.vue'
import FooterAcceuil from "../components/Acceuil/FooterAccueil.vue"

export default {
  name: 'Home',
  components: {
    HeaderAccueil,
    FooterAcceuil
  }
}
</script>