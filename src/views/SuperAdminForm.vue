<template>
  <div class="superadmin">
    <HeaderAdmin/>
    <SuperAdminForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SuperAdminForm from '../components/SuperAdmin/SuperAdminForm.vue'
import HeaderAdmin from '../components/common/Header/HeaderAdmin.vue'
export default {
  name: 'Super admin',
  components: {
    SuperAdminForm,
    HeaderAdmin

  }
}
</script>