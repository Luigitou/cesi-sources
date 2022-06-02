<template>
  <div class="title">
    <h2>Vos amis</h2>

    <div class="search">
      <input type="text" class="searchTerm" placeholder="Rechercher un ami..." @keyup="showResults" v-model="search" id="search">
      <button type="submit" class="searchButton"><img class="img" src="../../assets/chercher.png" alt="chercher"></button>
      {{ hideResults() }}

      <div id="users">
        <table>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
          </tr>
          <tr v-for="utilisateur in filteredUsers" v-bind:key="utilisateur.id">
            <td>{{ utilisateur.nom }}</td>
            <td> {{utilisateur.prenom}}</td>    
            <td><button>Ajouter</button></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UtilisateurService from '../../services/UtilisateurService';

export default{
  name: 'vosamisheader',
  components: {

  },
  data(){
    return{
      utilisateurs: [],
      search: "",
    }
  },
  methods: {
    showResults(e){
      let users = document.getElementById('users');

      users.style = "display: flex;";

      if(e.target.selectionStart == 0){
        users.style = "display: none;";
      }    
    },
    hideResults(){
      let search = document.getElementById('search');
      let users = document.getElementById('users');

      window.addEventListener('click', function(e){
        if (e.target != search){
         users.style = "display: none;";
        } 
      })
    },
    getUtilisateurs(){
      UtilisateurService.getUtilisateurs().then((response) => {
        this.utilisateurs = response.data;   
      });
    }
  },
  created() {
    this.getUtilisateurs();
  },
  computed: {
    filteredUsers() {
      return this.utilisateurs.filter(u => {
          return u.nom.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||  
            u.prenom.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
          u.mail.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/Global.scss';
.title{
  display: flex;
  margin: 2% 0 0 10%;

  h2{
    flex: 0 0 50%;
    color: #565656;
  }
}

.search {
  width: 100%;

  .searchTerm {
    width: 70%;
    border: 1px solid rgb(217, 217, 217);
    border-right: none;
    padding: 5px;
    height: 33px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #222222;
  }

  .searchButton {
    position: relative;
    top: 2.5px;
    width: 40px;
    height: 33px;
    border: 1px solid gainsboro;
    background: rgb(238, 238, 238);
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;

    img{
      position: relative;
      top: 2px;
      width: 17px;
    }
  }
}

#users{
  display: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow-x: auto;
  position: absolute;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(70, 70, 70, 0.2);

  table{
    overflow: hidden;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(70, 70, 70, 0.2);
  }

  table tr th{
    padding: 15px;
    text-align: left;
  }

  table tr td{
    text-align: left;
    padding: 10px;
    width: 9.7rem;
  }

  button {
    color: #ffffff;
    background-color: $color-special;
    font-size: 0.9rem;
    border: 1px solid rgb(255, 166, 0);
    border-radius: 5px;
    padding: 5px 20px;
    cursor: pointer
  }

  button:hover {
    color: $color-special;
    background-color: #ffffff;
  }
}

</style>