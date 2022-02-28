<template>
    <div class="Sliders">
         <p>{{Text}}</p>
      <div class="wrapperSliderImages">   
        <div class="wrapperImages" v-for="images in Img" :key="images">
          <div v-bind:class='IdActive===images["ID"]? "Fadein wrapperShow":"FadeOut wrapperShow"'>
            <Images 
                v-bind:Text='images["Text"]'
                v-bind:ID='images["ID"]'  
            />
          </div>
        </div>
      </div>   
      <div class="wrapperButton"> 
         <span class="dot" v-on:click="Image(0)"></span>
         <span class="dot" v-on:click="Image(1)"></span>
         <span class="dot" v-on:click="Image(2)"></span>
      </div>  
    </div>
</template>

<script>
import Images from "./Images.vue"
export default {
    data () {
      return {
        IdActive: 0
      }
    },
    name: 'Sliders',
    components:{
        Images
    },
    props:{
        Text:String,
        Img:Array,
        ID:Number
    },
    methods:{
      Image(id){
        console.log(id)
        console.log(this.$props.ID)
        this.$data.IdActive = id
      }
    }
};
</script>


<style lang="scss" scoped>
.Sliders{
    p{
      display: flex;
      justify-content: center;
      font-size: 1.2rem;
      color: #296870;
      font-family: sans-serif;
      font-weight: bold;
    }
  .wrapperSliderImages{
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    
    .wrapperImages{
      display: inline-block;
      flex-direction: row;
      
      .FadeOut{
        position: fixed;
        left: 200%;
        opacity: 0;
        transition: visibility 0s 0.5s, opacity 0.5s ease-in-out;
      }
      
      .Fadein {
        visibility: visible;
        opacity: 1;
        transition: opacity 0.5s ease-in-out;
      }
    }
  }
  .wrapperButton{
    display: flex;
    flex-direction: row;
    justify-content: center;
      .dot {
        cursor: pointer;
        height: 1rem;
        width: 1rem;
        margin-right: 0.5rem;
        margin-bottom: 0.9rem;
        background-color: #e0e6e7;
        border-radius: 50%;
        display: inline-block;
        transition: background-color 0.6s ease;
        transition: transform 250ms;
        
     }
        .active, .dot:hover {
        background-color: #FF914D;
        transform: translateY(-5px);
    }
    
  }
}
</style>
