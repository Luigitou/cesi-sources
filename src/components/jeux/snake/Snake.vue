<template>
  <p id="fin"></p>
  <canvas ref="board" id="snake-canvas" :width="boardSizePx" :height="boardSizePx"></canvas>
</template>

<script>
import constants from "../../jeux/snake/constants";

export default {
  name: "Snake",
  props: {
    cellSize: Number,
    boardSize: Number,
    speed: Number,
    isPlaying: Boolean,
    stop: Function,
    addScores: Function,
    scores: Number
  },
  computed: {
    boardSizePx() {
      return this.cellSize * this.boardSize;
    }
  },
  mounted() {
    this.boardContext = this.$refs.board.getContext("2d");
    window.addEventListener("keydown", this.onKeyPress);
  },
  created() {
    this.resetSnake();
  },
  beforeMount() {
    window.removeEventListener("keydown", this.onKeyPress);
  },
  watch: {
    isPlaying(value) {
      this.clear();
      if (value) {
        this.resetSnake();
        this.move();
      }
    }
  },
  methods: {
    resetSnake() {
      this.snake = [
        {
          x: this.getMiddleCell(),
          y: this.getMiddleCell()
        }
      ];
      const randomDirectionIndex = Math.floor(Math.random() * 4);
      this.direction = constants[randomDirectionIndex];
      this.targetCell = null;
    },
    getMiddleCell() {
      return Math.round(this.boardSize / 2);
    },
    move() {
      if (!this.isPlaying) {
        return;
      }

      this.clear();
      this.setTargetCell();

      const newHeadCell = {
        x: this.snake[0].x + this.direction.move.x,
        y: this.snake[0].y + this.direction.move.y
      };

      if (
        this.isCellOutOfBoard(newHeadCell) ||
        this.amountCellsInSnake(this.snake[0]) > 1
      ) {
        this.stop();
        document.getElementById("fin").innerHTML=`Game over! Votre score est de ${this.scores} points.`;
      }

      if (this.isTargetNewHead()) {
        this.snake.unshift(this.targetCell);
        this.targetCell = null;
        this.addScores(this.speed);
      } else {
        this.snake.unshift(newHeadCell);
        this.snake.pop();
      }

      this.boardContext.beginPath();
      this.snake.forEach(this.drawCell);
      this.boardContext.closePath();

      setTimeout(this.move, this.getMoveDelay());
    },
    clear() {
      this.boardContext.clearRect(0, 0, this.boardSizePx, this.boardSizePx);
    },
    drawCell({ x, y }) {
      this.boardContext.rect(
        x * this.cellSize,
        y * this.cellSize,
        this.cellSize,
        this.cellSize
      );
      this.boardContext.fillStyle = "#296870";
      this.boardContext.fill();
    },
    getMoveDelay() {
      return (2 / Number(this.speed)) * 1000;
    },
    isCellOutOfBoard({ x, y }) {
      return x < 0 || y < 0 || x >= this.boardSize || y >= this.boardSize;
    },
    onKeyPress(event) {
      const newDirection = constants.find(c => c.keyCode === event.keyCode);

      if (!newDirection) {
        return;
      }

      if (Math.abs(newDirection.keyCode - this.direction.keyCode) !== 2) {
        this.direction = newDirection;
      }
    },
    setTargetCell() {
      if (!this.targetCell) {
        let targetCell = this.getRandomCell();
        while (this.amountCellsInSnake(targetCell) > 0) {
          targetCell = this.getRandomCell;
        }
        this.targetCell = targetCell;
      }

      this.boardContext.beginPath();
      this.boardContext.rect(
        this.targetCell.x * this.cellSize,
        this.targetCell.y * this.cellSize,
        this.cellSize,
        this.cellSize
      );
      this.boardContext.fillStyle = "#FF914D";
      this.boardContext.fill();
      this.boardContext.closePath();
    },
    getRandomCell() {
      return {
        x: Math.floor(Math.random() * this.boardSize),
        y: Math.floor(Math.random() * this.boardSize)
      };
    },
    amountCellsInSnake(cell) {
      return this.snake.filter(({ x, y }) => x === cell.x && y === cell.y)
        .length;
    },
    isTargetNewHead() {
      return (
        this.snake[0].x + this.direction.move.x === this.targetCell.x &&
        this.snake[0].y + this.direction.move.y === this.targetCell.y
      );
    }
  }
};

</script>

<style lang="scss" scoped>

#snake-canvas {
  border: 1px solid #296870;
  margin: 10px 0;
}
</style>