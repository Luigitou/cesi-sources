<template>
  <div class="addFolder">
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

export default {
  name: "AddFolder",
  components: {
    InputText,
    Dropdown,
    Button,
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
      } else {
        this.errorName = true;
      }
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
