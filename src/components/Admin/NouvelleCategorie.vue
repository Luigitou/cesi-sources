<template>
    <div class="bloc-modale" v-if="reveleCategorie"> <!-- if revele false le modale disparait if revele true le modale apparait --> 
        <div class="overlay" v-on:click="toggleCategorie"></div> <!-- click en dehors du modale pour fermer -->
        <form class="modale-card">
                    
                <div v-on:click="toggleCategorie" class="btn-modale">x</div> <!-- click sur la x pour fermer -->

                <div class="container">
                    <label for="uname"><b>Nom</b></label>
                    <input type="text" placeholder="Entrez le nom de catégorie" name="uname" required>
                    <div v-on:click="toggleCategorie">
                    <button type="submit">Valider</button>
                    <button type="cancel">Annuler</button>
                    </div>
                </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Categorie',
    props: ['reveleCategorie', 'toggleCategorie']
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
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
        padding: 5%;
        position: fixed;
        top: 15%;   
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
   /* Full-width input fields */
    label{
        padding: 2%;
    }
    input[type=text], input[type=password] {
        width: 95%;
        padding: 2%;
        margin: 1%;
        display: inline-block;
        border: none;
        background: #f1f1f1;
        margin-right: 40%;
    }

    /* Set a style for all buttons */
    button {
        background-color: $color-android;
        color: white;
        padding: 2%;
        margin: 1%;
        border: none;
        cursor: pointer;
        width: 99%;
        margin-left: 1%;
    }

    button:hover {
        opacity: 0.8;
    }
    a{
        color: $color-special;   
    }
</style>

