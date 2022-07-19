<template>
  <div class="admin">
    <div class="categories_users">
      <Categories :nombreImages="this.nombreImages" :nombreDocuments="this.nombreDocuments" :nombreVideos="this.nombreVideos"/>      
      <Users/>
    </div>
    <Statistiques :nombreImages="this.nombreImages" :nombreDocuments="this.nombreDocuments" :nombreVideos="this.nombreVideos"/>
  </div>
</template>

<script>
import Categories from '../../components/admin/categoriesressources/Categories.vue';
import Users from '../../components/admin/Users.vue';
import Statistiques from '../../components/admin/Statistiques.vue';
import VosFichiersService from '../../services/VosFichiersServices';

export default {
  name: 'Admin',
  components: {
    Categories,
    Users,
    Statistiques
  },
  data(){
    return{
      nombreImages: 0,
      nombreDocuments: 0,
      nombreVideos: 0
    }
  },
  methods: {
    getImages(){
      VosFichiersService.getImages().then((response) => {
        const images = response.data;
        this.nombreImages = images.length;

        return this.$store.state.nombreImages = this.nombreImages;
      });
    },
    getDocuments(){
      VosFichiersService.getDocuments().then((response) => {
        const documents = response.data;
        this.nombreDocuments = documents.length;

        return this.$store.state.nombreDocuments = this.nombreDocuments;
      });
    },
    getVideos(){
      VosFichiersService.getVideos().then((response) => {
        const videos = response.data;
        this.nombreVideos = videos.length;

        return this.$store.state.nombreVideos = this.nombreVideos;
      });
    },
  },
  created() {      
    this.getImages();
    this.getDocuments();
    this.getVideos();
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/Global.scss';
.admin{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

@media (max-width: 443px) {
  .admin{
    flex-direction: column;
    width: 80%;
    margin-top: 10%;
  }

  .categories_users{
    width: 100%;
    padding-left: 20%;
  }
}
</style>
