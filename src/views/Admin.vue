<template>
  <div class="admin">
    <div class="categories_users">
      <div class="categories">
        <div class="image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
          <p><b>Images</b></p>
          <br>
          <p>2500 images</p>
        </div>
        <div class="document">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
          <p><b>Documents</b></p>
          <br>
          <p>3000 fichiers</p>
        </div>
        <div class="videos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
          <p><b>Videos</b></p>
          <br>
          <p>500 vidéos</p>
        </div>
      </div>

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
    </div>
    

    <div class="statistique">

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
  name: 'Admin',
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
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/Global.scss';
.admin{
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  .categories_users{
    .categories{
      display: flex;
      justify-content: space-between;
      .image, .document, .videos{
        border: 1px solid rgb(199, 199, 199);
        transition: 0.3s;
        width: 30%;
        border-radius: 10px;
        padding: 30px;

        img{
          width: 40px;
        }
      }
      .image:hover, .document:hover, .videos:hover{
        box-shadow: 0 4px 8px 0 rgba(109, 109, 109, 0.2);
      }
    }

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
  }

  .statistique{
    border: 2px solid #222222;
    padding: 10%;
  }
}
</style>
