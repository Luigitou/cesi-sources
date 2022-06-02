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
        <ProgressBar :value="image" />
      </div>
      <br>
      <div class="document_pourcent">
        <h3>Documents</h3>
        <br>
        <ProgressBar :value="document" />
      </div>
      <br>
      <div class="video_pourcent">
        <h3>Vidéos</h3>
        <br>
        <ProgressBar :value="video" />
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
  data() {
    return {
      chartData: {
        labels: ['Images','Vidéos','Documents'],
        datasets: [
          {
            data: [3000, 500, 2500],
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
			},
      image: 60,
      document: 30,
      video: 10 
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
</style>