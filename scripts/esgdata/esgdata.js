const host = "https://storage.googleapis.com/teva-indices-public/";

/*
  esg-data/score/companies_score.json
  esg-data/study/adm_board_mandates.json
  esg-data/study/age_distribution_adm_board.json
  esg-data/study/ceo_in_adm_board.json
  esg-data/study/companies_distribution_number_women_boards.json
  esg-data/study/companies_with_2plus_women_adm_board.json
  esg-data/study/companies_with_2plus_women_adm_board_per_region.json
  esg-data/study/companies_with_2plus_women_adm_board_per_sector.json
  esg-data/study/companies_with_2plus_women_adm_board_per_segment.json
  esg-data/study/diversity_variation_1Q2021.json
  esg-data/study/equality_projection.json
  esg-data/study/gender_numbers_boards.json
  esg-data/study/number_companies_with_boards.json
  esg-data/study/number_positions_boards.json
  esg-data/study/president_adm_board.json
  esg-data/study/years_to_equality.json
*/

const jsonUrls = {
  companies_score: `${host}esg-data/score/companies_score.json`,
  ceo_in_adm_board: `${host}esg-data/study/ceo_in_adm_board.json`,
  president_adm_board: `${host}esg-data/study/president_adm_board.json`,
  companies_distribution_number_women_boards: `${host}esg-data/study/companies_distribution_number_women_boards.json`,
  adm_board_mandates: `${host}esg-data/study/adm_board_mandates.json`,
  age_distribution_adm_board: `${host}esg-data/study/age_distribution_adm_board.json`,
  companies_with_more_than_2women:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/companies_with_more_than_2women.json",
  companies_with_more_than_2women_region:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/companies_with_more_than_2women_region.json",
  companies_with_more_than_2women_segment:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/companies_with_more_than_2women_segment.json",
  equality_projection:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/equality_projection.json",
  gender_age_administration_board:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_age_administration_board.json",
  gender_mandates_administration_board:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_mandates_administration_board.json",
  gender_numbers_boards: `${host}esg-data/study/gender_numbers_boards.json`,
  gender_president_administration_board:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_president_administration_board.json",
  gender_president_director_board:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_president_director_board.json",
  n_positions_boards:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/n_positions_boards.json",
  total_number_men_women:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/total_number_men_women.json",
  variation_diversity_1Q2021:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/variation_diversity_1Q2021.json",
  variation_diversity_boards:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/variation_diversity_boards.json",
  women_numbers_boards:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/women_numbers_boards.json",
  years_to_equality:
    "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/years_to_equality.json",
  thermometer: `${host}esg-data/thermometer/Women on Board - thermometer.json`,
};

document.addEventListener("DOMContentLoaded", function (event) {
  processThermother();
  processCompaniesScore();
  processPresidentAdmBoard();
  processGenderNumbersBoards();
  processCompaniesDistributionNumberWomenBoards();
  processAgeDistributionAdmBoard();
  processAdmBoardMandates();

  // processCompaniesWithMoreThan2Women();
  // processCompaniesWithMoreThan2WomenRegion();
  // processCompaniesWithMoreThan2WomenSegment();
  // processEqualityProjection();
  // processGenderAgeAdministrationBoard();
  // processGenderMandatesAdministrationBoard();
  // processGenderPresidentAdministrationBoard();
  // processGenderPresidentDirectorBoard();
  // processNPositionsBoards();
  // processTotalNumberMenWomen();
  // processVariationDiversity1Q2021();
  // processVariationDiversityBoards();
  // processWomenNumbersBoards();
  // processYearsToEquality();
});

function processThermother() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    const chartOptions = {
      chart: {
        type: "column",
        width: 200,
        backgroundColor: "transparent",
      },
      title: null,
      credits: { enabled: false },
      exporting: { enabled: false },
      legend: { enabled: false },
      // the value axis
      xAxis: {
        visible: false,
      },
      yAxis: {
        min: 0,
        max: 100,
        title: { enabled: false },
        plotBands: [
          {
            from: 0,
            to: 100,
            color: "rgba(103,103,103,.35)",
          },
        ],
      },
      plotOptions: {
        series: {
          pointWidth: 150,
        },
      },
    };

    const chart = Highcharts.chart(
      "thermomether-chart",
      Highcharts.merge(chartOptions, {
        yAxis: {
          labels: {
            style: {
              color: "white",
            },
          },
        },
        series: [
          {
            name: "Temperatura",
            label: "Temperatura",
            data: [data["Temperatura"]],
          },
        ],
        tooltip: {
          enabled: true,
          formatter: function () {
            return (
              "Temperatura: <b>" +
              numberToDecimalsDigits(this.point.y, 2) +
              "</b>"
            );
          },
        },
      })
    );
  };

  d3.blob(jsonUrls.thermometer).then(processBlob);
}

function processCompaniesWithMoreThan2Women() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    let data = JSON.parse(text);

    const cols = Object.keys(data);

    data = Object.entries(data[cols[0]]).reduce((acc, cur) => {
      const aux = { ...acc };

      cols.forEach((col) => {
        aux = { ...aux, [cur[0]]: [data[col][cur[0]], cur[1], cur[0]] };
      });

      return aux;
    }, {});

    this.companiesWithMoreThan2Women = data;
  };

  d3.blob(jsonUrls.companies_with_more_than_2women).then(processBlob);
}

