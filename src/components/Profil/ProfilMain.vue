<template> 
    <div class="form-demo">    
  <div class="justify-content-center"> 
    <div class="card"> 
      <form class="p-fluid" v-for="user in users" v-bind:key="user.id"> 
        <div class="field"> 
          <label for="nom">Nom*</label> 
          <InputText id="nom" type="text" v-model="utilisateur.nom" :value="utilisateur.nom"/>  
        </div> 
        <div class="field"> 
          <label for="prenom">Prenom*</label> 
          <InputText id="prenom" type="text" v-model="utilisateur.prenom" :value="utilisateur.prenom"/> 
        </div> 
        <div class="field"> 
          <label for="prenom">Identifiant*</label> 
          <InputText id="prenom" type="text" v-model="utilisateur.username" :value="utilisateur.username"/> 
        </div> 
        <div class="field"> 
        <div class="p-input-icon-right"> 
          <i class="pi pi-envelope" /> 
          <label for="email">Email*</label> 
          <InputText type="email" v-model="utilisateur.mail" :value="utilisateur.mail"/> 
        </div> 
        </div> 
        <div class="field"> 
        <div class="p-input-icon-right"> 
          <i class="pi pi-map-marker" /> 
          <label for="Adresse">Adresse*</label> 
          <InputText type="text" v-model="utilisateur.adresse" :value="utilisateur.adresse" /> 
        </div> 
        </div> 
        <div class="field"> 
          <label for="Adresse">Mot de passe*</label> 
          <InputText type="password" v-model="utilisateur.password" :value="utilisateur.password"/> 
        </div> 
        <Button label="Enregistrer" type="submit" class="p-button-info" @click="updateUser"/>  
        <Button label="Supprimer mon compte" type="cancel" class="p-button-info" @click="deleteUser"/>       
      
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
  name: "ProfilMain",
  components:{ 
    InputText, 
    Button, 
  }, 
  data() {
    return {
        nom: '', 
        prenom: '', 
        mail: '', 
        adresse: '', 
        password: '' 
      }    
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    refreshUserDetails() {
      UtilisateurService.getUtilisateur(this.id).then((res) => {
        this.nom = res.data.nom;
        this.prenom = res.data.prenom;
        this.mail = res.data.mail;
        this.adresse = res.data.adresse;
        this.password = res.data.password;
    });
    },
    updateUser(id) {
    UtilisateurService.updateUser(this.id, {
            id: this.id,
            nom: this.nom,
            prenom: this.prenom,
            mail: this.mail,
            adresse: this.adresse,
            password: this.password
          }).then(() => {
              this.$router.push(`/profil/${id}`);
          });
        }
    },
    deleteUser(id) {
      UtilisateurService.deleteUtilisateur(id).then(() => {
        this.refreshUser();
      });
    },
  created() {
    this.refreshUser();
  }
};
</script>
<style lang="scss" scoped>
</style>