<template>
  <div class="vosamis">
    <div class="title">
      <h1>Vos amis</h1>
    </div>

    <div class="searchbar">
      <div class="search">
        <input type="text" class="searchTerm" placeholder="Rechercher un ami...">
        <button type="submit" class="searchButton"><img class="img" src="../assets/chercher.png" alt="chercher"></button>
      </div>
    </div>

    <div class="tableau">
     <DataTable :value="cars">
        <Column field="nom" header="Nom"></Column>
        <Column field="prenom" header="Prenom"></Column>
        <Column field="mail" header="Mail"></Column>
        <Column field="ami" header="Amis"></Column>
    </DataTable>
      <!-- <p>Tableau d'ami avec bar de recherche et filtre</p>
      <ul>
        <li>Nom</li>
        <li>Prenom</li>
        <li>Mail</li>
        <li>✅</li>
        <li>Bouton supprimer</li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
// import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
// import Row from 'primevue/row';
import AmiService from '../services/AmiService.js';    

export default {
  name: 'VosAmis',
  components: {
    DataTable,
    Column
  },
  data() {
    return {
      amis: null
    }
  },
  AmiService: null,
  created() {
    this.AmiService = new AmiService();
  },
  mounted() {
    this.AmiService.getAmisSmall().then(data => this.amis = data);
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/common.scss';

.vosamis{
  .title{
    h1{
      display: flex;
      margin: 8% 0 0 5%;
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
        border: 2px solid $color-special;
        border-right: none;
        padding: 5px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        outline: none;
        color: #222222;
      }

      .searchButton {
        width: 40px;
        border: 1px solid $color-special;
        background: $color-special;
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
    margin-top: 70px;
  }
}
</style>