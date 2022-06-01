<template>
  <div class="wrapperNavigation">
    <Breadcrumb class="breadcrumb" :home="home" :model="items">
      <template #item="{ item }">
        <span @click="() => changeFolder(item.id)"
          ><i :class="item.icon"></i>{{ item.label }}</span
        >
      </template>
    </Breadcrumb>
    <Button class="btn" label="Ajouter un fichier" icon="pi pi-file"></Button>
    <Button class="btn" label="Ajouter un dossier" icon="pi pi-folder"></Button>
  </div>
</template>

<script>
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";

export default {
  name: "VosFichiersHead",
  components: {
    Breadcrumb,
    Button,
  },
  props: {
    currentFolder: Object,
    idBase: Number,
    history: Array,
  },
  computed: {
    items() {
      const res = [];
      this.$props.history.forEach((element) => {
        if (this.idBase !== element.id) {
          res.push({ label: element.name, id: element.id });
        }
      });
      return res;
    },
    home() {
      return {
        icon: "pi pi-home",
        id: this.idBase,
      };
    },
  },
  methods: {
    changeFolder(id) {
      console.log(this.history);
      if (this.currentFolder.id === id) {
        console.log("same");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapperNavigation {
  height: 10%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .breadcrumb {
    width: 65%;
  }

  .btn {
    width: 15%;
    height: 3rem;
  }
}
</style>
