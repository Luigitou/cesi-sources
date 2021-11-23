<script>
export default {
    name: 'VosFichiersMain',
    data (){
        return {
            list: [
                {
                    nom: "Photos",
                    date: "14/10/2021",
                    proprietaire: "Edomiyas",
                    membres: "Louis, Imen...",
                    taille: 1 + "Go",
                },

                {
                    nom: "logo.png",
                    date: "12/10/2021",
                    proprietaire: "Louis",
                    membres: "Edomiyas, Imen...",
                    taille: 100 + "Mo",
                },
            ],

            separator: {
                line: ""
            },
        }
    },

    methods: {
        displayType(){
            // Fonction qui va afficher le bon icon selon le fichier
        }
    }
}
</script>

<template>
    <div id="vosfichiers">
        <button>Créer un nouveau fichier</button>
        <button>Partagé avec moi</button>
        <button>Supprimer</button>
        <button>Inviter un ami</button>

        <table>
            <tr>
                <th>Nom</th>
                <th>Date de modification</th>
                <th>Taille</th>
                <th>Propriétaire</th>
                <th>Membres</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td><a href="#"><img src="../assets/dossier.png" alt="dossier" id="type-icon"> {{ item.nom }}</a></td>
                <td>{{ item.date }}</td>
                <td>{{ item.taille }}</td>
                <td>{{ item.proprietaire }}</td>
                <td>{{ item.membres }}</td>
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
    width: 40rem;
    margin-left: -39rem;
    margin-top: 3.5rem;
}

</style>