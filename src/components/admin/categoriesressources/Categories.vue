<template>
  <div class="categories">
    <Card class="image" @click="toImages">
      <template #header>
        <div class="header">
          <img src="../../../assets/admin/image.png" alt="images">
          <h3>Images</h3>
        </div>
      </template>
      <template #content>
        <p class="content">{{ nombreImages }} image(s)</p> 
      </template>
    </Card>
    <Card class="document" @click="toDocuments">
      <template #header>
        <div class="header">
          <img src="../../../assets/admin/document.png" alt="documents">
          <h3>Documents</h3>
        </div>
      </template>
      <template #content>
        <p class="content">{{ nombreDocuments }} fichier(s)</p> 
      </template>
    </Card>
    <Card class="videos" @click="toVideos">
      <template #header>
        <div class="header">
          <img src="../../../assets/admin/video.png" alt="videos">
          <h3>Vidéos</h3>
        </div>  
      </template>
      <template #content>
        <p class="content">{{ nombreVideos }} Vidéo(s)</p>  
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
  },
  props: {
    nombreImages: Number,
    nombreDocuments: Number,
    nombreVideos: Number
  },
  methods:{
    toImages(){
      this.$router.push('/admin/images');
    },
    toDocuments(){
      this.$router.push('/admin/documents');
    },
    toVideos(){
      this.$router.push('/admin/videos');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/Global.scss';
.categories{
  display: flex;
  justify-content: space-between;

  .image, .document, .videos{
    transition: 0.3s;
    width: 30%;
    height: 6rem;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;

    img{
      width: 30px;
      margin-left: 15px;
    }
    .header{
      display: flex;
      justify-content: space-between;
      margin-right: 10px;
    }

    .content{
      position: relative;
      bottom: 15px;
    }
  }
  
  .image:hover, .document:hover, .videos:hover{
    box-shadow: 0 4px 8px 0 rgba(109, 109, 109, 0.2);
  }
}

@media (max-width: 443px) {
  .categories{
    flex-direction: column;
    align-items: center;

    .image, .document, .videos{
      margin-top: 20px;
      width: 100%;
    }
  }
}
</style>