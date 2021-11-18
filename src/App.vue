<!-- Vue router to implement
<div id="nav">
    <router-link to="/">Home</router-link> |
  </div>
  <router-view/>
-->

<template>
  <div id="main">
    <VosFichiersMain/>
    <!-- <FooterAccueil/> -->
    
  </div>
</template>

<script>
//import FooterAccueil from './components/FooterAccueil.vue'
import VosFichiersMain from './components/VosFichiersMain.vue'

export default {
  name: 'App',
  components: {
//    FooterAccueil,
    VosFichiersMain
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
