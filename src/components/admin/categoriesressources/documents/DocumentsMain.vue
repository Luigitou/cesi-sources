<template>
  <div class="tableau">
    <DataTable :value="documents" :paginator="true" :rows="5" sortMode="multiple" responsiveLayout="scroll"
      v-model:filters="filters"
      filterDisplay="row"
      class="data"
    >
      <template #header>
        <div class="flex justify-content-between">
            <span class="p-input-icon-right">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Cherchez un document..." />
            </span>
        </div>
      </template>
      <Column field="nom" header="Nom" :sortable="true">
        <template #body="slotProps">
          <div v-if="slotProps.data.type == 'pdf' || slotProps.data.type == 'doc'">
            {{ slotProps.data.nom }}
          </div>
        </template>
      </Column>
      <Column field="type" header="type" :sortable="true">
        <template #body="slotProps">
          <div v-if="slotProps.data.type == 'pdf' || slotProps.data.type == 'doc'">
            {{ slotProps.data.type }}
          </div>
        </template>
      </Column>
      <Column field="taille" header="Taille" :sortable="true">
        <template #body="slotProps">
          <div v-if="slotProps.data.type == 'pdf' || slotProps.data.type == 'doc'">
            {{ slotProps.data.taille }}
          </div>
        </template>
      </Column>
      <Column header="Supprimer">
        <template #body="slotProps">
          <div v-if="slotProps.data.type == 'pdf' || slotProps.data.type == 'doc'">
            <Button icon="pi pi-times" class="p-button-raised p-button-rounded p-button-danger" id="supp" />
          </div>
        </template>
      </Column>
    </DataTable>

    <!-- <span v-for="fichierDocument in this.documents" :key="fichierDocument.id">
      <p v-if="fichierDocument.type == 'pdf' || fichierDocument.type == 'doc'">{{ fichierDocument.nom + " " + fichierDocument.type + " " + fichierDocument.taille }}</p>
    </span> -->
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { FilterMatchMode, FilterOperator } from "primevue/api";
import VosFichiersService from '../../../../services/VosFichiersServices';

export default{
  name: 'imagesmain',
  components: {
    DataTable,
    Column,
    Button,
    InputText
  },
  data() {
    return {
      filters: {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        'nom': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
        'prenom': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
        'mail': {value: null, matchMode: FilterMatchMode.IN}
      },
      documents: [],
    }
  },
  methods: {
    getFichiers(){
      VosFichiersService.getFilesFromFolder(0, 1).then((response) => {
        this.documents = response.data;             
      });
    },
  },
  created() {      
    this.getFichiers();
  },
}
</script>

<style lang="scss" scoped>
@import '../../../../scss/Global.scss';

.tableau{
  margin-top: 40px;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: auto;

  .data{
    width: 80%;
  }

  #check{
    color: $color-button;
    margin-left: 10px;
  }

  #supp{
    width: 30px;
    height: 30px;
    margin-left: 20px;
  }
}
</style>