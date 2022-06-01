<template>
  <div class="vosFichiers">
    <VosFichiersHead
      :currentFolder="currentFolder"
      :idBase="idBase"
      :history="history"
    />
    <VosFichiersTab
      :currentFolder="currentFolder"
      :idBase="idBase"
      :childs="childs"
      @change-to-folder="changeToFolder"
    />
  </div>
</template>

<script>
import VosFichiersHead from "../components/VosFichiers/VosFichiersHead.vue";
import VosFichiersTab from "../components/VosFichiers/VosFichiersTab.vue";
import VosFichiersServices from "../services/VosFichiersServices";

export default {
  name: "VosFichiers",
  components: {
    VosFichiersHead,
    VosFichiersTab,
  },
  data() {
    return {
      childs: [],
      currentFolder: null,
      idBase: null,
      history: [],
      base: null,
    };
  },
  methods: {
    generateChildsFolders(childs) {
      this.$data.childs = childs;
    },
    getBaseId() {
      VosFichiersServices.getBase(0).then((response) => {
        this.$data.idBase = response.data.id;
        this.$data.currentFolder = response.data;
        this.base = response.data;
        this.generateChildsFolders(response.data.dossiersEnfant);
        this.$data.history.push(response.data);
      });
    },
    changeToFolder(payload) {
      this.history.push(payload.newFolder);
      this.currentFolder = payload.newFolder;
      this.generateChildsFolders(payload.newFolder.enfants);
    },
  },
  mounted() {
    this.getBaseId();
  },
};
</script>

<style lang="scss" scoped>
.vosFichiers {
  height: 100%;
}
</style>
