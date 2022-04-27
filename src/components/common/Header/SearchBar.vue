<template>
  <CurrentResearch
    v-bind:revele="revele"
    v-bind:toggleCurrentResearch="toggleCurrentResearch"
    v-bind:searchValue="searchValue"
    v-bind:files="files"
  ></CurrentResearch>
  <div>
    <input
      class="input"
      type="text"
      placeholder="Rechercher un fichier .."
      id="search"
      name="search"
      v-model="searchValue"
    />
    <button class="btn" v-on:click="toggleCurrentResearch" type="submit">
      <img src="../../../assets/header/Search.svg" />
    </button>
  </div>
</template>

<script>
import CurrentResearch from "../../common/Header/CurrentResearch.vue";
import FichierService from "../../../services/FichierService";
export default {
  data() {
    return {
      revele: false,
      searchValue: "",
      files: [],
    };
  },

  methods: {
    toggleCurrentResearch: function () {
      this.revele = !this.revele;
      this.getFichiers(this.$data.searchValue).then((response) => {
        this.parseResult(response.data);
        console.log(this.$data.files);
      });
    },

    parseResult(data) {
      this.$data.files = [];
      data.forEach((content) => {
        if (content.nom == this.$data.searchValue) {
          const json = JSON.parse(JSON.stringify(content));
          this.$data.files.push({
            nom: json.nom,
            date: json.dateCreation,
            proprietaire: json.user,
          });
        }
      });
    },
    getFichiers(searchValue) {
      return FichierService.getFichiers(searchValue);
    },
  },

  components: {
    CurrentResearch: CurrentResearch,
  },

  name: "SearchBar",
};
</script>

<style lang="scss" scoped>
@import "../../../scss/common.scss";

div {
  width: 50%;
  display: flex;

  .input {
    width: 95%;
    border-top: 1px solid $color-text;
    border-left: 1px solid $color-text;
    border-bottom: 1px solid $color-text;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: none;
    outline: 0;
    padding: 7px;
    padding-left: 2%;
  }

  .input:focus {
    border-top: 1px solid $color-special;
    border-left: 1px solid $color-special;
    border-bottom: 1px solid $color-special;

    & + .btn {
      border-top: 1px solid $color-special;
      border-right: 1px solid $color-special;
      border-bottom: 1px solid $color-special;
    }
  }

  .btn {
    width: 5%;
    border-top: 1px solid $color-text;
    border-right: 1px solid $color-text;
    border-bottom: 1px solid $color-text;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    cursor: pointer;
    transition: background ease 0.15s, filter ease 0.15s;

    img {
      width: 75%;
    }

    &:hover {
      background: $color-button;

      img {
        filter: $filter-head;
      }
    }
  }
}
</style>
