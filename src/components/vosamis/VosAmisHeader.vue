<template>
  <div class="title">
    <h2>Vos amis</h2>
  </div>

  <div class="searchbar">
    <div class="search">
      <input type="text" class="searchTerm" placeholder="Rechercher un ami..." @keyup="showResults" v-model="search" id="search">
      <button type="submit" class="searchButton"><img class="img" src="../../assets/chercher.png" alt="chercher"></button>
      {{ hideResults() }}
    </div>
  
    <div id="users">
      <table>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Mail</th>
        </tr>
        <tr v-for="utilisateur in filteredUsers" v-bind:key="utilisateur.id">
          <td>{{ utilisateur.nom }}</td>
          <td> {{utilisateur.prenom}}</td>    
          <td> {{utilisateur.mail}}</td>
          <td><button>Ajouter</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import UtilisateurService from '../../service/UtilisateurService';

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
      width: 47.3%;
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

  #users{
    display: none;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 80%;
    justify-content: center;
    margin: 0 auto;
    overflow-x:auto;

    table{
      overflow: hidden;
      width: 100px;
    }

    table tr th{
      padding: 1rem;
    }
  
    table tr td{
      padding: 1.5rem 0rem 0rem 1rem;
      text-align: center;
    }

    button {
			color: #ffffff;
			background-color: #ffc800;
			font-size: 0.9rem;
			border: 1px solid #ffc800;
			border-radius: 5px;
			padding: 5px 20px;
			cursor: pointer
		}

		button:hover {
			color: #ffc800;
			background-color: #ffffff;
		}
  }
}
</style>