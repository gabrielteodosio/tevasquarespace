Plotly.setPlotConfig({ locale: "pt-BR" });

const CssSpinner = Vue.component('loading-css', {
  template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
});

Vue.config.devtools = true;
const app = new Vue({
  el: "#funds-app",
  data: () => ({
    topTen: [],
    loadingMetrics: true,
    quotesChart: {
      uuid: "quotes-chart",
      traces: [],
      layout: {
        showlegend: true,
        legend: {
          orientation: "h",
          x: 0.4, y: 1.2,
        },
        xaxis: {
          type: "date",
          tickformat: '%d/%m/%Y',
          autorange: true,
          rangeslider: {
            margintop: 50,
          },
          title: {
            text: "Data de referência",
          },
        },
        yaxis: {
          title: {
            text: "Valor do índice",
          },
        },
      },
      indexDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu lectus tincidunt, sodales diam in, dignissim lorem. Maecenas molestie et est at maximus. Sed non bibendum urna. Proin elementum justo massa, vel congue magna eleifend at. Curabitur accumsan nulla sit amet diam interdum accumsan. Nulla non arcu id lacus aliquet dapibus in ut massa. Aliquam fringilla sapien nunc, id lacinia enim aliquet non. Fusce pretium at nunc ac placerat.'
    },
  }),
  created() {
    this.processTWHL = processTickersWithHighRelevance.bind(this);
    this.processQuotes = processQuotes.bind(this);
  },
  mounted() {
    this.processTWHL();
    this.processQuotes();

    const chartConfig = {
      displayModeBar: false,
      responsive: true,
    };

    const { uuid, traces, layout } = this.quotesChart;
    Plotly.newPlot(uuid, traces, layout, chartConfig);
  },
});

/**
 * Sorts an array of objects by column/property.
 * @param {Array} array - The array of objects.
 * @param {object} sortObject - The object that contains the sort order keys with directions (asc/desc). e.g. { age: 'desc', name: 'asc' }
 * @returns {Array} The sorted array.
 */
function multiSort(array, sortObject = {}) {
  const sortKeys = Object.keys(sortObject);

  // Return array if no sort object is supplied.
  if (!sortKeys.length) {
    return array;
  }

  // Change the values of the sortObject keys to -1, 0, or 1.
  for (let key in sortObject) {
    sortObject[key] =
      sortObject[key] === "desc" || sortObject[key] === -1
        ? -1
        : sortObject[key] === "skip" || sortObject[key] === 0
        ? 0
        : 1;
  }

  const keySort = (a, b, direction) => {
    direction = direction !== null ? direction : 1;

    if (a === b) {
      // If the values are the same, do not switch positions.
      return 0;
    }

    // If b > a, multiply by -1 to get the reverse direction.
    return a > b ? direction : -1 * direction;
  };

  return array.sort((a, b) => {
    let sorted = 0;
    let index = 0;

    // Loop until sorted (-1 or 1) or until the sort keys have been processed.
    while (sorted === 0 && index < sortKeys.length) {
      const key = sortKeys[index];

      if (key) {
        const direction = sortObject[key];

        sorted = keySort(a[key], b[key], direction);
        index++;
      }
    }

    return sorted;
  });
}

function processTickersWithHighRelevance() {
  const processFile = (_err, rows) => {
    const unpack = (rows, key) => rows.map((row) => row[key]);

    const filteredData = rows.filter((r) => !/E-/gi.test(r["Peso teórico"]));
    const sortedData = multiSort(filteredData, {
      "Peso teórico": "desc",
      "Data de referência": "desc",
    });

    const topTen = sortedData.slice(0, 10);
    this.topTen = topTen;
    this.loadingMetrics = false;
  };

  Plotly.d3.csv(
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/ativos_com_maior_relevancia.csv",
    processFile
  );
}

function processQuotes() {
  const processFile = (err, rows) => {
    const unpack = (rows, key) => rows.map((row) => row[key]);

    const trace = {
      x: unpack(rows, "Data de referência"),
      y: unpack(rows, "Valor do índice"),
      type: "scatter",
      mode: "lines",
      name: "Índice Debêntures DI (Idex)",
      line: { color: "rgb(53,149,233)" },
    };

    this.quotesChart.traces = [trace];

    const { uuid, traces, layout } = this.quotesChart;
    Plotly.react(uuid, traces, layout);
  };

  Plotly.d3.csv(
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/cotacoes.csv",
    processFile
  );
}
