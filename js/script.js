function getAddress() {
  const home = document.querySelector('.home-page');
  home.classList.add('hidden');

  const address = document.querySelector('.get-address');
  address.classList.remove('hidden');
}

function getLocation() {
  if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position)
      requestWeather(position);
    }, function (error) {
      console.log(error)

    })

  } else {
    alert("I'm sorry, but geolocation services are not supported by your browser.");
  }
}

function requestWeather(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let long = position.coords.longitude;

  const promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=698b6b676a7b36a3c34d1cab2b6e4466`);
  console.log(promise);
  promise.then(displayWeather);
}

function displayWeather(resposta) {
  console.log(resposta);

  document.querySelector('.home-page').classList.add('hidden');
  document.querySelector('.show-weather').classList.remove('hidden');

  let tempData = resposta.data.main;
  console.log(tempData);

  let temp = document.querySelector(".temperature");
  temp.innerHTML =   `<h6 class="temperature">${tempData.temp}</h6>`;

}



