<template>
  <div class="CommentaireLine">
    <div class="place">
      <div class="user">
        {{ this.$props.data.utilisateur.prenom }}
        {{ this.$props.data.utilisateur.nom }}
      </div>
      <div class="date">
        {{ this.$props.data.date }}
      </div>
    </div>
    <Textarea
      type="text"
      rows="2"
      cols="30"
      :autoResize="true"
      :readonly="true"
      :value="this.$props.data.text"
    />
  </div>
</template>

<script>
import Textarea from "primevue/textarea";

export default {
  name: "CommentaireLine",
  components: {
    Textarea,
  },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.CommentaireLine {
  display: flex;
  margin-top: 15px;

  .place {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    font-size: 0.9rem;
  }

  textarea {
    width: 85%;
  }
}
</style>
