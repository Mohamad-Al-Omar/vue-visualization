<script>
import { Doughnut, mixins } from "vue-chartjs";

export default {
  name: "DoughnutChart",
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  props: ["chartData", "chartOptions"],
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>

<style></style>
