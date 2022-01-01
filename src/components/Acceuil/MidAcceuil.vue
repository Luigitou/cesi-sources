<template>
  <div class="MidAccueil">
    <div class="wrapperLeft">
      <h1>{{ msg }}</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dol esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim"
      </p>
      <div class="btnWrapper">
        <button class="Button" type="button"><img class="gglLogo" src="../../assets/Accueil/LogoGooglePlay.png" alt="Rejoignez nous !"></button>
        <button class="Button" type="button">Nous Rejoindre</button>
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
  margin-top: 3%;
  align-items: center;
  justify-content: center;

  .wrapperLeft {
    width: 40%;
    text-align: justify;
    margin-right: 3%;

    .btnWrapper {
      margin-top: 10%;
      display: flex;
      flex-direction: row;
      width: 100%;

      .Button {
        flex: 1;
        margin-right: 5%;
        background: $color-android;
        color: white;
        border: none;
        border-radius: 10px;
        height: 4em;
        max-width: 35%;
        

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
