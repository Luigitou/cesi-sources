<template>
  <header>
    <div class="submenu">
      <h2>Bonjour, {{ this.$store.state.nom }}</h2>
      <SearchBar />
      <IconBar />
    </div>
  </header>
</template>

<script>
import IconBar from "./IconBar.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "Header",
  components: {
    SearchBar,
    IconBar,
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/common.scss";

header {
  background: $color-head;
  display: flex;

  position: relative;
  width: 100%;
  padding: 2% 0% 3% 0%;
  height: 5%;

  h2 {
    width: 20%;
    color: $color-text;
    margin-left: 2%;
  }

  .submenu {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

@media only screen and (max-width: 600px) {
  h2{
    font-size: 15px;
  }
}
</style>
