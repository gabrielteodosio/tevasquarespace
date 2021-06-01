const indices = {
  tesouro: {
    selic: ["selic", "selic curto prazo", "selic médio prazo"],
    ipca: [
      "ipca total",
      "ipca curto prazo",
      "ipca médio prazo",
      "ipca longo prazo",
      "ipca ultra-longo prazo",
      "ipca ultra-longo monoativo",
    ],
    "pré fixado": [
      "pré fixado total",
      "pré fixado curto prazo",
      "pré fixado médio prazo",
      "pré fixado longo prazo",
    ],
    "tesouro total": ["tesouro total"],
    "selic ipca": ["selic incentivado"],
  },
  fiis: {
    amplos: [
      "índice de fundos imobiliários",
      "índice de fundos imobiliários liquidez",
      "índice de fundos imobiliários top 40",
      "índice de fundos imobiliários top 30",
      "índice de fundos imobiliários top 15",
    ],
    "tijolo papel": [
      "índice de fundos imobiliários de papel",
      "índice de fundos imobiliários de tijolo",
    ],
    "segmento de atuação": [
      "índice de fundos imobiliários de logística",
      "índice de fundos imobiliários de lajes corporativas",
      "índice de fundos imobiliários de shoppings",
      "índice de fundos imobiliários segmento híbrido",
    ],
    mandato: [
      "índice de fundos imobiliários mandato renda",
      "índice de fundos imobiliários mandato híbrido",
    ],
    fatores: [
      "índice de fundos imobiliários rendimento",
      "índice de fundos imobiliários valor",
    ],
    indexadores: [
      "índice de fundos imobiliários tijolo ipca",
      "índice de fundos imobiliários tijolo igpm",
    ],
  },
  acoes: {
    amplos: ["índice de ações amplo"],
    "filtro negativo": ["índice de ações esg clean"],
    "diversidade de gênero": ["índice de ações mulheres na liderança"],
    setoriais: [
      "índice de ações tecnologia brasil (listagem no brasil e nos eua)",
      "índice de ações tecnologia brasil",
      "índice de ações saúde",
      "índice de ações bens de consumo e varejo",
      "índice de ações energia",
      "índice de ações imobiliário",
      "índice de ações commodities",
      "índice de ações financeiro",
      "índice de ações industrial",
      "índice de ações comércio",
      "índice de ações viagem e turismo",
      "índice de ações infraestrutura e concessões",
      "índice de ações serviços",
      "índice de ações construção civil",
      "índice de ações agricultura",
    ],
    tematicos: [
      "índice de ações excl. empresas estatais",
      "índice de ações empresas públicas",
      "índice de ações exportação",
      "índice de ações inflação",
    ],
  },
  credit: {
    corporate: [
      "índice de debêntures corporate",
      "índice de debêntures corporate incentivadas",
      "índice de debêntures corporate di",
      "índice de debêntures corporate ipca",
      "índice de debêntures corporate esg diversidade",
    ],
    liquidez: [
      "índice de debêntures liquidez",
      "índice de debêntures liquidez incentivadas",
      "índice de debêntures liquidez di",
      "índice de debêntures liquidez ipca",
      "índice de debêntures liquidez esg diversidade",
    ],
    compostos: [
      "índice de debêntures corporate di composto",
      "índice de debêntures liquidez di composto",
    ],
  },
};

document.getElementById("tesouro-filter-text").addEventListener(
  "keyup",
  debounce(
    (e) => {
      const filter = e.target.value.toUpperCase();
      const list = document.getElementById("tesouro-indices-list").children;
      let familyFilter = document
        .getElementById("tesouro-family-filter")
        .value.toUpperCase();

      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition =
          name.indexOf(filter) >= 0 &&
          (familyFilter === "ALL" ? true : name.indexOf(familyFilter) >= 0);

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    },
    250,
    false
  )
);

document
  .getElementById("tesouro-family-filter")
  .addEventListener("change", (e) => {
    const filter = e.target.value.toUpperCase();
    const list = document.getElementById("tesouro-indices-list").children;
    const textFilter = document
      .getElementById("tesouro-filter-text")
      .value.toUpperCase();

    if (filter === "ALL") {
      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition =
          name.toLowerCase().indexOf(textFilter.toLowerCase()) >= 0;

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        console.log({
          name: name.toLowerCase(),
          textFilter: textFilter.toLowerCase(),
          filter: filter.toLowerCase(),
        });

        const condition =
          name.toLowerCase().indexOf(textFilter.toLowerCase()) >= 0 &&
          indices.tesouro[filter.toLowerCase()]?.includes(name.toLowerCase());

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    }
  });

document.getElementById("esg-filter-text").addEventListener(
  "keyup",
  debounce(
    (e) => {
      const filter = e.target.value.toUpperCase();
      const list = document.getElementById("esg-indices-list").children;
      let familyFilter = document
        .getElementById("esg-family-filter")
        .value.toUpperCase();

      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition =
          name.indexOf(filter) >= 0 &&
          (familyFilter === "ALL" || name.indexOf(familyFilter) >= 0);

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    },
    250,
    false
  )
);

