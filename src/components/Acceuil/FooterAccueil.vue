<script>
export default {
  name: "FooterAccueil",
  data: function () {
    return {
      stockage: 100,
      nbuser: 500,
      enligne: 50,
    };
  },
};
</script>

<template>
  <div id="footer">
    <div class="wrapper">
      <div>
        <h1>{{ stockage }}Go</h1>
        <p>Jusqu’à 100Go d’utilisation</p>
      </div>
      <div>
        <h1>{{ nbuser }}+</h1>
        <p>Jusqu’à 500+ d’utilisateurs</p>
      </div>
      <div>
        <h1>{{ enligne }}</h1>
        <p>Nombres d’utilisateurs en ligne</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer{
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: relative;
  width: 100%;
  margin-bottom: 1%;
  bottom: 0;
}

.wrapper {
  width: 80%;
  display: flex;
  justify-content: space-evenly;
}

#footer h1{
  color: #FF914D;
}
#footer p{
  color: #296870;
  font-size: 1.2rem;
}
</style>