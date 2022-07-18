<template> 
    <div class="form-demo">    
  <div class="justify-content-center"> 
    <div class="card"> 
      <form class="p-fluid"> 
        <div class="field"> 
          <label for="nom">Nom*</label> 
          <InputText id="nom" type="text" v-model="utilisateur.nom"/>  
        </div> 
        <div class="field"> 
          <label for="prenom">Prenom*</label> 
          <InputText id="prenom" type="text" v-model="utilisateur.prenom"/> 
        </div>  
        <div class="field"> 
        <div class="p-input-icon-right"> 
          <i class="pi pi-envelope" /> 
          <label for="email">Email*</label> 
          <InputText type="email" v-model="utilisateur.mail"/> 
        </div> 
        </div> 
        <div class="field"> 
        <div class="p-input-icon-right"> 
          <i class="pi pi-map-marker" /> 
          <label for="adresse">Adresse*</label> 
          <InputText type="text" v-model="utilisateur.adresse"/> 
        </div> 
        </div> 
        <Button label="Enregistrer" type="submit" class="p-button-info" @click="updateUser"/>       
      </form> 
      </div> 
  </div> 
</div> 
</template> 
<script>
import UtilisateurService from "../../services/UtilisateurService"; 
import InputText from 'primevue/inputtext'; 
import Button from 'primevue/button'; 
export default {
  name: "ModifierProfil",
  components:{ 
    InputText, 
    Button, 
  }, 
  data() {
    return {
      utilisateur: {
        nom: '', 
        prenom: '',
        mail: '', 
        adresse: '' 
      },
    };   
  },
  computed: {
    username() {
      return this.$route.params.username;
    },
  },
  methods(){
  UtilisateurService.updateUtilisateurs(this.username, {
    username: this.username,
    nom: this.nom,
    prenom: this.prenom,
    email: this.mail,
    adresse: this.adresse,
  })
   .then(() => {
      this.$router.push("/tdb");
  })
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
        }
    }
}
</style>