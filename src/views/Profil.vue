<template>
  <div class="contact view">
    <Sidemenu />
    <div class="wrap">
      <Header />
      <ProfilMain />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfilMain from "../components/Profil/ProfilMain.vue";
export default {
  name: "Contact main",
  components: {
    ProfilMain
  },
};
</script>