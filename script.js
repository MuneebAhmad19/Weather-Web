const apiKey = "e71fc0ba28c7c13b595c13b436c6bfcc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "Imgs/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weathericon.src = "Imgs/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weathericon.src = "Imgs/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "Imgs/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weathericon.src = "Imgs/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weathericon.src = "Imgs/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
       
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();