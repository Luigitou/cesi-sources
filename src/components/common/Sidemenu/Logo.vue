<template>
  <div>
      <img src="../../../assets/Accueil/logo.png" alt="Logo" @click="clearcache">
  </div>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    clearcache () {
      localStorage.clear();
      console.log("clean");
    }
  }
};
</script>

<style lang="scss" scoped>

div {
    position: relative;
    padding: 0;
    top: 0;
    left: 0;
    width: 75%;


    img {
        position: relative;
        width: 85%;
        top: 0;
        left: 0;
        margin-left: 30%;
        margin-top: 10%;
    }

}
</style>
