<template>
  <v-container class="dashboard">
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="justify-center">Line Chart</v-card-title>
          <v-divider inset class="mx-auto"></v-divider>
          <v-switch
            v-model="updateLineChartData"
            label="Update Chart Data"
            class="ms-5"
          ></v-switch>
          <line-chart
            ref="lineChart"
            :chartData="lineData"
            :chartOptions="lineOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="justify-center">Bar Chart</v-card-title>
          <v-divider inset class="mx-auto"></v-divider>
          <v-switch
            v-model="updateBarChartData"
            label="Update Chart Data"
            class="ms-5"
          ></v-switch>
          <bar-chart
            ref="barChart"
            :chart-data="barData"
            :chart-options="barOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="justify-center">Area Chart</v-card-title>
          <v-divider inset class="mx-auto"></v-divider>
          <v-switch
            v-model="updateAreaChartData"
            label="Update Chart Data"
            class="ms-5"
          ></v-switch>
          <area-chart
            ref="areaChart"
            :chartData="areaData"
            :chartOptions="areaOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="justify-center">Pie Chart</v-card-title>
          <v-divider inset class="mx-auto"></v-divider>
          <v-switch
            v-model="updatePieChartData"
            label="Update Chart Data"
            class="ms-5"
          ></v-switch>
          <pie-chart
            ref="pieChart"
            :chartData="pieData"
            :chartOptions="pieOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="justify-center">Doughnut Chart</v-card-title>
          <v-divider inset class="mx-auto"></v-divider>
          <v-switch
            v-model="updateDoughnutChartData"
            label="Update Chart Data"
            class="ms-5"
          ></v-switch>
          <doughnut-chart
            ref="doughnutChart"
            :chartData="doughnutData"
            :chartOptions="doughnutOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-title class="justify-center">Doughnut Chart 2</v-card-title>
          <v-divider inset class="mx-auto"></v-divider>
          <v-switch
            v-model="updateDoughnutChartData2"
            label="Update Chart Data"
            class="ms-5"
          ></v-switch>
          <doughnut-chart
            ref="doughnutChart2"
            :chartData="doughnutData2"
            :chartOptions="doughnutOptions"
          />
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title class="justify-center">Radar Chart</v-card-title>
          <v-divider inset class="mx-auto"></v-divider>
          <v-switch
            v-model="updateRadarChartData"
            label="Update Chart Data"
            class="ms-5"
          ></v-switch>
          <radar-chart
            ref="radarChart"
            :chartData="radarData"
            :chartOptions="radarOptions"
          />
        </v-card>
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
      index: 0,
      lineIndex: 0,
      barIndex: 0,
      areaIndex: 0,
      pieIndex: 0,
      doughnutIndex: 0,
      doughnutIndex2: 0,
      radarIndex: 0,
      updateLineChartData: false,
      lineInterval: null,
      updateBarChartData: false,
      barInterval: null,
      updateAreaChartData: false,
      areaInterval: null,
      updatePieChartData: false,
      pieInterval: null,
      updateDoughnutChartData: false,
      updateDoughnutChartData2: false,
      doughnutInterval: null,
      doughnutInterval2: null,
      updateRadarChartData: false,
      radarInterval: null,
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
      barOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      barData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
        ],
      },
      areaOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      areaData: {
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
            label: "Data One",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [40, 39, 10, 40, 39, 80, 40],
          },
          {
            label: "Data Two",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient2,
            data: [60, 55, 32, 10, 2, 12, 53],
          },
        ],
      },
      pieOptions: {
        tooltips: {
          enabled: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              let percentage = ((value * 100) / sum).toFixed(2) + "%";
              return percentage;
            },
            color: "#fff",
          },
        },
      },
      pieData: {
        labels: ["Books", "Magazines", "Newspapers"],
        datasets: [
          {
            backgroundColor: ["yellow", "blue", "red"],
            data: [40, 20, 10],
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
      doughnutData2: {
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
      radarOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
      radarData: {
        labels: [
          "Eating",
          "Drinking",
          "Sleeping",
          "Designing",
          "Coding",
          "Cycling",
          "Running",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [65, 59, 90, 81, 56, 55, 40],
          },
          {
            label: "My Second dataset",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [28, 48, 40, 19, 96, 27, 100],
          },
        ],
      },
    };
  },
  created() {
    this.updateLineChartData = true;
    this.updateBarChartData = true;
    this.updateAreaChartData = true;
    this.updatePieChartData = true;
    this.updateDoughnutChartData = true;
    this.updateDoughnutChartData2 = true;
    this.updateRadarChartData = true;
  },
  watch: {
    updateLineChartData: function (newVal) {
      if (newVal === true) {
        this.lineInterval = setInterval(() => {
          this.generateLineData(this.lineIndex);
          this.lineIndex++;
          this.lineIndex = this.lineIndex == 6 ? 0 : this.lineIndex;
        }, 4000);
      } else if (newVal === false) {
        clearInterval(this.lineInterval);
      }
    },
    updateBarChartData: function (newVal) {
      if (newVal === true) {
        this.barInterval = setInterval(() => {
          this.generateBarData(this.barIndex);
          this.barIndex++;
          this.barIndex = this.barIndex == 12 ? 0 : this.barIndex;
        }, 4000);
      } else if (newVal === false) {
        clearInterval(this.barInterval);
      }
    },
    updateAreaChartData: function (newVal) {
      if (newVal === true) {
        this.areaInterval = setInterval(() => {
          this.generateAreaData(this.areaIndex);
          this.areaIndex++;
          this.areaIndex = this.areaIndex == 7 ? 0 : this.areaIndex;
        }, 4000);
      } else if (newVal === false) {
        clearInterval(this.areaInterval);
      }
    },
    updatePieChartData: function (newVal) {
      if (newVal === true) {
        this.pieInterval = setInterval(() => {
          this.generatePieData(this.pieIndex);
          this.pieIndex++;
          this.pieIndex = this.pieIndex == 3 ? 0 : this.pieIndex;
        }, 4000);
      } else if (newVal === false) {
        clearInterval(this.pieInterval);
      }
    },
    updateDoughnutChartData(newVal) {
      if (newVal === true) {
        this.doughnutInterval = setInterval(() => {
          this.generateDoughnutData(this.doughnutIndex);
          this.doughnutIndex++;
          this.doughnutIndex = this.doughnutIndex == 3 ? 0 : this.doughnutIndex;
        }, 4000);
      } else if (newVal === false) {
        clearInterval(this.doughnutInterval);
      }
    },
    updateDoughnutChartData2(newVal) {
      if (newVal === true) {
        this.doughnutInterval2 = setInterval(() => {
          this.generateDoughnutData2(this.doughnutIndex2);
          this.doughnutIndex2++;
          this.doughnutIndex2 =
            this.doughnutIndex2 == 3 ? 0 : this.doughnutIndex2;
        }, 4000);
      } else if (newVal === false) {
        clearInterval(this.doughnutInterval2);
      }
    },
    updateRadarChartData(newVal) {
      if (newVal === true) {
        this.radarInterval = setInterval(() => {
          this.generateRadarData(this.radarIndex);
          this.radarIndex++;
          this.radarIndex = this.radarIndex == 7 ? 0 : this.radarIndex;
        }, 4000);
      } else if (newVal === false) {
        clearInterval(this.radarInterval);
      }
    },
  },
  computed: {
    getBarData() {
      return this.barData;
    },
  },
  methods: {
    generateLineData(index) {
      for (let i = 0; i < 6; i++) {
        if (i == index) {
          this.lineData.datasets[0].data[i] = Math.floor(Math.random() * 100);
        } else {
          // eslint-disable-next-line no-self-assign
          this.lineData.datasets[0].data[i] = this.lineData.datasets[0].data[i];
        }
      }
      this.$refs.lineChart.updateChart();
      console.log(`Line Chart ${index} => updated`);
    },
    generateBarData(index) {
      for (let i = 0; i < 12; i++) {
        if (i == index) {
          this.barData.datasets[0].data[i] = Math.floor(Math.random() * 100);
        } else {
          // eslint-disable-next-line no-self-assign
          this.barData.datasets[0].data[i] = this.barData.datasets[0].data[i];
        }
      }
      this.$refs.barChart.updateChart();
      console.log(`Bar Chart ${index} => updated`);
    },
    generateAreaData(index) {
      for (let i = 0; i < 6; i++) {
        if (i == index) {
          this.areaData.datasets[0].data[i] = Math.floor(Math.random() * 100);
          this.areaData.datasets[1].data[i] = Math.floor(Math.random() * 100);
        } else {
          // eslint-disable-next-line no-self-assign
          this.areaData.datasets[0].data[i] = this.areaData.datasets[0].data[i];
          // eslint-disable-next-line no-self-assign
          this.areaData.datasets[1].data[i] = this.areaData.datasets[1].data[i];
        }
      }
      this.$refs.areaChart.updateChart();
      console.log(`Area Chart ${index} => updated`);
    },
    generatePieData(index) {
      for (let i = 0; i < 4; i++) {
        if (i == index) {
          this.pieData.datasets[0].data[i] = Math.floor(Math.random() * 100);
        } else {
          // eslint-disable-next-line no-self-assign
          this.pieData.datasets[0].data[i] = this.pieData.datasets[0].data[i];
        }
      }
      this.$refs.pieChart.updateChart();
      console.log(`Pie Chart ${index} => updated`);
    },
    generateDoughnutData(index) {
      for (let i = 0; i < 4; i++) {
        if (i == index) {
          this.doughnutData.datasets[0].data[i] = Math.floor(
            Math.random() * 100
          );
        } else {
          // eslint-disable-next-line no-self-assign
          this.doughnutData.datasets[0].data[i] =
            // eslint-disable-next-line no-self-assign
            this.doughnutData.datasets[0].data[i];
        }
      }
      this.$refs.doughnutChart.updateChart();
      console.log(`Doughnut Chart ${index} => updated`);
    },
    generateDoughnutData2(index) {
      for (let i = 0; i < 4; i++) {
        if (i == index) {
          this.doughnutData2.datasets[0].data[i] = Math.floor(
            Math.random() * 100
          );
        } else {
          // eslint-disable-next-line no-self-assign
          this.doughnutData2.datasets[0].data[i] =
            // eslint-disable-next-line no-self-assign
            this.doughnutData2.datasets[0].data[i];
        }
      }
      this.$refs.doughnutChart2.updateChart();
      console.log(`Doughnut Chart ${index} => updated`);
    },
    generateRadarData(index) {
      for (let i = 0; i < 6; i++) {
        if (i == index) {
          this.radarData.datasets[0].data[i] = Math.floor(Math.random() * 100);
        } else {
          // eslint-disable-next-line no-self-assign
          this.radarData.datasets[0].data[i] =
            // eslint-disable-next-line no-self-assign
            this.radarData.datasets[0].data[i];
        }
      }
      this.$refs.radarChart.updateChart();
      console.log(`Radar Chart ${index} => updated`);
    },
  },
};
</script>
