<template>
  <div class="wrapperTableau">
    <DataTable
      :value="childs"
      stripedRows
      responsiveLayout="scroll"
      selectionMode="single"
      dataKey="id"
      :selection="selection"
    >
      <Column field="nom" header="Nom" :sortable="true">
        <template #body="sortProps">
          <i v-if="sortProps.data.folder" class="pi pi-folder iconRight"></i>
          <i v-else class="pi pi-file iconRight"></i>
          {{ sortProps.data.nom }}
        </template>
      </Column>
      <Column field="date" header="Date" :sortable="true"></Column>
      <Column field="taille" header="Taille" :sortable="true"></Column>
      <Column
        field="propriétaire"
        header="Propriétaire"
        :sortable="true"
      ></Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import VosFichiersServices from "../../services/VosFichiersServices";

export default {
  name: "VosFichiersTab",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      selection: null,
      childs: [],
      currentFolder: null,
      idBase: null,
    };
  },
  methods: {
    getBaseId() {
      VosFichiersServices.getBase(0).then((response) => {
        this.$data.idBase = response.data.id;
        this.$data.currentFolder = response.data;
        this.generateChildsFolders(response.data.dossiersEnfant);
      });
    },
    generateChildsFolders(childs) {
      childs.forEach((child) => {
        this.$data.childs.push({
          id: child.id,
          date: child.dateCreation,
          taille: "",
          propriétaire: child.utilisateur.nom,
          folder: true,
          nom: child.name,
        });
      });
    },
  },
  mounted() {
    this.getBaseId();
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
