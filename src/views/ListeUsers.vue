<template>
  <div class="listeusers">
    <ListeUsersMain />
  </div>
</template>

<script>
// @ is an alias to /src
import ListeUsersMain from '../components/Admin/ListeUsersMain.vue'

export default {
  name: 'Liste users',
  components: {
    ListeUsersMain
  }
}
</script>