function processCompaniesDistributionNumberWomenBoards() {
  const formatter = function () {
    return (
      this.point.category +
      ": <strong> " +
      numberToDecimalsDigits(this.y, 2) +
      " %</strong>"
    );
  };

  const renderChart = (data) => {
    const jsonKey =
      "% de empresas com 0 mulheres em conselhos de administracao";

    let todayYear = new Date().getFullYear();

    const periods = [
      `4Q${todayYear - 5}`, // dez/2016
      `4Q${todayYear - 4}`, // dez/2017
      `4Q${todayYear - 3}`, // dez/2018
      `4Q${todayYear - 2}`, // dez/2019
      `4Q${todayYear - 1}`, // dez/2020
      `1Q${todayYear}`, // dez/2021
    ];

    const series = periods.map((period) => parseFloat(data[jsonKey][period]));

    const chartOptions = {
      chart: {
        type: "column",
        width: 500,
        backgroundColor: "transparent",
      },
      title: null,
      credits: { enabled: false },
      exporting: { enabled: false },
      legend: { enabled: false },
      plotOptions: {
        column: {
          pointWidth: 50,
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
    };

    const chart = Highcharts.chart(
      "distribution-number-women-chart",
      Highcharts.merge(chartOptions, {
        xAxis: {
          categories: periods.map((period) => quarterToTrimester(period)),
          labels: {
            style: {
              color: "white",
            },
          },
          plotLines: [
            {
              color: "rgba(255, 255, 255, 0.18)", // Color value
              dashStyle: "dash", // Style of the plot line. Default to solid
              value: 4.5, // Value of where the line will appear
              width: 2, // Width of the line
            },
          ],
        },
        yAxis: {
          visible: false,
          title: { enabled: false },
        },
        tooltip: { formatter },
        series: [
          {
            name: "",
            data: series,
          },
        ],
      })
    );
  };

  const renderChart2 = (data) => {
    const prefix = "% de empresas com 0 mulheres em ";
    const jsonKeys = [
      `${prefix}conselhos de administracao`,
      `${prefix}conselhos fiscais`,
      `${prefix}diretorias`,
      `${prefix}comites de auditoria`,
      `${prefix}outros comites`,
    ];

    let todayYear = new Date().getFullYear();

    const periods = [
      `4Q${todayYear - 1}`, // dez/2020
      `1Q${todayYear}`, // dez/2021
    ];

    const series = jsonKeys.map((jsonKey) => {
      let y = null;

      if (data[jsonKey].hasOwnProperty(periods[1])) {
        y = parseFloat(data[jsonKey][periods[1]]);
      }

      if (data[jsonKey].hasOwnProperty(periods[0])) {
        y = parseFloat(data[jsonKey][periods[0]]);
      }

      return { y, color: y >= 50 ? "rgb(53, 149, 233)" : "#7cb5ec" };
    });

    const chartOptions = {
      chart: {
        type: "column",
        width: 500,
        backgroundColor: "transparent",
      },
      title: null,
      credits: { enabled: false },
      exporting: { enabled: false },
      legend: { enabled: false },
      plotOptions: {
        column: {
          pointWidth: 50,
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
    };

    const chart = Highcharts.chart(
      "distribution-number-women-chart2",
      Highcharts.merge(chartOptions, {
        xAxis: {
          categories: [
            "Conselhos de Administração",
            "Conselhos Fiscais",
            "Diretorias",
            "Comitês de Auditoria",
            "Outros Comitês",
          ],
          labels: {
            style: {
              color: "white",
            },
          },
        },
        yAxis: {
          visible: false,
          title: { enabled: false },
        },
        tooltip: { formatter },
        series: [
          {
            name: "",
            data: series,
          },
        ],
      })
    );
  };

  const renderChart3 = (data) => {
    const prefix = "% de empresas com";
    const suffixPlural = "mulheres em conselhos de administracao";
    const suffixSing = "mulher em conselhos de administracao";

    let categories = [];
    const filtered = Object.entries(data).reduce((acc, cur) => {
      const [key, val] = cur;

      if (categories?.length === 0) {
        categories = [...Object.keys(cur[1])];
      }

      if (
        key.includes(prefix) &&
        (key.includes(suffixPlural) || key.includes(suffixSing))
      ) {
        return [...acc, Object.values(val)];
      }

      return [...acc];
    }, []);

    if (document.getElementById("distribution-number-women-chart3")) {
      const chartOptions = {
        chart: { backgroundColor: "transparent" },
        credits: { enabled: false },
        exporting: { enabled: false },
        title: null,
        legend: {
          enabled: true,
          labelFormat: "{name}",
          itemStyle: { color: "#fff" },
        },
        xAxis: {
          labels: {
            style: { color: "white" },
          },
        },
        yAxis: {
          labels: {
            style: { color: "white" },
          },
        },
        plotOptions: {
          series: {
            borderWidth: 0,
          },
        },
      };

      const trace1 = {
        name: "0",
        label: "Empresas com 0 Mulheres em Conselhos de Administração",
        dataLabels: { enabled: false },
        color: "#7cb5ec",
        data: filtered[0],
      };
      const trace2 = {
        name: "1",
        label: "Empresas com 1 Mulheres em Conselhos de Administração",
        dataLabels: { enabled: false },
        color: "#90ed7d",
        data: filtered[1],
      };
      const trace3 = {
        name: "2",
        label: "Empresas com 2 Mulheres em Conselhos de Administração",
        dataLabels: { enabled: false },
        color: "#434348",
        data: filtered[2],
      };
      const trace4 = {
        name: "3",
        label: "Empresas com 3 Mulheres em Conselhos de Administração",
        dataLabels: { enabled: false },
        color: "#f7a35c",
        data: filtered[3],
      };
      const trace5 = {
        name: "4+",
        label: "Empresas com mais de 3 Mulheres em Conselhos de Administração",
        dataLabels: { enabled: false },
        color: "#8085e9",
        data: filtered[4],
      };

      const lineChart = Highcharts.chart(
        "distribution-number-women-chart3",
        Highcharts.merge(chartOptions, {
          chart: { type: "line" },
          series: [trace1, trace2, trace3, trace4, trace5],
          xAxis: { categories },
          yAxis: {
            min: 0,
            max: 100,
            title: null,
            gridLineColor: "transparent",
          },
          tooltip: {
            formatter: function () {
              return (
                "<b>" +
                this.point.category +
                "</b><br>" +
                this.series.userOptions.label +
                ": <b>" +
                numberToDecimalsDigits(this.point.y, 2) +
                " %</b>"
              );
            },
          },
        })
      );
    }
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    renderChart(data);
    renderChart2(data);
    renderChart3(data);
  };

  d3.blob(jsonUrls.companies_distribution_number_women_boards)
    .then(processBlob);
}

function processCompaniesWithMoreThan2WomenRegion() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    this.companiesWithMoreThan2WomenRegion = data;
  };

  d3.blob(jsonUrls.companies_with_more_than_2women_region).then(processBlob);
}

function processCompaniesWithMoreThan2WomenSegment() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.companiesWithMoreThan2WomenSegment = data;
  };

  d3.blob(jsonUrls.companies_with_more_than_2women_segment).then(processBlob);
}

