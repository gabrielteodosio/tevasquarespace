const PlotlyChartComponent = Vue.component("founds-chart", {
  props: ["chart"],
  template: '<div :ref="chart.uuid"></div>',
  mounted() {
    const chartConfig = {
      displayModeBar: false,
      responsive: true,
    };

    Plotly.newPlot(
      this.$refs[this.chart.uuid],
      this.chart.traces,
      this.chart.layout,
      chartConfig
    );
  },
  watch: {
    chart: {
      deep: true,
      handler() {
        Plotly.react(
          this.$refs[this.chart.uuid],
          this.chart.traces,
          this.chart.layout
        );
      },
    },
  },
});

const app = new Vue({
  el: "#founds-app",
  data: () => ({
    chart: {
      uuid: new Date().getTime(),
      traces: [],
      layout: {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        xaxis: { autorange: true },
        yaxis: { autorange: true },
      },
    },
  }),
  created() {
    const trace = {
      type: "sunburst",
      labels: [
        "Eve",
        "Cain",
        "Seth",
        "Enos",
        "Noam",
        "Abel",
        "Awan",
        "Enoch",
        "Azura",
      ],
      parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve"],
      values: [10, 14, 12, 10, 2, 6, 6, 4, 4],
      outsidetextfont: { size: 20, color: "#377eb8" },
      leaf: { opacity: 0.4 },
      marker: { line: { width: 2 } },
    };

    this.chart.traces = [trace];
  },
  mounted() {},
});
