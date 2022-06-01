<template>
  <div id="main">
    <div v-if="showHeader()" class="all">
      <div class="side">
        <Sidemenu />
      </div>
      <div class="main">
        <div class="head">
          <Header />
        </div>
        <div class="views">
          <router-view />
        </div>
      </div>
    </div>
    <div v-else class="all">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/navigation/header/Header.vue";
import Sidemenu from "./components/navigation/sidemenu/Sidemenu.vue";

export default {
  name: "App",
  components: {
    Header,
    Sidemenu,
  },
  methods: {
    showHeader() {
      if (this.$route.path === "/") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./scss/Global.scss";

#main {
  height: 100%;
  width: 100%;

  .all {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;

    .side {
      width: 10%;
      height: 100%;
    }

    .main {
      width: 90%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .head {
        height: 5%;
      }

      .views {
        height: 95%;
      }
    }
  }
}
</style>
