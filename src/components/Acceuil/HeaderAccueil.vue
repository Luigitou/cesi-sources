<template>
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
      <div class="wrapperBtn">
        <div>
          <h5>Connexion</h5>
        </div>
        <div>
          <img src="../../assets/Accueil/Profile.png" class="Profile">
        </div>
      </div>
      
    </div>  
</header>
</template>
<script>

export default {
    name: 'HeaderAccueil',
};
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3%;

  .wrapperLogo {
    width: 15%;
    position: absolute;
    top: 0;

    .logo {
      width: 100%;
    }
  }

  .wrapperInput {
    width: 50%;
    margin-left: 22%;

    input {
      width: 100%;
      padding: 10px 20px 10px 20px;
      background-image: url("../../assets/Accueil/searchicon.png");
      background-position: 98% 50%;
      background-repeat: no-repeat;
      background-size: 20px 20px;
      border: 1px solid black;
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
      margin-right: 20px;
    }

    img {
      width: 3vw;
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