function openTab(evt, tabName) {
  evt.preventDefault();

  const tabs = document.getElementsByClassName("tab");
  const sections = document.getElementsByClassName("tab-content")
  
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active-tab", "");
    sections[i].className = sections[i].className.replace(" active-tab", "");
  }

  document.getElementById(tabName).className += " active-tab";
  evt.currentTarget.className += " active-tab";
}