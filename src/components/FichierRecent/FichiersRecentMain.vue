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
                    nom: "Photos",
                },  
                {
                    nom: "logo.png",
                },
                {
                    nom: "logo.png",
                },  
            ],
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
   
    <fieldset>
        <div class="liste">
            <a href="#" v-for="item in list" v-bind:key="item.id"><img src="../../assets/VosFichiers/dossier.png" alt="dossier" id="dossier">{{ item.nom }}</a>
        </div>
    </fieldset>    
    </div>
</template>

<style lang="scss" scoped>

#fichiersRecent{
    h2{
        display: flex;
        margin-left: 4rem;
    }

    fieldset{
        width: 50rem;
        border: none;
    }
    
    .liste {
        display: flex;
        flex-wrap: wrap;
    }

    a{
        max-width: 20%;
        background-color: #EFFAFF;
        padding: .7rem;
        border-radius: .3rem;
        text-decoration: none;
        color: #000000;
        display: flex;
        justify-content: space-evenly;
        font-weight: 500;
        flex: 1 0 12%;
        margin: 2.5rem;
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
}
</style>