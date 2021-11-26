<script>
export default {
    name: 'FichiersRecentMain',
    data (){
        return {
            list: [
                {
                    nom: "Photos",
                },
                {
                    nom: "logo.png",
                },  
                {
                    nom: "famille.png",
                },  
                {
                    nom: "logo.png",
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
    <div id="fichiersRecent">
        <h2>Les fichiers récemment consultés...</h2>

        <table class="elmFlex">
            <tr>
                <th  v-for="item in list" v-bind:key="item.id"></th>
            </tr>
            <tr>
                <td v-for="item in list" v-bind:key="item.id"><a href="#"><img src="../../assets/VosFichiers/dossier.png" alt="dossier" id="type-icon">{{ item.nom }}</a></td>
            </tr>    
        </table>
    </div>
</template>

<style lang="scss" scoped>
#fichiersRecent{
    h2{
        display: flex;
        margin-left: 4rem;
    }

    a{
        width: 7rem;
        background-color: #EFFAFF;
        padding: .7rem;
        border-radius: .3rem;
        text-decoration: none;
        color: #000000;
        display: flex;
        justify-content: space-around;
        font-weight: 500;
    }

    img{
        width: 1.5rem;
    }

    table{
        th{
            padding: 1rem;
        }

        td{
            padding: 2rem 0rem 0rem 5rem;
        }
    }

// #flex{
//     display: flex;
//     flex-wrap: wrap;
//     flex-direction: row;
//     justify-content: flex-start;
// }

// .elmFlex{
//     flex: 0 0 16.6%;
// }

}
</style>