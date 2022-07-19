<template>
  <div class="file">
    <Header :data="data" />
    <Preview v-if="display" :file="file" :type="type" />
    <Commentaires />
  </div>
</template>

<script>
import Header from "../components/fichier/Header.vue";
import Preview from "../components/fichier/Preview.vue";
import Commentaires from "../components/fichier/Commentaires.vue";
import VosFichiersServices from "../services/VosFichiersServices";

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
      data: {
        name: "",
        type: "",
      },
      file: null,
      display: false,
      type: null,
    };
  },
  methods: {
    fetchData() {
      VosFichiersServices.getHeaderFromFile(
        this.$route.params.id,
        this.$store.state.token
      ).then((response) => {
        this.$data.data = response.data;
        this.displayFile(response.data);
      });
    },
    displayFile(data) {
      if (data.type.startsWith("image")) {
        this.$data.display = true;
        this.$data.type = "image";
      }
    },
  },
  mounted() {
    this.fetchData();
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
