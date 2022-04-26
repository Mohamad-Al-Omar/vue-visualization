<template>
  <v-container class="dashboard">
    <v-row>
      <v-col>
        <v-card> <line-chart /></v-card>
      </v-col>
      <v-col>
        <v-card><bar-chart /> </v-card>
      </v-col>
      <v-col>
        <v-card><area-chart /> </v-card>
      </v-col>
      <v-col>
        <v-card><pie-chart /> </v-card>
      </v-col>
      <v-col>
        <v-card><radar-chart /> </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LineChart from "../components/chartjs/LineChart.vue";
import BarChart from "../components/chartjs/BarChart.vue";
import AreaChart from "../components/chartjs/AreaChart.vue";
import PieChart from "../components/chartjs/PieChart.vue";
import RadarChart from "../components/chartjs/RadarChart.vue";
export default {
  name: "DashboardView",
  components: {
    LineChart,
    BarChart,
    AreaChart,
    PieChart,
    RadarChart,
  },
};
</script>
