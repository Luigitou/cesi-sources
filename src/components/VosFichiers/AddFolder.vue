<template>
  <div class="addFolder">
    <div class="form">
      <InputText type="text" :placeholder="'Nom du dossier'" />
      <Dropdown v-model="selectedStatut" :options="statut" optionLabel="name" />
      <Button label="Valider" />
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
      selectedStatut: null,
      statut: [
        { id: 0, name: "Public" },
        { id: 1, name: "Privé" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.addFolder {
  width: 50vw;
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
