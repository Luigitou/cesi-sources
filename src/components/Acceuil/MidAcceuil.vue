<template>
  <div class="MidAccueil">
    <div class="wrapperLeft">
      <h1>{{ msg }}</h1>
      <p>
        <span>Ressources relationnelles</span> 
          <br>
          <br> 
        L'application idéale qui vous permettrait de partager,
        d'échanger différents images, vidéos ainsi améliorer votre mode de vie et relations.
      </p>
      <div class="btnWrapper">
        <button class="Button" type="button"><img class="gglLogo" src="../../assets/Accueil/LogoGooglePlay.png" alt="Rejoignez nous !"></button>
        <button class="Button" type="button"> <router-link to="/Inscription"  id="btnInscription">Nous Rejoindre</router-link></button>
      </div>
    </div>
    <div class="imgWrapper">
      <img class="ImageHome" src="../../assets/Accueil/HomePageGroup.png" alt="Image Home page">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style lang="scss" scoped>
@import "../../scss/common.scss";

.MidAccueil {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: baseline;

  .wrapperLeft {
    width: 40%;
    text-align: justify;
    margin-right: 3%;

    span{
      color: $color-android;
      font-size: 30px;
      font-weight: bold;
    }

    p{
      font-size: 18px;
    }

    
    .btnWrapper {
      margin-top: 10%;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;

      .Button {
        flex: 1;
        //margin-right: 5%;
        background: $color-android;
        color: white;
        border: none;
        border-radius: 10px;
        height: 4em;
        max-width: 35%;

        #btnInscription{
          text-decoration: none;
          color: #FFFFFF;
        }

        img {
          width: 50%;
        }
      }
    }
  }

  .imgWrapper {
    position: static;
    width: 40%;

    img {
      width: 100%;
    }
  }
}

</style>
