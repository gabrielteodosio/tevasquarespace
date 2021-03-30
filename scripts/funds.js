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

const lang = {
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  weekdays: [
    "Domingo",
    "Seguda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ],
  shortMonths: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  shortWeekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
};

Highcharts.setOptions({ lang });

const CssSpinner = Vue.component("loading-css", {
  template:
    '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
});

Vue.config.devtools = true;
const app = new Vue({
  el: "#funds-app",
  data: () => ({
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
      indexDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu lectus tincidunt, sodales diam in, dignissim lorem. Maecenas molestie et est at maximus. Sed non bibendum urna. Proin elementum justo massa, vel congue magna eleifend at. Curabitur accumsan nulla sit amet diam interdum accumsan. Nulla non arcu id lacus aliquet dapibus in ut massa. Aliquam fringilla sapien nunc, id lacinia enim aliquet non. Fusce pretium at nunc ac placerat.",
    },
  }),
  created() {
    this.processQuotes = processQuotes.bind(this);
    this.processTWHL = processTickersWithHighRelevance.bind(this);
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

    this.numberToPercentalDecimalsDigits = numberToPercentalDecimalsDigits.bind(this);
    this.numberToDecimalsDigits = numberToDecimalsDigits.bind(this);
  },
  mounted() {
    this.processQuotes();
    this.processTWHL();
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
  },
});

// read files functions

function processTickersWithHighRelevance() {
  const processFile = (rows) => {
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

  d3.csv(csvsUrls.higherRelevance).then(processFile);
}

function processQuotes() {
  const processData = (rows) => {
    // const unpack = (rows, key) => rows.map((row) => row[key]);
    const xAxis = "Data de referência";
    const yAxis = "Valor do índice";

    const trace = {
      lineWidth: 1,
      showInNavigator: true,
      marker: { enabled: true },
      name: "Índice Debêntures DI (Idex)",
      data: rows.map((row) => [
        new Date(row[xAxis]).getTime(),
        parseFloat(row[yAxis]),
      ]),
    };

    this.quotesChart.traces = [trace];

    const quotesChart = Highcharts.stockChart("quotes-chart", {
      chart: { type: "area" },
      series: [trace],
      scrollbar: { enabled: true },
      navigator: {
        series: [
          Object.assign({}, trace, {
            marker: { enabled: false },
          }),
        ],
        xAxis: {
          labels: {
            formatter: function () {
              return Highcharts.dateFormat("%b/%y", this.value);
            },
          },
        },
        enabled: true,
      },
      legend: {
        align: "right",
        layout: "vertical",
        verticalAlign: "middle",
      },
      tooltip: {
        // valueDecimals: 2,
        // xDateFormat: '%d-%m-%Y',
        formatter: function () {
          return (
            "<span>Data de referência: </span><b>" +
            Highcharts.dateFormat("%d/%m/%Y", this.x) +
            "</b>" +
            "<br>" +
            "<span>Cotação do índice: </span><b>" +
            ("" + parseFloat(this.y).toFixed(2)).replace(".", ",") +
            "</b>"
          );
        },
      },
      xAxis: {
        type: "date",
        // title: {
        //   useHTML: true,
        //   text:
        //     '<span style="font-size: 13px;font-weight: 500;">Data de referência</span>',
        // },
        labels: {
          formatter: function () {
            return Highcharts.dateFormat("%b/%Y", this.value);
          },
        },
      },
      yAxis: {
        opposite: false,
        // title: {
        //   useHTML: true,
        //   text:
        //     '<span style="font-size: 13px;font-weight: 500;">Cotação do índice</span>',
        // },
        labels: {
          formatter: function () {
            return ("" + this.value.toFixed(2)).replace(".", ",");
          },
        },
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0.3)
                  .get("rgba"),
              ],
            ],
          },
        },
      },
      rangeSelector: {
        allButtonsEnabled: true,
        buttons: [
          {
            type: "week",
            count: 1,
            text: "1S",
            title: "1 Semana",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "month",
            count: 1,
            text: "1M",
            title: "1 Mês",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "month",
            count: 3,
            text: "3M",
            title: "3 Meses",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "year",
            count: 1,
            text: "1A",
            title: "1 Ano",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "ytd",
            text: "YTD",
            title: "Ínicio do Ano até Hoje",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "all",
            text: "MAX",
            title: "Máximo de tempo",
          },
        ],
        buttonTheme: {
          width: 60,
        },
        selected: 4,
      },
      exporting: { enabled: false },
      responsive: {
        rules: [
          {
            condition: { maxWidth: 500 },
            chartOptions: {
              xAxis: {
                labels: {
                  formatter: function () {
                    return lang.shortMonths[new Date(this.value).getMonth()];
                  },
                },
              },
              yAxis: {
                labels: {
                  align: "left",
                  x: 0,
                  y: -2,
                },
                title: {
                  text: "",
                },
              },
            },
          },
        ],
      },
    });
  };

  d3.csv(csvsUrls.quotes).then(processData);
}

function processStandardDeviation() {
  const processFile = (rows) => (this.standardDeviation = rows);
  d3.csv(csvsUrls.standardDeviation).then(processFile);
}

function processSharpeIndex() {
  const processFile = (rows) => (this.sharpeIndex = rows);
  d3.csv(csvsUrls.sharpeIndex).then(processFile);
}

function processSharpeIndex() {
  const processFile = (rows) => (this.sharpeIndex = rows);
  d3.csv(csvsUrls.sharpeIndex).then(processFile);
}

function processConvexity() {
  const processFile = (rows) => (this.convexity = rows[rows.length - 1]);
  d3.csv(csvsUrls.convexity).then(processFile);
}

function processDuration() {
  const processFile = (rows) => (this.duration = rows[rows.length - 1]);
  d3.csv(csvsUrls.duration).then(processFile);
}

function processModifiedDuration() {
  const processFile = (rows) => (this.modifiedDuration = rows[rows.length - 1]);
  d3.csv(csvsUrls.modifiedDuration).then(processFile);
}

function processYieldToMaturity() {
  const processFile = (rows) => (this.yieldToMaturity = rows[rows.length - 1]);
  d3.csv(csvsUrls.yieldToMaturity).then(processFile);
}

function processAnualReturn() {
  const processFile = (rows) => (this.anualReturn = rows);
  d3.csv(csvsUrls.anualReturn).then(processFile);
}

function processTurnOverLTM() {
  const processFile = (rows) =>
    (this.turnOverLTM = rows[rows.length - 1]["Turnover"]);
  d3.csv(csvsUrls.turnOverLTM).then(processFile);
}

function processIndexExposition() {
  const processFile = (rows) => {
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
  d3.csv(csvsUrls.indexExposition).then(processFile);
}

function processTicksNumber() {
  const processFile = (rows) => {
    const sortedData = multiSort(rows, { "Data de referência": "desc" });
    this.ticksNumber = sortedData[0];
  };
  d3.csv(csvsUrls.ticksNumber).then(processFile);
}

function processRepactuationMedia() {
  const processFile = (rows) => {
    const sortedData = multiSort(rows, { "Data de referência": "desc" });
    this.repactuationMedia = sortedData[0];
  };
  d3.csv(csvsUrls.repactuationMedia).then(processFile);
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
