<template>
  <div class="categories">
    <Card class="image">
      <template #header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
      </template>
      <template #title>
        Images
      </template>
      <template #content>
          2500 images
      </template>
    </Card>
    <Card class="document">
      <template #header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
      </template>
      <template #title>
        Documents
      </template>
      <template #content>
          3000 fichiers
      </template>
    </Card>
    <Card class="videos">
      <template #header>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Circle-icons-document.svg/768px-Circle-icons-document.svg.png" alt="icon">
      </template>
      <template #title>
          Vidéos
      </template>
      <template #content>
          500 vidéos
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card';

export default{
  name: "categories",
  components: {
    Card
  }
}
</script>

<style lang="scss" scoped>
.categories{
  display: flex;
  justify-content: space-between;

  .image, .document, .videos{
    transition: 0.3s;
    width: 30%;
    border-radius: 10px;
    padding: 10px;

    img{
      width: 40px;
      margin-left: 15px;
    }
  }
  
  .image:hover, .document:hover, .videos:hover{
    box-shadow: 0 4px 8px 0 rgba(109, 109, 109, 0.2);
  }
}
</style>