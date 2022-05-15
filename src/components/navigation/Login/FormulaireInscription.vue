<template>
  <Card style="height: 80%" class="card">
      <template #content>                   
        <label for="nom">Nom</label>
        <InputText class="input" type="text" id="nom"/>
        <label for="prenom">Prénom</label> 
        <InputText class="input" type="text" id="prenom"/>
        <label for="email">Mail</label>
        <InputText class="input" type="email" id="email"/>
        <label for="adresse">Adresse</label>
        <InputText class="input" type="text" id="address"/>
        <label for="mdp">Mot de passe</label>
        <InputText class="input" type="password" id="mdp"/>
        <label for="cmdp">Confirmation</label>
        <InputText class="input" type="password" id="cmdp"/>
        <router-link to="/tdb" id="inscrire" >
          <Button label="S'inscrire" class="p-button-info" @click="saveUser"/>
        </router-link>
        <!--<router-link to="/" id="annuler">
          <Button label="Annuler" class="p-button-info" />
        </router-link>-->
         <!--
          <input type="text" id="nom" placeholder="Nom" required name="nom"  v-model="Utilisateur.nom">
          <input type="text" id="prenom" placeholder="Prénom" required name="prenom" v-model="utilisateur.prenom">
          <input type="email" id="email" placeholder="Email" required name="mail" v-model="utilisateur.mail">
          <input type="text" id="address" placeholder="Rue, boulevard, avenue..." required name="addresse" v-model="utilisateur.adresse">
          <input type="password" id="mdp" placeholder="Mot de passe" required name="password" v-model="utilisateur.password">
          
          
          <input type="password" id="cmdp" placeholder="Confirmation du mot de passe" required>-->
      </template>
  </Card>
</template>
<script>
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

import UtilisateurService from '../../../services/UtilisateurService.js'
export default {
  name: 'FormulaireInscription',
  components:{
      Card,
      InputText,
      Button
  },
   data() {
    return {
      dataMsg: '',
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
}
</script>
<style lang="scss" scoped>
.card{
  transition: 0.3s;
  width: 25%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  margin-top: 3%;
  margin-left: 38%;
}
.card:hover{
  box-shadow: 0 4px 8px 0 rgba(109, 109, 109, 0.2);
}

.input{
  width: 150%;
  padding: 3%;
  margin: 3%;
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
  display: block;
}
label{
  margin: 3%;
  font-family:Arial, Helvetica, sans-serif;
}
button {
  padding: 4%;
  margin-left: 25%;
  margin-top: 5%;
  width: 100%;
}
#inscrire{
  text-decoration: none;
}
/*#annuler{
  text-decoration: none;
}*/

</style>