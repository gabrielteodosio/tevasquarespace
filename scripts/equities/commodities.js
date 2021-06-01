const colors = {
  primary: "rgb(53,149,233)",
  secondary: "rgb(143, 143, 143)",
  white: "rgb(255,255,255)",
};

const host = "https://storage.googleapis.com/teva-indices-public/";

const identifier = "4.3.7";
const indiceName = "Índice de Ações Commodities";
const version = "v0.41";

const csvsUrls = {
  ibovespa: `${host}quotations/Ibovespa.csv`,
  higherRelevance: `${host}metrics/Ativos com maior relevância/${identifier} ${indiceName} ${version}.csv`,
  quotes: `${host}quotations/${identifier} ${indiceName} ${version}.csv`,
  standardDeviation: `${host}metrics/Desvio padrão/${identifier} ${indiceName} ${version}.csv`,
  sharpeIndex: `${host}metrics/Índice Sharpe/${identifier} ${indiceName} ${version}.csv`,
  anualReturn: `${host}metrics/Retorno anual/${identifier} ${indiceName} ${version}.csv`,
  turnOverLTM: `${host}metrics/Turnover LTM/${identifier} ${indiceName} ${version}.csv`,
  ticksNumber: `${host}metrics/Número de ativos/${identifier} ${indiceName} ${version}.csv`,
  turnover: `${host}metrics/Turnover/${identifier} ${indiceName} ${version}.csv`,
  periodicsReturn: `${host}metrics/Retorno períodos/${identifier} ${indiceName} ${version}.csv`,
  monthlyReturn: `${host}metrics/Retorno mensal/${identifier} ${indiceName} ${version}.csv`,
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

Vue.config.devtools = true;
const app = new Vue({
  el: "#funds-app",
  data: () => ({
    indice: {
      version,
      identifier,
      name: indiceName,
    },
    quote: null,
    dailyReturn: null,
    turnOverLTM: null,
    loadingMetrics: true,
    topTen: [],
    duration: {},
    convexity: {},
    ticksNumber: {},
    anualReturn: [],
    anualReturn: [],
    sharpeIndex: [],
    yieldToMaturity: {},
    indexExposition: [],
    periodicsReturn: [],
    modifiedDuration: {},
    repactuationMedia: {},
    standardDeviation: [],
    dueDateExposition: [],
    monthlyReturn: {
      years: [],
      filteredByMonths: [],
    },
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
    this.processSharpeIndex = processSharpeIndex.bind(this);
    this.processAnualReturn = processAnualReturn.bind(this);
    this.processTurnOverLTM = processTurnOverLTM.bind(this);
    this.processTicksNumber = processTicksNumber.bind(this);
    this.processPeriodicsReturn = processPeriodicsReturn.bind(this);
    this.processMonthlyReturn = processMonthlyReturn.bind(this);
    this.processStandardDeviation = processStandardDeviation.bind(this);

    this.numberToPercentalDecimalsDigits = numberToPercentalDecimalsDigits.bind(this);
    this.numberToDecimalsDigits = numberToDecimalsDigits.bind(this);
    this.findYearReturnIndex = findYearReturnIndex.bind(this);
    this.formatDateToBr = formatDateToBr.bind(this);
  },
  mounted() {
    this.processQuotes();
    this.processTWHL();
    this.processSharpeIndex();
    this.processAnualReturn();
    this.processTurnOverLTM();
    this.processTicksNumber();
    this.processPeriodicsReturn();
    this.processMonthlyReturn();
    this.processStandardDeviation();
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

    const trace = {
      name: "Ativos com Maior Relevância (%)",
      color: Highcharts.color(colors.primary).get("rgba"),
      data: topTen.map((d) => [d["Ativo"], parseFloat(d["Peso teórico"])]),
    };

    const topTenChart = Highcharts.chart("top-ten-chart", {
      chart: {
        type: "bar",
        height: (500 * topTen.length) / 10,
        backgroundColor: "transparent",
      },
      series: [trace],
      credits: { enabled: false },
      exporting: { enabled: false },
      legend: { enabled: false },
      tooltip: { enabled: false },
      xAxis: { visible: false },
      yAxis: { visible: false },
      title: { text: "" },
      plotOptions: {
        series: {
          pointWidth: 24,
          pointPadding: [5, 0, 5, 0],
          borderWidth: 0,
        },
      },
    });
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.higherRelevance).then(processBlob);
}

function processQuotes() {
  let ibovespaData = null,
      rows = null;

  const renderChart = (series) => {
    const quotesChart = Highcharts.stockChart("quotes-chart", {
      chart: {
        type: "area",
        margin: [60, 0, 30, 0],
      },
      series: series,
      scrollbar: { enabled: true },
      credits: { enabled: false },
      exporting: { enabled: false },
      navigator: {
        series: series,
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
        layout: "horizontal",
        verticalAlign: "top",
      },
      tooltip: {
        formatter: function () {
          return (
            "<span>Data de referência: </span><b>" +
            Highcharts.dateFormat("%d/%m/%Y", this.x) +
            "</b>" +
            "<br>" +
            "<span>Cotação do índice: </span><b>" +
            numberToDecimalsDigits(this.points[0].y, 2) +
            "</b>" +
            "<br>" +
            "<span>Cotação Ibovespa: </span><b>" +
            numberToDecimalsDigits(this.points[1].y, 2) +
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
        min: 50,
        opposite: false,
        labels: {
          formatter: function () {
            return ("" + this.value.toFixed(2)).replace(".", ",");
          },
        },
      },
      rangeSelector: {
        selected: 5,
        allButtonsEnabled: true,
        buttonTheme: { width: 60 },
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

      },
    });
  };

  const processFile = () => {
    // const unpack = (rows, key) => rows.map((row) => row[key]);
    const xAxis = "Data de referência";
    const yAxis = "Cotação do índice Retorno Total";

    const latestData = multiSort([...rows], { "Data de referência": "desc" })[0];

    this.quote = latestData["Cotação do índice Retorno Total"];
    this.dailyReturn = latestData["Retorno diário"];

    const trace = {
      zIndex: 0,
      type: 'area',
      lineWidth: 2,
      showInNavigator: true,
      marker: {
        enabled: false,
        fillColor: Highcharts.color(colors.primary).get("rgba"),
      },
      name: "Índice de Ações Commodities",
      data: rows.map((row) => {
        return [
          new Date(row[xAxis]).getTime(),
          parseFloat(row[yAxis]),
        ];
      }),
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
    };

    const traceIbovespa = {
      zIndex: 1,
      type: 'line',
      lineWidth: 1,
      showInNavigator: true,
      marker: { enabled: false },
      color: Highcharts.color(colors.secondary).get("rgba"),
      name: "Ibovespa",
      data: ibovespaData.map((row) => {
        return [
          new Date(row[xAxis]).getTime(),
          parseFloat(row[yAxis]),
        ];
      }),
    }

    this.quotesChart.traces = [traceIbovespa, trace];
    renderChart([trace, traceIbovespa])
  };

  const processQuote = async (blob) => {
    const text = await blob.text();
    rows = csvToJSON(text);
    processFile();
  };

  const processIbovespa = async (blob) => {
    const text = await blob.text();
    ibovespaData = csvToJSON(text);

    d3.blob(csvsUrls.quotes).then(processQuote);
  };

  d3.blob(csvsUrls.ibovespa).then(processIbovespa);
}

function processStandardDeviation() {
  const processFile = (rows) => (this.standardDeviation = rows);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.standardDeviation).then(processBlob);
}

function processSharpeIndex() {
  const processFile = (rows) => (this.sharpeIndex = rows);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.sharpeIndex).then(processBlob);
}

function processSharpeIndex() {
  const processFile = (rows) => (this.sharpeIndex = rows);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.sharpeIndex).then(processBlob);
}

function processConvexity() {
  const processFile = (rows) => (this.convexity = rows[rows.length - 1]);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.convexity).then(processBlob);
}

function processDuration() {
  const processFile = (rows) => (this.duration = rows[rows.length - 1]);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.duration).then(processBlob);
}

