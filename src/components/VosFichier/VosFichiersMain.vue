<script>
import dossier from "../../assets/VosFichiers/dossier.png"
import fichier from "../../assets/VosFichiers/fichier.png"
import NouveauFichier from "../../components/VosFichier/NouveauFichier.vue"
import NouveauDossier from "../../components/VosFichier/NouveauDossier.vue"
import Invite from "../../components/VosFichier/InviterUnAmi.vue"
import FichierService from '../../services/FichierService' 

export default {
    name: 'VosFichiersMain',
    data (){
        return {
            isDossier: dossier,
            isFichier: fichier,
            fichiers: [],
            list: [
            ],

            separator: {
                line: ""
            },
            revele: false,
            reveleInvite: false,
            reveleDossier: false

        }
    },
    components : {
        'NouveauFichier' : NouveauFichier,
        'Invite': Invite, //modale est le nom d'utilisation voir dans template
        'NouveauDossier': NouveauDossier
    },
    methods: {
        toggleNouveauFichier: function() {
            this.revele=!this.revele
        },
        toggleInvite: function() {
        this.reveleInvite=!this.reveleInvite //si cest false passe a true vis versa et cela a partir de la modale puisque les props sont liées
        },
        toggleNouveauDossier: function() {
        this.reveleDossier=!this.reveleDossier
        },

        getFichiers(){
            FichierService.getFichiers().then((response) => {
                this.parseData(response.data);   
            });
        },
        parseData(data) {
            data.forEach(element => {
                this.$data.list.push(
                    {
                    nom: element.nom,
                    date: element.dateCreation,
                    proprietaire: "",
                    membres: "",
                    taille: element.taille + " octets",
                    type: element.type
                    }
                )
            });
        }
    },
    created() {
        this.getFichiers();
    }  
};
</script>

<template>
<NouveauFichier v-bind:revele="revele" v-bind:toggleNouveauFichier="toggleNouveauFichier"></NouveauFichier> <!--lier les données au composent-->
<NouveauDossier v-bind:reveleDossier="reveleDossier" v-bind:toggleNouveauDossier="toggleNouveauDossier"></NouveauDossier>
<Invite v-bind:reveleInvite="reveleInvite" v-bind:toggleInvite="toggleInvite"></Invite> 

    <div id="vosfichiers">
        <div class="menu">
            <button v-on:click="toggleNouveauFichier">Créer un nouveau fichier</button>
            <button>Créer un nouveau dossier</button>
            <button>Partagé avec moi</button>
            <button v-on:click="toggleInvite">Inviter un ami</button>
        </div>
        
        <table>
            <tr>
                <th>Nom</th>
                <th>Date</th>
                <th>Taille</th>
                <th>Type</th>
                <th>Membres</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td><a href="#" id="nom">
                        <span v-if="item.type == 'dossier'"><img :src="isDossier" alt="Dossier"></span>
                        <span v-else><img :src="isFichier" alt="fichier"></span>
                    {{ item.nom }}
                    </a>
                </td>
                <td>{{ item.date }}</td>
                <td>{{ item.taille }}</td>
                <td>{{ item.type }}</td>
                <td>{{ item.membres }}</td>
                <!--<a href=""><img src="../../assets/SuperAdmin/Modifier.png" alt="Modifier" id="modifier"></a>
                <a href=""><img src="../../assets/SuperAdmin/Supprimer.png" alt="Supprimer" id="supprimer"></a>
                <hr v-for="item in separator" v-bind:key="item.id">-->
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
#vosfichiers{
    background-color: #FFF;
    width: 100%;
    height: 90%;
    overflow-x:auto;
}

.menu{
    display: flex;
    width: 70%;
    margin-left: 15%;
    justify-content: space-around;
    flex-wrap: wrap;
}


button{
    margin: 2rem 0rem 0rem 2rem;
    background-color: #EFFAFF;
    color: #000000;
    padding: .5rem;
    border-radius: .5rem;
    border: 0.1rem solid #037682;
    cursor: pointer;
}

button:hover{
    background-color: #037682;
    color: #FFF;
}

table{
    margin: 2% auto;
    padding-top: rem;
    width: 70rem;
    border-collapse: collapse;
}

table tr th{
    padding: 1rem;
}

table tr td{
    padding: 1.5rem 0rem 0rem 1rem;
}

tr {
    border-bottom: 1px solid black;
}

th {
    text-align: left !important;
}

td {
    padding-bottom: 10px !important;
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

img{
    width: 1rem;
}

#modifier, #supprimer{
    width: 1.5rem;
    padding: .5rem;
    margin: 1.5rem 0rem 0rem 1rem;
}

</style>