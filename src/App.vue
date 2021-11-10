<!-- Vue router to implement
<div id="nav">
    <router-link to="/">Home</router-link> |
  </div>
  <router-view/>
-->

<template>
  <div id="main">
    <HeaderAccueil/>
  </div>
</template>

<script>
import HeaderAccueil from './components/HeaderAccueil.vue'

export default {
  name: 'App',
  components: {
    HeaderAccueil
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
