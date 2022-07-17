<template>
  <div id="app">
    <h1>Snake</h1>

    <!-- <div class="column">
      Cell size (px):
      <input type="number" min="10" v-model.number="cellSize">
    </div>
    <div class="column">
      Board size (cells):
      <input type="number" min="5" v-model.number="boardSize">
    </div> -->
    <div class="column">
      <label for="">Vitesse : </label>
      <input type="number" min="1" v-model.number="speed">
    </div>

    <Snake :cellSize="cellSize" :boardSize="boardSize" :speed="speed" :isPlaying="isPlaying" :stop="stop" :addScores="addScores" :scores="scores" />

    <div>Scores : {{ scores }}</div>

    <button
      id="play-btn"
      v-on:click="isPlaying ? stop() : start()"
    >{{ isPlaying ? "Arrêter" : "Jouer" }}</button>
  </div>
</template>

<script>
import Snake from "../snake/Snake.vue";

export default {
  name: "SnakePage",
  components: {
    Snake
  },
  data() {
    return {
      cellSize: 10,
      boardSize: 20,
      speed: 10,
      scores: 0,
      isPlaying: false
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.scores = 0;
    },
    stop() {
      this.isPlaying = false;
    },
    addScores(scores) {
      this.scores += scores;
    }
  }
};
</script>

<style lang="scss" scoped>

#app {
  text-align: center;
  color: #296870;
  margin-top: 20px;
  width: 100%;
}

.column {
  display: flex;
  justify-content: center;
  width: 30%;
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 10px 5px;
  margin: 5px auto;
}

.column input {
  margin: 2px 0 0 10px;
  width: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  line-height: 20px;
}

#play-btn {
  font-size: 1rem;
  margin-top: 30px;
  border: none;
  background-color: #FF914D;
  color: #EFFAFF;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
}

#play-btn:hover{
  color: #FF914D;
  background-color: transparent;
  border: 1px solid #FF914D;
}
</style>