function processEqualityProjection() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.equalityProjection = data;
  };

  d3.blob(jsonUrls.equality_projection).then(processBlob);
}

function processGenderAgeAdministrationBoard() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderAgeAdministrationBoard = data;
  };

  d3.blob(jsonUrls.gender_age_administration_board).then(processBlob);
}

function processGenderMandatesAdministrationBoard() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderMandatesAdministrationBoard = data;
  };

  d3.blob(jsonUrls.gender_mandates_administration_board).then(processBlob);
}

function processGenderNumbersBoards() {
  const colors = {
    primary: "#7cb5ec",
    secondary: "#434348",
  };

  const suffixes = [
    "conselhos de administracao",
    "conselhos fiscais",
    "diretorias",
    "comites de auditoria",
    "outros comites",
  ];
  const prefixes = ["% de mulheres em", "% de homens em"];

  // 1 Tri: Março
  // 2 Tri: Junho
  // 3 Tri: Setembro
  // 4 Tri: Dezembro
  const quarter = getActualQ();

  const chartOptions = {
    chart: { backgroundColor: "transparent" },
    credits: { enabled: false },
    exporting: { enabled: false },
    title: null,
    legend: {
      enabled: true,
      labelFormat: "{name}",
      itemStyle: { color: "#fff" },
    },
    xAxis: {
      labels: {
        style: { color: "white" },
      },
    },
    yAxis: {
      labels: {
        style: { color: "white" },
      },
    },
    plotOptions: {
      series: {
        borderWidth: 0,
      },
    },
  };

  const renderChart = (data) => {
    const d = {};
    for (let i = 0; i < suffixes.length * 2; i++) {
      const prefix = prefixes[i % 2 === 0 ? 0 : 1];
      const suffix = suffixes[i % suffixes.length];

      const jsonKey = `${prefix} ${suffix}`;
      let key = `${quarter}${new Date().getFullYear()}`;

      if (!data[jsonKey].hasOwnProperty(key)) {
        key = `${quarter}${new Date().getFullYear() - 1}`;
      }

      d[jsonKey] = data[jsonKey][key];
    }

    if (document.getElementById("gender-numbers-chart")) {
      const chart = Highcharts.chart(
        "gender-numbers-chart",
        Highcharts.merge(chartOptions, {
          chart: {
            type: "item",
            width: 550,
          },
          series: [
            {
              name: "Representatividade",
              keys: ["name", "y", "color", "label"],
              data: [
                ["Homens", 1822, "rgb(197, 197, 197)", "HOMENS"],
                ["Mulheres", 265, "#7cb5ec", "MULHERES"],
              ],
              dataLabels: {
                enabled: false,
                format: "{point.label}",
              },

              // Circular options
              center: ["50%", "88%"],
              size: "150%",
              startAngle: -100,
              endAngle: 100,
            },
          ],
          plotOptions: {
            item: {
              lineWidth: 0,
              pointPadding: 0.3,
              borderWidth: 0,
            },
          },
        })
      );
    }
  };

  const renderChart2 = (data) => {
    const d = {};
    for (let i = 0; i < suffixes.length * 2; i++) {
      const prefix = prefixes[i % 2 === 0 ? 0 : 1];
      const suffix = suffixes[i % suffixes.length];

      const jsonKey = `${prefix} ${suffix}`;
      let key = `${quarter}${new Date().getFullYear()}`;

      if (!data[jsonKey].hasOwnProperty(key)) {
        key = `${quarter}${new Date().getFullYear() - 1}`;
      }

      d[jsonKey] = data[jsonKey][key];
    }

    if (document.getElementById("gender-numbers-stack-chart")) {
      const keys = suffixes
        .map((suffix) => {
          const filteredKeys = Object.keys(d)
            .filter((k) => k.includes(suffix))
            .sort(desc);
          return filteredKeys;
        })
        .flat(1);

      const series = keys.reduce(
        (acc, cur, i) => {
          const idx = i % 2 === 0 ? 0 : 1;
          acc[idx]["data"] = [...acc[idx]["data"], d[cur]];
          return acc;
        },
        [
          { name: "Mulheres", data: [] },
          { name: "Homens", data: [] },
        ]
      );

      // Categorias fixas
      const chart = Highcharts.chart(
        "gender-numbers-stack-chart",
        Highcharts.merge(chartOptions, {
          series: series,
          chart: {
            type: "column",
            width: 550,
          },
          tooltip: {
            formatter: function () {
              return (
                this.series.name +
                ": <b>" +
                numberToDecimalsDigits(this.point.y, 2) +
                " %</b>"
              );
            },
          },
          xAxis: {
            gridLineColor: "transparent",
            categories: [
              "Conselhos de Administração",
              "Conselhos Fiscais",
              "Diretorias",
              "Comitês de Auditoria",
              "Outros Comitês",
            ],
            labels: {
              style: { color: "white" },
            },
          },
          yAxis: {
            min: 0,
            max: 100,
            title: null,
            visible: false,
            gridLineColor: "transparent",
            labels: {
              style: { color: "white" },
            },
            stackLabels: {
              enabled: false,
              style: {
                fontWeight: "bold",
                color:
                  // theme
                  (Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color) ||
                  "gray",
              },
            },
          },
          plotOptions: {
            series: {
              borderWidth: 0,
            },
            column: {
              stacking: "normal",
              dataLabels: { enabled: false },
            },
          },
        })
      );
    }
  };

  const renderCharts3e4 = (data) => {
    const jsonKeys = [
      "N de homens total",
      "N de mulheres total",
      "% de homens total",
      "% de mulheres total",
    ];

    let categories = [];
    const filtered = Object.entries(data).reduce(
      (acc, cur) => {
        const [key, val] = cur;

        if (categories?.length === 0) {
          categories = Object.keys(cur[1]);
        }

        if (jsonKeys.includes(key)) {
          if (key.includes("homens")) {
            return {
              ...acc,
              homens: [...acc.homens, { [key]: Object.values(val) }],
            };
          }
          return {
            ...acc,
            mulheres: [...acc.mulheres, { [key]: Object.values(val) }],
          };
        }
        return { ...acc };
      },
      { homens: [], mulheres: [] }
    );

    const NTraceMen = {
      name: "Homens",
      color: colors.secondary,
      dataLabels: { enabled: false },
      data: filtered.homens[0][jsonKeys[0]],
    };

    const NTraceWomen = {
      name: "Mulheres",
      color: colors.primary,
      dataLabels: { enabled: false },
      data: filtered.mulheres[0][jsonKeys[1]],
    };

    const PercentTraceMen = {
      name: "Homens",
      color: colors.secondary,
      dataLabels: { enabled: false },
      data: filtered.homens[1][jsonKeys[2]],
    };

    const PercentTraceWomen = {
      name: "Mulheres",
      color: colors.primary,
      dataLabels: { enabled: false },
      data: filtered.mulheres[1][jsonKeys[3]],
    };

    if (document.getElementById("gender-numbers-chart3")) {
      // Grafico de barra [N homens/mulheres]
      const barChart = Highcharts.chart(
        "gender-numbers-chart3",
        Highcharts.merge(chartOptions, {
          chart: { type: "column" },
          series: [NTraceMen, NTraceWomen],
          xAxis: { categories },
          yAxis: {
            title: null,
            visible: false,
            gridLineColor: "transparent",
          },
          plotOptions: {
            item: { borderWidth: 0 },
          },
          legend: {
            align: "right",
            verticalAlign: "middle",
          },
          tooltip: {
            formatter: function () {
              return this.series.name + ": <b>" + this.point.y + "</b>";
            },
          },
        })
      );
    }

    if (document.getElementById("gender-numbers-chart4")) {
      // Grafico de linha [% homens/mulheres]
      const lineChart = Highcharts.chart(
        "gender-numbers-chart4",
        Highcharts.merge(chartOptions, {
          chart: { type: "line", height: 150 },
          series: [PercentTraceMen, PercentTraceWomen],
          xAxis: { categories },
          yAxis: {
            min: 0,
            max: 100,
            title: null,
            visible: false,
            gridLineColor: "transparent",
          },
          legend: {
            align: "right",
            verticalAlign: "middle",
          },
          tooltip: {
            formatter: function () {
              return (
                this.series.name +
                ": <b>" +
                numberToDecimalsDigits(this.point.y, 2) +
                " %</b>"
              );
            },
          },
        })
      );
    }
  };

  const renderCharts5a8 = (data) => {
    const colors = {
      primary: "#7cb5ec",
      secondary: "#434348",
    };

    const jsonKeys = ["% de homens em", "% de mulheres em"];

    let categories = [];
    const filtered = Object.entries(data).reduce(
      (acc, cur) => {
        const [key, val] = cur;

        if (categories?.length === 0) {
          categories = Object.keys(cur[1]);
        }

        let aux = { ...acc };

        for (let jk of jsonKeys) {
          if (key.includes(jk) && !key.includes("Variacao")) {
            if (key.includes("homens")) {
              aux = {
                ...acc,
                homens: [...acc.homens, { [key]: Object.values(val) }],
              };
            } else {
              aux = {
                ...acc,
                mulheres: [...acc.mulheres, { [key]: Object.values(val) }],
              };
            }
          }
        }
        return aux;
      },
      { homens: [], mulheres: [] }
    );

    const PercentTraceMenAdm = {
      name: "Homens",
      label: "Conselhos de Administração",
      dataLabels: { enabled: false },
      color: colors.secondary,
      data: Object.values(filtered.homens[0])[0],
    };
    const PercentTraceWomenAdm = {
      name: "Mulheres",
      label: "Conselhos de Administração",
      dataLabels: { enabled: false },
      color: colors.primary,
      data: Object.values(filtered.mulheres[0])[0],
    };

    const PercentTraceMenFiscais = {
      name: "Homens",
      label: "Conselhos Fiscais",
      dataLabels: { enabled: false },
      color: colors.secondary,
      data: Object.values(filtered.homens[1])[0],
    };
    const PercentTraceWomenFiscais = {
      name: "Mulheres",
      label: "Conselhos Fiscais",
      dataLabels: { enabled: false },
      color: colors.primary,
      data: Object.values(filtered.mulheres[1])[0],
    };

    const PercentTraceMenDiretorias = {
      name: "Homens",
      label: "Diretorias",
      dataLabels: { enabled: false },
      color: colors.secondary,
      data: Object.values(filtered.homens[2])[0],
    };
    const PercentTraceWomenDiretorias = {
      name: "Mulheres",
      label: "Diretorias",
      dataLabels: { enabled: false },
      color: colors.primary,
      data: Object.values(filtered.mulheres[2])[0],
    };

    const PercentTraceMenComites = {
      name: "Homens",
      label: "Comitês de Auditoria",
      dataLabels: { enabled: false },
      color: colors.secondary,
      data: Object.values(filtered.homens[2])[0],
    };
    const PercentTraceWomenComites = {
      name: "Mulheres",
      label: "Comitês de Auditoria",
      dataLabels: { enabled: false },
      color: colors.primary,
      data: Object.values(filtered.mulheres[2])[0],
    };

    if (document.getElementById("gender-numbers-chart5")) {
      // Grafico de linha [% homens/mulheres]
      const lineChart = Highcharts.chart(
        "gender-numbers-chart5",
        Highcharts.merge(chartOptions, {
          chart: {
            type: "line",
            height: 250,
          },
          series: [PercentTraceMenAdm, PercentTraceWomenAdm],
          xAxis: {
            categories,
            labels: {
              rotation: -90
            },
          },
          yAxis: {
            min: 0,
            max: 100,
            title: null,
            visible: false,
            gridLineColor: "transparent",
          },
          tooltip: {
            formatter: function () {
              return (
                this.series.userOptions.label +
                " - <b>" +
                this.point.category +
                "</b><br>" +
                this.series.name +
                ": <b>" +
                numberToDecimalsDigits(this.point.y, 2) +
                " %</b>"
              );
            },
          },
        })
      );
    }

    if (document.getElementById("gender-numbers-chart6")) {
      // Grafico de linha [% homens/mulheres]
      const lineChart = Highcharts.chart(
        "gender-numbers-chart6",
        Highcharts.merge(chartOptions, {
          chart: {
            type: "line",
            height: 250,
          },
          series: [PercentTraceMenFiscais, PercentTraceWomenFiscais],
          xAxis: {
            categories,
            labels: {
              rotation: -90
            },
          },
          yAxis: {
            min: 0,
            max: 100,
            title: null,
            visible: false,
            gridLineColor: "transparent",
          },
          tooltip: {
            formatter: function () {
              return (
                this.series.userOptions.label +
                " - <b>" +
                this.point.category +
                "</b><br>" +
                this.series.name +
                ": <b>" +
                numberToDecimalsDigits(this.point.y, 2) +
                " %</b>"
              );
            },
          },
        })
      );
    }

    if (document.getElementById("gender-numbers-chart7")) {
      // Grafico de linha [% homens/mulheres]
      const lineChart = Highcharts.chart(
        "gender-numbers-chart7",
        Highcharts.merge(chartOptions, {
          chart: {
            type: "line",
            height: 250,
          },
          series: [PercentTraceMenDiretorias, PercentTraceWomenDiretorias],
          xAxis: {
            categories,
            labels: {
              rotation: -90
            },
          },
          yAxis: {
            min: 0,
            max: 100,
            title: null,
            visible: false,
            gridLineColor: "transparent",
          },
          tooltip: {
            formatter: function () {
              return (
                this.series.userOptions.label +
                " - <b>" +
                this.point.category +
                "</b><br>" +
                this.series.name +
                ": <b>" +
                numberToDecimalsDigits(this.point.y, 2) +
                " %</b>"
              );
            },
          },
        })
      );
    }

    if (document.getElementById("gender-numbers-chart8")) {
      // Grafico de linha [% homens/mulheres]
      const lineChart = Highcharts.chart(
        "gender-numbers-chart8",
        Highcharts.merge(chartOptions, {
          chart: {
            type: "line",
            height: 250,
          },
          series: [PercentTraceMenComites, PercentTraceWomenComites],
          xAxis: {
            categories,
            labels: {
              rotation: -90
            },
          },
          yAxis: {
            min: 0,
            max: 100,
            title: null,
            visible: false,
            gridLineColor: "transparent",
          },
          tooltip: {
            formatter: function () {
              return (
                this.series.userOptions.label +
                " - <b>" +
                this.point.category +
                "</b><br>" +
                this.series.name +
                ": <b>" +
                numberToDecimalsDigits(this.point.y, 2) +
                " %</b>"
              );
            },
          },
        })
      );
    }
  };

  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    renderChart(data);
    renderChart2(data);
    renderCharts3e4(data);
    renderCharts5a8(data);
  };

  d3.blob(jsonUrls.gender_numbers_boards).then(processBlob);
}

