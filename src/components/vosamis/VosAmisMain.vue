<template>
  <div class="tableau">
    <DataTable :value="amis" :paginator="true" :rows="5" sortMode="multiple" responsiveLayout="scroll"
      v-model:filters="filters"
      filterDisplay="row"
      class="data"
    >
      <template #header>
        <div class="flex justify-content-between">
            <span class="p-input-icon-right">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Cherchez vos amis..." />
            </span>
        </div>
      </template>
      <Column field="nom" header="Nom" :sortable="true"></Column>
      <Column field="prenom" header="Prenom" :sortable="true"></Column>
      <Column field="mail" header="Mail" :sortable="true"></Column>
      <Column field="ami" header="Amis">
        <template #body>
          <i class="pi pi-check" id="check"></i>
        </template>
      </Column>
      <Column header="Supprimer">
        <template #body>
          <Button icon="pi pi-times" class="p-button-raised p-button-rounded p-button-danger" id="supp" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { FilterMatchMode, FilterOperator } from "primevue/api";
import UtilisateurService from '../../services/UtilisateurService';

export default{
  name: 'vosamismain',
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
      amis: [],
    }
  },
  methods: {
    getAmi(){
      UtilisateurService.getAmi(1).then((response) => {
        this.amis = response.data;   
      });
    },
  },
  created() {      
    this.getAmi();
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/Global.scss';

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