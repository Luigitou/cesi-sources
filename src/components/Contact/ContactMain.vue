<script>
export default {
  name: "ContactMain",
};
</script>

<template>
  <div id="contact">
    <form action="" method="POST">
      <label for="objet">Objet</label>
      <input type="text" name="objet" id="objet" required>
      <br>
      <br>
      <label for="message">Message</label> 
      <br>
      <textarea name="message" id="message" cols="30" rows="10" required></textarea>
      <div class="buttons">
        <button id="annuler">Annuler</button>
        <input type="submit" value="Envoyer" id="envoyer">
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";
#contact{
  form{
    display: block;
    margin: 2rem 0rem 0rem 10rem;
    
    label{
      font-size: 1.3rem;
    }

    #objet{
      display: block;
      margin: -1.5rem 0rem 0rem 11.2rem;
      width: 27rem;
      height: 1.5rem;
      border-radius: .2rem;
      border-width: .06rem;
    }

    #message{
      margin: -.7rem 0rem 0rem 11.2rem;
      width: 27rem;
      height: 13rem;
      border-radius: .4rem;
    }

    input:focus, textarea:focus{
      outline: none !important;
      border:1px solid $color-special;
    }

    .buttons{
      margin: 2rem 0rem 0rem 15.4rem;

      #annuler, #envoyer{
        background-color: $color-android;
        text-decoration: none;
        color: $color-head;
        border: none;
        cursor: pointer;
      }

      #annuler{
        width: 8rem;
        height: 3rem;
        border-radius: .5rem;
      }

      #envoyer{
        display: block;
        width: 8rem;
        height: 3rem;
        border-radius: .5rem;
        margin: -3rem 0rem 0rem 11rem;
      }
    }
  }
}
</style>