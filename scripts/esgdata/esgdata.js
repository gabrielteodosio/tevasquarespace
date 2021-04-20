
const jsonUrls = {
  "companies_with_more_than_2women": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/companies_with_more_than_2women.json",
  "companies_with_more_than_2women_region": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/companies_with_more_than_2women_region.json",
  "companies_with_more_than_2women_segment": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/companies_with_more_than_2women_segment.json",
  "equality_projection": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/equality_projection.json",
  "gender_age_administration_board": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_age_administration_board.json",
  "gender_mandates_administration_board": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_mandates_administration_board.json",
  "gender_numbers_boards": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_numbers_boards.json",
  "gender_president_administration_board": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_president_administration_board.json",
  "gender_president_director_board": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/gender_president_director_board.json",
  "n_positions_boards": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/n_positions_boards.json",
  "total_number_men_women": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/total_number_men_women.json",
  "variation_diversity_1Q2021": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/variation_diversity_1Q2021.json",
  "variation_diversity_boards": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/variation_diversity_boards.json",
  "women_numbers_boards": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/women_numbers_boards.json",
  "years_to_equality": "https://combinatronics.com/gabrielteodosio/tevasquarespace/master/json/esgdata/years_to_equality.json",
}

Vue.config.devtools = true;
const app = new Vue({
  el: "#esg-app",
  data: () => ({
    companiesWithMoreThan2Women: {},
    companiesWithMoreThan2WomenRegion: {},
    companiesWithMoreThan2WomenSegment: {},
    equalityProjection: {},
    genderAgeAdministrationBoard: {},
    genderMandatesAdministrationBoard: {},
    genderNumbersBoards: {},
    genderPresidentAdministrationBoard: {},
    genderPresidentDirectorBoard: {},
    nPositionsBoards: {},
    totalNumberMenWomen: {},
    variationDiversity1Q2021: {},
    variationDiversityBoards: {},
    womenNumbersBoards: {},
    yearsToEquality: {},
  }),
  created() {
    this.processCompaniesWithMoreThan2Women = processCompaniesWithMoreThan2Women.bind(this);
    this.processCompaniesWithMoreThan2WomenRegion = processCompaniesWithMoreThan2WomenRegion.bind(this);
    this.processCompaniesWithMoreThan2WomenSegment = processCompaniesWithMoreThan2WomenSegment.bind(this);
    this.processEqualityProjection = processEqualityProjection.bind(this);
    this.processGenderAgeAdministrationBoard = processGenderAgeAdministrationBoard.bind(this);
    this.processGenderMandatesAdministrationBoard = processGenderMandatesAdministrationBoard.bind(this);
    this.processGenderNumbersBoards = processGenderNumbersBoards.bind(this);
    this.processGenderPresidentAdministrationBoard = processGenderPresidentAdministrationBoard.bind(this);
    this.processGenderPresidentDirectorBoard = processGenderPresidentDirectorBoard.bind(this);
    this.processNPositionsBoards = processNPositionsBoards.bind(this);
    this.processTotalNumberMenWomen = processTotalNumberMenWomen.bind(this);
    this.processVariationDiversity1Q2021 = processVariationDiversity1Q2021.bind(this);
    this.processVariationDiversityBoards = processVariationDiversityBoards.bind(this);
    this.processWomenNumbersBoards = processWomenNumbersBoards.bind(this);
    this.processYearsToEquality = processYearsToEquality.bind(this);

    this.numberToPercentalDecimalsDigits = numberToPercentalDecimalsDigits.bind(this);
    this.numberToDecimalsDigits = numberToDecimalsDigits.bind(this);
  },
  mounted() {
    this.processCompaniesWithMoreThan2Women();
    this.processCompaniesWithMoreThan2WomenRegion();
    this.processCompaniesWithMoreThan2WomenSegment();
    this.processEqualityProjection();
    this.processGenderAgeAdministrationBoard();
    this.processGenderMandatesAdministrationBoard();
    this.processGenderNumbersBoards();
    this.processGenderPresidentAdministrationBoard();
    this.processGenderPresidentDirectorBoard();
    this.processNPositionsBoards();
    this.processTotalNumberMenWomen();
    this.processVariationDiversity1Q2021();
    this.processVariationDiversityBoards();
    this.processWomenNumbersBoards();
    this.processYearsToEquality();
  },
});

function processCompaniesWithMoreThan2Women() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    let data = JSON.parse(text);

    const cols = Object.keys(data);
    console.log({ cols, data })

    
    data = Object.entries(data[cols[0]]).reduce((acc, cur) => {
      const aux = { ...acc };
      
      cols.forEach((col) => {
        aux = { ...aux, [cur[0]]: [data[col][cur[0]], cur[1], cur[0]] }
      });
      
      return aux;
    }, {})
    console.log({ cols, data })

    this.companiesWithMoreThan2Women = data;
  }

  d3.blob(jsonUrls.companies_with_more_than_2women).then(processBlob);
}

function processCompaniesWithMoreThan2WomenRegion() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);

    this.companiesWithMoreThan2WomenRegion = data;
  }

  d3.blob(jsonUrls.companies_with_more_than_2women_region).then(processBlob);
}

function processCompaniesWithMoreThan2WomenSegment() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.companiesWithMoreThan2WomenSegment = data;
  }

  d3.blob(jsonUrls.companies_with_more_than_2women_segment).then(processBlob);
}

function processEqualityProjection() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.equalityProjection = data;
  }

  d3.blob(jsonUrls.equality_projection).then(processBlob);
}

function processGenderAgeAdministrationBoard() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderAgeAdministrationBoard = data;
  }

  d3.blob(jsonUrls.gender_age_administration_board).then(processBlob);
}

function processGenderMandatesAdministrationBoard() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderMandatesAdministrationBoard = data;
  }

  d3.blob(jsonUrls.gender_mandates_administration_board).then(processBlob);
}

function processGenderNumbersBoards() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderNumbersBoards = data;
  }

  d3.blob(jsonUrls.gender_numbers_boards).then(processBlob);
}

function processGenderPresidentAdministrationBoard() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderPresidentAdministrationBoard = data;
  }

  d3.blob(jsonUrls.gender_president_administration_board).then(processBlob);
}

function processGenderPresidentDirectorBoard() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.genderPresidentDirectorBoard = data;
  }

  d3.blob(jsonUrls.gender_president_director_board).then(processBlob);
}

function processNPositionsBoards() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.nPositionsBoards = data;
  }

  d3.blob(jsonUrls.n_positions_boards).then(processBlob);
}

function processTotalNumberMenWomen() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.totalNumberMenWomen = data;
  }

  d3.blob(jsonUrls.total_number_men_women).then(processBlob);
}

function processVariationDiversity1Q2021() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.variationDiversity1Q2021 = data;
  }

  d3.blob(jsonUrls.variation_diversity_1Q2021).then(processBlob);
}

function processVariationDiversityBoards() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.variationDiversityBoards = data;
  }

  d3.blob(jsonUrls.variation_diversity_boards).then(processBlob);
}

function processWomenNumbersBoards() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.womenNumbersBoards = data;
  }

  d3.blob(jsonUrls.women_numbers_boards).then(processBlob);
}

function processYearsToEquality() {
  const processBlob = async (blob) => {
    const text = await blob.text();
    const data = JSON.parse(text);
    this.yearsToEquality = data;
  }

  d3.blob(jsonUrls.years_to_equality).then(processBlob);
}

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