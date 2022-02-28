<script>

import NouveauGroupe from "../../components/VosGroupes/NouveauGroupe.vue"
import Invite from "../../components/VosGroupes/InviterUnAmi.vue"

export default {
    name: 'VosGroupesMain',
    data (){
        return {
            list: [
                {
                    nom: "RIL",
                    date: "14/10/2021",
                    proprietaire: "Edomiyas",
                    membres: "Louis, Imen...",
                },

                {
                    nom: "MSI",
                    date: "12/10/2021",
                    proprietaire: "Louis",
                    membres: "Edomiyas, Imen...",
                },
            ],

            separator: {
                line: ""
            },

            reveleGroupe: false,
            reveleInvite: false
        }
    },
    components : {
        'NouveauGroupe' : NouveauGroupe,
        'Invite': Invite //modale est le nom d'utilisation voir dans template
    },
    methods: {
        toggleNouveauGroupe: function() {
            this.reveleGroupe=!this.reveleGroupe
        },
        toggleInvite: function() {
        this.reveleInvite=!this.reveleInvite //si cest false passe a true vis versa et cela a partir de la modale puisque les props sont liées
      }
    }
};
</script>

<template>
<NouveauGroupe v-bind:reveleGroupe="reveleGroupe" v-bind:toggleNouveauGroupe="toggleNouveauGroupe"></NouveauGroupe> <!--lier les données au composent--> 
<Invite v-bind:reveleInvite="reveleInvite" v-bind:toggleInvite="toggleInvite"></Invite>
    <div id="vosGroupes">
        <div class="menu">
            <button v-on:click="toggleNouveauGroupe">Créer un nouveau Groupe</button>
            <button v-on:click="toggleInvite">Ajouter un ami</button>
        </div>

        <table>
            <tr>
                <th>Nom</th>
                <th>Date de création</th>
                <th>Propriétaire</th>
                <th>Membres</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td><a href="#" id="nom">
                    {{ item.nom }}
                    </a>
                </td>
                <td>{{ item.date }}</td>
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

#vosGroupes{
    background-color: #FFF;
    width: 100%;
    height: 90%;
    overflow-x:auto;
}

.menu{
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-right: 10%;
    flex-wrap: wrap;
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
    width: 65rem;
    margin-left: -55rem;
}

</style>