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
import test from "../../../src/assets/Accueil/Profile.png"
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
                            Text: test,
                            ID: 0
                        },
                        {
                            Text: test,
                            ID: 1
                        },
                        {
                            Text: test,
                            ID: 2
                        }
                    ]
                },
                {
                    Text: "Recommandations",
                    ID: 1,
                    ImagesList: [
                        {
                            Text: test,
                            ID: 0
                        },
                        {
                            Text: test,
                            ID: 1
                        },
                        {
                            Text: test,
                            ID: 2
                        }
                    ]
                },
                {
                    Text: "Vos Fichier",
                    ID: 2,
                    ImagesList: [
                        {
                            Text: test,
                            ID: 0
                        },
                        {
                            Text: test,
                            ID: 1
                        },
                        {
                            Text: test,
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