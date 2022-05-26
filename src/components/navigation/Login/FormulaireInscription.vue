<template>
<div class="form-demo">   
  <div class="justify-content-center">
    <div class="card">
      <router-link to="/">
        <img src="assets/Accueil/logo.png">
      </router-link>
      <form class="p-fluid">
        <div class="field">
        <div class="p-float-label">
          <InputText id="nom" type="text" required
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
        <Button label="s'inscrire" type="submit" class="p-button-info" @click="saveUser"/>      
      </form>
      </div>
  </div>
</div>
</template>
<script>
import UtilisateurService from "../../../services/UtilisateurService";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: "FormulaireInscription",
  components:{
    InputText,
    Button,
  },
data() {
    return {
      utilisateur: {
        id: null,
        nom: '',
        prenom: '',
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
        mail: this.utilisateur.mail,
        adresse: this.utilisateur.adresse,
        password: this.utilisateur.password
      }
      UtilisateurService.postUtilisateurs(data)
        .then(response => {
          this.utilisateur.id = response.data.id
        })
        .catch(e => {
          alert(e)
        })
    },
  }
};
</script>
<style lang="scss" scoped>
  .form-demo {

    .justify-content-center{
        display: flex;
        justify-content: center;
        margin-top: 3%;

        .card {
        min-width: 450px;
        transition: 0.3s;
        border-radius: 10px;
        padding: 20px;

          img{
            width: 20%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }

          form {
            margin-top: 2rem;
            transition: 0.3s;
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