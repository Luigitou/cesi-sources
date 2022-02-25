<template>
  <div class="vosgroupes view">
    <Sidemenu  />
    <div class="wrap">
      <Header  />
      <VosGroupesMain />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VosGroupesMain from '../components/VosGroupes/VosGroupesMain.vue'
import Sidemenu from "../components/common/Sidemenu/Sidemenu.vue"
import Header from "../components/common/Header/Header.vue";

export default {
  name: 'Vos groupes',
  components: {
    VosGroupesMain,
    Sidemenu,
    Header
  }
}
</script>

<style lang="scss" scoped>
</style>