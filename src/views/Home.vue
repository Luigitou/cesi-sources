<template>
  <div class="home">
    <MidHome></MidHome>
  </div>
</template>

<script>
import MidHome from "../components/navigation/midHome/MidHome.vue";

export default {
  name: "Home",

  components: {
    MidHome,
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: brown;
  height: 100%;
}
</style>