function processModifiedDuration() {
  const processFile = (rows) => (this.modifiedDuration = rows[rows.length - 1]);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.modifiedDuration).then(processBlob);
}

function processYieldToMaturity() {
  const processFile = (rows) => (this.yieldToMaturity = rows[rows.length - 1]);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.yieldToMaturity).then(processBlob);
}

function processAnualReturn() {
  const processFile = (rows) => {
    return (this.anualReturn = rows.sort((a, b) =>
      desc(a, b, "Ano do retorno")
    ));
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.anualReturn).then(processBlob);
}

function processTurnOverLTM() {
  const processFile = (rows) => {
    if (rows.length == 0) return;

    this.turnOverLTM = rows[rows.length - 1]["Turnover"];
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.turnOverLTM).then(processBlob);
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

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.indexExposition).then(processBlob);
}

function processTicksNumber() {
  const processFile = (rows) => {
    const sortedData = multiSort(rows, { "Data de referência": "desc" });
    this.ticksNumber = sortedData[0];
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.ticksNumber).then(processBlob);
}

function processRepactuationMedia() {
  const processFile = (rows) => {
    const sortedData = multiSort(rows, { "Data de referência": "desc" });
    this.repactuationMedia = sortedData[0];
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.repactuationMedia).then(processBlob);
}

