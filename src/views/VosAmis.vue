<template>
  <div class="vosgroupes view">
    <Sidemenu  />
    <div class="wrap">
      <Header  />
      <VosAmisMain />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VosAmisMain from '../components/VosAmis/VosAmisMain.vue'
import Sidemenu from "../components/common/Sidemenu/Sidemenu.vue"
import Header from "../components/common/Header/Header.vue";

export default {
  name: 'Vos amis',
  components: {
    VosAmisMain,
    Sidemenu,
    Header
  }
}
</script>

<style lang="scss" scoped>
</style>