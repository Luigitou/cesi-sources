<template>
  <div class="addFile">
    <div class="form">
      <FileUpload
        :fileLimit="1"
        chooseLabel="Choisir un fichier"
        url="file"
        style="width: 100%"
        @select="setFile"
        :showUploadButton="false"
        :showCancelButton="false"
        @remove="() => (file = null)"
      />

      <Dropdown v-model="selectedStatut" :options="statut" optionLabel="name" />
      <div class="wrapperSubmit">
        <p v-if="errorFile">Le champs fichier est nécessaire.</p>
        <Button label="Valider" @click="sendNewFichier" />
      </div>
    </div>
    <Toast position="bottom-right" />
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import FileUpload from "primevue/fileupload";
import VosFichiersServices from "../../services/VosFichiersServices";
import Toast from "primevue/toast";

export default {
  name: "AddFile",
  components: {
    Dropdown,
    Button,
    FileUpload,
    Toast,
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
      this.file = e.files[0];
      this.errorFile = false;
    },
    sendNewFichier() {
      if (this.file !== null) {
        VosFichiersServices.createFile(
          0,
          this.idDossier,
          this.selectedStatut.id,
          this.file
        ).then((response) => {
          if (response.status === 201) {
            this.showSuccess();
          } else {
            this.showError();
          }
          this.$emit("refresh-head");
          setTimeout(() => {
            this.$emit("close-modal");
          }, 3000);
        });
      } else {
        this.errorFile = true;
      }
    },
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Opération réussie",
        detail: "Un fichier a été crée.",
        life: 2500,
      });
    },
    showError() {
      this.$toast.add({
        severity: "error",
        summary: "Erreur",
        detail: "Le fichier n'a pas pu être crée.",
        life: 2500,
      });
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

    .wrapperSubmit {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        color: red;
        font-size: 80%;
      }

      button {
        margin-top: 5px;
        width: 100%;
      }
    }
  }
}
</style>
