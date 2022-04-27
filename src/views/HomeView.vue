<template>
  <v-container class="dashboard">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <line-chart :chartData="lineData" :chartOptions="lineOptions" />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card><bar-chart /> </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card><area-chart /> </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card><pie-chart /> </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card
          ><doughnut-chart
            :chartData="doughnutData"
            :chartOptions="doughnutOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card><radar-chart /> </v-card>
      </v-col>
      <v-col cols="12">
        <data-table />
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
import DataTable from "../components/tables/DataTable.vue";
import DoughnutChart from "../components/chartjs/DoughnutChart.vue";
export default {
  name: "DashboardView",
  components: {
    LineChart,
    BarChart,
    AreaChart,
    PieChart,
    RadarChart,
    DoughnutChart,
    DataTable,
  },
  data() {
    return {
      lineOptions: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "My Data",
        },
      },
      lineData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data 1",
            data: [2, 10, 5, 9, 0, 6, 20],
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)",
          },
        ],
      },
      doughnutOptions: {
        borderWidth: "10px",
        hoverBackgroundColor: "red",
        hoverBorderWidth: "10px",
      },
      doughnutData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5],
          },
        ],
      },
    };
  },
};
</script>
