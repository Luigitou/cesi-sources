<template>
  <MidAcceuil msg="Resources relationnelles "/>
</template>

<script>
import MidAcceuil from './components/MidAcceuil.vue'

export default {
  name: 'App',
  components: {
    MidAcceuil
  }
}
</script>

<style>
h1 {  
      margin-left: 100px;
      margin-top: 200px;
      margin-bottom: 50px;
      font-size: 40px;
      color: #296870;
      font-family: system-ui;
}
p{
  margin-left: 100px;
  font-size: 20px;
  color: #296870;
}
.ImageHome{
      width: 800px;
      margin-left: 800px;
      margin-top: -460px;
}
.Button1{
      background-image: url(assets/LogoGoolgePlay.png);
      background-size: 135px,135px;
      background-repeat: no-repeat;
      background-position: 10px,10px;
      width: 150px;
      height: 55px;
}
.Button{
      background-color: #296870
;
      border: none;
      border-radius: 10px;
      color: white;
      padding: 20px 34px;
      text-align: center;
      text-decoration: none;
      display:inline-block;
      font-size: 15px;
      cursor: pointer;
      margin-left: 110px;
      margin-top: 40px;
      font-weight: bold;
         }       
</style>
