const ApiKey = "4831199325311ed3602cfd2775e0f594"
const searchBtn = document.querySelector(".searchBtn")
const cityInput = document.querySelector(".cityInput")
const weatherCard = document.querySelector(".weather-card")
const currentWeather = document.querySelector(".currentWeather")

function makeWeatherCard(cities, weatherItem, index) {
    //set up he html that will go on the main weather card
    if (index === 0) {
        return `<div class="data">
                    <h2>${cities} (${weatherItem.dt_txt.split(" ")[0]})</h2>
                    <h4>Temperature: ${((weatherItem.main.temp - 273.15) * 9/5 + 32).toFixed(2)}°F</h4>
                    <h4>Wind: ${weatherItem.wind.speed * 2} mph</h4>
                    <h4>Humidity: ${weatherItem.main.humidity}%</h4>
                </div>
                <div class="icon">
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h4>${weatherItem.weather[0].description}</h4>
                </div>`;
    //set up the html for the other 5 weather cards
    } else {
        return `<li class="card">
                    <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                    <h4>Temp: ${((weatherItem.main.temp - 273.15) * 9/5 + 32).toFixed(2)}°F</h4>
                    <h4>Wind: ${weatherItem.wind.speed * 2} mph</h4>
                    <h4>Humidity: ${weatherItem.main.humidity}%</h4>
                </li>`;
    }
}

async function weatherDetails(cities, lat, lon) {
    const weatherApi = "https://api.openweathermap.org/data/2.5/forecast/?lat=" + lat + "&lon=" + lon + "&appid=" + ApiKey
let forecastDay = []
    fetch(weatherApi).then(function(res){
        return res.json().then(function(data){
            console.log(data)
    
            let fiveDays = data.list.filter(function(forecast){
                let forecastDate = new Date(forecast.dt_txt).getDate()
                if(!forecastDay.includes(forecastDate)){
                    return forecastDay.push(forecastDate)
                }
            })
        cityInput.value = ''
        currentWeather.innerHTML = ''
        weatherCard.innerHTML = ''
            console.log(fiveDays)
            fiveDays.forEach(function(weatherItem, index) {
                if (index === 0) {
                    currentWeather.insertAdjacentHTML("beforeend", makeWeatherCard(cities, weatherItem, index));
                } else {
                    weatherCard.insertAdjacentHTML("beforeend", makeWeatherCard(cities, weatherItem, index));
                }
            })
        })
    })
    }
//get the city's coordinates from the openweather api function
function citysCoordinates() {
    const cities = cityInput.value.trim()
    if(!cities) return

    const ApiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + cities + "&limit=1&appid=" + ApiKey;
//use fetch to fetch the data I want, and process it as JSON
    fetch(ApiUrl).then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        //giving an alert message incase the user enters an invalid city name
        if (!data.length) {
            return alert('Sorry but we were unable to find coordinates for ' + cities);
        }
        const { name, lat, lon } = data[0];
        weatherDetails(name, lat, lon);

    });
}

//need an event lister to listen for the click on the search button so it can fetch the api data I need
searchBtn.addEventListener("click", citysCoordinates)