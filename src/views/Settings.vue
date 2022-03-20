<template>
  <div class="contact view">
    <div class="wrap">
      <Header  />
      <SettingsMain/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SettingsMain from '../components/Settings/SettingsMain.vue';

export default {
  name: 'Contact main',
  components: {
    SettingsMain,
    
  }
}
</script>
