<template>
  <div class="vosfavoris view">
    <Sidemenu  />
    <div class="wrap">
      <Header  />
      <VosFavorisMain />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VosFavorisMain from '../components/VosFavoris/VosFavorisMain.vue'
import Sidemenu from "../components/common/Sidemenu/Sidemenu.vue"
import Header from "../components/common/Header/Header.vue";

export default {
  name: 'Vos Favoris',
  components: {
    VosFavorisMain,
    Sidemenu,
    Header
  }
}
</script>

<style lang="scss" scoped>
</style>