<template>
    <div class="form-demo">   
  <div class="justify-content-center">
    <div class="card">
      <form class="p-fluid">
        <div class="field">
          <label for="nom">Nom*</label>
          <InputText id="nom" type="text" v-model="utilisateur.nom"/> 
          <!---->
        </div>
        <div class="field">
          <label for="prenom">Prenom*</label>
          <InputText id="prenom" type="text"/>
        </div>
        <div class="field">
        <div class="p-input-icon-right">
          <i class="pi pi-envelope" />
          <label for="email">Email*</label>
          <InputText type="email"/>
        </div>
        </div>
        <div class="field">
        <div class="p-input-icon-right">
          <i class="pi pi-map-marker" />
          <label for="Adresse">Adresse*</label>
          <InputText type="text"/>
        </div>
        </div>
        <div class="field">
          <label for="Adresse">Mot de passe*</label>
          <InputText type="password"/>
        </div>
        <Button label="Enregistrer" type="submit" class="p-button-info"/> 
        <Button label="Supprimer mon compte" type="cancel" class="p-button-info"/>      
     
      </form>
      </div>
  </div>
</div>
</template>

<script>

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
            i{
                top: 70%;
            }
          }
    }
    button{
       margin-bottom: 1.5rem; 
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