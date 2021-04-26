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
  companies_distribution_number_women_boards: `${host}esg-data/study/companies_distribution_number_women_boards.json`,
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
  processCompaniesDistributionNumberWomenBoards();

  // processCompaniesWithMoreThan2Women();
  // processCompaniesWithMoreThan2WomenRegion();
  // processCompaniesWithMoreThan2WomenSegment();
  // processEqualityProjection();
  // processGenderAgeAdministrationBoard();
  // processGenderMandatesAdministrationBoard();
  processGenderNumbersBoards();
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
        height: 240,
      },
      title: null,
      credits: { enabled: false },
      exporting: { enabled: false },
      tooltip: { enabled: false },
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
        series: [
          {
            name: "Temperatura",
            data: [data["Temperatura"]],
          },
        ],
      })
    );
  };

  d3.blob(jsonUrls.thermometer, { method: "GET" }).then(processBlob);
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
    console.log({ cols, data });

    this.companiesWithMoreThan2Women = data;
  };

  d3.blob(jsonUrls.companies_with_more_than_2women).then(processBlob);
}

function processCompaniesDistributionNumberWomenBoards() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    const jsonKey =
      "% de empresas com 0 mulheres em conselhos de administracao";
    const periods = [
      "4Q2016",
      "4Q2017",
      "4Q2018",
      "4Q2019",
      "4Q2020",
      "1Q2021",
    ];
    const series = periods.map((period) => parseFloat(data[jsonKey][period]));

    const chartOptions = {
      chart: {
        type: "column",
        width: 500,
      },
      title: null,
      credits: { enabled: false },
      exporting: { enabled: false },
      tooltip: { enabled: false },
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
          categories: periods,
        },
        yAxis: {
          title: { enabled: false },
        },
        series: [
          {
            name: "Values",
            data: series,
          },
        ],
      })
    );
  };

  d3.blob(jsonUrls.companies_distribution_number_women_boards).then(
    processBlob
  );
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
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    const prefix = "% de mulheres em";
    // const jsonKey = `${prefix} `

    const chartOptions = {
      chart: {
        type: "column",
        width: 500,
      },
      title: null,
      credits: { enabled: false },
      exporting: { enabled: false },
      tooltip: { enabled: false },
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
      "gender-numbers-chart",
      Highcharts.merge(chartOptions, {
        xAxis: {
          // categories: periods,
        },
        yAxis: {
          title: { enabled: false },
        },
        series: [
          {
            name: "Values",
            // data: series,
          },
        ],
      })
    );

    console.log({ data });
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
