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
                    statut: "maintenu",
                    taille: 1 + "Go",
                    type: "dossier"
                },

                {
                    nom: "logo.png",
                    date: "12/10/2021",
                    proprietaire: "Louis",
                    categorie: "Fichier",
                    statut: "suspendu",
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
        <div class="buttons">
            <button v-on:click="toggleNouveauFichier" id="creer">Créer un nouveau fichier</button>
            <button v-on:click="toggleCategorie">Créer une nouvelle catégorie</button>
        </div>

        <SearchBarAdmin id="search" />
        <table>
            <tr>
                <th>Nom</th>
                <th>Date de modification</th>
                <th>Taille</th>
                <th>Propriétaire</th>
                <th>Catégorie</th>
                <th>Statut</th>
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
                <td>{{ item.statut }}</td>
                <td><a href=""><img src="../../assets/SuperAdmin/Modifier.png" alt="Modifier" id="modifier"></a></td>
                <td><a href=""><img src="../../assets/SuperAdmin/Supprimer.png" alt="Supprimer" id="supprimer"></a></td>
                <td>
                    <span v-if="item.statut == 'maintenu'"><img src="../../assets/SuperAdmin/suspendre.png" alt="Suspendre" id="suspendre"></span>
                </td>
                <hr v-for="item in separator" v-bind:key="item.id">
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";

#vosfichiers{
    background-color: #FFF;
    width: 50rem;
    margin: 0 auto;
    padding-top: 3%;
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
    padding-top: 5rem;
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

#modifier, #supprimer, #suspendre{
    width: 1.5rem;
    padding: .5rem;
    margin: 0.1rem 0rem 0rem 1rem;
    align-items: center;
}

/*#suspendre{
    background-color: $color-special;
    border: none;
    color: #FFF;
    width: 7rem;
    padding: .5rem;
    margin: 2rem 0rem .3rem 0rem;
    align-items: center;
}*/

hr{
    position: static;
    width: 69rem;
    margin-left: -68rem;
    margin-top: 5rem;
}
#nom{
    background-color: #EFFAFF;
    padding: .3rem;
    border-radius: .2rem;
    text-decoration: none;
    color: #000000;
}

@media only screen and (max-width: 1100px) {
  #search{
    margin-top: 50px;
    margin-left: 12rem;
    width: 20rem;
  }

  table{
    margin: 0;
    width: 50rem;
  }

  .buttons{
    display: flex;
    flex-direction: column;
    width: 20rem;
    margin: 0 auto;
  }

  #vosfichiers{
    width: 150%;
    padding-bottom: 100%;
    overflow-x:auto;
  }

  #creer{
    margin-left: 15%;
    width: 17rem;
  }

  hr{
    margin-top: 6rem;
    width: 57rem;
    margin-left: -51rem;
  }
}

</style>