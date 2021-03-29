Plotly.setPlotConfig({ locale: "pt-BR" });

const csvsUrls = {
  higherRelevance:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/ativos_com_maior_relevancia.csv",
  quotes:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/cotacoes.csv",
  standardDeviation:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/desvio_padrao.csv",
  sharpeIndex:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/indice_sharpe.csv",
  convexity:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/convexidade.csv",
  duration:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/duration.csv",
  modifiedDuration:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/duration_modificada.csv",
  yieldToMaturity:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/yield_to_maturity.csv",
  anualReturn:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/retorno_anual.csv",
  turnOverLTM:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/turnover_ltm.csv",
  indexExposition:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/exposicao_por_indexador.csv",
  ticksNumber:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/numero_de_ativos.csv",
  repactuationMedia:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/prazo_medio_de_repactuacao.csv",
  turnover:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/turnover.csv",
  dueDateExposition:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/exposicao_por_vencimento.csv",
  periodicsReturn:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/retorno_periodos.csv",
  monthlyReturn:
    "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/retorno_mensal.csv",
  // ticksNumber:
  //   "https://raw.githubusercontent.com/gabrielteodosio/tevasquarespace/master/csv/indice_debentures_alta_liquidez__50%25_de_negociacao_nos_ultimos_dois_meses_e_5mm_de_negociacao_nos_ultimos_dois_meses__precificacao_anbima_v0_94/numero_de_ativos.csv",
};

const CssSpinner = Vue.component("loading-css", {
  template:
    '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
});

Vue.config.devtools = true;
const app = new Vue({
  el: "#funds-app",
  data: () => {
    const selectorOptions = {
      buttons: [
        {
          step: "week",
          stepmode: "backward",
          count: 1,
          label: "1S",
        },
        {
          step: "month",
          stepmode: "backward",
          count: 1,
          label: "1M",
        },
        {
          step: "month",
          stepmode: "backward",
          count: 3,
          label: "3M",
        },
        {
          step: "year",
          stepmode: "backward",
          count: 1,
          label: "1A",
        },
        {
          step: "year",
          stepmode: "todate",
          count: 1,
          label: "YTD",
        },
        {
          step: "all",
          label: "MAX"
        },
      ],
    };

    return {
      topTen: [],
      convexity: {},
      duration: {},
      modifiedDuration: {},
      yieldToMaturity: {},
      turnOverLTM: null,
      ticksNumber: {},
      repactuationMedia: {},
      anualReturn: [],
      loadingMetrics: true,
      standardDeviation: [],
      anualReturn: [],
      sharpeIndex: [],
      indexExposition: [],
      quotesChart: {
        uuid: "quotes-chart",
        traces: [],
        layout: {
          hovermode: "x unified",
          hoverlabel: {
            bgcolor: "#000",
            font: {
              family: "halyard-display, Arial, sans-serif",
              color: "#fff",
            },
          },
          showlegend: true,
          legend: {
            orientation: "h",
            x: 0.4,
            y: 1.2,
          },
          xaxis: {
            type: "date",
            showline: true,
            autorange: true,
            showgrid: false,
            ticks: 'outside',
            // tickformat: "%d/%m/%Y",
            rangeslider: { margintop: 50 },
            rangeselector: selectorOptions,
            title: { text: "Data de referência" },
          },
          yaxis: {
            zeroline: true,
            title: { text: "Cotação do índice" },
          },
        },
        indexDesc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu lectus tincidunt, sodales diam in, dignissim lorem. Maecenas molestie et est at maximus. Sed non bibendum urna. Proin elementum justo massa, vel congue magna eleifend at. Curabitur accumsan nulla sit amet diam interdum accumsan. Nulla non arcu id lacus aliquet dapibus in ut massa. Aliquam fringilla sapien nunc, id lacinia enim aliquet non. Fusce pretium at nunc ac placerat.",
      },
    };
  },
  created() {
    this.processTWHL = processTickersWithHighRelevance.bind(this);
    this.processQuotes = processQuotes.bind(this);
    this.processStandardDeviation = processStandardDeviation.bind(this);
    this.processSharpeIndex = processSharpeIndex.bind(this);
    this.processConvexity = processConvexity.bind(this);
    this.processDuration = processDuration.bind(this);
    this.processModifiedDuration = processModifiedDuration.bind(this);
    this.processYieldToMaturity = processYieldToMaturity.bind(this);
    this.processAnualReturn = processAnualReturn.bind(this);
    this.processTurnOverLTM = processTurnOverLTM.bind(this);
    this.processIndexExposition = processIndexExposition.bind(this);
    this.processTicksNumber = processTicksNumber.bind(this);
    this.processRepactuationMedia = processRepactuationMedia.bind(this);

    this.numberToPercentalDecimalsDigits = numberToPercentalDecimalsDigits.bind(
      this
    );
    this.numberToDecimalsDigits = numberToDecimalsDigits.bind(this);
  },
  mounted() {
    this.processTWHL();
    this.processQuotes();
    this.processStandardDeviation();
    this.processSharpeIndex();
    this.processConvexity();
    this.processDuration();
    this.processModifiedDuration();
    this.processYieldToMaturity();
    this.processAnualReturn();
    this.processTurnOverLTM();
    this.processIndexExposition();
    this.processTicksNumber();
    this.processRepactuationMedia();

    const chartConfig = {
      locale: "pt-BR",
      responsive: true,
      displayModeBar: false,
    };

    const { uuid, traces, layout } = this.quotesChart;
    Plotly.newPlot(uuid, traces, layout, chartConfig);
  },
});

