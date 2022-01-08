<template>
  <div class="vosfichiers view">
    <Sidemenu  />
    <div class="wrap">
      <Header  />
      <VosFichiersMain />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VosFichiersMain from '../components/VosFichier/VosFichiersMain.vue'
import Sidemenu from "../components/common/Sidemenu/Sidemenu.vue"
import Header from "../components/common/Header/Header.vue";

export default {
  name: 'Vos fichiers',
  components: {
    VosFichiersMain,
    Sidemenu,
    Header
  }
}
</script>

<style lang="scss" scoped>
</style>