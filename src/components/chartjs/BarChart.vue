<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  extends: Bar,
  mixins: [reactiveProp],
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
    reRenderChart() {
      this.renderChart(this.chartData, this.chartOptions);
    },
    updateChart() {
      this.$data._chart.update();
    },
  },
};
</script>
