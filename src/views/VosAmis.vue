<template>
  <div class="vosamis">
    <div class="title">
      <h2>Vos amis</h2>
    </div>

    <div class="searchbar">
      <div class="search">
        <input type="text" class="searchTerm" placeholder="Rechercher un ami...">
        <button type="submit" class="searchButton"><img class="img" src="../assets/chercher.png" alt="chercher"></button>
      </div>
    </div>

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
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  name: 'VosAmis',
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
      amis: [
        {
          nom: "Temesgen",
          prenom: "Edomiyas", 
          mail: "temesgen.edomiyas@yahoo.com",  
        },
        {
          nom: "Temesgen",
          prenom: "Edomiyas", 
          mail: "temesgen.edomiyas@yahoo.com",  
        },
        {
          nom: "Temesgen",
          prenom: "Edomiyas", 
          mail: "temesgen.edomiyas@yahoo.com",  
        },
        {
          nom: "Temesgen",
          prenom: "Edomiyas", 
          mail: "temesgen.edomiyas@yahoo.com",  
        },
        {
          nom: "Temesgen",
          prenom: "Edomiyas", 
          mail: "temesgen.edomiyas@yahoo.com",  
        },
        {
          nom: "John",
          prenom: "Doe", 
          mail: "john.doe@gmail.com",  
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/common.scss';

.vosamis{
  .title{
    h2{
      display: flex;
      margin: 2% 0 0 10%;
    }
  }

  .searchbar{
    .search {
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: center;

      .searchTerm {
        width: 30%;
        border: 2px solid rgb(217, 217, 217);
        border-right: none;
        padding: 5px;
        height: 35px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #222222;
      }

      .searchButton {
        width: 40px;
        border: 1px solid gainsboro;
        background: gainsboro;
        text-align: center;
        color: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
        font-size: 20px;

        img{
          position: relative;
          top: 2.5px;
          width: 20px;
        }
      }
    }
  }

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
}
</style>