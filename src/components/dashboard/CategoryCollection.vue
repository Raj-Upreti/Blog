<template>
  
      <div>
        <h3 class="fw-bold">Lets view our Blog traffic here</h3>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
      </div>

</template>


<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import DashboardSidebar from './common/DashboardSidebar.vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar, DashboardSidebar },
  data() {
    return {
      chartData: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{ data: [40, 200, 120, 80, 150, 30, 400] }]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style></style>