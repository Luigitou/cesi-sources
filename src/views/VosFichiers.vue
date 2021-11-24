<template>
  <div class="vosfichiers">
    <VosFichiersMain />
  </div>
</template>

<script>
// @ is an alias to /src
import VosFichiersMain from '../components/VosFichier/VosFichiersMain.vue'

export default {
  name: 'Vos fichiers',
  components: {
    VosFichiersMain
  }
}
</script>