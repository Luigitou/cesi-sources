<!-- Vue router to implement
  <div id="nav">
    <router-link to="/">Home</router-link> |
  </div>
-->

<template>
  <div id="main">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
body{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #EFFAFF;
  margin: 0;
  padding: 0;
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
