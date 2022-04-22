<template>
    <div class="bloc-modale" v-if="revele"> <!-- if revele false le modale disparait if revele true le modale apparait --> 
        <div class="overlay" v-on:click="toggleCurrentResearch"></div> <!-- click en dehors du modale pour fermer -->
        <form class="modale-card">
            <div v-on:click="toggleCurrentResearch" class="btn-modale">x</div> <!-- click sur la x pour fermer -->
                <div class="container">
                    <p>Résultats pour : "{{searchValue}}"</p>
                    <table>
                        <tr v-for="fichiers in files" v-bind:key="fichiers.nom">
                            <span><img :src="isFichier" alt="fichier"></span>
                            <td><a href="#" id="nom">
                                {{ fichiers.nom }}
                                </a>
                            </td>
                            <td width="15%"></td>
                            <td>{{ fichiers.date }}</td>
                        </tr>
                    </table>
                </div>
        </form>
    </div>
</template>

<script>
import fichier from "../../../assets/VosFichiers/fichier.png"

export default {
data (){
    return{
        isFichier : fichier
    }
},
    name: 'CurrentResearch',
    props: ['revele', 'toggleCurrentResearch', 'files', 'searchValue']
}
</script>

<style lang="scss" scoped>
@import "../../../scss/common.scss";
    .bloc-modale{
        position: fixed;
        top: 10;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
    }
    .modale-card{
        background: white;
        color: #333;
        padding: 5% 15%;
        position: fixed;
        top: 8%;
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px; 
        
        .container{
            td{
                color: #296870;
                font-weight: bold;
            }
        }
    }
    .btn-modale{
        position: absolute;
        right: 5%;
        top: 5%;
        color: $color-android;
        font-size: 150%;
        font-weight: bold;    
    }
    .btn-modale:focus{
        background-color: #ddd;
        outline: none;
    }
    .btn-modale:hover,
    .btn-modale:focus{
        cursor: pointer;
    }
    a{
        color: $color-special;   
    }
</style>
