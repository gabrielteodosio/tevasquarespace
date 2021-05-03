document.getElementById("tesouro-indices-filter-text").addEventListener(
  "keyup",
  debounce(
    (e) => {
      const filter = e.target.value.toUpperCase();
      const list = document.getElementById("tesouro-indices-list").children;
      let familyFilter = document.getElementById("family-filter").value.toUpperCase();

      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition = name.indexOf(filter) >= 0 &&
                          (familyFilter === "ALL" ? true : name.indexOf(familyFilter) >= 0);        

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    },
    250,
    false
  )
);

document.getElementById("tesouro-family-filter").addEventListener("change", (e) => {
  const filter = e.target.value.toUpperCase();
  const list = document.getElementById("tesouro-indices-list").children;
  const textFilter = document.getElementById("indices-filter-text").value.toUpperCase();

  if (filter === "ALL") {
    for (let i = 0; i < list.length; i++) {
      let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

      const condition = name.indexOf(textFilter) >= 0 &&
                        (filter === "ALL" ? true : name.indexOf(filter) >= 0);        

      if (condition) list[i].style.display = "flex";
      else list[i].style.display = "none";
    }

    return;
  }

  for (let i = 0; i < list.length; i++) {
    let name = list[i]
      .getElementsByClassName("index-title")[0]
      .innerHTML.toUpperCase();

    const condition = name.indexOf(filter) >= 0 &&
                      name.indexOf(textFilter) >= 0;

    if (condition) list[i].style.display = "flex";
    else list[i].style.display = "none";
  }
});

document.getElementById("imobiliarios-indices-filter-text").addEventListener(
  "keyup",
  debounce(
    (e) => {
      const filter = e.target.value.toUpperCase();
      const list = document.getElementById("imobiliarios-indices-list").children;
      let familyFilter = document.getElementById("imobiliarios-family-filter").value.toUpperCase();

      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition = name.indexOf(filter) >= 0 &&
                          (familyFilter === "ALL" ? true : name.indexOf(familyFilter) >= 0);        

        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    },
    250,
    false
  )
);

document.getElementById("imobiliarios-family-filter").addEventListener("change", (e) => {
  const filter = e.target.value.toUpperCase();
  const list = document.getElementById("imobiliarios-indices-list").children;
  const textFilter = document.getElementById("imobiliarios-indices-filter-text").value.toUpperCase();

  if (filter === "ALL") {
    for (let i = 0; i < list.length; i++) {
      let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

      const condition = name.indexOf(textFilter) >= 0 &&
                        (filter === "ALL" ? true : name.indexOf(filter) >= 0);        

      if (condition) list[i].style.display = "flex";
      else list[i].style.display = "none";
    }

    return;
  }

  for (let i = 0; i < list.length; i++) {
    let name = list[i]
      .getElementsByClassName("index-title")[0]
      .innerHTML.toUpperCase();

    const condition = name.indexOf(filter) >= 0 &&
                      name.indexOf(textFilter) >= 0;

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
