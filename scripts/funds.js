const colors = {
  primary: "rgb(53,149,233)",
  white: "rgb(255,255,255)",
};

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
    "Mar??o",
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
    "Ter??a-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "S??bado",
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
  shortWeekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "S??b"],
};

Highcharts.setOptions({ lang });

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
    periodicsReturn: [],
    dueDateExposition: [],
    monthlyReturn: {
      years: [],
      filteredByMonths: [],
    },
    anualReturn: [],
    sharpeIndex: [],
    indexExposition: [],
    quotesChart: {
      uuid: "quotes-chart",
      traces: [],
      indexDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra velit in odio posuere, nec venenatis mi varius. Nullam nec sem sollicitudin, gravida leo in, porttitor est. Interdum et malesuada fames ac ante ipsum primis in faucibus. In rhoncus aliquet ligula non tristique. Sed luctus ornare erat tempus elementum. Curabitur sed nibh ut dolor commodo aliquam. Duis bibendum augue urna, in maximus ligula dapibus eget. Sed eu nunc sit amet nisl blandit pellentesque. Suspendisse sit amet nunc leo. Aliquam molestie enim odio, a sollicitudin velit tristique quis. Nunc auctor tellus eget dui dictum, faucibus bibendum tellus efficitur. Sed volutpat nisl ac est cursus ultrices. Sed eget nunc sed dolor bibendum vehicula. Curabitur volutpat sodales ornare. Nam dictum malesuada erat, quis pellentesque magna feugiat sit amet.",
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
    this.processPeriodicsReturn = processPeriodicsReturn.bind(this);
    this.processDueDateExposition = processDueDateExposition.bind(this);
    this.processMonthlyReturn = processMonthlyReturn.bind(this);

    this.numberToPercentalDecimalsDigits = numberToPercentalDecimalsDigits.bind(this);
    this.numberToDecimalsDigits = numberToDecimalsDigits.bind(this);
    this.findYearReturnIndex = findYearReturnIndex.bind(this)
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
    this.processPeriodicsReturn();
    this.processDueDateExposition();
    this.processMonthlyReturn();
  },
});

// read files functions

function processTickersWithHighRelevance() {
  const processFile = (rows) => {
    let highestDate = "1900-01-01";
    const data = rows.filter((row) => {
      highestDate =
        row["Data de refer??ncia"] > highestDate
          ? row["Data de refer??ncia"]
          : highestDate;
      return !/E-/gi.test(row["Peso te??rico"]);
    });
    const sortedData = multiSort(data, {
      "Peso te??rico": "desc",
      "Data de refer??ncia": "desc",
    });

    const filteredData = sortedData.filter(
      (data) => data["Data de refer??ncia"] == highestDate
    );

    const topTen = filteredData.slice(0, 10);
    this.topTen = topTen;
    this.loadingMetrics = false;

    const trace = {
      name: "Ativos com Maior Relev??ncia (%)",
      color: Highcharts.color(colors.primary).get("rgba"),
      data: topTen.map((d) => [d["Ativo"], parseFloat(d["Peso te??rico"])]),
    };

    const topTenChart = Highcharts.chart("top-ten-chart", {
      chart: {
        type: "bar",
        height: 500,
      },
      series: [trace],
      exporting: { enabled: false },
      legend: { enabled: false },
      tooltip: { enabled: false },
      xAxis: { visible: false },
      yAxis: { visible: false },
      title: { text: "" },
      plotOptions: {
        series: {
          groupPadding: 0,
          pointPadding: 0.26,
          borderWidth: 0,
        },
      },
    });
  };

  d3.csv(csvsUrls.higherRelevance).then(processFile);
}

function processQuotes() {
  const processData = (rows) => {
    // const unpack = (rows, key) => rows.map((row) => row[key]);
    const xAxis = "Data de refer??ncia";
    const yAxis = "Valor do ??ndice";

    let lowestIndex = Number.MAX_VALUE;

    const trace = {
      lineWidth: 1,
      showInNavigator: true,
      marker: {
        enabled: true,
        fillColor: Highcharts.color(colors.primary).get("rgba"),
      },
      name: "??ndice Deb??ntures DI",
      data: rows.map((row) => {
        if (lowestIndex > parseFloat(row[yAxis])) {
          lowestIndex = parseFloat(row[yAxis]);
        }
        
        return [
          new Date(row[xAxis]).getTime(),
          parseFloat(row[yAxis]),
        ];
      }),
    };

    this.quotesChart.traces = [trace];

    const quotesChart = Highcharts.stockChart("quotes-chart", {
      chart: {
        type: "area",
        margin: [30, 0, 30, 0],
      },
      series: [trace],
      scrollbar: { enabled: true },
      exporting: { enabled: false },
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
        enabled: true,
        align: "center",
        layout: "vertical",
        verticalAlign: "top",
      },
      tooltip: {
        formatter: function () {
          return (
            "<span>Data de refer??ncia: </span><b>" +
            Highcharts.dateFormat("%d/%m/%Y", this.x) +
            "</b>" +
            "<br>" +
            "<span>Cota????o do ??ndice: </span><b>" +
            ("" + parseFloat(this.y).toFixed(2)).replace(".", ",") +
            "</b>"
          );
        },
      },
      xAxis: {
        type: "date",
        labels: {
          formatter: function () {
            return Highcharts.dateFormat("%b/%Y", this.value);
          },
        },
      },
      yAxis: {
        opposite: false,
        labels: {
          formatter: function () {
            return ("" + this.value.toFixed(2)).replace(".", ",");
          },
        },
        min: 50,
      },
      plotOptions: {
        area: {
          lineColor: Highcharts.color(colors.primary).get("rgba"),
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.color(colors.primary).get("rgba")],
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
            title: "1 M??s",
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
            title: "??nicio do Ano at?? Hoje",
            dataGrouping: {
              forced: true,
              units: [["day", [1]]],
            },
          },
          {
            type: "all",
            text: "MAX",
            title: "M??ximo de tempo",
          },
        ],
        buttonTheme: {
          width: 60,
        },
        selected: 5,
      },
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
  const processFile = (rows) => (this.anualReturn = rows.sort((a,b) => desc(a, b, "Ano do retorno")));
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
        row["Data de refer??ncia"] > highestDate
          ? row["Data de refer??ncia"]
          : highestDate;
      return !/E-/gi.test(row["Exposi????o"]);
    });

    this.indexExposition = data.filter(
      (data) => data["Data de refer??ncia"] == highestDate
    );
  };
  d3.csv(csvsUrls.indexExposition).then(processFile);
}

