const colors = {
  primary: "rgb(53,149,233)",
  white: "rgb(255,255,255)",
};

const host = "https://storage.googleapis.com/teva-indices-public/";

const csvsUrls = {
  higherRelevance: `${host}metrics/Ativos com maior relevância/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  quotes: `${host}quotations/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  standardDeviation: `${host}metrics/Desvio padrão/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  sharpeIndex: `${host}metrics/Índice Sharpe/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  convexity: `${host}metrics/Convexidade/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  duration: `${host}metrics/Duration/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  modifiedDuration: `${host}metrics/Duration modificada/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  yieldToMaturity: `${host}metrics/Yield to maturity/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  anualReturn: `${host}metrics/Retorno anual/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  turnOverLTM: `${host}metrics/Turnover LTM/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  indexExposition: `${host}metrics/Exposição por indexador/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  ticksNumber: `${host}metrics/Número de ativos/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  repactuationMedia: `${host}metrics/Prazo médio de repactuação/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  turnover: `${host}metrics/Turnover/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  dueDateExposition: `${host}metrics/Exposição por vencimento/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  periodicsReturn: `${host}metrics/Retorno períodos/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
  monthlyReturn: `${host}metrics/Retorno mensal/1.2.2 Índice Tesouro IPCA Curto Prazo v0.92.csv`,
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
const loadCsv = d3.blob("")

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

    if (document.getElementById("top-ten-chart")) {
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
    }
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.higherRelevance).then(processBlob);
}

function processQuotes() {
  const processFile = (rows) => {
    // const unpack = (rows, key) => rows.map((row) => row[key]);
    const xAxis = "Data de referência";
    const yAxis = "Valor do índice";

    let lowestIndex = Number.MAX_VALUE;

    const trace = {
      lineWidth: 1,
      showInNavigator: true,
      marker: {
        enabled: true,
        fillColor: Highcharts.color(colors.primary).get("rgba"),
      },
      name: "Índice IPCA Curto Prazo",
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

    if (document.getElementById("quotes-chart")) {
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
          min: lowestIndex / 2,
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
    }
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.quotes).then(processBlob);
}

function processStandardDeviation() {
  const processFile = (rows) => (this.standardDeviation = rows);
  
  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.standardDeviation).then(processBlob);
}

function processSharpeIndex() {
  const processFile = (rows) => (this.sharpeIndex = rows);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.sharpeIndex).then(processBlob);
}

function processSharpeIndex() {
  const processFile = (rows) => (this.sharpeIndex = rows);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.sharpeIndex).then(processBlob);
}

function processConvexity() {
  const processFile = (rows) => (this.convexity = rows[rows.length - 1]);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.convexity).then(processBlob);
}

function processDuration() {
  const processFile = (rows) => (this.duration = rows[rows.length - 1]);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.duration).then(processBlob);
}

function processModifiedDuration() {
  const processFile = (rows) => (this.modifiedDuration = rows[rows.length - 1]);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.modifiedDuration).then(processBlob);
}

function processYieldToMaturity() {
  const processFile = (rows) => (this.yieldToMaturity = rows[rows.length - 1]);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.yieldToMaturity).then(processBlob);
}

function processAnualReturn() {
  const processFile = (rows) => (this.anualReturn = rows.sort((a,b) => desc(a, b, "Ano do retorno")));
  
  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.anualReturn).then(processBlob);
}

function processTurnOverLTM() {
  const processFile = (rows) => {
    if (rows.length == 0) return;

    this.turnOverLTM = rows[rows.length - 1]["Turnover"]
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

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
    processFile(rows)
  }

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
    processFile(rows)
  }

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
    processFile(rows)
  }

  d3.blob(csvsUrls.repactuationMedia).then(processBlob);
}

function processPeriodicsReturn() {
  const processFile = (rows) => (this.periodicsReturn = rows);

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

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
      innerSize: '55%',
      colorByPoint: true,
      data: filteredData.map((data) => ({
        name: data["Prazo de vencimento"],
        y: parseFloat(data['Exposição']),
      })),
    };

    if (document.getElementById("due-date-chart")) {
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
    processFile(rows)
  }

  d3.blob(csvsUrls.dueDateExposition).then(processBlob);
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
          (data) => new Date(data["Mês/ano do retorno"]).getFullYear() == cur
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

  const processBlob = async (blob) => {
    const text = await blob.text();
    const rows = csvToJSON(text);
    processFile(rows)
  }

  d3.blob(csvsUrls.monthlyReturn).then(processBlob);
}

// utlity functions

function numberToPercentalDecimalsDigits(number, digits) {
  const decimalDigits = parseFloat(number) * 100;
  const decimalDigitsString = "" + decimalDigits;
  const commaIndex = decimalDigitsString.indexOf(".")
  if (digits == 0) {
    return decimalDigitsString.slice(0, commaIndex - 1);
  }
  return decimalDigitsString.slice(0, commaIndex + 1 + digits).replaceAll(".", ",");
}

function numberToDecimalsDigits(number, digits) {
  const decimalDigits = parseFloat(number);
  const decimalDigitsString = "" + decimalDigits;
  const commaIndex = decimalDigitsString.indexOf(".")
  if (digits == 0) {
    return decimalDigitsString.slice(0, commaIndex - 1);
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
  const blob = new Blob([bytes.buffer], { type: 'text/plain; charset=ISO-8859-1' });
  return await blob.text();
}

async function stringToUTF8(text) {
  const bytes = stringToBytes(text);
  const blob = new Blob([bytes.buffer], { type: 'text/plain; charset=UTF-8' });
  return await blob.text();
}

function csvToJSON(csv) {
  const lines = csv.split('\n')
  const result = []
  const headers = lines[0].split(',')

  for (let i = 1; i < lines.length; i++) {        
    if (!lines[i])
      continue
    const obj = {}
    const currentline = lines[i].split(',')

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j]
    }
    result.push(obj)
  }
  return result
}
