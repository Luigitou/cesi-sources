<template>
    <div class="Sliders">
       <p>{{Text}}</p>
       <div class="wrapperImages" v-for="images in Img" :key="images">
         <Images v-bind:Text='images["Text"]' />
       </div>
       
        <span class="dot" onclick="currentSlide(1)"></span>
      <span class="dot" onclick="currentSlide(2)"></span>
      <span class="dot" onclick="currentSlide(3)"></span>
    </div>
</template>

<script>
import Images from "./Images.vue"

export default {
    name: 'Sliders',
    components:{
        Images
    },
    props:{
        Text:String,
        Img:String
    }
};
</script>


<style lang="scss" scoped>

.Sliders{
  display: flex;
  justify-content: center;

  .wrapperImages{
      display:flex;
      flex-direction: row;
  }

  span {
      display: block;
  }
}

</style>