function processTicksNumber() {
  const processFile = (rows) => {
    const sortedData = multiSort(rows, { "Data de refer??ncia": "desc" });
    this.ticksNumber = sortedData[0];
  };
  d3.csv(csvsUrls.ticksNumber).then(processFile);
}

function processRepactuationMedia() {
  const processFile = (rows) => {
    const sortedData = multiSort(rows, { "Data de refer??ncia": "desc" });
    this.repactuationMedia = sortedData[0];
  };
  d3.csv(csvsUrls.repactuationMedia).then(processFile);
}

function processPeriodicsReturn() {
  const processFile = (rows) => (this.periodicsReturn = rows);
  d3.csv(csvsUrls.periodicsReturn).then(processFile);
}

function processDueDateExposition() {
  const processFile = (rows) => {
    const highestDate = rows[rows.length - 1]["Data de refer??ncia"];
    const filteredData = rows.filter(
      (data) => data["Data de refer??ncia"] === highestDate
    );

    this.dueDateExposition = filteredData;

    const trace = {
      name: "Brands",
      innerSize: '55%',
      colorByPoint: true,
      data: filteredData.map((data) => ({
        name: data["Prazo de vencimento"],
        y: parseFloat(data['Exposi????o']),
      })),
    };

    const topTenChart = Highcharts.chart("due-date-chart", {
      chart: { type: "pie", marginBottom: 50 },
      series: [trace],
      exporting: { enabled: false },
      title: { text: "" },
      legend: {
        align: "right",
        layout: "vertical",
        verticalAlign: "middle",
      },
      plotOptions: {
        pie: {
          cursor: "pointer",
          showInLegend: true,
          allowPointSelect: false,
          dataLabels: { enabled: false },
        },
      },
      tooltip: {
        formatter: function () {
          return (
            "<b>" + this.key + "</b>" +
            "<br>" +
            "<span>Exposi????o: </span><b>" +
            numberToPercentalDecimalsDigits(this.y, 2) +
            "% </b>"
          );
        },
      },
    });
  };
  d3.csv(csvsUrls.dueDateExposition).then(processFile);
}

function processMonthlyReturn() {
  const processFile = (rows) => {
    const years = Array.from(
      new Set(
        rows.map((data) => new Date(Object.values(data)[0]).getFullYear())
      )
    ).sort(desc);

    let filteredByMonths = years.reduce((acc, cur) => {
      let dataByMonth = rows
        .filter(
          (data) => new Date(data["M??s/ano do retorno"]).getFullYear() == cur
        )
        .map((data) => data["Retorno"]);

      if (dataByMonth.length < 12) {
        const aux = new Array(12)
          .fill("-")
          .map((_, i) => (dataByMonth[i] ? dataByMonth[i] : "-"));

        dataByMonth = aux;
      }

      return { ...acc, [cur]: dataByMonth };
    }, {});

    this.monthlyReturn.years = years;
    this.monthlyReturn.filteredByMonths = filteredByMonths;
  };
  d3.csv(csvsUrls.monthlyReturn).then(processFile);
}

// utlity functions

function numberToPercentalDecimalsDigits(number, digits) {
  const decimalDigits = number * 100;
  const decimalDigitsString = "" + decimalDigits;
  const commaIndex = decimalDigitsString.indexOf(".")

  if (commaIndex === -1) {
    return decimalDigitsString.replaceAll(".", ",");
  }
  if (digits === 0) {
    return decimalDigitsString.slice(0, commaIndex).replaceAll(".", ",");
  }
  
  return decimalDigitsString.slice(0, commaIndex + 1 + digits).replaceAll(".", ",");
}

function numberToDecimalsDigits(number, digits) {
  const decimalDigits = number;
  const decimalDigitsString = "" + decimalDigits;
  const commaIndex = decimalDigitsString.indexOf(".")
  
  if (commaIndex === -1) {
    return decimalDigitsString.replaceAll(".", ",");
  }
  if (digits == 0) {
    return decimalDigitsString.slice(0, commaIndex).replaceAll(".", ",");
  }

  return decimalDigitsString.slice(0, commaIndex + 1 + digits).replaceAll(".", ",");
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

function asc(a, b, column) {
  if (column && a[column] && b[column]) {
    return a[column] < b[column] ? -1 : a[column] > b[column] ? 1 : 0;
  }
  return a < b ? -1 : a > b ? 1 : 0;
}

function desc(a, b, column) {
  if (column && a[column] && b[column]) {
    return a[column] < b[column] ? 1 : a[column] > b[column] ? -1 : 0;
  }
  return a < b ? 1 : a > b ? -1 : 0;
}

function findYearReturnIndex(year) {
  for (let idx = 0; idx < this.anualReturn.length; idx++) {
    const ret = this.anualReturn[idx];
    const yr = parseInt(ret["Ano do retorno"]);
    
    if (yr === year) {
      return idx;
    }
  }
  
  return false;
}