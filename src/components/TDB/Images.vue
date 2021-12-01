<template>
    <div class="Images">
     <img v-bind:src="Text"/>
    </div>
</template>


<script>
export default {
    name: 'Images',
    props:{
        Text:String
    }
};
</script>


<style lang="scss" scoped>

</style>
