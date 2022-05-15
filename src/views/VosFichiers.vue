<template>
  <div class="vosFichiers">
    <VosFichiersHead />
    <VosFichiersTab />
  </div>
</template>

<script>
import VosFichiersHead from "../components/VosFichiers/VosFichiersHead.vue";
import VosFichiersTab from "../components/VosFichiers/VosFichiersTab.vue";

export default {
  name: "VosFichiers",
  components: {
    VosFichiersHead,
    VosFichiersTab,
  },
};
</script>

<style lang="scss" scoped>
.vosFichiers {
  height: 100%;
}
</style>
