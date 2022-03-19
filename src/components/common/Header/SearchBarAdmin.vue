<template>
  <div>
    <input class="input" type="text" placeholder="Rechercher..." id="search" name="search" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"/>
    <button class="btn" type="submit"><img src="../../../assets/SuperAdmin/chercher.png"></button>
  </div>
</template>

<script>
export default {
  name: "SearchBarAdmin",
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
};
</script>

<style lang="scss" scoped>
@import "../../../scss/common.scss";

div {

  width: 25%;
  display: flex;

  margin: -2rem 0rem 0rem 22rem;

  .input {
    width: 95%;
    border-top: 1px solid $color-special;
    border-left: 1px solid $color-special;
    border-bottom: 1px solid $color-special;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: none;
    outline: 0;
    padding: 7px;
    padding-left: 2%;
  }

  .btn {

    border-top: 1px solid $color-special;
    border-right: 1px solid $color-special;
    border-bottom: 1px solid $color-special;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    
    img {
      width: 75%;
    }

    &:hover {
      background: $color-special;
    }
  }
}

</style>
