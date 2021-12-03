<script>
import SearchBarAdmin from "../common/Header/SearchBarAdmin.vue";
import moderateurDesactive from "../../assets/Admin/ModerateurDesactive.png"
import moderateurActive from "../../assets/Admin/ModerateurActive.png"

export default {
    name: 'ListeUsersMain',
    components: {
        SearchBarAdmin,
    },
    data (){
        return {
            isDesactive: moderateurDesactive,
            isActive: moderateurActive,
            list: [
                {
                    nom: "Louis",
                    date: "14/10/2021",
                    statut: "Connecté",
                    compte: "Activé",
                },

                {
                    nom: "Yannis",
                    date: "12/10/2021",
                    statut: "Déconnecté",
                    compte: "Désactivé",
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
    <div id="listeusers">
        <button>Liste des utilisateurs</button>
        <button>Gestions des ressources</button>
        <SearchBarAdmin id="search" />
        <table>
            <tr>
                <th>Nom</th>
                <th>Date de création de compte</th>
                <th>Statut</th>
                <th>Compte</th>
                <th>Modérateur</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td><a href="#" id="nom"><img src="../../assets/SuperAdmin/profile.png" alt="profile" id="type-icon"> {{ item.nom }}</a></td>
                <td>{{ item.date }}</td>
                <td>{{ item.statut }}</td>
                <td>{{ item.compte }}</td>
                <td>
                    <a href=""> 
                        <span v-if="item.compte == 'Activé'"><img :src="isActive" alt="moderateurActive" id="moderateur"></span>
                        <span v-else><img :src="isDesactive" alt="moderateurDesactive" id="moderateur"></span>
                    </a>
                </td>
                <div>
                    <span v-if="item.compte == 'Activé'"><button id="desactiver">Désactiver</button></span>
                    <span v-else><button id="desactiver">Activer</button></span>
                </div>
                <hr v-for="item in separator" v-bind:key="item.id">
            </tr>
        </table>
    </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";

#listeusers{
    background-color: #FFF;
    width: 50rem;
}

#search{
    width: 20rem;
    margin-left: 68%;
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
    margin: 4rem 0rem 0rem 2rem;
    padding-bottom: 2rem;
    width: 52rem;
}

table tr th{
    padding: 1rem;
}

table tr td{
    padding: 1.5rem 0rem 0rem 1rem;
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

#moderateur{
    display: flex;
    width: 2rem;
}

#desactiver{
    background-color: $color-special;
    border: none;
    color: #FFF;
    width: 7rem;
    margin: 2rem 0rem .3rem 0rem;
}

hr{
    position: absolute;
    width: 50rem;
    margin-left: -43rem;
}

</style>