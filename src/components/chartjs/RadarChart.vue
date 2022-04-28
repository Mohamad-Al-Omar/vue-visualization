<script>
import { Radar } from "vue-chartjs";

export default {
  extends: Radar,
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
