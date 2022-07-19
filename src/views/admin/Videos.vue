<template>
  <div class="videos">
    <VideosHeader/>
    <VideosMain/>
  </div>
</template>

<script>
import VideosHeader from '../../components/admin/categoriesressources/videos/VideosHeader.vue';
import VideosMain from '../../components/admin/categoriesressources/videos/VideosMain.vue';

export default {
  name: 'Images',
  components: {
    VideosHeader,
    VideosMain
  },
}
</script>

<style lang="scss" scoped>

</style>