function processGenderPresidentAdministrationBoard() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderPresidentAdministrationBoard = data;
  };

  d3.blob(jsonUrls.gender_president_administration_board).then(processBlob);
}

function processGenderPresidentDirectorBoard() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderPresidentDirectorBoard = data;
  };

  d3.blob(jsonUrls.gender_president_director_board).then(processBlob);
}

function processNPositionsBoards() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.nPositionsBoards = data;
  };

  d3.blob(jsonUrls.n_positions_boards).then(processBlob);
}

function processTotalNumberMenWomen() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.totalNumberMenWomen = data;
  };

  d3.blob(jsonUrls.total_number_men_women).then(processBlob);
}

function processVariationDiversity1Q2021() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.variationDiversity1Q2021 = data;
  };

  d3.blob(jsonUrls.variation_diversity_1Q2021).then(processBlob);
}

function processVariationDiversityBoards() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.variationDiversityBoards = data;
  };

  d3.blob(jsonUrls.variation_diversity_boards).then(processBlob);
}

function processWomenNumbersBoards() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.womenNumbersBoards = data;
  };

  d3.blob(jsonUrls.women_numbers_boards).then(processBlob);
}

function processYearsToEquality() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.yearsToEquality = data;
  };

  d3.blob(jsonUrls.years_to_equality).then(processBlob);
}

