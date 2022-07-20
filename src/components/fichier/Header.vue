<template>
  <div class="header">
    <div class="left">
      <div class="nom">{{ data.name }}</div>
      <div class="proprietaire">{{ this.$store.state.username }}</div>
    </div>
    <div class="right">
      <div class="icons">
        <Button
          icon="pi pi-download"
          class="p-button-text p-button-rounded"
          @click="downloadFile"
        ></Button>
        <!--<Button
          icon="pi pi-heart"
          class="p-button-text p-button-rounded"
        ></Button>
        <Button
          icon="pi pi-share-alt"
          class="p-button-text p-button-rounded"
        ></Button>-->
      </div>
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
import VosFichiersServices from "../../services/VosFichiersServices";

export default {
  name: "Header",
  components: {
    Button,
  },
  props: {
    data: Object,
  },
  methods: {
    downloadFile() {
      VosFichiersServices.downloadFile(
        this.$route.params.id,
        this.$store.state.token
      ).then((response) => {
        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = this.$props.data.name;
        link.click();
        URL.revokeObjectURL(link.href);
      });
    },
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
