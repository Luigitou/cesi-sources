<template>
  <div @click="$emit('click')" class="cell">
    <div v-if="value !== ''">
      <div v-if="value == 'x'">
        <span class="xx">{{ value }}</span>
      </div>
      <div v-else>
        <span class="yy">{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
};
</script>

<style lang="scss" scoped>
.xx {
  color: #41385F;
}
.yy {
  color: #C89298;
}
.cell {
  display: flex;
  flex-grow: 1;
  flex-basis: 100%;
  border: 0.05em solid #866488;
  border-radius: 10%;
  box-shadow: inset 0.5em 0.5em 0.5em #A28AA5, inset -0.5em -0.5em 0.5em #846388;

  width: calc(calc(0.5 * 13vw) + calc(0.3 * 10vh));
  height: calc(calc(0.5 * 13vw) + calc(0.3 * 10vh));
  min-width: 8vw;
  min-height: 8vw;
  max-width: calc(calc(0.7 * 15vw) + calc(0.3 * 15vh));
  max-height: calc(calc(0.7 * 15vw) + calc(0.3 * 15vh));
  /* border: 3px solid #A28BA4; */
  font-size: calc(calc(0.5 * 14vw) + calc(0.2 * 12vh));
  display: flex;
  align-items: center;

  justify-content: center;
}
</style>