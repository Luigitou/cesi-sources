<template>
<div class="form-demo">   
  <div class="justify-content-center">
    <div class="card">
      <router-link to="/">
        <img src="assets/Accueil/logo.png">
      </router-link>
      <form @submit="validateAndSubmit" class="p-fluid">
        <div v-if="errors.length">
          <div
            class="alert alert-danger"
            v-bind:key="index"
            v-for="(error, index) in errors">
            {{ error }}
          </div>
        </div>
        <div class="field">
        <div class="p-float-label">
          <InputText id="nom" type="text" required
           v-model="nom" />
          <label for="nom">Nom*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label">
          <InputText id="prenom" type="text" required
           v-model="prenom" />
          <label for="prenom">Prenom*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label p-input-icon-right">
          <i class="pi pi-envelope" />
          <InputText type="email" required
          v-model="mail" />
          <label for="email">Email*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label p-input-icon-right">
          <i class="pi pi-map-marker" />
          <InputText type="text" required
          v-model="adresse" />
          <label for="Adresse">Adresse*</label>
        </div>
        </div>
        <div class="field">
        <div class="p-float-label">
          <InputText type="password" required 
          v-model="password"/>
          <label for="Adresse">Mot de passe*</label>
        </div>
        </div>
        <Button label="s'inscrire" type="submit" class="p-button-info"/>      
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
      nom: "",
      prenom: "",
      email: "",
      adresse: "",
      errors: [],
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    refreshUserDetails() {
      UtilisateurService.retrieveUser(this.id).then((res) => {
        this.nom = res.data.nom;
        this.prenom = res.data.prenom;
        this.mail = res.data.mail;
        this.adresse = res.data.adresse;
      });
    },
    validateAndSubmit(e) {
      e.preventDefault();
      this.errors = [];
      if (this.nom.length < 4) {
        this.errors.push("Entrez au moins 4 caractères en nom ");
      }
      if (this.prenom.length < 4) {
        this.errors.push("Entrez au moins 4 caractères en nom");
      }
      if (!this.mail) {
        this.errors.push("Entrez une adresse mail valide");
      }
      if (this.errors.length === 0) {
        if (this.id == -1) {
          UtilisateurService.createUser({
            nom: this.nom,
            penom: this.prenom,
            mail: this.mail,
          }).then(() => {
            this.$router.push("/");
          });
        } else {
          UtilisateurService.updateUser(this.id, {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            mail: this.mail,
            adresse: this.adresse,
          }).then(() => {
            this.$router.push("/");
          });
        }
      }
    },
  },
  created() {
    this.refreshUserDetails();
  },
};
</script>
<style lang="scss" scoped>
  .form-demo {

    .justify-content-center{
        display: flex;
        justify-content: center;
        margin-top: 8%;

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