<template>
    <div class="TDBMid">
      <div class="wrapper" v-for="slider in Sliderlist " :key="slider">
       <Sliders 
            v-bind:Text='slider["Text"]' 
            v-bind:Img='slider["ImagesList"]' 
            v-bind:ID='slider["ID"]' 
        />
      </div>
    </div>
</template>


<script>
import Sliders from "./Sliders.vue"
import test1 from "../../../src/assets/TDB/Recommandations/image1.jpg"
import test2 from "../../../src/assets/TDB/Recommandations/image2.jpg"
import test3 from "../../../src/assets/TDB/Recommandations/image3.jpg"
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
                    ID: 0,
                    ImagesList: [
                        {
                            Text: test1,
                            ID: 0
                        },
                        {
                            Text: test2,
                            ID: 1
                        },
                        {
                            Text: test3,
                            ID: 2
                        }
                    ]
                },
                {
                    Text: "Recommandations",
                    ID: 1,
                    ImagesList: [
                        {
                            Text: test1,
                            ID: 0
                        },
                        {
                            Text: test2,
                            ID: 1
                        },
                        {
                            Text: test3,
                            ID: 2
                        }
                    ]
                },
                {
                    Text: "Vos Fichier",
                    ID: 2,
                    ImagesList: [
                        {
                            Text: test1,
                            ID: 0
                        },
                        {
                            Text: test2,
                            ID: 1
                        },
                        {
                            Text: test3,
                            ID: 2
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