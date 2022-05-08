<template>
  <div id="main">
    <div v-if="showHeader()">
      <Splitter class="splitter-side">
        <SplitterPanel :size="10">
          <Sidemenu></Sidemenu>
        </SplitterPanel>
        <SplitterPanel :size="90">
          <Splitter layout="vertical" class="splitter-vertical">
            <SplitterPanel :size="5">
              <Header></Header>
            </SplitterPanel>
            <SplitterPanel :size="95">
              <router-view />
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/navigation/header/Header.vue";
import Sidemenu from "./components/navigation/sidemenu/Sidemenu.vue";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";

export default {
  name: "App",
  components: {
    Header,
    Sidemenu,
    Splitter,
    SplitterPanel,
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

  div {
    height: 100%; // Pousse mon composant vers le bas

    .splitter-side {
      height: 100%;
    }
  }
}
</style>
