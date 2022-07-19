<template>
  <div class="snake">
      <div class="snake_game">
        <SnakePage :cellSize="cellSize" :boardSize="boardSize" :speed="speed" :isPlaying="isPlaying" :stop="stop" :addScores="addScores" :scores="scores"></SnakePage>
      </div>
  </div>
</template>

<script>
import SnakePage from '../components/jeux/snake/SnakePage.vue';

export default {
  name: "Snake",

  components: {
    SnakePage
  },
};
</script>

<style lang="scss" scoped>
</style>
