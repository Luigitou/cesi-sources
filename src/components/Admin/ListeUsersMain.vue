<script>
import SearchBarAdmin from "../common/Header/SearchBarAdmin.vue";
import moderateurDesactive from "../../assets/Admin/ModerateurDesactive.png"
import moderateurActive from "../../assets/Admin/ModerateurActive.png"
import UtilisateurService from '../../services/UtilisateurService'

export default {
    name: 'ListeUsersMain',
    components: {
        SearchBarAdmin,
    },
    data (){
        return {
            isDesactive: moderateurDesactive,
            isActive: moderateurActive,
            utilisateurs: [],
            actif: true,
            separator: {
                line: ""
            },
            search: ""
        }
    },
    methods: {
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
                u.adresse.toLowerCase().indexOf(this.search.toLowerCase()) != -1 || 
                u.prenom.toLowerCase().indexOf(this.search.toLowerCase()) != -1 ||
                u.mail.toLowerCase().indexOf(this.search.toLowerCase()) != -1;
            });
        }
  }  
}
</script>

<template>
    <div id="listeusers">
        <SearchBarAdmin id="search" v-model="search"/>
        <div class="table-style">
        <table>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>adresse</th>
                <th>Mail</th>
            </tr>
            <tr v-for="utilisateur in filteredUsers" v-bind:key="utilisateur.id">
                <td><a href="#" id="nom"><img src="../../assets/SuperAdmin/profile.png" alt="profile" id="type-icon"> {{ utilisateur.nom }}</a></td>
                <td> {{utilisateur.prenom}}</td>    
                <td> {{utilisateur.adresse}}</td>
                <td> {{utilisateur.mail}}</td>
                <td><a href=""><img src="../../assets/SuperAdmin/Modifier.png" alt="Modifier" id="modifier"></a></td>
                <td><a href=""><img src="../../assets/SuperAdmin/Supprimer.png" alt="Supprimer" id="supprimer"></a></td>
                <hr v-for="utilisateur in separator" v-bind:key="utilisateur.id">
            </tr>
        </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";

#listeusers{
    background-color: #FFF;
    width: 80%;
    margin: 0 auto;
    padding-top: 8%;  
}

#search{
    width: 20rem;
    margin-left: 68%;
}

.table-style{
    overflow-x:auto;
}

button{
    margin: 2rem 0rem 0rem 3rem;
    background-color: #EFFAFF;
    color: #000000;
    padding: .5rem;
    border-radius: .5rem;
    border: 0.1rem solid #037682;
    cursor: pointer;
}

#btn2{
    margin-left: 10%;
}

button:hover{
    background-color: #037682;
    color: #FFF;
}

table{
    margin: 0 auto;
    padding-top: 5rem;
    width: 70rem;
}

table tr th{
    padding: 1rem;
}

table tr td{
    padding: 1.5rem 0rem 0rem 1rem;
    text-align: center;
}

#nom{
    background-color: #EFFAFF;
    padding: .3rem;
    border-radius: .2rem;
    text-decoration: none;
    color: #000000;
}

#type-icon{
    width: 1rem;
}

#modifier, #supprimer{
    display: flex;
    width: 1.7rem;
}

hr{
    width: 65rem;
    margin-left: -58rem;
    margin-top: 5rem;
}

@media only screen and (max-width: 900px) {
  #search{
    margin-top: 50px;
    margin-left: 60px;
    width: 170px;
  }

  #listeusers{
    width: 150%;
    padding-bottom: 100%;
  }
}

</style>