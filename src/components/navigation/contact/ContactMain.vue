<template>
  <div class="form">
    <div class="objet">
      <InputText class="champs" v-model="value" placeholder="Objet"/>
    </div>
    <div class="message">
      <TextArea class="champs textarea" v-model="value" placeholder="Message..." />
    </div>
    <div class="envoyer">
      <Button label="Envoyer" id="btn"></Button>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import TextArea from 'primevue/textarea';
import Button from 'primevue/button';

export default{
  name: 'contactmain',
  components: {
    InputText,
    TextArea,
    Button    
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/Global.scss';

.form{
  display: flex;
  flex-direction: column;
  margin-top: 5%;

  .champs{
    width: 50%;
    padding: 5px;
  }

  .champs:hover{
    border-color: $color-special;
  }

  .champs:focus{
    border: 1px solid $color-special;
    box-shadow: rgb(255, 205, 113) 0px 0px 0px 3px;
  }

  .message{
    margin-top: 50px;

    .textarea{
      height: 15rem;
    }
  }

  .envoyer{
    margin-top: 40px;

    #btn{
      width: 50%;
      background-color: $color-text;
      padding: 8px;
    }

    #btn:focus{
      box-shadow: rgb(186, 255, 186) 0px 0px 0px 3px;
    }
  }
}
</style>