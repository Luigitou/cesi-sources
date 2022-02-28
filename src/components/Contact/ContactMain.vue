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
        <button id="envoyer">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";
#contact{
  

  form{
    display: flex;
    flex-direction: column;
    padding: 5rem;
    overflow-x:auto;

    label{
      font-size: 1.3rem;
    }

    input, textarea{
      width: 50%;
    }

    #objet{
      margin: -1.5rem 0rem 0rem 11.2rem;
      height: 1.5rem;
      border-radius: .2rem;
      border-width: .06rem;
    }

    #message{
      margin: -.7rem 0rem 0rem 11.2rem;
      height: 13rem;
      border-radius: .4rem;
    }

    input:focus, textarea:focus{
      outline: none !important;
      border: 1px solid $color-special;
    }
    
    .buttons{
      display: flex;
      justify-content: center;
      gap: 10%;
      margin-left: 11rem;
      width: 50%;

      #annuler, #envoyer{
        background-color: $color-android;
        text-decoration: none;
        color: $color-head;
        border: none;
        cursor: pointer;
        margin-top: 30px;
      }

      #annuler{
        padding: 1rem;
        border-radius: .5rem;
      }

      #envoyer{
        padding: 1rem;
        border-radius: .5rem;
      }
    }
  }

@media only screen and (max-width: 600px) {
  form{
    #objet, #message{
      width: 100%;
    }

    label{
      font-size: 15px;
    }

    .buttons{
      width: 100%;
    }
  }
}

}
</style>