<template>
  <div class="vosFichiers">
    <VosFichiersHead
      :currentFolder="currentFolder"
      :idBase="idBase"
      :history="history"
      @get-back-in-folder="getBackInFolder"
      @refresh-page="refresh"
      :key="reset"
    />
    <VosFichiersTab
      :currentFolder="currentFolder"
      :idBase="idBase"
      :childs="childs"
      :files="files"
      @change-to-folder="changeToFolder"
      @open-file="openFile"
      :key="reset"
    />
  </div>
</template>

<script>
import VosFichiersHead from "../components/vosFichiers/VosFichiersHead.vue";
import VosFichiersTab from "../components/vosFichiers/VosFichiersTab.vue";
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
      files: [],
      reset: 0,
    };
  },
  methods: {
    refresh() {
      this.history = [];
      this.getBaseId();
    },
    getBaseId() {
      VosFichiersServices.getBase(
        this.$store.state.id,
        this.$store.state.token
      ).then((response) => {
        this.$data.idBase = response.data.id;
        this.$data.currentFolder = response.data;
        this.base = response.data;
        this.$data.childs = response.data.dossiersEnfant;
        this.$data.history.push(response.data);
        this.fetchAllFiles();
      });
    },
    changeToFolder(payload) {
      this.history.push(payload.newFolder);
      this.currentFolder = payload.newFolder;
      this.$data.childs = payload.newFolder.dossiersEnfant;
      this.fetchAllFiles();
    },
    getBackInFolder(payload) {
      this.history = payload.newHistory;
      this.currentFolder = payload.newCurrentFolder;
      this.$data.childs = payload.newCurrentFolder.dossiersEnfant;
      this.fetchAllFiles();
    },
    fetchAllFiles() {
      this.files = [];
      VosFichiersServices.getFilesFromFolder(
        this.$store.state.id,
        this.currentFolder.id,
        this.$store.state.token
      ).then((response) => {
        response.data.forEach((element) => {
          this.files.push({
            id: element.id,
            name: element.nom,
            dateCreation: element.dateCreation,
            utilisateur: this.$store.state.username,
            taille: element.taille,
            type: element.type,
            etat: element.etat,
            file: true,
          });
        });
      });
      this.reset = this.reset + 1;
    },
    openFile(payload) {
      this.$router.push(`/fichier/${payload.file.id}`);
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
