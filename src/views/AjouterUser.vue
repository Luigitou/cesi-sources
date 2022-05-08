<template>
  <div class="ajouteruser">
    <div class="title">
      <h2>Resultats...</h2>
    </div>

    <div class="tableau">
      <DataTable :value="users" responsiveLayout="stack" breakpoint="960px" class="data">
        <Column field="nom" header="Nom"></Column>
        <Column field="prenom" header="Prenom"></Column>
        <Column field="mail" header="Mail"></Column>
        <Column field="adresse" header="Adresse"></Column>
         <Column header="Ajouter">
          <template #body>
            <Button icon="pi pi-plus" class="p-button-raised p-button-rounded p-button-warning" id="ajout" />
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

export default {
  name: "AjouterUser",
  components: {
    DataTable,
    Column,
    Button
  },
  data(){
    return{
      users: [
        {
          nom: "Temesgen",
          prenom: "Edomiyas",
          mail: "temesgen.edomiyas@yahoo.com",
          adresse: "180 Boulevard de Lisa 75009 Paris"
        }
      ]
    }
  }  
}
</script>

<style lang="scss" scoped>
@import '../scss/Global.scss';

.ajouteruser{
  .title{
    h2{
      display: flex;
      margin: 2% 0 0 10%;
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

    #ajout{
      width: 30px;
      height: 30px;
      margin-left: 10px;
      background-color: $color-special;
      color: $color-head;
    }
  }
}
</style>