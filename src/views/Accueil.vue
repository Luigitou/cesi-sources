<template>
  <div class="home">
    <HeaderAccueil />
    <MidAccueil />
    <FooterAcceuil  />
  </div>
</template> 

<script>
// @ is an alias to /src
import HeaderAccueil from '../components/Acceuil/HeaderAccueil.vue'
import FooterAcceuil from "../components/Acceuil/FooterAccueil.vue"
import MidAccueil from "../components/Acceuil/MidAcceuil.vue"
 export default {
  name: 'Home',
  components: {
    HeaderAccueil,
    MidAccueil,
    FooterAcceuil
  }
};
</script>

<style lang="scss" scoped>

@import "../scss/common.scss";

.home {
  background: $color-head;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>