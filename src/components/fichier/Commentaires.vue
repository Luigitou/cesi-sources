<template>
  <div class="commentaires">
    <div class="write">
      <div class="place"></div>
      <Textarea
        type="text"
        :placeholder="'Ecrire un nouveau commentaire'"
        rows="2"
        cols="30"
        :autoResize="true"
        v-model="newCommentaire"
      />
      <div class="send">
        <Button
          @click="createCommentaire"
          icon="pi pi-send"
          class="p-button-rounded p-button-success"
        />
      </div>
    </div>
    <div
      class="allComments"
      v-for="commentaire in commentaires"
      :key="commentaire.id"
    >
      <CommentaireLine :data="commentaire" />
    </div>
  </div>
</template>

<script>
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import CommentaireLine from "./CommentaireLine.vue";
import VosFichiersServices from "../../services/VosFichiersServices";

export default {
  name: "Commentaires",
  components: {
    Textarea,
    Button,
    CommentaireLine,
  },
  data() {
    return {
      commentaires: [],
      newCommentaire: "",
    };
  },
  methods: {
    fetchData() {
      this.$data.commentaires = [];
      VosFichiersServices.getCommentaires(
        this.$route.params.id,
        this.$store.state.token
      ).then((response) => {
        this.$data.commentaires = response.data;
      });
    },
    createCommentaire() {
      if (this.newCommentaire === "" || this.newCommentaire === null) {
        return false;
      }

      VosFichiersServices.createCommentaire(
        this.$route.params.id,
        0,
        this.newCommentaire,
        this.$store.state.token
      )
        .then((response) => {
          if (response.status !== 200) {
            return Promise.reject();
          }
        })
        .then(() => {
          this.fetchData();
          this.newCommentaire = "";
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.commentaires {
  width: calc(100% - 4rem);

  .write {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;

    .place {
      width: 15%;
      display: flex;
      justify-items: center;
    }

    textarea {
      width: 80%;
    }
    .send {
      width: 5%;
      display: flex;
      justify-content: right;
      align-items: center;
    }
  }
  .allComments {
    width: 90%;
    margin-left: 5%;
  }
}
</style>
