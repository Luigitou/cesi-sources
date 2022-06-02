<template>
  <div class="admin">
    <div class="categories_users">
      <Categories/>      
      <Users/>
    </div>
    <Statistiques/>
  </div>
</template>

<script>
import Categories from '../components/admin/Categories.vue';
import Users from '../components/admin/Users.vue';
import Statistiques from '../components/admin/Statistiques.vue';

export default {
  name: 'Admin',
  components: {
    Categories,
    Users,
    Statistiques
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/Global.scss';
.admin{
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  flex-wrap: wrap;
}
</style>
