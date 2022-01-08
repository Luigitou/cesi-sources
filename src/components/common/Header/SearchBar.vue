<template>
  <div>
    <input class="input" type="text" placeholder="Rechercher un fichier .." id="search" name="search"/>
    <button class="btn" type="submit"><img src="../../../assets/header/Search.svg"></button>
  </div>
</template>

<script>
export default {
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
