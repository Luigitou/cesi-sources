<template>
  <div class="MidAccueil">
    <div class="wrapperLeft">
      <p>
        <span>Ressources relationnelles</span>
        <br />
        <br />
        L'application idéale qui vous permettrait de partager, d'échanger
        différents images, vidéos ainsi améliorer votre mode de vie et
        relations.
      </p>
      <div class="btnWrapper">
        <!--<Button class="Button" type="button"> <router-link to="/Inscription"  id="btnInscription">Nous Rejoindre</router-link></button>-->
        <router-link to="/Inscription" id="btnInscription">
          <Button label="Nous rejoindre" class="p-button-rounded" />
        </router-link>
      </div>
    </div>
    <div class="imgWrapper">
      <img
        class="ImageHome"
        src="../../../assets/Accueil/HomePageGroup.png"
        alt="Image Home page"
      />
    </div>
  </div>
</template>

<script>
import Button from "primevue/button";
export default {
  name: "MidAccueil",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/Variables.scss";
.MidAccueil {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: baseline;
  margin-top: 5%;

  .wrapperLeft {
    width: 40%;
    text-align: justify;
    margin-right: 3%;
    span {
      font-size: 30px;
      font-weight: bold;
    }
    p {
      font-size: 18px;
    }

    .btnWrapper {
      margin-top: 7%;
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      #btnInscription {
        text-decoration: none;
        .p-button-rounded {
          position: static;
          background-color: $color-text;
          border: 1px solid $color-text;
        }
      }
      img {
        width: 50%;
      }
    }
    img {
      width: 50%;
    }
  }
  .imgWrapper {
    position: static;
    width: 40%;
    //margin-top: 50%;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 443px) {
  .MidAccueil {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    margin-top: 25%;
  }
  .MidAccueil .wrapperLeft .btnWrapper {
    margin-top: 20%;
  }

  .MidAccueil .wrapperLeft {
    width: 80%;
  }

  .MidAccueil .imgWrapper {
    margin-top: 15%;
    width: 90%;
  }
}
</style>
