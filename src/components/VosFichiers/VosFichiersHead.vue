<template>
  <div class="wrapperNavigation">
    <Breadcrumb class="breadcrumb" :home="home" :model="items">
      <template #item="{ item }">
        <span class="linkFolder" @click="() => changeFolder(item.id, item.idx)"
          ><i :class="item.icon"></i>{{ item.label }}</span
        >
      </template>
    </Breadcrumb>
    <Button
      class="btn"
      label="Ajouter un fichier"
      icon="pi pi-file"
      @click="addFile"
    ></Button>
    <Button
      class="btn"
      label="Ajouter un dossier"
      icon="pi pi-folder"
      @click="addFolder"
    ></Button>
    <Dialog
      header="Ajouter un dossier"
      v-model:visible="displayModalFolder"
      :modal="true"
      :dismissableMask="true"
    >
      <AddFolder
        :idDossier="currentFolder.id"
        @close-modal="closeFolderModal"
        @refresh-head="refresh"
      />
    </Dialog>
    <Dialog
      header="Ajouter un fichier"
      v-model:visible="displayModalFile"
      :modal="true"
      :dismissableMask="true"
    >
      <AddFile
        :idDossier="currentFolder.id"
        @close-modal="closeFileModal"
        @refresh-head="refresh"
      />
    </Dialog>
  </div>
</template>

<script>
import Breadcrumb from "primevue/breadcrumb";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import AddFile from "./AddFile.vue";
import AddFolder from "./AddFolder.vue";

export default {
  name: "VosFichiersHead",
  components: {
    Breadcrumb,
    Button,
    Dialog,
    AddFile,
    AddFolder,
  },
  props: {
    currentFolder: Object,
    idBase: Number,
    history: Array,
  },
  data() {
    return {
      displayModalFolder: false,
      displayModalFile: false,
    };
  },
  computed: {
    items() {
      const res = [];
      let idx = 0;
      this.$props.history.forEach((element) => {
        if (this.idBase !== element.id) {
          res.push({ label: element.name, id: element.id, idx: idx });
        }
        idx = idx + 1;
      });
      return res;
    },
    home() {
      return {
        icon: "pi pi-home",
        id: this.idBase,
        idx: 0,
      };
    },
  },
  methods: {
    changeFolder(id, idx) {
      if (this.currentFolder.id !== id) {
        const newHistory = this.history.slice(0, idx + 1);
        const newCurrentFolder = newHistory.at(-1);
        this.$emit("get-back-in-folder", {
          newHistory: newHistory,
          newCurrentFolder: newCurrentFolder,
        });
      }
    },
    addFolder() {
      this.displayModalFolder = true;
    },
    addFile() {
      this.displayModalFile = true;
    },
    refresh() {
      this.$emit("refresh-page");
    },
    closeFolderModal() {
      this.displayModalFolder = false;
    },
    closeFileModal() {
      this.displayModalFile = false;
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

    .linkFolder {
      cursor: pointer;
    }
  }

  .btn {
    width: 15%;
    height: 3rem;
  }
}
</style>
