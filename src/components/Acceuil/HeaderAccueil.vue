<template>
<header>
    <div class="nav">
      <div>
        <router-link to="/">
          <img src="../../assets/logo.png" class="logo" 
          style="width:140px;height:140px;">
        </router-link>
      </div>
      <div>
        <input type="text" placeholder="  Rechercher..">    
      </div>
      <div>
      <h5>Connexion</h5>
      </div>
      <div>
        <router-link to="/">
          <img src="../../assets/Profile.png" class="Profile" 
          style="width:40px;height:40px;">
        </router-link>
      </div>
    </div>  
</header>
</template>
<script>

export default {
    name: 'HeaderAccueil',
};
</script>

<style lang="scss" scoped>
header {
  background-color: #EFFAFF;
  padding: 10px 10px;
  display:flex;
  position: absolute;
  height: 10%;
  width: 100%;

}
.nav {
  display:flex;
  width: 90%;
  align-items: center;
  justify-content: space-around;
}
.nav input[type=text] {
  padding: 8px;
  background-image: url("../../assets/searchicon.png");
  background-position: 95% 50%;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  border: none;
  margin-top: 15px;
  font-size: 17px;
  border-radius: 12px;
  position: absolute;
  top: 25%;
  left: 48%;
  width: 1010px;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

h5{
  position: relative;
  top:-8px;
  left : 750%;
  color : #296870;
}
.Profile{
  top:-5px;
  position: relative;
  left : 600%;
}
.logo{
  position: relative;
  right : 100%;
}
</style>
