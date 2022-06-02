<template>
  <div class="addFile">
    <InputText />
  </div>
</template>

<script>
import InputText from "primevue/inputtext";

export default {
  name: "AddFile",
  components: {
    InputText,
  },
};
</script>

<style lang="scss" scoped>
.addFile {
  width: 50vw;
  height: 50vh;
}
</style>
