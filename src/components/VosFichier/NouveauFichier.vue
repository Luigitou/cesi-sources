<template>
    <div class="bloc-modale" v-if="revele"> <!-- if revele false le modale disparait if revele true le modale apparait --> 
        <div class="overlay" v-on:click="toggleNouveauFichier"></div> <!-- click en dehors du modale pour fermer -->
        <form class="modale-card">
                    
                <div v-on:click="toggleNouveauFichier" class="btn-modale">x</div> <!-- click sur la x pour fermer -->

                <div class="container">
                    <label for="uname"><b>Nom</b></label>
                    <input type="text" placeholder="Entrez le nom du fichier" name="uname" required v-model="fichier.nom">
                    <label for="uname"><b>Date de création</b></label>
                    <input type="date" placeholder="Entrez la date de création" name="dateCreation" required v-model="fichier.dateCreation">
                    <label for="uname"><b>Taille</b></label>
                    <input type="number" placeholder="Entrez la taille du fichier" name="taille" required v-model="fichier.taille">
                    <label for="uname"><b>Extension</b></label>
                    <input type="text" placeholder="Entrez l'extension du fichier" name="extension" required v-model="fichier.type">
                    <label for="uname"><b>Etat</b></label>
                    <input type="text" placeholder="Entrez l'etat du fichier" name="etat" required v-model="fichier.etat">
                    <br>
                    <input type="file" placeholder="selectionneé votre fichier" name="fichier" required>
                    <br>
                    <div v-on:click="toggleNouveauFichier">
                    <button type="submit" @click="saveFile">Valider</button>
                    <button type="cancel">Annuler</button>
                    </div>
                </div>
        </form>
    </div>
</template>

<script>
import FichierService from '../../services/FichierService'

export default {
    name: 'NouveauFichier',
    props: ['revele', 'toggleNouveauFichier'],
    data() {
    return {
      fichier: {
        id: null,
        nom: '',
        dateCreation: '',
        taille: '',
        type: '',
        etat: ''
      }, 
      fichiers: []
    }
  },
  methods: {
    saveFile(){
      let data = {
        nom: this.fichier.nom,
        dateCreation: this.fichier.dateCreation,
        taille: this.fichier.taille,
        type: this.fichier.type,
        etat: this.fichier.etat
      }
      FichierService.postFichiers(data)
        .then(response => {
          this.fichier.id = response.data.id
        })
        .catch(e => {
          alert(e)
        })
    },
  } 
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

    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
   /* Full-width input fields */
    label{
        padding: 2%;
    }
    input[type=text], input[type=number], input[type=date] {
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

