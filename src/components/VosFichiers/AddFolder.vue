<template>
  <div class="addFolder">
    <Toast position="bottom-right" />
    <div class="form">
      <InputText type="text" :placeholder="'Nom du dossier'" v-model="name" />
      <Dropdown v-model="selectedStatut" :options="statut" optionLabel="name" />
      <Button label="Valider" @click="sendNewDossier" />
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import VosFichiersServices from "../../services/VosFichiersServices";
import Toast from "primevue/toast";

export default {
  name: "AddFolder",
  components: {
    InputText,
    Dropdown,
    Button,
    Toast,
  },
  props: {
    idDossier: Number,
  },
  data() {
    return {
      name: "",
      statut: [
        { id: 0, name: "Public" },
        { id: 1, name: "Privé" },
      ],
      selectedStatut: { id: 0, name: "Public" },
      errorName: false,
    };
  },
  methods: {
    sendNewDossier() {
      if (this.name !== "") {
        console.log(this.idDossier);
        VosFichiersServices.createFolder(
          0,
          this.idDossier,
          this.name,
          this.selectedStatut.id
        ).then((response) => {
          if (response.status === 201) {
            this.showSuccess();
          } else {
            this.showError();
          }
          setTimeout(() => {
            this.$emit("close-modal");
          }, 3000);
        });
      } else {
        this.errorName = true;
      }
    },
    showSuccess() {
      this.$toast.add({
        severity: "success",
        summary: "Opération réussie",
        detail: "Un dossier a été crée.",
        life: 2500,
      });
    },
    showError() {
      this.$toast.add({
        severity: "error",
        summary: "Erreur",
        detail: "Le dossier n'a pas pu être crée.",
        life: 2500,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.addFolder {
  width: 40vw;
  height: 25vh;
  padding: 2rem 0;

  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
  }
}
</style>
