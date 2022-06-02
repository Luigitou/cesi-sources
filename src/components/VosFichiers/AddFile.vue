<template>
  <div class="addFile">
    <div class="form">
      <FileUpload
        :fileLimit="1"
        chooseLabel="Choisir un fichier"
        url="file"
        style="width: 100%"
        @select="sendNewFichier"
        :showUploadButton="false"
        :showCancelButton="false"
      />
      <Dropdown v-model="selectedStatut" :options="statut" optionLabel="name" />
      <Button label="Valider" @click="sendNewFichier" />
    </div>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";

export default {
  name: "AddFile",
  components: {
    Dropdown,
    Button,
    FileUpload,
  },
  props: {
    idDossier: Number,
  },
  data() {
    return {
      statut: [
        { id: 0, name: "Public" },
        { id: 1, name: "Privé" },
      ],
      selectedStatut: { id: 0, name: "Public" },
      errorFile: false,
      file: null,
    };
  },
  methods: {
    setFile(e) {
      console.log(e.file);
    },
    sendNewFichier(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped>
.addFile {
  width: 40vw;
  height: 40vh;
  padding: 1rem 0;
  display: flex;
  align-items: center;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }
}
</style>
