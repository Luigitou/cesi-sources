<template>
    <div class="Sliders">
         <p>{{Text}}</p>
      <div class="wrapperSliderImages">   
        <div class="wrapperImages" v-for="images in Img" :key="images">
          <Images v-bind:Text='images["Text"]' />
        </div>
      </div>   
      <div class="wrapperButton"> 
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
  justify-content: center;

    p{
      display: flex;
      justify-content: center;
      font-size: 1rem;
      text-decoration: underline;
    }

  .wrapperSliderImages{
    display: flex;
    justify-content: center;
    

    .wrapperImages{
      display: inline-block;
      flex-direction: row;
      width: auto;
    }
  }

  .wrapperButton{
    display: flex;
    flex-direction: row;
    justify-content: center;

      .dot {
        cursor: pointer;
        height: 1.5rem;
        width: 1.5rem;
        margin-right: 0.5rem;
        margin-bottom: 2rem;
        background-color: #037682;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.4s ease;
        
     }
        .active, .dot:hover {
        background-color: #FF914D;
    }
  }
}

</style>
