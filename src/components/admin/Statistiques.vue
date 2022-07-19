<template>
   <div class="statistique">
    <div class="graph">
      <Chart type="doughnut" :data="chartData" :options="lightOptions" />
    </div>
    <br>
    <div class="pourcentage">
      <div class="image_pourcent">
        <h3>Images</h3>
        <br>
        <ProgressBar :value="nombreImages" />
      </div>
      <br>
      <div class="document_pourcent">
        <h3>Documents</h3>
        <br>
        <ProgressBar :value="nombreDocuments" />
      </div>
      <br>
      <div class="video_pourcent">
        <h3>Vidéos</h3>
        <br>
        <ProgressBar :value="nombreVideos" />
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'primevue/chart';
import ProgressBar from 'primevue/progressbar';

export default{
  name: 'statistiques',
  components: {
    Chart,
    ProgressBar
  },
  props: {
    nombreImages: Number,
    nombreDocuments: Number,
    nombreVideos: Number
  },
  data() {
    return {
      chartData: {
        labels: ['Images','Vidéos','Documents'],
        datasets: [
          {
            data: [this.$store.state.nombreImages, this.$store.state.nombreDocuments, this.$store.state.nombreVideos],
            backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],
            hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]
          }
        ]
      },
			lightOptions: {
				plugins: {
          legend: {
              labels: {
                color: '#495057'
              }
          }
        }
			}
    }
  }
}
</script>

<style lang="scss" scoped>

.statistique{
  border: 1px solid #dedddd;
  border-radius: 10px;
  padding: 30px;

  .graph{
    width: 15rem;
  }
}

@media (max-width: 443px) {
 .statistique{
    display: none;
  }
}
</style>