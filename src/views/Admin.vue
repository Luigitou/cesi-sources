<template>
  <div class="admin">
    <div class="categories_users">
      <div class="categories">
        <Card class="image">
          <template #header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
          </template>
          <template #title>
            Images
          </template>
          <template #content>
              2500 images
          </template>
        </Card>
        <Card class="document">
          <template #header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
          </template>
          <template #title>
            Documents
          </template>
          <template #content>
              3000 fichiers
          </template>
        </Card>
        <Card class="videos">
          <template #header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
          </template>
          <template #title>
              Vidéos
          </template>
          <template #content>
              500 vidéos
          </template>
        </Card>
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
      <div class="graph">
        <Chart type="doughnut" :data="chartData" :options="lightOptions" />
      </div>
      <br>
      <div class="pourcentage">
        <div class="image_pourcent">
          <h3>Images</h3>
          <br>
          <ProgressBar :value="image" />
        </div>
        <br>
        <div class="document_pourcent">
          <h3>Documents</h3>
          <br>
          <ProgressBar :value="document" />
        </div>
        <br>
        <div class="video_pourcent">
          <h3>Vidéos</h3>
          <br>
          <ProgressBar :value="video" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Chart from 'primevue/chart';
import ProgressBar from 'primevue/progressbar';
import { FilterMatchMode, FilterOperator } from "primevue/api";

export default {
  name: 'Admin',
  components: {
    DataTable,
    Column,
    Button,
    InputText,
    Card,
    Chart,
    ProgressBar
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

      chartData: {
        labels: ['Images','Vidéos','Documents'],
        datasets: [
          {
            data: [3000, 500, 2500],
            backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
            hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
          }
        ]
      },
			lightOptions: {
				plugins: {
          legend: {
              labels: {
                color: '#495057'
              }
          }
        }
			},
      image: 60,
      document: 30,
      video: 10 
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
        transition: 0.3s;
        width: 30%;
        border-radius: 10px;
        padding: 10px;

        img{
          width: 40px;
          margin-left: 15px;
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
    border: 1px solid #dedddd;
    border-radius: 10px;
    padding: 30px;

    .graph{
      width: 18rem;
    }
  }
}
</style>
