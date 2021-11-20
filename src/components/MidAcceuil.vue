<template>
  <div id="MidAcceuil">
    <h1>{{ msg }}</h1>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br>
       sed do eiusmod tempor incididunt ut labore et dolore magna<br>
       aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br>
       ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>
       Duis aute irure dol esse cillum dolore eu fugiat nulla <br>
       pariatur. Excepteur sint occaecat cupidatat non proident,<br>
       sunt in culpa qui officia deserunt mollit anim"<br>
    </p>
    <button class="Button Button1" type="button"></button>
    <button class="Button Button2" type="button">Nous Rejoindre</button>
    </div>
  <img class="ImageHome" src="../assets/HomePageGroup.png" alt="Image Home page">
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style scoped>
</style>
