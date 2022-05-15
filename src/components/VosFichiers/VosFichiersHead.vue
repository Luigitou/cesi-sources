<template>
  <div class="wrapperNavigation">
    <Breadcrumb class="breadcrumb" :home="home" :model="items">
      <template #item="{ item }">
        <span><i :class="item.icon"></i>{{ item.label }}</span>
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
  data() {
    return {
      home: { icon: "pi pi-home" },
      items: [
        {
          label: "Folder",
        },
        {
          label: "File",
        },
      ],
    };
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
