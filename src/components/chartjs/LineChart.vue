<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
  methods: {
    updateChart() {
      this.$data._chart.update();
    },
  },
};
</script>
