<template>
<CurrentResearch v-bind:revele="revele" v-bind:inputVal="inputVal" v-bind:list="list" v-bind:toggleCurrentResearch="toggleCurrentResearch"></CurrentResearch>
  <div>
    <input class="input" type="text" v-model="inputVal" placeholder="Rechercher un fichier .." id="search" name="search"/>
    <button class="btn" v-on:click="toggleCurrentResearch" type="submit"><img src="../../../assets/header/Search.svg"></button>

  </div>
</template>

<script>
import CurrentResearch from "../../common/Header/CurrentResearch.vue"
import FichierService from '../../../services/FichierService'

export default {
  
  data() {
    return {
      revele: false,
      inputVal: "",
      list: [
                {
                    nom: "Photos",
                    date: "14/10/2021",
                    proprietaire: "Edomiyas"
                },

                {
                    nom: "logo.png",
                    date: "12/10/2021",
                    proprietaire: "Louis"
                },

                {
                    nom: "Vacances.jpg",
                    date: "19/10/2021",
                    proprietaire: "Imen"
                },

                {
                    nom: "Carte.txt",
                    date: "22/10/2021",
                    proprietaire: "Yannis"
                },
      ]
    }
  },

  components : {
        'CurrentResearch' : CurrentResearch
    },
    methods: {
        toggleCurrentResearch: function() {
            this.revele=!this.revele
        },
        getFichiers(){
            FichierService.getFichiers().then((response) => {
                this.parseData(response.data);   
            });
        },
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
    transition: background ease .15s, filter ease .15s;

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
