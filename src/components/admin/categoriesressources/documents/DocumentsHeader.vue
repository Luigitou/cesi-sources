<template>
  <div class="title">
    <Button icon="pi pi-arrow-left" label="Retour" id="btn" class="p-button-raised" @click="toAdmin"></Button>
    <h2>Documents</h2>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default{
  name: 'documentsheader',
  components: {
    Button
  },
  methods: {
    toAdmin(){
      this.$router.push('/admin');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../scss/Global.scss';
.title{
  display: flex;
  justify-content: space-between;
  margin: 2% 0 0 10%;

  h2{
    flex: 0 0 60%;
    color: #565656;
  }

  .p-button-raised{
    background-color: $color-text;
    border: 1px solid $color-text;
    border-radius: 10px;
    padding: 0.5%;
  }
}
</style>