function processPresidentAdmBoard() {
  const colors = {
    primary: "#7cb5ec",
    secondary: "#434348",
  };

  const renderChart = (data) => {
    const chartOptions = {
      chart: {
        type: "bar",
        backgroundColor: "transparent",
      },
      title: null,
      legend: { enabled: false },
      credits: { enabled: false },
      exporting: { enabled: false },
    };

    const chart = Highcharts.chart(
      "president-adm-chart",
      Highcharts.merge(chartOptions, {
        yAxis: {
          min: 0,
          max: 100,
          title: null,
          gridLineColor: "transparent",
          labels: {
            style: { color: "white" },
          },
        },
        xAxis: {
          title: null,
          gridLineColor: "transparent",
          labels: {
            style: { color: "white" },
          },
          categories: ["Homens", "Mulheres"],
        },
        plotOptions: {
          series: { borderWidth: 0 },
        },
        tooltip: {
          formatter: function () {
            return `${this.point.category}: <b>${numberToDecimalsDigits(
              this.point.y,
              2
            )} %</b>`;
          },
        },
        series: [
          {
            keys: ["name", "y", "label", "color"],
            data: [
              ["Homens", 93.73, "Homens", colors.secondary],
              ["Mulheres", 6.27, "Mulheres", colors.primary],
            ],
          },
        ],
      })
    );
  }

  const renderChart2 = (data) => {
    const menKey = "% de homens nos conselhos de administracao eleitos pelos controladores";
    const womenKey = "% de mulheres nos conselhos de administracao eleitas pelos controladores";

    const keys = Object.keys(data[womenKey]);

    const actualQ = [keys[keys.length - 1]];
    const menAge = [data[menKey][actualQ[0]]];
    const womenAge = [data[womenKey][actualQ[0]]];

    const chartOptions = {
      chart: {
        width: 250,
        height: 300,
        type: "column",
        backgroundColor: "transparent",
      },
      credits: { enabled: false },
      exporting: { enabled: false },
      title: null,
      legend: {
        enabled: true,
        labelFormat: "{name}",
        itemStyle: { color: "#fff" },
      },
      tooltip: {
        formatter: function () {
          return (
            this.series.name +
            ": <strong>" +
            numberToDecimalsDigits(this.y, 0) +
            " %</strong>"
          );
        },
      },
    };

    const menTrace = {
      name: "Homens",
      label: "",
      data: menAge,
      color: colors.secondary,
      dataLabels: { enabled: false },
    };

    const womenTrace = {
      name: "Mulheres",
      label: "",
      data: womenAge,
      color: colors.primary,
      dataLabels: { enabled: false },
    };

    const chart = Highcharts.chart(
      "president-adm-chart2",
      Highcharts.merge(chartOptions, {
        xAxis: {
          categories: ["% Eleita pelo Controlador"],
          labels: {
            style: {
              color: "white",
            },
          },
        },
        yAxis: {
          min: 0,
          title: null,
          visible: false,
        },
        series: [menTrace, womenTrace],
        plotOptions: {
          series: { borderWidth: 0 },
        },
      })
    );
  }

  const renderChart3 = (data) => {
    const menKey = "% de homens presidentes de conselhos de administracao eleitos pelos controladores";
    const womenKey = "% de mulheres presidentes de conselhos de administracao eleitas pelos controladores";

    const keys = Object.keys(data[womenKey]);

    const actualQ = [keys[keys.length - 1]];
    const menAge = [data[menKey][actualQ[0]]];
    const womenAge = [data[womenKey][actualQ[0]]];

    const chartOptions = {
      chart: {
        type: "bar",
        backgroundColor: "transparent",
      },
      title: null,
      legend: { enabled: false },
      credits: { enabled: false },
      exporting: { enabled: false },
      tooltip: {
        formatter: function () {
          return (
            this.point.label +
            ": <strong>" +
            numberToDecimalsDigits(this.y, 0) +
            " %</strong>"
          );
        },
      },
    };

    const menTrace = {
      name: "Homens",
      label: "",
      data: [...menAge, ...womenAge],
      dataLabels: { enabled: false },
    };

    const womenTrace = {
      name: "Mulheres",
      label: "",
      data: womenAge,
      dataLabels: { enabled: false },
    };

    const categories = ["Homens", "Mulheres"];

    const chart = Highcharts.chart(
      "president-adm-chart3",
      Highcharts.merge(chartOptions, {
        xAxis: {
          title: null,
          categories,
          gridLineColor: "transparent",
          labels: {
            style: { color: "white" },
          },
        },
        yAxis: {
          min: 0,
          max: 100,
          title: null,
          gridLineColor: "transparent",
          labels: {
            style: { color: "white" },
          },
        },
        series: [{
          keys: ["name", "y", "label", "color"],
          data: categories.map((category, idx) => {
            if (idx === 0) {
            return ["Homens", ...menAge, "Homens", colors.secondary]
            }

            return ["Mulheres", ...womenAge, "Mulheres", colors.primary]
          }),
        },],
        plotOptions: {
          series: { borderWidth: 0 },
        },
      })
    );
  }

  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    renderChart(data);
    renderChart2(data);
    renderChart3(data);
  };

  d3.blob(jsonUrls.president_adm_board).then(processBlob);
}

