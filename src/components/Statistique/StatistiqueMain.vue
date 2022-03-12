<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
export default {
    name: 'StatistiqueMain',
    components: {
        Vue3ChartJs,
    },
    data(){
        return{
            utiliseP: '35',
            libreP: '65',
            nombreInteraction: '1000',
        }
    },
    setup() {
        const pieChart = {
            type: "pie",
            data: {
                labels: ["Amis", "Famille"],
                datasets: [
                {
                    backgroundColor: ["#296870", "#FF914D"],
                    data: [80, 20],
                },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                }
            }
        };
        const lineChart = {
            type: "line",
            data: {
                labels: ["Octobre", "Novembre", "Décembre", "Janvier"],
                datasets: [
                {
                    label: "Nombre d'utilisateurs",
                    borderColor: "#FF914D",
                    backgroundColor: "#FF914D",
                    data: [80, 20, 50, 100],
                    fill: false
                },
                
                ],
            },
            options: {
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels:{
                            padding: 40
                        },
                    },
                }
            }
        };
        return {
            pieChart,
            lineChart
        }
    }
}
</script>

<template>
    <div class="statistique">
      <div class="special_pie">
        <div class="container1">
          <div class="stockage">
            <h3 id="title-stockage">Stockage</h3>
            <div class="stockage-info">
              <div>
                  <p id="utilise">Utilisé</p>
                  <p id="utilise-p">{{ utiliseP }}%</p>
              </div>
              <div>
                  <p id="libre">Libre</p>
                  <p id="libre-p">{{ libreP }}%</p>
              </div>
            </div>
          </div>
          <br>
          <div class="interaction">
            <h3 id="title-interaction">Interactions</h3>
            <div class="interaction-info">
              <p id="nombre-interaction">+{{ nombreInteraction }}</p>
            </div>
          </div>
        </div>
        
         <div class="pie">
            <h3>Types de relations</h3>
            <vue3-chart-js v-bind="{ ...pieChart }" />
          </div>
        </div>

        <div class="container2">
          <div class="line">
            <h3>Nombres d'inscription</h3>
            <vue3-chart-js v-bind="{ ...lineChart }" />
          </div>

          <!-- <div class="ressources"> -->
            <div class="container-ressources">
              <h3>Répartition des ressources</h3>
              <p>Images</p>
              <div class="ressource-container">
                  <div class="ressource image">60%</div>
              </div>

              <p>Vidéos</p>
              <div class="ressource-container">
                  <div class="ressource video">15%</div>
              </div>

              <p>Fichiers PDF</p>
              <div class="ressource-container">
                  <div class="ressource pdf">25%</div>
              </div>
            </div>  
          <!-- </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../scss/common.scss";
    .statistique{
      background-color: #FAFAFA;
    }

    .container1{
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
      margin-right: 4rem;
      gap: 5%;
    }

    .stockage{
      width: 33rem;
      background-color: #FFF;
      border-radius: 0.2rem;
    }

    #title-stockage{
      text-align: center;
      padding-top: 0.2rem;
    }
    
    .stockage-info{
      display: flex;
      margin: -1rem 0rem 0rem 0rem;
      justify-content: space-around;
    }
    
    #utilise-p, #libre-p{
      color: $color-special;
      text-align: center;
    } 
    
    .interaction{
      width: 33rem;
      background-color: #FFF;
      border-radius: 0.2rem;
    }
    
    #title-interaction{
      text-align: center;
      padding-top: 0.5rem;
    }
    
    .interaction-info{
      display: flex;
      margin: 0.5rem 0rem 0rem 0rem;
      justify-content: space-around;
    }
    
    #nombre-interaction{
      color: $color-special;
      text-align: center;
    } 

    .special_pie{
      display: flex;
      justify-content: space-evenly;
      padding-top: 2%;
      flex-wrap: wrap;
      align-content: flex-start;
    }

    .pie{
      background-color: #FFF;
      width: 20%;
      padding: 3.2%;
      h3{
          text-align: center;
          margin: 0rem 0rem 2rem 0rem;
      }
    }

    .container2{
      display: flex;
      justify-content: space-evenly;
      padding-top: 2%;
      padding-bottom: 2%;
      flex-wrap: wrap;
    }
    
    .line{
      background-color: #FFF;
      width: 30%;
      // height: 30%;
      padding: 2rem;
      h3{
          text-align: center;
          margin-bottom: 2rem;
      }
    }

    // .ressources{
    //   display: flex;
    //   flex: 1 1 160px;
    // }
    
    .container-ressources{
      width: 30%;
      padding: 1rem;
      background-color: #FFF;
      h3{
          text-align: center;
      }
    }
    .ressource-container{
      width: 100%;
      background: #ddd;
    }
    
    .ressource{
      text-align: right;
      padding-top: 10px;
      padding-bottom: 10px;
      color: white;
      height: 1rem;
    }
    
    .image{
      width: 90%;
      background-color: $color-text;
    }
    
    .video{
      width: 80%;
      background-color: $color-special;
    }
    
    .pdf{
      width: 85%;
      background-color: $color-button;
    }

@media only screen and (max-width: 890px) {
  .statistique{
    width: 150%;
  }

  .pie{
    margin-top: 3rem;
    width: 50%;
  }

  .line{
    width: 100%;
  }

  .container-ressources{
    width: 100%;
    padding-top: 2rem;
  }
}

</style>