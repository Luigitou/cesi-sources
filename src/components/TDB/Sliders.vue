<template>
    <div class="Sliders">
       <p>{{Text}}</p>
       <div class="wrapperbasementImage">
         <div class="wrapperImages" v-for="images in Img" :key="images">
           <Images v-bind:Text='images["Text"]' />
         </div>
       </div>
       <div class="wrapperDot">

         <span class="dot" onclick="currentSlide(1)"></span>
         <span class="dot" onclick="currentSlide(2)"></span>
         <span class="dot" onclick="currentSlide(3)"></span>
       </div>  
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
  flex-direction: column;
  align-items: center;

p{
  text-decoration: underline;
}

.wrapperbasementImage{
  display: flex;
  flex-direction: row;
  justify-content: center;

  .wrapperImages{
      display:flex;
      flex-direction: row;
    }
  }
  .wrapperDot{
  display: flex;
  flex-direction: row;

    .dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #037682;
  transition: background-color 0.6s ease;

    &:hover {
  background-color: #FF914D;
      }
    }
  } 
}




</style>
