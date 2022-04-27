<template>
  <div class="bloc-modale" v-if="revele">
    <!-- if revele false le modale disparait if revele true le modale apparait -->
    <div class="overlay" v-on:click="toggleNouveauFichier"></div>
    <!-- click en dehors du modale pour fermer -->
    <form class="modale-card">
      <div v-on:click="toggleNouveauFichier" class="btn-modale">x</div>
      <!-- click sur la x pour fermer -->

      <div class="container">
        <input
          type="file"
          placeholder="selectionneé votre fichier"
          name="fichier"
          required
          @change="handleFileUpload"
        />
        <br />
        <div v-on:click="toggleNouveauFichier">
          <button type="submit" @click="saveFile">Valider</button>
          <button type="cancel">Annuler</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>

<script>
import FichierService from "../../services/FichierService";

export default {
  name: "NouveauFichier",
  props: ["revele", "toggleNouveauFichier", "dossier"],
  data() {
    return {
      fichiers: [],
    };
  },
  methods: {
    handleFileUpload(e) {
      this.fichiers = e.target.files;
    },
    saveFile() {
      const formData = new FormData();
      formData.append("file", this.$data.fichiers[0]);
      formData.append("dossier", this.$props.dossier);
      formData.append("mail", this.$store.state.mail);
      console.log(formData);

      FichierService.postFichiers(formData)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.error(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.bloc-modale {
  position: fixed;
  top: 10;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modale-card {
  background: white;
  color: #333;
  padding: 5%;
  position: fixed;
  top: 15%;
}
.btn-modale {
  position: absolute;
  right: 5%;
  top: 5%;
  color: $color-android;
  font-size: 150%;
  font-weight: bold;
}
.btn-modale:focus {
  background-color: #ddd;
  outline: none;
}
.btn-modale:hover,
.btn-modale:focus {
  cursor: pointer;
}

.container {
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    margin-bottom: 30px;
  }
}
/* Full-width input fields */
label {
  padding: 2%;
}
input[type="text"],
input[type="number"],
input[type="date"] {
  width: 95%;
  padding: 2%;
  margin: 1%;
  display: inline-block;
  border: none;
  background: #f1f1f1;
  margin-right: 40%;
}

/* Set a style for all buttons */
button {
  background-color: $color-android;
  color: white;
  padding: 2%;
  margin: 1%;
  border: none;
  cursor: pointer;
  width: 99%;
  margin-left: 1%;
}

button:hover {
  opacity: 0.8;
}
a {
  color: $color-special;
}
</style>
