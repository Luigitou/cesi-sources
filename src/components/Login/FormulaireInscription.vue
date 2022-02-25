<!--<template>
<div class="body">
<section class="page">
<h1>Inscription</h1>
  <form class="form">
    <fieldset class="inscription">
      <ul>
        <li>
          <input type="text" id="nom" placeholder="Nom">
          <label for="nom">Nom</label>
        </li>
        <li>
          <input type="text" id="prenom" placeholder="Prénom">
          <label for="prenom">Prénom</label>
        </li>
        <li>
          <input type="text" id="email" placeholder="Email">
          <label for="email">Mail</label>
        </li>
        <li>
          <input type="text" id="address" placeholder="Rue, boulevard, avenue..." >
          <label for="adresse">Adresse</label>
        </li>
        <li>
          <input type="password" id="mdp" placeholder="Mot de passe">
          <label for="mdp">Mot de passe</label>
        </li>
        <li>
          <input type="password" id="cmdp" placeholder="Cmdp">
          <label for="cmdp">Confirmation du mot de passe</label>
        </li>
      </ul>
      <div class="boutton">
        <div class="btn">
          <router-link to="/tdb">
            <button type="submit">S'inscrire</button>
          </router-link>
          <router-link to="/">
            <button type="cancel">Annuler</button>
          </router-link>
        </div>
      </div>
    </fieldset>
  </form>
</section>
</div>
</template>

<script>
export default {
    name: 'FormulaireInscription'    
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.body{
background-color: $color-head;
}
  .page {
  background-color:$color-head;
  color: $color-android;
  padding: 4em 3.5em;
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  line-height: 2em;
  }
h1{
  margin: 0;
  font-weight: normal;
}

.inscription {
  padding: 0px;
  margin: 0px;
  border: 0;
}

.inscription ul {
  padding: 0;
  margin: 0;
}

/*====== begin C ======*/
.page {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 auto;
  
}

h1 {
  order: 2;
  border-top: 1px dashed;
  padding: 0.4em 0 0.1em 0em;
}



.form {
  order: 4;
}

h1{
  text-transform: uppercase;
}

.inscription li {
  display: flex;
  flex-direction: column;
  padding: 1.5em 0;
}

.boutton {
  display: flex;
  justify-content: center;
  padding: 1em;
  
}
.boutton button {
  padding: 0.8em 4em;
  background: $color-special;
  outline: none;
  border-width: 0;
  font-size: 15px;
  color: white;
  margin: 1em;
  cursor: pointer;
}

input {
  order: 2;
  outline: none;
  border: 0;
  background: transparent;
  border-bottom: 2px solid white;
}

::-webkit-input-placeholder {
  color: transparent;
}

:focus::-webkit-input-placeholder {
  color:white;
}

input:focus {
  border-bottom: 4px solid white;;
}

input:focus + label {
  -webkit-filter:brightness(0.7px);
  color: $color-special;
}

label {
  transition: 1s;
}

</style>-->
<template>
<div class="body">
<div class="page">
  <div class="overlay">
    <form class="modale-card">
      <h1>Inscription</h1>
      <fieldset class="inscription">
        <div class="container">

          <label for="nom">Nom</label>
          <input type="text" id="nom" placeholder="Nom">
         
          <label for="prenom">Prénom</label>
          <input type="text" id="prenom" placeholder="Prénom">
          
          <label for="email">Mail</label>
          <input type="text" id="email" placeholder="Email">
          
          <label for="adresse">Adresse</label>
          <input type="text" id="address" placeholder="Rue, boulevard, avenue..." >
          
          <label for="mdp">Mot de passe</label>
          <input type="password" id="mdp" placeholder="Mot de passe">
          
          <label for="cmdp">Confirmation du mot de passe</label>
          <input type="password" id="cmdp" placeholder="Confirmation du mot de passe">

      <div class="boutton">
        <div class="btn">
          <router-link to="/tdb" id="inscrire">
            <button type="submit">S'inscrire</button>
          </router-link>
          <router-link to="/" id="cancel">
            <button type="cancel">Annuler</button>
          </router-link>
        </div>
      </div>
    </div> 
      </fieldset>
    </form>
  </div>
</div>
</div>   
</template>

<script>
export default {
    name: 'FormulaireInscription'    
}
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

.page {
  position: fixed;
  top: 10;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay{
  background-color: $color-head;
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  overflow:scroll;
  scroll-behavior: smooth;
}

.modale-card{
  background: white;
  color: #333;
  padding: 5%;
  top: 15%; 
  width : 50%; 
  display: block;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  margin: 0;
  font-weight: normal;
  border-top: 1px dashed;
  padding: 0.4em 0 0.1em 0em;
  text-transform: uppercase;
  text-align: center;
}

.inscription {
  padding: 0px;
  margin: 0px;
  border: 0;
}

label{
  padding: 2%;
  margin-left: 3%;
}

input{
  width: 85%;
  padding: 2%;
  margin: 1%;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  //margin-right: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

/* Add a background color when the inputs get focus */
input[type=text]:focus, input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for all buttons */
button {
  background-color: $color-android;
  color: white;
  padding: 2%;
  margin: 4%;
  border: none;
  cursor: pointer;
  width: 90%;
  margin-left: 1%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  }

button:hover {
  opacity: 0.8;
}

#inscrire{
  text-decoration: none;
}

#cancel{
  text-decoration: none;
}

</style>


