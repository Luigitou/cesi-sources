<template>
  <div class="superadmin">
    <SuperAdminFormHeader/>
    <SuperAdminFormMain/>
  </div>
</template>

<script>
import SuperAdminFormHeader from '../../components/superadmin/superadminform/SuperAdminFormHeader.vue';
import SuperAdminFormMain from '../../components/superadmin/superadminform/SuperAdminFormMain.vue';

export default {
  name: 'SuperAdminForm',
  components: {
    SuperAdminFormHeader,
    SuperAdminFormMain
  },
}
</script>

<style lang="scss" scoped>

</style>