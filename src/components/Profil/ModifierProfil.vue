<template>
    <div class="bloc-modale" v-if="reveleProfil"> <!-- if revele false le modale disparait if revele true le modale apparait --> 
        <div class="overlay" v-on:click="toggleModifierProfil"></div> <!-- click en dehors du modale pour fermer -->
        <form class="modale-card">
                    
                <div v-on:click="toggleModifierProfil" class="btn-modale">x</div> <!-- click sur la x pour fermer -->

                <div class="container">
                    <label for="uname"><b>Nom</b></label>
                    <input type="text" placeholder="Entrez votre nouveau nom" name="uname" required v-model="utilisateur.nom">
                    <label for="uname"><b>Prenom</b></label>
                    <input type="text" placeholder="Entrez votre nouveau prenom" name="prenom" required v-model="utilisateur.dateCreation">
                    <label for="uname"><b>Mail</b></label>
                    <input type="text" placeholder="Entrez votre nouveau mail" name="mail" required v-model="utilisateur.taille">
                    <label for="uname"><b>Adresse</b></label>
                    <input type="text" placeholder="Entrez votre nouvelle adresse" name="adresse" required v-model="utilisateur.type">
                    <br>
                    <div v-on:click="toggleModifierProfil">
                    <button type="submit" @click="saveFile">Valider</button>
                    <button type="cancel">Annuler</button>
                    </div>
                </div>
        </form>
    </div>
</template>

<script>
import UtilisateurService from '../../services/UtilisateurService'

export default {
    name: 'ModifierProfil',
    props: ['reveleProfil', 'toggleModifierProfil'],
    data() {
    return {
      utilisateur: {
        id: null,
        nom: '',
        prenom: '',
        mail: '',
        adresse: '',
      }, 
      utilisateurs: []
    }
  },
  methods: {
    saveFile(){
      let data = {
        nom: this.utilisateur.nom,
        prenom: this.utilisateur.prenom,
        mail: this.utilisateur.mail,
        adresse: this.utilisateur.adresse,
      }
      UtilisateurService.postFichiers(data)
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
        width: 20%; 
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

