var myHeaders = new Headers();
myHeaders.append("x-rapidapi-key", "7cd1c6ea56db6be77d538c979936dfb1");
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

let divUsuarios = document.querySelector("#usuarios")

async function respostaApi(temporada, time) {
    let response = await fetch(`https://v3.football.api-sports.io/teams/statistics?league=71&season=${temporada}&team=${time}`, requestOptions)
        .then(response => response.json())
}

var valorTemporada = document.getElementById('selectTemporada');
var valorTime = document.getElementById('selectTime');

valorTime.addEventListener('change', function () {
    enviarDados();
});

valorTemporada.addEventListener('change', function () {
    enviarDados();
});

function enviarDados() {
    let time = valorTime.value;
    let temporada = valorTemporada.value;
    respostaApi(temporada, time);
}