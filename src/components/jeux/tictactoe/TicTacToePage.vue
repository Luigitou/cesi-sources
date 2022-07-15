<template>
  <main class="base">
    <div id="app">
      <h1>{{ title }}</h1>
      <section class="board-container">
        <span @click="changeLevel()"> {{ diff }} </span>
        <options v-bind:level="diff" @click="changeLevel()" />
        <board v-bind:level="diff" />
      </section>
    </div>
  </main>
</template>

<script>
import Board from "../tictactoe/board.vue";
import options from "../tictactoe/options.vue";

export default {
  name: "App",
  components: {
    Board,
    options,
  },
  data() {
    return {
      title: "Tic-Tac-Toe",
      diff: "Easy",
    };
  },
  methods: {
    changeLevel() {
      this.diff = this.diff === "Easy" ? "Hard" : "Easy";
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.base {
  display: flex;
  justify-content: center;
//   min-height: 100vh;
//   min-width: 100%;
  background-color: transparent;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #9B95AD;
  font-size: calc(calc(0.5 * 3vw) + calc(0.5 * 2vh));
}
</style>
