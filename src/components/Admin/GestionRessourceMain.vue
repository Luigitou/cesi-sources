<script>
import dossier from "../../assets/VosFichiers/dossier.png"
import fichier from "../../assets/VosFichiers/fichier.png"
import SearchBarAdmin from "../common/Header/SearchBarAdmin.vue";

export default {
    name: 'VosFichiersMain',
     components: {
        SearchBarAdmin,
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
        }
    },
}
</script>

<template>
    <div id="vosfichiers">
        <button>Créer un nouveau fichier</button>
        <button>Créer une nouvelle catégorie</button>
        <button>Supprimer</button>
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
                    <a href="#">  
                        <span v-if="item.type == 'dossier'"><img :src="isDossier" alt="Dossier"></span>
                        <span v-else><img :src="isFichier" alt="fichier"></span> 
                        {{ item.nom }}
                    </a>
                </td>
                <td>{{ item.date }}</td>
                <td>{{ item.taille }}</td>
                <td>{{ item.proprietaire }}</td>
                <td>{{ item.categorie }}</td>
                <hr v-for="item in separator" v-bind:key="item.id">
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
#vosfichiers{
    background-color: #FFF;
    width: 50rem;
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

button:hover{
    background-color: #037682;
    color: #FFF;
}

#search{
    margin-left: 80%;
}

table{
    margin: 4rem 0rem 0rem 5rem;
    padding-bottom: 2rem;
}

table tr th{
    padding: 1rem;
}

table tr td{
    padding: 1.5rem 0rem 0rem 1rem;
}

a{
    background-color: #EFFAFF;
    padding: .3rem;
    border-radius: .2rem;
    text-decoration: none;
    color: #000000;
}

img{
    width: 1rem;
}

hr{
    position: absolute;
    width: 36rem;
    margin-left: -37rem;
    margin-top: 3.5rem;
}

</style>