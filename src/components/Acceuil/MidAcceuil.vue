<template>
  <div class="MidAccueil">
    <div class="wrapperLeft">
      <h1>{{ msg }}</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>
        sed do eiusmod tempor incididunt ut labore et dolore magna<br>
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br>
        ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
        Duis aute irure dol esse cillum dolore eu fugiat nulla <br>
        pariatur. Excepteur sint occaecat cupidatat non proident,<br>
        sunt in culpa qui officia deserunt mollit anim"<br>
      </p>
      <div class="btnWrapper">
        <button class="Button Button1" type="button"><img class="gglLogo" src="../../assets/Accueil/LogoGooglePlay.png" alt="Rejoignez nous !"></button>
        <button class="Button Button2" type="button">Nous Rejoindre</button>
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
      position: relative;
      flex-direction: row;
      align-items: center;

      .Button {
        flex: 1;
        padding: 10px;
        width: 30%;
        margin-right: 5%;
        height: 100%;
        background: $color-android;
        color: white;
        border: none;
        border-radius: 10px;

        img {
          width: 100%;
        }
      }
    }
  }

  .imgWrapper {
    position: relative;
    width: 40%;

    img {
      width: 100%;
    }
  }
}

</style>
