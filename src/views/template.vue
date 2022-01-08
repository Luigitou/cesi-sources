<template>
  <div class="/Nomducomposant/ view">
    <Sidemenu  />
    <div class="wrap">
      <Header />
      <!-- METTRE ICI LE COMPOSANT PRINCIPAL A APPELER -->
    </div>
  </div>
</template>

<script>
import Sidemenu from "../components/common/Sidemenu/Sidemenu.vue"
import Header from "../components/common/Header/Header.vue";
// IMPORTEZ ICI LE COMPOSANT PRINCIPALE

export default {
  name: /* METTRE ICI LE NOM DE LA VUE */"",
  components: {
    Header,
    Sidemenu,
    // IMPORTEZ ICI LE COMPOSANT PRINCIPALE
  },
};
</script>

<style lang="scss" scoped>

</style>
