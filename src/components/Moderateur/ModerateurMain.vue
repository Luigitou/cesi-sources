<script>
import dossier from "../../assets/VosFichiers/dossier.png"
import fichier from "../../assets/VosFichiers/fichier.png"

export default {
    name: 'ModerateurMain',
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
};
</script>

<template>    
    <div id="vosfichiers">
        <div class="table_style">
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
                <td>{{ item.statut }}</td>
                <td><a href=""><img src="../../assets/SuperAdmin/maintenir.png" alt="Maintenir" id="maintenir"></a></td>
                <td><a href=""><img src="../../assets/SuperAdmin/suspendre.png" alt="Suspendre" id="suspendre"></a></td>
                <hr v-for="item in separator" v-bind:key="item.id">
            </tr>
        </table>
        </div>
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

#suspendre, #maintenir{
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

@media only screen and (max-width: 1000px) {

  table{
    margin: 0;
    width: 50rem;
  }

  #vosfichiers{
    margin: 0;
    width: 100%;
    overflow-x:auto;
  }

  hr{
    width: 48.5rem;
    margin-left: -49rem;
    margin-top: 7rem;
  }
}

</style>