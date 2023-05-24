function habilitarLiga() {
  var selectPais = document.getElementById("selectPais");
  var selectLiga = document.getElementById("selectLiga");
  selectLiga.disabled = selectPais.value === "";
  resetarSelect(selectLiga);
  resetarSelect(document.getElementById("selectTemporada"));
  resetarSelect(document.getElementById("selectTime"));
  document.getElementById("botaoAvancar").disabled = true;
}

function habilitarTemporada() {
  var selectLiga = document.getElementById("selectLiga");
  var selectTemporada = document.getElementById("selectTemporada");
  selectTemporada.disabled = selectLiga.value === "";
  resetarSelect(selectTemporada);
  resetarSelect(document.getElementById("selectTime"));
  document.getElementById("botaoAvancar").disabled = true;
}

function habilitarTime() {
  var selectTemporada = document.getElementById("selectTemporada");
  var selectTime = document.getElementById("selectTime");
  selectTime.disabled = selectTemporada.value === "";
  resetarSelect(selectTime);
  document.getElementById("botaoAvancar").disabled = true;
}

function habilitarBotao() {
  var selectTime = document.getElementById("selectTime");
  document.getElementById("botaoAvancar").disabled = selectTime.value === "";
}

function resetarSelect(select) {
  select.selectedIndex = 0;
}

document.addEventListener("DOMContentLoaded", function () {
  var botaoAvancar = document.getElementById("botaoAvancar");
  botaoAvancar.addEventListener("click", function () {
    var selectTime = document.getElementById("selectTime");
    var selectedTime = selectTime.options[selectTime.selectedIndex].text;
    sessionStorage.setItem("time", selectedTime);
    var time = sessionStorage.getItem("time");
    document.getElementById("time").textContent = time;
  });
});