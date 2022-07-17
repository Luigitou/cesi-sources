<template>
  <div class="home">
    <div class="container_jeux">
      <div class="snake_game">
        <SnakePage :cellSize="cellSize" :boardSize="boardSize" :speed="speed" :isPlaying="isPlaying" :stop="stop" :addScores="addScores" :scores="scores"></SnakePage>
      </div>
      <div class="tictactoe">
        <TicTacToePage></TicTacToePage>
      </div>
    </div>
  </div>
</template>

<script>
import SnakePage from '../components/jeux/snake/SnakePage.vue';
import TicTacToePage from '../components/jeux/tictactoe/TicTacToePage.vue';

export default {
  name: "Home",

  components: {
    SnakePage,
    TicTacToePage
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}

.container_jeux{
  display: flex;
  justify-content: space-around;
}

.snake_game{
  width: 50%;
}

.tictactoe{
  width: 50%;
  flex-wrap: wrap;
}
</style>
