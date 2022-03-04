function getAddress() {
    const home = document.querySelector('.home-page');
    home.classList.add('hidden');
    
    const address = document.querySelector('.get-address');
    address.classList.remove('hidden');
}

function getLocation(){
if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position)
    },function(error){
            console.log(error)        
        
    })

  } else {
    alert("I'm sorry, but geolocation services are not supported by your browser.");
  }
requestWeather(position);
}

function requestWeather(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    const promise = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={07d13a84eacc198438a73ea59330bb54`);
    promise.then(displayWeather);
}

function displayWeather(){

}



