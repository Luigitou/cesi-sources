<template>
  <div class="contact">
    <ContactHeader/>
    <ContactMain/>
  </div>
</template>

<script>
import ContactHeader from '../components/navigation/contact/ContactHeader.vue'
import ContactMain from '../components/navigation/contact/ContactMain.vue'

export default {
  name: 'Contact',
  components: {
    ContactHeader,
    ContactMain
  }

}
</script>

<style lang="scss" scoped>

.contact{
  margin-left: 30%;
}
</style>