<template>
  <div class="home">
    <midHome/>
  </div>
</template>

<script>
import midHome from "../components/navigation/home/midHome.vue"

export default {
  name: "home",

  components: {
    midHome,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
