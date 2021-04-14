document.getElementById("indices-filter-text").addEventListener(
  "keyup",
  debounce(
    (e) => {
      const filter = e.target.value.toUpperCase();
      const list = document.getElementById("indices-list").children;

      for (let i = 0; i < list.length; i++) {
        let name = list[i]
          .getElementsByClassName("index-title")[0]
          .innerHTML.toUpperCase();

        const condition = name.indexOf(filter) >= 0;
        
        if (condition) list[i].style.display = "flex";
        else list[i].style.display = "none";
      }
    },
    250,
    false
  )
);

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
