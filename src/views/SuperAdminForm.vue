<template>
  <div class="superadmin">
    <SuperAdminForm />
  </div>
</template>

<script>
// @ is an alias to /src
import SuperAdminForm from '../components/SuperAdmin/SuperAdminForm.vue'

export default {
  name: 'Super admin',
  components: {
    SuperAdminForm
  }
}
</script>