function processPeriodicsReturn() {
  const processFile = (rows) => (this.periodicsReturn = rows);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.periodicsReturn).then(processBlob);
}

function processDueDateExposition() {
  const processFile = (rows) => {
    if (rows.length == 0) return;

    const highestDate = rows[rows.length - 1]["Data de referência"];
    const filteredData = rows.filter(
      (data) => data["Data de referência"] === highestDate
    );

    this.dueDateExposition = filteredData;

    const trace = {
      name: "Brands",
      innerSize: "55%",
      colorByPoint: true,
      data: filteredData.map((data) => ({
        name: data["Prazo de vencimento"],
        y: parseFloat(data["Exposição"]),
      })),
    };

    if (document.getElementById("due-date-chart")) {
      const topTenChart = Highcharts.chart("due-date-chart", {
        chart: {
          type: "pie",
          width: window.innerWidth / 4,
          height: window.innerWidth / 4,
        },
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
              "<b>" +
              this.key +
              "</b>" +
              "<br>" +
              "<span>Exposição: </span><b>" +
              numberToPercentalDecimalsDigits(this.y, 2) +
              "% </b>"
            );
          },
        },
      });
    }
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.dueDateExposition).then(processBlob);
}

function processMonthlyReturn() {
  const processFile = (rows) => {
    const years = Array.from(
      new Set(
        rows.map((data) => {
          const d = data["Mês/ano do retorno"];
          return d.slice(d.indexOf("/") + 1);
        })
      )
    ).sort(desc);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let filteredByMonths = years.reduce((acc, cur) => {
      const dataByMonth = new Array(12).fill("-");

      rows.filter((data) => {
        const d = data["Mês/ano do retorno"];
        const year = d.slice(d.indexOf("/") + 1);
        return year == cur;
      }).forEach((data) => {
        const d = data["Mês/ano do retorno"];
        const month = d.slice(0, d.indexOf("/"));

        const idx = months.indexOf(month);

        dataByMonth[idx] = data["Retorno"] || "-";
      });

      return { ...acc, [cur]: dataByMonth };
    }, {});

    this.monthlyReturn.years = years;
    this.monthlyReturn.filteredByMonths = filteredByMonths;
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows);
  };

  d3.blob(csvsUrls.monthlyReturn).then(processBlob);
}

// utlity functions

function numberToPercentalDecimalsDigits(number, digits) {
  const decimalDigits = number * 100;
  const decimalDigitsString = "" + decimalDigits;
  const commaIndex = decimalDigitsString.indexOf(".");

  if (commaIndex === -1) {
    return decimalDigitsString.replaceAll(".", ",");
  }
  if (digits === 0) {
    return decimalDigitsString.slice(0, commaIndex).replaceAll(".", ",");
  }

  return decimalDigitsString
    .slice(0, commaIndex + 1 + digits)
    .replaceAll(".", ",");
}

function numberToDecimalsDigits(number, digits) {
  const decimalDigits = number;
  const decimalDigitsString = "" + decimalDigits;
  const commaIndex = decimalDigitsString.indexOf(".");

  if (commaIndex === -1) {
    return decimalDigitsString.replaceAll(".", ",");
  }
  if (digits == 0) {
    return decimalDigitsString.slice(0, commaIndex).replaceAll(".", ",");
  }

  return decimalDigitsString
    .slice(0, commaIndex + 1 + digits)
    .replaceAll(".", ",");
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
    const yr = ret["Ano do retorno"];

    if (yr == year) {
      return idx;
    }
  }

  return false;
}

function stringToBytes(text) {
  const length = text.length;
  const result = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    const code = text.charCodeAt(i);
    const byte = code > 255 ? 32 : code;
    result[i] = byte;
  }
  return result;
}

async function stringToIso88591(text) {
  const bytes = stringToBytes(text);
  const blob = new Blob([bytes.buffer], {
    type: "text/plain; charset=ISO-8859-1",
  });
  return await blob.text();
}

async function stringToUTF8(text) {
  const bytes = stringToBytes(text);
  const blob = new Blob([bytes.buffer], { type: "text/plain; charset=UTF-8" });
  return await blob.text();
}

function csvToJSON(csv) {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const obj = {};
    const currentline = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
}

function formatDateToBr(date) {
  const data = new Date(date);
  const dataFormatada =
    adicionaZero(data.getDate()) +
    "/" +
    adicionaZero(data.getMonth() + 1) +
    "/" +
    data.getFullYear();
  return dataFormatada;
}

function adicionaZero(numero) {
  if (numero <= 9) return "0" + numero;
  else return numero;
}
