<template>
  <div class="statistique">
    <HeaderAdmin/>
    <StatistiqueMain/>
  </div>
</template>

<script>
// @ is an alias to /src
import StatistiqueMain from '../components/Statistique/StatistiqueMain.vue'
import HeaderAdmin from '../components/common/Header/HeaderAdmin.vue'

export default {
  name: 'Statistique',
  components: {
    StatistiqueMain,
    HeaderAdmin
  }
}
</script>