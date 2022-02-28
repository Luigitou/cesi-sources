<template>
  <div class="superadmin">
    <HeaderModerateur/>
    <SuperAdminForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SuperAdminForm from '../components/SuperAdmin/SuperAdminForm.vue'
import HeaderModerateur from '../components/Moderateur/HeaderModerateur.vue'
export default {
  name: 'Super admin',
  components: {
    SuperAdminForm,
    HeaderModerateur

  }
}
</script>