<template>
  <div v-if="currentUtilisateur">
    <div class="bloc-modale" v-if="reveleProfil"> <!-- if revele false le modale disparait if revele true le modale apparait --> 
      <div class="overlay" v-on:click="toggleModifierProfil"></div> <!-- click en dehors du modale pour fermer -->
      <form class="modale-card">           
        <div v-on:click="toggleModifierProfil" class="btn-modale">x</div> <!-- click sur la x pour fermer -->

        <div class="container">
          <label for="uname"><b>Nom</b></label>
          <input type="text" placeholder="Entrez votre nouveau nom" name="uname" v-model="currentUtilisateur.nom">
          <label for="uname"><b>Prenom</b></label>
          <input type="text" placeholder="Entrez votre nouveau prenom" name="prenom" v-model="currentUtilisateur.prenom">
          <label for="uname"><b>Mail</b></label>
          <input type="text" placeholder="Entrez votre nouveau mail" name="mail" v-model="currentUtilisateur.mail">
          <label for="uname"><b>Adresse</b></label>
          <input type="text" placeholder="Entrez votre nouvelle adresse" name="adresse" v-model="currentUtilisateur.adresse">
            <br>
          <div v-on:click="toggleModifierProfil">
            <button type="submit" @click="updateUtilisateur">Mettre à jour</button>
            <button type="cancel" @click="deleteUtilisateur" id="delete">Supprimer</button>
          </div>
          <div class="alert alert-success" role="alert" v-if="message">
              {{message}}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UtilisateurService from '../../services/UtilisateurService'

export default {
  name: 'ModifierProfil',
  props: ['reveleProfil', 'toggleModifierProfil'],
  data() {
    return {
      currentUtilisateur: null,
      message: '',
    }
  },
  methods: {
    getUtilisateur(id) {
      UtilisateurService.getUtilisateur(id)
        .then(response => {
          this.currentUtilisateur = response.data
        })
        .catch(e => {
          alert(e)
        })
    },
    updateUtilisateur() {
      UtilisateurService.updateUtilisateur(this.currentUtilisateur.id, this.currentUtilisateur)
        .then(() => {
          this.message = "Votre profil a bien été mis à jour !"
        })
        .catch(e => {
          alert(e)
        })
    },
    deleteUtilisateur() {
      UtilisateurService.deleteUtilisateur(this.currentUtilisateur.id)
        .then(() => {
          this.$router.push({name: 'utilisateurs'})
        })
        .catch(e => {
          alert(e)
        })
    }
  },
  mounted() {
    this.getUtilisateur(this.$route.params.id)
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

    #delete{
      background-color: rgb(238, 83, 83);
    }
</style>

