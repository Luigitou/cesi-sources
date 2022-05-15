<template>
   <div class="users">
    <DataTable :value="users" :paginator="true" :rows="5" sortMode="multiple" responsiveLayout="scroll"
      v-model:filters="filters"
      filterDisplay="row"
      class="data"
    >
    <template #header>
        <div class="flex justify-content-between">
            <span class="p-input-icon-right">
              <i class="pi pi-search" />
              <InputText v-model="filters['global'].value" placeholder="Cherchez un utilisateur..." />
            </span>
        </div>
      </template>
      <Column field="nom" header="Nom" :sortable="true"></Column>
      <Column field="prenom" header="Prenom" :sortable="true"></Column>
      <Column field="mail" header="Mail" :sortable="true"></Column>
      <Column field="adresse" header="Adresse" :sortable="true"></Column>
      <Column field="moderateur" header="Modérateur">
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

export default{
  name: 'users',
  components: {
    DataTable,
    Column,
    Button,
    InputText,
  },
  data() {
    return {
      filters: {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        'nom': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
        'prenom': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
        'mail': {value: null, matchMode: FilterMatchMode.IN},
        'adresse': {value: null, matchMode: FilterMatchMode.IN}
      },
      users: [
        {
          nom: "Temesgen",
          prenom: "Edomiyas", 
          mail: "temesgen.edomiyas@yahoo.com",  
          adresse: '170, Rue anatole 75015 Paris' 
        },
        {
          nom: "Temesgen",
          prenom: "Edomiyas", 
          mail: "temesgen.edomiyas@yahoo.com",  
          adresse: '170, Rue anatole 75015 Paris' 
        },
        {
          nom: "Temesgen",
          prenom: "Edomiyas", 
          mail: "temesgen.edomiyas@yahoo.com",  
          adresse: '170, Rue anatole 75015 Paris' 
        },
        {
          nom: "John",
          prenom: "Doe", 
          mail: "john.doe@gmail.com",
          adresse: '160, Rue jean baptiste 75009 Paris' 
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/Global.scss';

.users{
  margin-top: 40px;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 10px;
  .data{
    width: 100%;
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