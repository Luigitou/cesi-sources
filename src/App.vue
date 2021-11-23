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
  background-color: #FFFFFF;
  margin: 0;
  padding: 0;
}

#app {
  background-color: #FFFFFF;
}

</style>
