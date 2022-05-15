<template>
  <div class="sidemenu">
    <img class="logo" src="../../../assets/Logo_projet.png" alt="Logo" />
    <Menu />
    <!--<FooterMenu />-->
  </div>
</template>

<script>
import Menu from "./Menu.vue";
//import FooterMenu from "./FooterMenu.vue";

export default {
  name: "Sidemenu",
  components: {
    Menu,
    //FooterMenu,
  },
};
</script>

<style lang="scss" scoped>
.sidemenu {
  background-color: #effaff;
  height: 100%;
  position: relative;

  .logo {
    width: 100%;
  }
}
</style>
