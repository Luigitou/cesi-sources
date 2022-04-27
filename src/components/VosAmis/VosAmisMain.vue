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
            actif: false,
            search: "",
            listAmi: [],
        }
    },
    methods: {
        getUtilisateurs(){
            UtilisateurService.getUtilisateurs().then((response) => {
                this.utilisateurs = response.data;   
            });
        },

        getAmi(){
            UtilisateurService.getAmi().then((response) => {
                this.listAmi = response.data;   
            });
        },
    },
    created() {
        this.getUtilisateurs();
        this.getAmi();
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
                <th>Amis</th>
            </tr>
            <tr v-for="utilisateur in filteredUsers" v-bind:key="utilisateur.id">
                <td  v-if="this.$store.state.nom != utilisateur.nom"><a href="#" id="nom"><img src="../../assets/SuperAdmin/profile.png" alt="profile" id="type-icon"> {{ utilisateur.nom }}</a></td>
                <td  v-if="this.$store.state.prenom != utilisateur.prenom"> {{utilisateur.prenom}}</td>    
                <td  v-if="this.$store.state.adresse != utilisateur.adresse"> {{utilisateur.adresse}}</td>
                <td  v-if="this.$store.state.mail != utilisateur.mail"> {{utilisateur.mail}}</td>
                <td></td>
                <!-- <td>
                    <span v-if="this.actif == true"><p id="oui">Oui</p></span>
                    <span v-else><p id="non">Non</p></span>
                </td> -->
                <div v-if="this.$store.state.nom != utilisateur.nom">
                    <span v-if="this.actif == true"><button id="desactiver" @click="actif = false">Supprimer</button></span>
                    <span v-else><button id="desactiver" @click="actif = true">Ajouter</button></span>
                </div>
                <hr v-if="this.$store.state.nom != utilisateur.nom">
            </tr>
        </table>
        </div>

        <div v-for="ami in listAmi" v-bind:key="ami.id">
            <p>{{ ami.nom }}</p>
            <p>{{ ami.prenom }}</p>
            <p>{{ ami.adresse }}</p>
            <p>{{ ami.mail }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";

#listeusers{
    background-color: #FFF;
    width: 80%;
    margin: 0 auto;
    padding-top: 6%;  
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
    padding-top: 6rem;
    width: 60rem;
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

#oui{
  color: rgb(11, 165, 11);
}

#non{
  color: red;
}

#desactiver{
    background-color: $color-special;
    border: none;
    color: #FFF;
    width: 7rem;
    margin: 2rem 0rem .3rem 0rem;
}

hr{
    width: 55rem;
    margin-left: -48rem;
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