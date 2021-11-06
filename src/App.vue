<template>
    <Footer-Accueil/>
</template>

<script>
import FooterAccueil from './components/FooterAccueil.vue'

export default {
  name: 'App',
  components: {
    FooterAccueil
  }
}
</script>

<style>
body{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #EFFAFF;
}

#app {
  background-color: #EFFAFF;
}

#footer{
  display: flex;
  justify-content: space-around;
  text-align: center;
  margin-top: 33rem;
}

#footer h1{
  color: #FF914D;
}

#footer p{
  color: #296870;
  font-size: 1.2rem;
}
</style>
