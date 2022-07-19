<template>
  <div class="home">
    <midHome/>
    <div class="lien_jeux">
      <h3>Cliquez ici pour jouer à <router-link to="/snake">Snake 🐍</router-link> ou <router-link to="/tictactoe"> Tic Tac Toe <img src="../assets/Jeux/tic-tac-toe.png" alt="tictactoe" class="tictactoe"></router-link> !</h3>
    </div>
  </div>
</template>

<script>
import midHome from "../components/navigation/home/midHome.vue"

export default {
  name: "home",

  components: {
    midHome,
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}

.lien_jeux{
  color: #296870;
  text-align: center;
  margin-top: 30px;
}

.tictactoe{
  align-items: baseline;
  position: relative;
  top: 5px;
}
</style>
