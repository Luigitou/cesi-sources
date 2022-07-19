<template>
  <section>
    <div @click="$emit('click')" class="diff"><span>Niveau :</span> {{ level }}</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dd: "hh",
    };
  },
  props: {
    level: String,
    value: {},
  },
};
</script>

<style lang="scss" scoped>
.diff {
  margin: 2vw auto;
  color: #FF914D;

  span{
    color: #296870;
  }
}
</style>