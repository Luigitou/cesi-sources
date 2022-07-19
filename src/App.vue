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
    <div v-else>
      <Splitter class="splitter-side">
        <SplitterPanel :size="90">
          <Splitter layout="vertical" class="splitter-vertical">
            <SplitterPanel :size="5">
              <HeaderAcceuil></HeaderAcceuil>
            </SplitterPanel>
            <SplitterPanel :size="95">
              <router-view />
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
  </div>
</template>

<script>
import Header from "./components/navigation/header/Header.vue";
import HeaderAcceuil from "./components/navigation/header/HeaderAcceuil.vue";
import Sidemenu from "./components/navigation/sidemenu/Sidemenu.vue";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

export default {
  name: "App",
  components: {
    Header,
    HeaderAcceuil,
    Sidemenu,
    Splitter,
    SplitterPanel,
  },
  methods: {
    showHeader() {
      if (this.$route.path === "/") {
        return false;
      } else if (this.$route.path === "/Inscription") {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    const username = localStorage.getItem("username");

    if (token && id && username) {
      this.$store.state.token = token;
      this.$store.state.id = id;
      this.$store.state.username = username;
    }
  },
};
</script>

<style lang="scss">
@import "./scss/Global.scss";

#main {
  height: 100%;
  width: 100%;
  background-color: $color-head;

  .all {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

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
        height: 80px;
      }

      .views {
        height: calc(100% - 80px);
      }
    }
  }

  .splitter-side {
    border: none;
  }

  .p-splitter-gutter {
    display: none;
  }

  .p-splitter-panel {
    background-color: $color-head;
  }
}
</style>
