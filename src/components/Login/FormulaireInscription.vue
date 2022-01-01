<template>
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

</style>

