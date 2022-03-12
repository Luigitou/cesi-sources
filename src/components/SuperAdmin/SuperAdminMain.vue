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
                    nature: "Modérateur",
                },

                {
                    nom: "Yannis",
                    date: "12/10/2021",
                    statut: "Déconnecté",
                    compte: "Désactivé",
                    nature: "Administrateur",
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
        <router-link to="/superadminform">
        <button>Créer un compte</button>
        </router-link>
        <SearchBarAdmin id="search"/>
        <div class="table_style">
        <table>
            <tr>
                <th>Nom</th>
                <th>Date de création de compte</th>
                <th>Statut</th>
                <th>Compte</th>
                <th>Nature</th>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td><a href="#" id="nom"><img src="../../assets/SuperAdmin/profile.png" alt="profile" id="type-icon"> {{ item.nom }}</a></td>
                <td>{{ item.date }}</td>
                <td>{{ item.statut }}</td>
                <td>{{ item.compte }}</td>
                <td>{{ item.nature }}</td>
                <a href=""><img src="../../assets/SuperAdmin/Modifier.png" alt="Modifier" id="modifier"></a>
                <a href=""><img src="../../assets/SuperAdmin/Supprimer.png" alt="Supprimer" id="supprimer"></a>
                <hr v-for="item in separator" v-bind:key="item.id">
            </tr>
        </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#vosfichiers{
    background-color: #FFF;
    width: 80%;
}

button{
    margin: 4rem 0rem 0rem 18rem;
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
    margin-left: 55%;
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

#modifier, #supprimer{
    width: 1.5rem;
    padding: .5rem;
    margin: 1.5rem 0rem 0rem 1rem;
}

hr{
    width: 66rem;
    margin-left: -58rem;
    margin-top: 1rem;
}

@media only screen and (max-width: 1190px) {
  .table_style{
    overflow-x:auto;
  }

  button{
    margin: 60px 0px 0px 70px;
  }

  #search{
    margin-left: 25rem;
  }

  hr{
    margin-top: 1rem;
    width: 65rem;
    margin-left: -55rem;
  }
}

@media only screen and (max-width: 530px) {
  .table_style{
    overflow-x:auto;
  }

  button{
    margin: 60px 0px 0px 70px;
  }

  #search{
    margin-left: 15rem;
  }

  hr{
    margin-top: 1rem;
    width: 65rem;
    margin-left: -58rem;
  }
}

</style>