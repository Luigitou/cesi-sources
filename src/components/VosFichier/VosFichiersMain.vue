<script>
import dossier from "../../assets/VosFichiers/dossier.png"
import fichier from "../../assets/VosFichiers/fichier.png"
import NouveauFichier from "../../components/VosFichier/NouveauFichier.vue"
import NouveauDossier from "../../components/VosFichier/NouveauDossier.vue"
import Invite from "../../components/VosFichier/InviterUnAmi.vue"

export default {
    name: 'VosFichiersMain',
    data (){
        return {
            isDossier: dossier,
            isFichier: fichier,
            list: [
                {
                    nom: "Photos",
                    date: "14/10/2021",
                    proprietaire: "Edomiyas",
                    membres: "Louis, Imen...",
                    taille: 1 + "Go",
                    type: "dossier"
                },

                {
                    nom: "logo.png",
                    date: "12/10/2021",
                    proprietaire: "Louis",
                    membres: "Edomiyas, Imen...",
                    taille: 100 + "Mo",
                    type: "fichier"
                },
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
    },
};
</script>

<template>
<NouveauFichier v-bind:revele="revele" v-bind:toggleNouveauFichier="toggleNouveauFichier"></NouveauFichier> <!--lier les données au composent-->
<NouveauDossier v-bind:reveleDossier="reveleDossier" v-bind:toggleNouveauDossier="toggleNouveauDossier"></NouveauDossier>
<Invite v-bind:reveleInvite="reveleInvite" v-bind:toggleInvite="toggleInvite"></Invite> 

    <div id="vosfichiers">
        <button v-on:click="toggleNouveauFichier">Créer un nouveau fichier</button>
        <button v-on:click="toggleNouveauDossier">Créer un nouveau dossier</button>
        <button>Partagé avec moi</button>
        <button v-on:click="toggleInvite">Inviter un ami</button>
        
        <table>
            <tr>
                <th>Nom</th>
                <th>Date de modification</th>
                <th>Taille</th>
                <th>Propriétaire</th>
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
                <td>{{ item.proprietaire }}</td>
                <td>{{ item.membres }}</td>
                <a href=""><img src="../../assets/SuperAdmin/Modifier.png" alt="Modifier" id="modifier"></a>
                <a href=""><img src="../../assets/SuperAdmin/Supprimer.png" alt="Supprimer" id="supprimer"></a>
                <hr v-for="item in separator" v-bind:key="item.id">
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
#vosfichiers{
    background-color: #FFF;
    width: 100%;
    height: 90%;
}

button{
    margin: 4rem 0rem 0rem 3rem;
    background-color: #EFFAFF;
    color: #000000;
    padding: .5rem;
    border-radius: .5rem;
    border: 0.1rem solid #037682;
    cursor: pointer;
    margin-left: 12%;

}

button:hover{
    background-color: #037682;
    color: #FFF;
}

table{
    margin: 0 auto;
    padding-top: 5%;
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

img{
    width: 1rem;
}

#modifier, #supprimer{
    width: 1.5rem;
    padding: .5rem;
    margin: 1.5rem 0rem 0rem 1rem;
}

hr{
    position: static;
    width: 67rem;
    margin-left: -58rem;
    margin-top: 0rem;
}

</style>