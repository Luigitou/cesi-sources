<template>
  <header>
    <Logo />
    <div class="submenu">
      <h2>Bonjour, {{ name }}</h2>
      <SearchBar />
      <IconBar />
    </div>
  </header>
</template>

<script>
import IconBar from "./IconBar.vue";
import Logo from "./Logo.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "Header",
  components: {
    SearchBar,
    Logo,
    IconBar,
  },
  data() {
    return {
      name: "Louis",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/common.scss";

header {
  background: $color-head;
  display: flex;

  position: absolute;
  height: 10%;
  width: 100%;

  h2 {
    width: 15%;
  }

  .submenu {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
