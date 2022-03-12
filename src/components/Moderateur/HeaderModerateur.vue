<template>
  <header>
    <div class="submenu">
        <router-link to="/">
        <img src="../../assets/Accueil/logo.png" alt="logo">
        </router-link>
        <IconBarAdmin />
    </div>
  </header>
</template>

<script>
import IconBarAdmin from "../common/Header/IconBarAdmin.vue";
export default {
  name: "HeaderAdmin",
  components: {
    IconBarAdmin,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

/*header {
  background: $color-head;
  display: flex;
  position: relative;
  width: 100vw;
  padding: 2% 0% 3% 0%;
  height: 50%;
  
  .submenu {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-content: center;
  }
}*/

header {
  background: $color-head;
  display: flex;

  position: relative;
  width: 100%;
  //padding: 2% 0% 3% 0%;
  height: 5%;

  .submenu {
    width: 100%;
    display: flex;
    align-items: right;
    justify-content: space-around;
    align-items: center;
  }
  img{
    margin-left: 10%;
    width: 100px;
  }
}
</style>
