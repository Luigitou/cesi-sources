<template>
  <div class="file">
    <Header />
    <Preview />
    <Commentaires @refresh-file="refresh" :key="key" />
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
  methods: {
    refresh() {
      this.$data.key = this.$data.key + 1;
    },
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
