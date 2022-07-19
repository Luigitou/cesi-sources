<template>
  <div class="documents">
    <DocumentsHeader/>
    <DocumentsMain/>
  </div>
</template>

<script>
import DocumentsHeader from '../../components/admin/categoriesressources/documents/DocumentsHeader.vue';
import DocumentsMain from '../../components/admin/categoriesressources/documents/DocumentsMain.vue';

export default {
  name: 'Images',
  components: {
    DocumentsHeader,
    DocumentsMain
  },
}
</script>

<style lang="scss" scoped>
@media (max-width: 443px) {
  .documents{
    margin-top: 10%;
  }
}
</style>