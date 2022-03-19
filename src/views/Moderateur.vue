<template>
  <div class="gestionressource">
    <HeaderModerateur/>
    <ModerateurMain/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ModerateurMain from '../components/Moderateur/ModerateurMain.vue'
import HeaderModerateur from '../components/Moderateur/HeaderModerateur.vue'

export default {
  name: 'Moderateur',
  components: {
    ModerateurMain,
    HeaderModerateur
  }
}
</script>