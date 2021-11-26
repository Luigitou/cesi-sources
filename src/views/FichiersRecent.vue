<template>
  <div class="fichiersrecents">
    <FichiersRecentMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import FichiersRecentMain from '../components/FichierRecent/FichiersRecentMain.vue'

export default {
  name: 'Fichiers recents',
  components: {
    FichiersRecentMain
  }
}
</script>