function processCompaniesScore() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    const jsonKeys = ["Razão social", "Pontuação final"];

    const series = sortKeysByValue(data[jsonKeys[1]]).map((key) => {
      return [
        data[jsonKeys[0]][key],
        data[jsonKeys[0]][key],
        data[jsonKeys[1]][key],
      ];
    });

    const chartOptions = {
      chart: {
        type: "column",
        backgroundColor: "transparent",
      },
      credits: { enabled: false },
      exporting: { enabled: false },
      title: null,
      legend: {
        enabled: false,
        labelFormat: "{name}",
        itemStyle: {
          color: "#fff",
        },
      },
      tooltip: {
        formatter: function () {
          return (
            this.point.label +
            ": <strong>" +
            numberToDecimalsDigits(this.y, 2) +
            "</strong>"
          );
        },
      },
    };

    const chart = Highcharts.chart(
      "companies-score",
      Highcharts.merge(chartOptions, {
        xAxis: {
          visible: false,
        },
        yAxis: {
          title: null,
        },
        series: [
          {
            keys: ["name", "label", "y"],
            data: series,
          },
        ],
        plotOptions: {
          series: {
            borderWidth: 0,
            color: {
              linearGradient: [0, 0, window.innerWidth / 2, 0],
              stops: [
                [0, "#4cb6e0"],
                [1, "#e21b1b"],
              ],
            },
          },
        },
      })
    );
  };

  d3.blob(jsonUrls.companies_score).then(processBlob);
}

