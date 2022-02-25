<template>
  <div class="superadmin">
    <HeaderAdmin/>
    <SuperAdminMain />
  </div>
</template>

<script>
// @ is an alias to /src
import SuperAdminMain from '../components/SuperAdmin/SuperAdminMain.vue'
import HeaderAdmin from '../components/common/Header/HeaderAdmin.vue'
export default {
  name: 'Super admin',
  components: {
    SuperAdminMain,
    HeaderAdmin
  }
}
</script>