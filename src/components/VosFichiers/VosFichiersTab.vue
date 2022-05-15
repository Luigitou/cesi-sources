<template>
  <div class="wrapperTableau">
    <DataTable
      :value="data"
      stripedRows="true"
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

export default {
  name: "VosFichiersTab",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      selection: null,
      data: [
        {
          id: 0,
          date: "15/05/2022",
          taille: "NA",
          propriétaire: "Louis Bellefemine",
          folder: true,
          nom: "test 0",
        },
        {
          id: 1,
          date: "15/05/2022",
          taille: "NA",
          propriétaire: "Louis Bellefemine",
          folder: true,
          nom: "test 1",
        },
        {
          id: 2,
          date: "15/05/2022",
          taille: "NA",
          propriétaire: "Louis Bellefemine",
          folder: false,
          nom: "test 2",
        },
        {
          id: 3,
          date: "15/05/2022",
          taille: "NA",
          propriétaire: "Louis Bellefemine",
          folder: false,
          nom: "test 3",
        },
      ],
    };
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
