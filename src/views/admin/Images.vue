<template>
  <div class="images">
    <ImagesHeader/>
    <ImagesMain/>
  </div>
</template>

<script>
import ImagesHeader from '../../components/admin/categoriesressources/images/ImagesHeader.vue';
import ImagesMain from '../../components/admin/categoriesressources/images/ImagesMain.vue';

export default {
  name: 'Images',
  components: {
    ImagesHeader,
    ImagesMain
  },
}
</script>

<style lang="scss" scoped>

</style>