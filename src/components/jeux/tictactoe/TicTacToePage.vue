<template>
  <main class="base">
    <div id="app">
      <h1>{{ title }}</h1>
      <br>
      <br>
      <section class="board-container">
        <span @click="changeLevel()"> Changez le niveau </span>
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
      diff: "Facile",
    };
  },
  methods: {
    changeLevel() {
      this.diff = this.diff === "Facile" ? "Difficile" : "Facile";
    },
  },
};
</script>

<style lang="scss" scoped>

.base {
  display: flex;
  justify-content: center;
  background-color: transparent;
  margin-top: 30px;
}

span{
  cursor: pointer;
  background-color: #FF914D;
  color: #EFFAFF;
  padding: 10px;
  border-radius: 10px;
}

span:hover{
  color: #FF914D;
  background-color: transparent;
  border: 1px solid #FF914D;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #296870;
}
</style>
