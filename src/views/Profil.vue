<template>
  <div class="contact view">
    <Sidemenu  />
    <div class="wrap">
      <Header  />
      <ProfilMain/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilMain from '../components/Profil/ProfilMain.vue'
import Sidemenu from "../components/common/Sidemenu/Sidemenu.vue"
import Header from "../components/common/Header/Header.vue";
export default {
  name: 'Contact main',
  components: {
    ProfilMain,
    Sidemenu,
    Header
  }
}
</script>