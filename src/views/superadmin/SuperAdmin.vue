<template>
  <div class="superadmin">
    <SuperAdminHeader/>
    <SuperAdminMain/>
  </div>
</template>

<script>
import SuperAdminHeader from '../../components/superadmin/SuperAdminHeader.vue';
import SuperAdminMain from '../../components/superadmin/SuperAdminMain.vue';

export default {
  name: 'SuperAdmin',
  components: {
    SuperAdminHeader,
    SuperAdminMain
  },
}
</script>

<style lang="scss" scoped>

</style>