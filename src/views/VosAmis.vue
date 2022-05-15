<template>
  <div class="vosamis">
    <VosAmisHeaderVue/>
    <VosAmisMainVue/>
  </div>
</template>

<script>
import VosAmisHeaderVue from '../components/vosamis/VosAmisHeader.vue';
import VosAmisMainVue from '../components/vosamis/VosAmisMain.vue';

export default {
  name: 'VosAmis',
  components: {
    VosAmisHeaderVue,
    VosAmisMainVue
  },
}
</script>

<style lang="scss" scoped>

</style>