function processAgeDistributionAdmBoard() {
  const colors = {
    primary: "#7cb5ec",
    secondary: "#434348",
  };

  const renderChart = (data) => {
    const menKey = "Idade media dos homens no conselho de administracao";
    const womenKey = "Idade media das mulheres no conselho de administracao";

    const keys = Object.keys(data[womenKey]);

    const actualQ = [keys[keys.length - 1]];
    const menAge = [data[menKey][actualQ[0]]];
    const womenAge = [data[womenKey][actualQ[0]]];

    const chartOptions = {
      chart: {
        width: 250,
        height: 300,
        type: "column",
        backgroundColor: "transparent",
      },
      credits: { enabled: false },
      exporting: { enabled: false },
      title: null,
      legend: {
        enabled: true,
        labelFormat: "{name}",
        itemStyle: { color: "#fff" },
      },
      tooltip: {
        formatter: function () {
          return (
            this.series.name +
            ": <strong>" +
            numberToDecimalsDigits(this.y, 0) +
            "</strong>"
          );
        },
      },
    };

    const menTrace = {
      name: "Homens",
      label: "",
      data: menAge,
      color: colors.secondary,
      dataLabels: { enabled: false },
    };

    const womenTrace = {
      name: "Mulheres",
      label: "",
      data: womenAge,
      color: colors.primary,
      dataLabels: { enabled: false },
    };

    const chart = Highcharts.chart(
      "age-distribution-chart",
      Highcharts.merge(chartOptions, {
        xAxis: {
          categories: ["Idade Média"],
          labels: {
            style: {
              color: "white",
            },
          },
        },
        yAxis: {
          min: 0,
          title: null,
          visible: false,
        },
        series: [menTrace, womenTrace],
        plotOptions: {
          series: { borderWidth: 0 },
        },
      })
    );
  }

  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    renderChart(data);
  };

  d3.blob(jsonUrls.age_distribution_adm_board).then(processBlob);
}

