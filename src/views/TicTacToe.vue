<template>
  <div class="tic_tac_toe">
    <div class="tictactoe">
        <TicTacToePage></TicTacToePage>
    </div>
  </div>
</template>

<script>
import TicTacToePage from '../components/jeux/tictactoe/TicTacToePage.vue';

export default {
  name: "TicTacToe",

  components: {
    TicTacToePage
  },
};
</script>

<style lang="scss" scoped>
</style>
