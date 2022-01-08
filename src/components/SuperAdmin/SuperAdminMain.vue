<script>
import SearchBarAdmin from "../common/Header/SearchBarAdmin.vue";

export default {
    name: 'SuperAdminMain',
    components: {
        SearchBarAdmin,
    },
    data (){
        return {
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
    <div id="superadmin">
        <button>Créer un administrateur</button>
        <SearchBarAdmin />
        <table>
            <tr>
                <th>Nom</th>
                <th>Date de création de compte</th>
                <th>Statut</th>
                <th>Compte</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td><a href="#" id="nom"><img src="../../assets/SuperAdmin/profile.png" alt="profile" id="type-icon"> {{ item.nom }}</a></td>
                <td>{{ item.date }}</td>
                <td>{{ item.statut }}</td>
                <td>{{ item.compte }}</td>
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

#modifier, #supprimer{
    width: 1.5rem;
    padding: .5rem;
    margin: 1.5rem 0rem 0rem 1rem;
}

hr{
    position: absolute;
    width: 40rem;
    margin-left: -32rem;
    margin-top: 0rem;
}

</style>