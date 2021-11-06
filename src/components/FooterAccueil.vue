<script>
export default {
    name: 'FooterAccueil',
    data:function (){
    return {
      stockage: 100,
      nbuser: 500,
      enligne: 50
    }
  }
}
</script>

<template>
    <div id="footer">
        <div> 
            <h1>{{ stockage }}Go</h1>
            <p>Jusqu’à 100Go d’utilisation</p>
        </div> 
        <div>  
            <h1>{{ nbuser }}+</h1>
            <p>Jusqu’à 500+ d’utilisateurs</p>
        </div>
        <div>
            <h1>{{ enligne }}</h1>
            <p>Nombres d’utilisateurs en ligne</p>
        </div>
    </div>
</template>