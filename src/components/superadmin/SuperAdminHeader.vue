<template>
  <div class="title">
    <h2>Panel</h2>
    <Button icon="pi pi-plus" label="Créer un admin" id="btn" class="p-button-raised" @click="toForm"></Button>
  </div>
</template>

<script>
import Button from 'primevue/button';

export default{
  name: 'imagesheader',
  components: {
    Button
  },
  methods: {
    toForm(){
      this.$router.push('/superadminform');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/Global.scss';
.title{
  display: flex;
  margin: 2% 0 0 10%;
  justify-content: space-between;

  h2{
    color: #565656;
  }

  .p-button-raised{
    background-color: $color-text;
    border: 1px solid $color-text;
    border-radius: 10px;
    padding: 0.5%;
    margin-right: 12%;
  }
  
}

@media (max-width: 443px) {
  .title{
    margin-top: 10%;
  }
}
</style>