function processAdmBoardMandates() {
  const colors = {
    primary: "#7cb5ec",
    secondary: "#434348",
  };

  const renderChart = (data) => {
    const menKey = "% de homens no primeiro mandato";
    const womenKey = "% de mulheres no primeiro mandato";

    const keys = Object.keys(data[womenKey]);

    const actualQ = [keys[keys.length - 1]];
    const menAge = [data[menKey][actualQ[0]]];
    const womenAge = [data[womenKey][actualQ[0]]];

    const chartOptions = {
      chart: {
        width: 250,
        height: 300,
        type: "column",
        backgroundColor: "transparent",
      },
      credits: { enabled: false },
      exporting: { enabled: false },
      title: null,
      legend: {
        enabled: true,
        labelFormat: "{name}",
        itemStyle: { color: "#fff" },
      },
      tooltip: {
        formatter: function () {
          return (
            this.series.name +
            ": <strong>" +
            numberToDecimalsDigits(this.y, 0) +
            " %</strong>"
          );
        },
      },
    };

    const menTrace = {
      name: "Homens",
      label: "",
      data: menAge,
      color: colors.secondary,
      dataLabels: { enabled: false },
    };

    const womenTrace = {
      name: "Mulheres",
      label: "",
      data: womenAge,
      color: colors.primary,
      dataLabels: { enabled: false },
    };

    const chart = Highcharts.chart(
      "adm-border-chart",
      Highcharts.merge(chartOptions, {
        xAxis: {
          categories: ["% em Primeiro Mandato"],
          labels: {
            style: {
              color: "white",
            },
          },
        },
        yAxis: {
          min: 0,
          title: null,
          visible: false,
        },
        series: [menTrace, womenTrace],
        plotOptions: {
          series: { borderWidth: 0 },
        },
      })
    );
  }

  const renderChart2 = (data) => {
    const menKey = "N medio de mandatos dos homens";
    const womenKey = "N medio de mandatos das mulheres";

    const keys = Object.keys(data[womenKey]);

    const actualQ = [keys[keys.length - 1]];
    const menAge = [data[menKey][actualQ[0]]];
    const womenAge = [data[womenKey][actualQ[0]]];

    const chartOptions = {
      chart: {
        width: 250,
        height: 300,
        type: "column",
        backgroundColor: "transparent",
      },
      credits: { enabled: false },
      exporting: { enabled: false },
      title: null,
      legend: {
        enabled: true,
        labelFormat: "{name}",
        itemStyle: { color: "#fff" },
      },
      tooltip: {
        formatter: function () {
          return (
            this.series.name +
            ": <strong>" +
            numberToDecimalsDigits(this.y, 0) +
            "</strong>"
          );
        },
      },
    };

    const menTrace = {
      name: "Homens",
      label: "",
      data: menAge,
      color: colors.secondary,
      dataLabels: { enabled: false },
    };

    const womenTrace = {
      name: "Mulheres",
      label: "",
      data: womenAge,
      color: colors.primary,
      dataLabels: { enabled: false },
    };

    const chart = Highcharts.chart(
      "adm-border-chart2",
      Highcharts.merge(chartOptions, {
        xAxis: {
          categories: ["Número Médio de Mandatos"],
          labels: {
            style: {
              color: "white",
            },
          },
        },
        yAxis: {
          min: 0,
          title: null,
          visible: false,
        },
        series: [menTrace, womenTrace],
        plotOptions: {
          series: { borderWidth: 0 },
        },
      })
    );
  }

  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    renderChart(data);
    renderChart2(data);
  };

  d3.blob(jsonUrls.adm_board_mandates).then(processBlob);
}

// utility functions

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

// 4Q2022
function quarterToYear(quarter) {
  return ("" + quarter).replaceAll(/(4Q|3Q|2Q|1Q)/gi, "");
}

// 1 Tri: Março
// 2 Tri: Junho
// 3 Tri: Setembro
// 4 Tri: Dezembro

//
function quarterToTrimester(quarter) {
  const arr = ["1Q", "2Q", "3Q", "4Q"];
  const aux = ["Mar", "Jun", "Set", "Dez"];

  let result = quarterToYear(quarter);
  for (let i = 0; i < arr.length; i++) {
    const quarterString = "" + quarter;
    if (quarterString.includes(arr[i])) {
      result = aux[i] + "-" + result;
    }
  }
  return result;
}

function sortKeysByValue(object) {
  const sortable = Object.keys(object).sort((a, b) =>
    object[a] > object[b] ? -1 : object[a] < object[b] ? 1 : 0
  );

  return sortable;
}

function getActualQ() {
  const today = new Date();
  const month = today.getMonth();

  //  0 ,  1 ,  2 ,  3 ,  4 ,  5 ,  6 ,  7 ,  8 ,  9 , 10 , 11
  // jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez

  if (month < 3) {
    return "4Q";
  }

  if (month < 6) {
    return "1Q";
  }

  if (month < 9) {
    return "2Q";
  }

  return "3Q";
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

function capitalize(text, locale = navigator.language) {
  const words = text.split(" ");
  return words
    .map((word) => {
      if (word.length > 2) {
        const [firstLetter, ...rest] = word;
        return firstLetter.toLocaleUpperCase(locale) + rest.join("");
      }

      return word;
    })
    .join(" ")
    .trim();
}
