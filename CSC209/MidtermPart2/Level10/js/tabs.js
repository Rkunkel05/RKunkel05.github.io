function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function addTab() {
    let noTabs = 4;
    let tab = document.getElementById("tab");
    let contentContainer = document.getElementById("tabContent");

    let sections = [
        {City: "London", Desc: "London is the capital city of England."}, 
        {City: "Tokyo", Desc: "Paris is the capital of France."}, 
        {City: "Paris", Desc: "Tokyo is the capital of Japan."}, 
        {City: "Canberra", Desc: "Canberra is the capital of Australia."}];

    for (i=0; i<noTabs;i++) {
        let section = sections[i];
        // \ = escape character, read as literal character vs closing text early
        let button = '<button class="tablinks" onclick="openCity(event, \'' + section.City + '\')">' + section.City + '</button>';
        tab.innerHTML += button;

        let content = '<div id="' + section.City + '" class="tabcontent" style="display: none;"><h3>' + section.City + '</h3><p>' + section.Desc + '</p></div>';
        contentContainer.innerHTML += content;
    }
  }