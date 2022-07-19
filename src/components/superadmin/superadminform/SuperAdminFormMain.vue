<template>
  <div class="form">  
    <form class="formData" action="#">
      <div class="nom_prenom">
        <div class="nom"> 
          <label for="nom">Nom </label>
          <InputText id="nom" type="text"/>
        </div>
        <div class="prenom">
          <label for="prenom">Prénom </label>
          <InputText id="prenom" type="text"/>
        </div>
      </div>
      
      <div class="email flex_inputs">
        <label for="email">Email </label>
        <InputText id="email" type="text"/>
      </div>
    
      <div class="adresse flex_inputs">
        <label for="adresse">Adresse </label>
        <InputText id="adresse" type="text"/>
      </div>
      
      <div class="ville flex_inputs">
        <label for="ville">Ville </label>
        <InputText id="ville" type="text"/>
      </div>
    
      <div class="codepostal flex_inputs">
        <label for="codepostal">Code postal </label>
        <InputText id="codepostal" type="text"/>
      </div>

      <div class="roles">
        <div class="admin">
          <RadioButton name="role" value="Admin" v-model="role" />
          <label for="admin">Administrateur</label>
        </div>
        <div class="superadmin">
          <RadioButton name="role" value="Super-admin" v-model="role" />
          <label for="superadmin">Super-administrateur</label>
        </div>
      </div>

      <div class="creer">
        <Button label="Créer un compte" id="btn"></Button>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';

export default{
  name: 'superadminformmain',
  components: {
    InputText,
    Button,
    RadioButton  
  },
  data(){
    return{
      role: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/Global.scss';

.form{
  width: 80%;
  margin: 0 auto;
}

form{
  margin-top: 5%;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  flex-direction: column;
}

form input{
  background-color: #ffffff;
  border: 1px solid #f5f7fa;
  border-radius: 5px;
  height: 1.9rem;
  color: #535456;
  font-size: 1rem;
  margin: 0 0 0 20px;
  padding-left: 0.5rem;
  box-shadow: 0 0 0 1px #e4e7ed inset;
}

form label{
  font-size: 1.1rem;
}

.nom_prenom {
  display: flex;

  .nom{
    flex: 0 0 55%;
  
    #nom{
      width: 70%;
    }
  }

  .prenom{
    flex: 0 0 49%;

    #prenom{
      width: 70%;
    }
  }
}

.email, .adresse, .ville, .codepostal, .roles{
  margin-top: 20px;
}

.roles{
  display: flex;
  align-items: center;
  justify-content: center;

  .admin{
    flex: 0 0 30%;
  }

  label{
    margin-left: 15px;
  }
}

.flex_inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;

  input {
    flex: 1 1 60%;
  }
}

.creer{
  display: flex;
  justify-content: center;
  margin-top: 25px;

  #btn{
    padding: 0.5% 3% 0.8% 3%;
    border-radius: 10px;
    background-color: $color-special;
    border: 2px solid rgb(255, 166, 0);
  }

  #btn:focus{
    box-shadow: rgb(244, 197, 111) 0px 0px 0px 3px;
  }
}

@media (max-width: 443px) {
  form{
    margin-top: 20%;
  }

  .nom_prenom .nom #nom, .nom_prenom .prenom #prenom{
    position: relative;
    right: 22px;
    top: 10px;
    width: 95%;
  }

  .flex_inputs input{
    flex: 0 0 0;
  }

  .email{
    margin-top: 20%;
  }

  .superadmin{
    position: relative;
    left: 2rem;
  }

  .creer{
    margin-top: 20%;
  }
}
</style>