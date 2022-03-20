<script>
//import UtilisateurService from '../../services/UtilisateurService'
import ModifierProfil from "../../components/Profil/ModifierProfil.vue"

export default {
  name: "ProfilMain",
  components: {
    'ModifierProfil': ModifierProfil
  },
  data (){
    return {
      // utilisateurs: [],
      reveleProfil: false
    }
  },
  methods: {
    toggleModifierProfil: function() {
      this.reveleProfil=!this.reveleProfil
    },
  }
};
</script>

<template>
  <div id="profil">
    <ModifierProfil v-bind:reveleProfil="reveleProfil" v-bind:toggleModifierProfil="toggleModifierProfil"></ModifierProfil>
      <div class="personal-info">
        <p>Nom : {{this.$store.state.nom }}</p>
        <p>Prenom : {{this.$store.state.prenom}}</p>
        <p>Mail : {{this.$store.state.mail}}</p>
        <p>Adresse : {{this.$store.state.adresse}}</p>

        <div class="buttons">
          <button id="update" v-on:click="toggleModifierProfil">Modifier mon profil</button>
        </div>
      </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";
#profil{
  .personal-info{
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    margin-left: 20%;
    margin-top: 50px;
    
    p{
      font-size: 1.2rem;
    }
  }
      
  .buttons{
    display: flex;
    justify-content: center;
    gap: 10%;
    margin-left: 11rem;
    width: 50%;

    #update, #delete{
      background-color: $color-android;
      text-decoration: none;
      color: $color-head;
      border: none;
      cursor: pointer;
      margin-top: 30px;
    }

    #update{
      padding: 1rem;
      border-radius: .5rem;
    }

    #delete{
      padding: 1rem;
      border-radius: .5rem;
      background-color: rgb(230, 49, 49);
    }
  }    
}

@media only screen and (max-width: 600px) {
  .buttons{
    width: 100%;
  }

}
</style>