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

html {
  height: 100%;
}

body{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #FFFFFF;
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  background-color: #FFFFFF;
  height: 100%;
}

#main {
  height: 100%;
}

.view {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.wrap {
  width: 90%;
  margin: 0;
  padding: 0;
}

</style>
