<template>
  <div class="title">
    <h2>Vos amis</h2>
    <div class="search">
      <input type="text" class="searchTerm" placeholder="Rechercher un ami..." @keyup="showResults" v-model="search"
        id="search">
      <button type="submit" class="searchButton"><img class="img" src="../../assets/chercher.png"
          alt="chercher"></button>
      <div id="users">
        <table>
          <tr>
            <div class="labels">
              <th>Nom</th>
              <th>Prenom</th>
            </div>
          </tr>
            <tr v-for="utilisateur in filteredUsers" v-bind:key="utilisateur.id">
              <div v-if="this.$store.state.amiDansListe != utilisateur.id">
                <td v-if="this.nom_utilisateur != utilisateur.nom">{{ utilisateur.nom }}</td>
                <td v-if="this.prenom_utilisateur != utilisateur.prenom">{{ utilisateur.prenom }}</td>
                <td v-if="this.nom_utilisateur != utilisateur.nom"><Button label="Ajouter" id="btn"
                    @click="addAmi(utilisateur.id)">Ajouter</Button></td>
              </div>
            </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UtilisateurService from '../../services/UtilisateurService';
import Button from 'primevue/button';

export default {
  name: 'vosamisheader',
  components: {
    Button
  },
  data() {
    return {
      utilisateurs: [],
      id_utilisateur: null,
      nom_utilisateur: null,
      prenom_utilisateur: null,
      search: "",
      btnAdd: null
    }
  },
  methods: {
    showResults(e) {
      let users = document.getElementById('users');

      users.style = "display: flex;";

      if (e.target.selectionStart == 0) {
        users.style = "display: none;";
      }
    },
    getUtilisateurs() {
      UtilisateurService.getUtilisateurs(localStorage.getItem('token')).then((response) => {
        this.utilisateurs = response.data;

        for(const utilisateur of this.utilisateurs){
          if(localStorage.getItem('username') == utilisateur.username){
            this.nom_utilisateur = utilisateur.nom
            this.prenom_utilisateur = utilisateur.prenom
          }
        }
      });
    },
    addAmi(id_ami) {
      UtilisateurService.addAmi(localStorage.getItem('id'), id_ami, localStorage.getItem('token')).then(() => {
        this.btnAdd = 1;

        return this.$store.state.btnAdd = this.btnAdd;
      })
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
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/Global.scss';

.title {
  display: flex;
  margin: 2% 0 0 10%;

  h2 {
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

    img {
      position: relative;
      top: 2px;
      width: 17px;
    }
  }
}

#users {
  display: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow-x: auto;
  position: absolute;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(70, 70, 70, 0.2);

  table {
    overflow: hidden;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 4px 8px 0 rgba(70, 70, 70, 0.2);
  }

  .labels{
    display: flex;
  }

  table tr th {
    padding: 15px;
  }

  table tr td {
    text-align: left;
    padding: 10px 10px 10px 20px;
  }

  #btn {
    background-color: $color-special;
    padding: 1% 5% 4% 5%;
    border-radius: 5px;
    border: 1px solid rgb(255, 166, 0);
    margin-left: 20px;
  }

  #btn:focus {
    box-shadow: rgb(255, 203, 155) 0px 0px 0px 3px;
  }

  #btn:hover {
    color: $color-special;
    background-color: #ffffff;
  }
}

@media(max-width: 443px){
  #users{
    right: 0.7rem;
    width: 50%;
  }
}
</style>