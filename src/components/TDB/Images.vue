<template>
    <div class="Images">
      <img v-bind:src="Text"/>
    </div>
</template>


<script>
export default {
    name: 'Images',
    props:{
        Text:String,
        ID:Number
    }
};
</script>


<style lang="scss" scoped>
.Images{
    img{
        height: 11rem;
        width: 30rem;
        border-radius: 10px;
    }
}
</style>