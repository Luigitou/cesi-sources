<template>
<modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale> <!--lier les données au composent-->
<header>
    <div class="nav">
      <div class="wrapperLogo">
        <router-link to="/">
          <img src="../../assets/Accueil/logo.png" class="logo">
        </router-link>
      </div>
      <div class="wrapperInput">
        <input type="text" placeholder="Rechercher..">    
      </div>
      <div v-on:click="toggleModale" class="wrapperBtn"> <!-- ouvre le Modale -->
          <h5>Connexion</h5>
          <div>
            <img src="../../assets/Accueil/Profile.png" class="Profile">
          </div>
      </div>
    </div>
</header>
</template>
<script>
import Modale from "../../components/Login/Modale.vue"
export default {
    name: 'HeaderAccueil',
    data(){
      return{
        revele: false 
      }
    },
    components : {
      'modale': Modale  //modale est le nom d'utilisation voir dans template
    },
    methods: {
      toggleModale: function() {
        this.revele=!this.revele //si cest false passe a true vis versa et cela a partir de la modale puisque les props sont liées
      }
    }
};
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: static;
  align-items: center;
  justify-content: space-between;
  padding-top: 0%;

  .wrapperLogo {
    width: 15%;
    //position: absolute;
    position: static;
    top: 10;

    .logo {
      width: 40%;
       margin-left: 25%;
    }
  }

  .wrapperInput {
    width: 50%;
    //margin-left: -2%
    margin-right: 7%;


    input {
      width: 100%;
      padding: 10px 80px 10px 50px;
      background-image: url("../../assets/Accueil/searchicon.png");
      background-position: 98% 50%;
      background-repeat: no-repeat;
      background-size: 20px 20px;
      border:none;
      outline: 0;
      border-radius: 10px;

      &:hover {
        border: 1px solid $color-special;
      }
    }
  }

  .wrapperBtn {
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;

    h5 {
      margin-right: 10%;
      color:$color-android;
      cursor:pointer;
    }
    /*img {
      width: 3vw;
    }*/
  }
    .Profile{
      width:2rem;
      position: relative;
      margin-left: 5%;
      cursor:pointer;
    }

}

@media only screen and (max-width: 900px) {
  .nav {
    display: flex;
    flex-direction: column;

    .wrapperLogo {
      .logo {
        width: 100%;
        margin-left: 0%;
      }
    }

    .wrapperInput {
      width: 40%;
      margin-right: 25%;
    }
  }
}

</style>

/*
background-image: url("../../assets/Accueil/searchicon.png");
  background-position: 95% 50%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
*/