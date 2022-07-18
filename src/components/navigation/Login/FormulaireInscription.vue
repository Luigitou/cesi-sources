<template>
<modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
<div class="form-demo">   
  <div class="justify-content-center">
    <div class="card">
      <router-link to="/">
        <img src="../../../assets/Accueil/logo_transparent.png">
      </router-link>
      <form class="p-fluid">
        <div class="field">
        <div class="p-float-label">
          <InputText id="nom" type="text" required=false
           v-model="utilisateur.nom" />
          <label for="nom">Nom*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label">
          <InputText id="prenom" type="text" required
           v-model="utilisateur.prenom" />
          <label for="prenom">Prenom*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label">
          <InputText id="username" type="text" required
           v-model="utilisateur.username" />
          <label for="username">Identifiant*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label p-input-icon-right">
          <i class="pi pi-envelope" />
          <InputText type="email" required
          v-model="utilisateur.mail" />
          <label for="email">Email*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label p-input-icon-right">
          <i class="pi pi-map-marker" />
          <InputText type="text" required
          v-model="utilisateur.adresse" />
          <label for="Adresse">Adresse*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label">
          <InputText type="password" required 
          v-model="utilisateur.password"/>
          <label for="Adresse">Mot de passe*</label>
        </div>
        </div>
        <Button label="S'inscrire" type="submit" class="p-button-info" @click="saveUser"/>
        <p>Vous possèdez déja un compte ? <strong v-on:click="toggleModale" class="connect">Connectez-vous</strong></p>
      </form>
      </div>
  </div>
</div>
</template>
<script>
import UtilisateurService from "../../../services/UtilisateurService";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Modale from "../../navigation/Login/Modale.vue";

export default {
  name: "FormulaireInscription",
  components:{
    InputText,
    Button,
    Modale
  },
data() {
    return {
      revele: false,
      utilisateur: {
        id: null,
        nom: '',
        prenom: '',
        username: '',
        mail: '',
        adresse: '',
        password: ''
      }, 
      utilisateurs: []
    }
  },
  methods: {
saveUser(){
      let data = {
        nom: this.utilisateur.nom,
        prenom: this.utilisateur.prenom,
        username: this.utilisateur.username,
        mail: this.utilisateur.mail,
        adresse: this.utilisateur.adresse,
        password: this.utilisateur.password
      }
      if(data.nom != "" && data.prenom != "" && data.username != "" && data.mail != "" && data.adresse != "" && data.password != ""){
        UtilisateurService.postUtilisateurs(data)
          .then(response => {
            this.utilisateur.id = response.data.id
            window.location.href = '/';
          })
          .catch(e => {
            alert(e)
          })
      }
    },

    toggleModale: function(){
      this.revele = !this.revele;
    },
  }
};
</script>
<style lang="scss" scoped>
  .form-demo {

    .justify-content-center{
        display: flex;
        justify-content: center;
        margin-top: 2%;

        .card {
        min-width: 450px;
        transition: 0.3s;
        border-radius: 10px;
        padding: 20px;

          img{
            width: 30%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          form {
            margin-top: 2rem;
            transition: 0.3s;

            #success{
              color: green;
            }
            #inscrire{
              text-decoration: none;
            }
            
            .connect{
              cursor: pointer;
            }
          }
          

          .field {
            margin-bottom: 1.5rem;
          }
    }
}
    
    .card:hover{
      box-shadow: 0 4px 8px 0 rgba(109, 109, 109, 0.2);
    }
    @media screen and (max-width: 960px) {
        .card {
            width: 80%;
        }
    }
}
</style>