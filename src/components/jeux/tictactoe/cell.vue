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
  color: #FF914D;
}
.yy {
  color: #296870;
}
.cell {
  display: flex;
  flex-basis: 100%;
  border-radius: 10%;
  margin: 5px 5px 10px 5px;
  background-color: #EFFAFF;
  border: 1px solid #296870;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>