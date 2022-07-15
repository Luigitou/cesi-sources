<template>
  <section>
    <input type="radio"/>
    <label>
      {{ level }}
    </label>
    <div @click="$emit('click')" class="diff">{{ level }}</div>
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
    opt: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    value: {},
  },
};
</script>

<style lang="scss" scoped>
.diff {
  margin: 2vw auto;
  width: 20vw;
  align-items: center;
  color: #A28BA4;
  border-radius: 25px;
  border: 2px solid #6E272F;
}
</style>