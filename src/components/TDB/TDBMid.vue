<template>
    <div class="TDBMid">
      <div class="wrapper" v-for="slider in Sliderlist " :key="slider">
       <Sliders v-bind:Text='slider["Text"]' v-bind:Img='slider["ImagesList"]' />
      </div>
    </div>
</template>


<script>
import Sliders from "./Sliders.vue"
//import test from "../../../src/assets/Accueil/Profile.png"

export default {
    name: 'TDBMid',
    components:{
        Sliders
    },
    data(){
        return{
            Sliderlist: [
                {  
                    Text: "Vos Favoris",
                    ImagesList: [
                        {
                            Text: "test"
                        },
                        {
                            Text: "test"
                        },
                        {
                            Text: "test"
                        }
                    ]
                },
                {
                    Text: "Recommandations",
                    ImagesList: [
                        {
                            Text: "test"
                        },
                        {
                            Text: "test"
                        },
                        {
                            Text: "test"
                        }
                    ]
                },
                {
                    Text: "Vos Fichier",
                    ImagesList: [
                        {
                            Text: "test"
                        },
                        {
                            Text: "test"
                        },
                        {
                            Text: "test"
                        }
                    ]
                }
            ]
        }
    }
};
</script>


<style lang="scss" scoped>

</style>
