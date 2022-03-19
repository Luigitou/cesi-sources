<template>
  <div class="gestionressource">
    <HeaderAdmin/>
    <GestionRessourceMain/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import GestionRessourceMain from '../components/Admin/GestionRessourceMain.vue'
import HeaderAdmin from '../components/common/Header/HeaderAdmin.vue'

export default {
  name: 'Gestion ressource',
  components: {
    GestionRessourceMain,
    HeaderAdmin
  }
}
</script>