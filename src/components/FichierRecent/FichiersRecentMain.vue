<script>
import dossier from "../../assets/VosFichiers/dossier.png"
import fichier from "../../assets/VosFichiers/fichier.png"

export default {
    name: 'FichiersRecentMain',
    data (){
        return {
            isDossier: dossier,
            isFichier: fichier,
            list: [
                {
                    nom: "Photos",
                    type: "dossier"
                },
                {
                    nom: "logo.png",
                    type: "fichier"
                },  
                {
                    nom: "famille.png",
                    type: "fichier"
                },  
                {
                    nom: "logo.png",
                    type: "fichier"
                },  
                {
                    nom: "Photos",
                    type: "dossier"
                },  
                {
                    nom: "logo.png",
                    type: "fichier"
                },  
                {
                    nom: "famille.png",
                    type: "fichier"
                },  
                {
                    nom: "Photos",
                    type: "dossier"
                },  
                {
                    nom: "logo.png",
                    type: "fichier"
                },
            ],
        }
    },
}
</script>

<template>
    <div id="fichiersRecent">
        <h2>Les fichiers récemment consultés...</h2>
   
    <fieldset>
        <div class="liste">
            <a href="#" v-for="item in list" v-bind:key="item.id">
                <span v-if="item.type == 'dossier'"><img :src="isDossier" alt="Dossier"></span>
                <span v-else><img :src="isFichier" alt="fichier"></span>
                {{ item.nom }}
            </a>
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
        max-width: 50rem;
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
        margin: 2.7rem;
    }

    img{
        width: 1.5rem;
    }
}
</style>