document.getElementById("esg-family-filter").addEventListener("change", (e) => {
  const filter = e.target.value.toUpperCase();
  const list = document.getElementById("esg-indices-list").children;
  const textFilter = document
    .getElementById("esg-filter-text")
    .value.toUpperCase();

  if (filter === "ALL") {
    for (let i = 0; i < list.length; i++) {
      let name = list[i]
        .getElementsByClassName("index-title")[0]
        .innerHTML.toUpperCase();

      const condition = name.toLowerCase().includes(textFilter.toLowerCase());

      if (condition) list[i].style.display = "flex";
      else list[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < list.length; i++) {
      let name = list[i]
        .getElementsByClassName("index-title")[0]
        .innerHTML.toUpperCase();

      const condition =
        name.toLowerCase().includes(textFilter.toLowerCase()) &&
        indices.acoes[filter.toLowerCase()]?.includes(name.toLowerCase());

      if (condition) list[i].style.display = "flex";
      else list[i].style.display = "none";
    }
  }
});

document.getElementById("imobiliarios-indices-filter-text").addEventListener(
  "keyup",
  debounce(
    (e) => {
      const filter = e.target.value.toUpperCase();
      const list = document.getElementById(
        "imobiliarios-indices-list"
      ).children;
      const familyFilter = document
        .getElementById("imobiliarios-family-filter")
        .value.toUpperCase();

      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition =
          name.indexOf(filter) >= 0 &&
          (familyFilter === "ALL"
            ? true
            : indices.fiis[familyFilter.toLowerCase()]?.includes(
                name.toLowerCase()
              ));

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    },
    250,
    false
  )
);

document
  .getElementById("imobiliarios-family-filter")
  .addEventListener("change", (e) => {
    const filter = e.target.value.toUpperCase();
    const list = document.getElementById("imobiliarios-indices-list").children;
    const textFilter = document
      .getElementById("imobiliarios-indices-filter-text")
      .value.toUpperCase();

    if (filter === "ALL") {
      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition =
          name.toLowerCase().indexOf(textFilter.toLowerCase()) >= 0;

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }

      return;
    }

    for (let i = 0; i < list.length; i++) {
      let name = list[i]
        .getElementsByClassName("index-title")[0]
        .innerHTML.toUpperCase();

      const condition =
        name.toLowerCase().indexOf(textFilter.toLowerCase()) >= 0 &&
        indices.fiis[filter.toLowerCase()]?.includes(name.toLowerCase());

      if (condition) list[i].style.display = "flex";
      else list[i].style.display = "none";
    }
  });

document.getElementById("acoes-filter-text").addEventListener(
  "keyup",
  debounce(
    (e) => {
      const filter = e.target.value.toUpperCase();
      const list = document.getElementById("acoes-indices-list").children;
      const familyFilter = document
        .getElementById("acoes-family-filter")
        .value.toUpperCase();

      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition =
          name.indexOf(filter) >= 0 &&
          (familyFilter === "ALL" ? true : name.indexOf(familyFilter) >= 0);

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    },
    250,
    false
  )
);

document
  .getElementById("acoes-family-filter")
  .addEventListener("change", (e) => {
    const filter = e.target.value.toUpperCase();
    const list = document.getElementById("acoes-indices-list").children;
    const textFilter = document
      .getElementById("acoes-filter-text")
      .value.toUpperCase();

    if (filter === "ALL") {
      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition = name.toLowerCase().includes(textFilter.toLowerCase());

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition =
          name.toLowerCase().includes(textFilter.toLowerCase()) &&
          indices.acoes[filter.toLowerCase()]?.includes(name.toLowerCase());

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    }
  });

document.getElementById("credito-privado-filter-text").addEventListener(
  "keyup",
  debounce(
    (e) => {
      const filter = e.target.value.toUpperCase();
      const list = document.getElementById(
        "credito-privado-indices-list"
      ).children;
      const familyFilter = document
        .getElementById("credito-privado-family-filter")
        .value.toUpperCase();

      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition =
          name.indexOf(filter) >= 0 &&
          (familyFilter === "ALL" ? true : name.indexOf(familyFilter) >= 0);

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    },
    250,
    false
  )
);

document
  .getElementById("credito-privado-family-filter")
  .addEventListener("change", (e) => {
    const filter = e.target.value.toUpperCase();
    const list = document.getElementById(
      "credito-privado-indices-list"
    ).children;
    const textFilter = document
      .getElementById("credito-privado-filter-text")
      .value.toUpperCase();

    if (filter === "ALL") {
      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition = name.toLowerCase().includes(textFilter.toLowerCase());

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }

      return;
    }

    for (let i = 0; i < list.length; i++) {
      let name = list[i]
        .getElementsByClassName("index-title")[0]
        .innerHTML.toUpperCase();

      const condition =
        name.toLowerCase().indexOf(textFilter.toLowerCase()) >= 0 &&
        indices.credit[filter.toLowerCase()]?.includes(name.toLowerCase());

      if (condition) list[i].style.display = "flex";
      else list[i].style.display = "none";
    }
  });

function navigateTo(endpoint) {
  window.location.href = "/" + endpoint;
}

function debounce(func, wait, immediate = false) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
