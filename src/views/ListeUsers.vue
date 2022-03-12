<template>
  <div class="listeusers">
    <headerAdmin/>
    <ListeUsersMain />
  </div>
</template>

<script>
// @ is an alias to /src
import ListeUsersMain from '../components/Admin/ListeUsersMain.vue'
import HeaderAdmin from '../components/common/Header/HeaderAdmin.vue'
export default {
  name: 'Liste users',
  components: {
    ListeUsersMain,
    HeaderAdmin
  }
}
</script>