<template>
  <div class="file">
    <Header />
    <Preview />
    <Commentaires />
  </div>
</template>

<script>
import Header from "../components/fichier/Header.vue";
import Preview from "../components/fichier/Preview.vue";
import Commentaires from "../components/fichier/Commentaires.vue";

export default {
  name: "File",
  components: {
    Header,
    Preview,
    Commentaires,
  },
  data() {
    return {
      key: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.file {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: auto;
}
</style>
