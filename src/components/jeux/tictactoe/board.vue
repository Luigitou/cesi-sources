<template>
  <div class="board-area">
    <div class="game-over-text" v-if="gameOver">
      <h3>{{ gameOverText }}</h3>
    </div>
    <div class="board-wrap">
      <div class="tictactoe-board" v-if="!gameOver">
        <div v-for="x in 3" :key="x">
          <div v-for="y in 3" :key="y">
            <cell
              @click="selected(x - 1, y - 1)"
              :value="board.cells[x - 1][y - 1]"
            ></cell>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="restart" @click="restart()">
      <h3>Recommencer</h3>
    </div>
  </div>
</template>
<script>
import cell from "../tictactoe/cell.vue";
import Board from "../tictactoe/js/board";

export default {
  components: {
    cell,
  },
  props: {
    level: String,
  },
  data() {
    return {
      gameOver: false,
      gameOverText: "",
      board: new Board(),
      diffLevel: this.level,
    };
  },
  watch: {
    level: function () {
      this.diffLevel = this.level;
      this.gameOver = false;
      this.board.reset();
    },
  },
  methods: {
    restart() {
      this.gameOver = false;
      this.board.reset();
    },
    selected(x, y) {
      if (this.gameOver) {
        // Invalid move.
        return;
      }
      if (!this.board.doMove(x, y, "x")) {
        // Invalid move.
        return;
      }
      this.$forceUpdate();

      if (this.board.isGameOver()) {
        this.gameOver = true;
        this.gameOverText = this.board.playerHas3InARow("x")
          ? "T'as gagné 😎"
          : "Egalité 👀";
        return;
      }

      let aiMove =
        this.diffLevel === "Facile"
          ? this.randMax(this.board.clone(), "o")
          : this.minimax(this.board.clone(), "o");

      setTimeout(() => {
        this.board.doMove(aiMove.move.x, aiMove.move.y, "o");
        if (this.board.isGameOver()) {
          this.gameOver = true;
          this.gameOverText = this.board.playerHas3InARow("o")
            ? "T'as perdu 😥"
            : "Egalité 👀";
        }
        this.$forceUpdate();
      }, 400);
    },

    minimax(board, player, depth = 1) {
      // If the board has 3 in a row return the score of the board.
      if (board.isGameOver()) {
        return {
          score: board.getScore() + depth,
          move: null,
        };
      }

      // The 'o' player wants to maximize its score, the 'x' player wants to
      // minimize its score
      let bestScore = player === "o" ? -10000 : 10000;
      let bestMove = null;

      let moves = board.getPossibleMoves();
      for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        let newBoard = board.clone();
        newBoard.doMove(move.x, move.y, player);

        // Recursively call the minimax function for the new board.
        const score = this.minimax(
          newBoard,
          player === "x" ? "o" : "x",
          depth + 1
        ).score;

        // If the score is better than the best saved score update the best saved
        // score to this move.
        if (
          (player === "o" && score > bestScore) ||
          (player === "x" && score < bestScore)
        ) {
          bestScore = score;
          bestMove = move;
        }
      }

      // Return the best found score & move!
      return {
        score: bestScore,
        move: bestMove,
      };
    },

    randMax(board, player) {
      // If the board has 3 in a row return the score of the board.
      if (board.isGameOver()) {
        return {
          score: board.getScore(),
          move: null,
        };
      }
      // The 'o' player wants to maximize its score, the 'x' player wants to
      // minimize its score
      let bestScore = player === "o" ? -10000 : 10000;
      let bestMove = null;

      let moves = board.getPossibleMoves();
      let moveInt = board.getRandomInt(0, moves.length - 1);

      bestMove = moves[moveInt];
      bestScore = -10000;

      // Return the best found score & move!
      return {
        score: bestScore,
        move: bestMove,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.game-over-text {
  margin: 5%;
}

.tictactoe-board {
  display: flex;
  justify-content: center;
}

.restart{
  cursor: pointer;
}

.restart:hover{
  color: #FF914D;
}
</style>