<template>
  <div class="header">
    <div class="left">
      <div class="nom">Nom du fichier</div>
      <div class="proprietaire">Propriétaire</div>
    </div>
    <div class="right">
      <div class="icons">
        <Button
          icon="pi pi-download"
          class="p-button-text p-button-rounded"
        ></Button>
        <Button
          icon="pi pi-heart"
          class="p-button-text p-button-rounded"
        ></Button>
        <Button
          icon="pi pi-share-alt"
          class="p-button-text p-button-rounded"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  name: "Header",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  width: calc(100% - 4rem);
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-top: 1rem;
  border: 1px solid lightblue;
  border-radius: 5px;

  .left {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    .proprietaire {
      font-size: 0.9em;
    }
  }

  .right {
    .icons {
      display: flex;
      gap: 1rem;
    }
  }
}
</style>
