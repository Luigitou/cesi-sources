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
import HeaderAcceuil from "./components/navigation/header/HeaderAcceuil.vue"
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
      return this.$route.path !== "/";
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
    height: 100%;

    .splitter-side {
      height: 100%;
    }
  }
}
</style>
