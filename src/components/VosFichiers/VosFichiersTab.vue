<template>
  <div class="wrapperTableau">
    <DataTable
      :value="childs"
      stripedRows
      responsiveLayout="scroll"
      selectionMode="single"
      dataKey="id"
      @row-select="getIntoFolder"
    >
      <Column field="nom" header="Nom" :sortable="true" style="width: 60%">
        <template #body="sortProps">
          <i v-if="!sortProps.data.taille" class="pi pi-folder iconRight"></i>
          <i v-else class="pi pi-file iconRight"></i>
          {{ sortProps.data.name }}
        </template>
      </Column>
      <Column field="dateCreation" header="Date" :sortable="true"></Column>
      <Column
        field="utilisateur.nom"
        header="Propriétaire"
        :sortable="true"
      ></Column>
      <Column field="taille" header="Taille" :sortable="true"></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "VosFichiersTab",
  components: {
    DataTable,
    Column,
  },
  props: {
    currentFolder: Object,
    idBase: Number,
    childs: Object,
  },
  methods: {
    getIntoFolder(e) {
      this.$emit("change-to-folder", { newFolder: e.data });
    },
  },
  mounted() {
    setTimeout(() => {
      console.log("childs", this.$props.childs);
      console.log("currentFolder", this.$props.currentFolder);
    }, 250);
  },
};
</script>

<style lang="scss" scoped>
.wrapperTableau {
  height: 90%;
  padding: 1rem;
}

.iconRight {
  margin-right: 0.5rem;
}
</style>
