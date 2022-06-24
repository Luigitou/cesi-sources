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
        this.videos = response.data;
        this.nombreImages = this.videos.length;
      });
    },
    getDocuments(){
      VosFichiersService.getDocuments().then((response) => {
        this.videos = response.data;
        this.nombreDocuments = this.videos.length;
      });
    },
    getVideos(){
      VosFichiersService.getVideos().then((response) => {
        this.videos = response.data;
        this.nombreVideos = this.videos.length;
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
</style>
