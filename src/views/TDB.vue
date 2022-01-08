<template>
  <div>
    <Header />
    <Mid />
  </div>
</template>

<script>
import Mid from "../components/TDB/TDBMid.vue";
import Header from "../components/common/Header/Header.vue";

export default {
  name: "Tableau de bord",
  components: {
    Mid,
    Header
  },
};
</script>

<style lang="scss" scoped></style>
