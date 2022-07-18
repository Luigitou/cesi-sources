<template>
  <div class="preview">
    <img v-if="type === 'image'" :src="fileData" alt="Preview" />
  </div>
</template>

<script>
import VosFichiersServices from "../../services/VosFichiersServices";
export default {
  name: "Preview",
  props: {
    file: Object,
    type: String,
  },
  data() {
    return {
      fileData: null,
    };
  },
  methods: {
    fetchImage() {
      VosFichiersServices.downloadFile(this.$route.params.id).then(
        (response) => {
          const blob = new Blob([response.data], {
            type: response.headers["content-type"],
          });
          this.fileData = URL.createObjectURL(blob);
        }
      );
    },
  },
  mounted() {
    if (this.$props.type === "image") {
      this.fetchImage();
    }
  },
};
</script>

<style lang="scss" scoped>
.preview {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
