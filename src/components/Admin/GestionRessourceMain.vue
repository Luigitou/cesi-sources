<script>
import dossier from "../../assets/VosFichiers/dossier.png"
import fichier from "../../assets/VosFichiers/fichier.png"
import SearchBarAdmin from "../common/Header/SearchBarAdmin.vue";
import NouveauFichier from "../../components/VosFichier/NouveauFichier.vue"
import Categorie from "../../components/Admin/NouvelleCategorie.vue"

export default {
    name: 'VosFichiersMain',
     components: {
        SearchBarAdmin,
        'NouveauFichier' : NouveauFichier,
        'Categorie' : Categorie
    },
    data (){
        return {
            isDossier: dossier,
            isFichier: fichier,
            list: [
                {
                    nom: "Photos",
                    date: "14/10/2021",
                    proprietaire: "Edomiyas",
                    categorie: "Image",
                    taille: 1 + "Go",
                    type: "dossier"
                },

                {
                    nom: "logo.png",
                    date: "12/10/2021",
                    proprietaire: "Louis",
                    categorie: "Fichier",
                    taille: 100 + "Mo",
                    type: "fichier"
                },
            ],

            separator: {
                line: ""
            },
            revele: false,
            reveleCategorie : false
        }
    },
    methods: {
        toggleNouveauFichier: function() {
            this.revele=!this.revele
        },
        toggleCategorie: function() {
            this.reveleCategorie=!this.reveleCategorie
        }
    }
};
</script>

<template>
<NouveauFichier v-bind:revele="revele" v-bind:toggleNouveauFichier="toggleNouveauFichier"></NouveauFichier> <!--lier les données au composent--> 
<Categorie v-bind:reveleCategorie="reveleCategorie" v-bind:toggleCategorie="toggleCategorie"></Categorie>    
    <div id="vosfichiers">
        <button v-on:click="toggleNouveauFichier" id="creer">Créer un nouveau fichier</button>
        <button v-on:click="toggleCategorie">Créer une nouvelle catégorie</button>
        
        <SearchBarAdmin id="search" />

        <table>
            <tr>
                <th>Nom</th>
                <th>Date de modification</th>
                <th>Taille</th>
                <th>Propriétaire</th>
                <th>Catégorie</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>
                    <a href="#" id="nom">  
                        <span v-if="item.type == 'dossier'"><img :src="isDossier" alt="Dossier"></span>
                        <span v-else><img :src="isFichier" alt="fichier"></span> 
                        {{ item.nom }}
                    </a>
                </td>
                <td>{{ item.date }}</td>
                <td>{{ item.taille }}</td>
                <td>{{ item.proprietaire }}</td>
                <td>{{ item.categorie }}</td>
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
    width: 50rem;
    margin: 0 auto;
}

button{
    margin: 4rem 0rem 0rem 3rem;
    background-color: #EFFAFF;
    color: #000000;
    padding: .5rem;
    border-radius: .5rem;
    border: 0.1rem solid #037682;
    cursor: pointer;
}

#creer{
    margin-left: -15%;
}

button:hover{
    background-color: #037682;
    color: #FFF;
}

#search{
    margin-left: 77%;
    width: 40%;
}

table{
    margin: 0 auto;
    padding-top: 3rem;
    width: 70rem;
    margin-left: -10rem;
}

table tr th{
    padding: 1rem;
}

table tr td{
    padding: 1.5rem 0rem 0rem 1rem;
    text-align: center;
}

/*a{
    background-color: #EFFAFF;
    padding: .3rem;
    border-radius: .2rem;
    text-decoration: none;
    color: #000000;
}*/

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
    margin-left: -56rem;
}
#nom{
    background-color: #EFFAFF;
    padding: .3rem;
    border-radius: .2rem;
    text-decoration: none;
    color: #000000;
}

</style>