// read files functions

function processTickersWithHighRelevance() {
  const processFile = (_err, rows) => {
    let highestDate = "1900-01-01";
    const data = rows.filter((row) => {
      highestDate =
        row["Data de referência"] > highestDate
          ? row["Data de referência"]
          : highestDate;
      return !/E-/gi.test(row["Peso teórico"]);
    });
    const sortedData = multiSort(data, {
      "Peso teórico": "desc",
      "Data de referência": "desc",
    });

    const filteredData = sortedData.filter(
      (data) => data["Data de referência"] == highestDate
    );

    const topTen = filteredData.slice(0, 10);
    this.topTen = topTen;
    this.loadingMetrics = false;
  };

  Plotly.d3.csv(csvsUrls.higherRelevance, processFile);
}

function processQuotes() {
  const processFile = (_err, rows) => {
    const unpack = (rows, key) => rows.map((row) => row[key]);

    const trace = {
      mode: "lines",
      type: "scatter",
      line: { color: "rgb(53,149,233)" },
      name: "Índice Debêntures DI (Idex)",

      y: unpack(rows, "Valor do índice"),
      x: unpack(rows, "Data de referência"),

      showlegend: false,
      hovertemplate: "%{y:6,.2f}",
    };

    this.quotesChart.traces = [trace];

    const { uuid, traces, layout } = this.quotesChart;
    Plotly.react(uuid, traces, layout);
  };

  Plotly.d3.csv(csvsUrls.quotes, processFile);
}

function processStandardDeviation() {
  const processFile = (_err, rows) => (this.standardDeviation = rows);
  Plotly.d3.csv(csvsUrls.standardDeviation, processFile);
}

function processSharpeIndex() {
  const processFile = (_err, rows) => (this.sharpeIndex = rows);
  Plotly.d3.csv(csvsUrls.sharpeIndex, processFile);
}

function processSharpeIndex() {
  const processFile = (_err, rows) => (this.sharpeIndex = rows);
  Plotly.d3.csv(csvsUrls.sharpeIndex, processFile);
}

function processConvexity() {
  const processFile = (_err, rows) => (this.convexity = rows[rows.length - 1]);
  Plotly.d3.csv(csvsUrls.convexity, processFile);
}

function processDuration() {
  const processFile = (_err, rows) => (this.duration = rows[rows.length - 1]);
  Plotly.d3.csv(csvsUrls.duration, processFile);
}

function processModifiedDuration() {
  const processFile = (_err, rows) =>
    (this.modifiedDuration = rows[rows.length - 1]);
  Plotly.d3.csv(csvsUrls.modifiedDuration, processFile);
}

function processYieldToMaturity() {
  const processFile = (_err, rows) =>
    (this.yieldToMaturity = rows[rows.length - 1]);
  Plotly.d3.csv(csvsUrls.yieldToMaturity, processFile);
}

function processAnualReturn() {
  const processFile = (_err, rows) => (this.anualReturn = rows);
  Plotly.d3.csv(csvsUrls.anualReturn, processFile);
}

function processTurnOverLTM() {
  const processFile = (_err, rows) =>
    (this.turnOverLTM = rows[rows.length - 1]["Turnover"]);
  Plotly.d3.csv(csvsUrls.turnOverLTM, processFile);
}

function processIndexExposition() {
  const processFile = (_err, rows) => {
    let highestDate = "1900-01-01";
    const data = rows.filter((row) => {
      highestDate =
        row["Data de referência"] > highestDate
          ? row["Data de referência"]
          : highestDate;
      return !/E-/gi.test(row["Exposição"]);
    });

    this.indexExposition = data.filter(
      (data) => data["Data de referência"] == highestDate
    );
  };
  Plotly.d3.csv(csvsUrls.indexExposition, processFile);
}

function processTicksNumber() {
  const processFile = (_err, rows) => {
    const sortedData = multiSort(rows, { "Data de referência": "desc" });
    this.ticksNumber = sortedData[0];
  };
  Plotly.d3.csv(csvsUrls.ticksNumber, processFile);
}

function processRepactuationMedia() {
  const processFile = (_err, rows) => {
    const sortedData = multiSort(rows, { "Data de referência": "desc" });
    console.log({ rows, sortedData });
    this.repactuationMedia = sortedData[0];
  };
  Plotly.d3.csv(csvsUrls.repactuationMedia, processFile);
}

// utlity functions

function numberToPercentalDecimalsDigits(number, digits) {
  const numberString = ("" + number).slice(0, 12);
  const decimalDigits = (parseFloat(numberString) * 100).toFixed(digits);
  return ("" + decimalDigits).replaceAll(".", ",");
}

function numberToDecimalsDigits(number, digits) {
  const numberString = ("" + number).slice(0, 12);
  const decimalDigits = parseFloat(numberString).toFixed(digits);
  return ("" + decimalDigits).replaceAll(".", ",");
}

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
