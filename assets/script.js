var apiKey = "c543a4a68148b346e68fb0d688e62c98";
var city = "";    
var cityPull = localStorage.getItem("city")
city = cityPull;

//Last City searched displayed when reloading page
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
var todaysDate = moment().format("M/D/YY")
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.weather[0].icon)
    var weatherIcon = src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    document.getElementById("weather-icon").src = weatherIcon;
    var cityNameDate = document.getElementById("cityNameDate");
   cityNameDate.textContent = (data.name +" ("+ todaysDate + ")"); 
   var currentTemp = document.querySelector("#current-temp")
   currentTemp.textContent = ("Temp: " + data.main.temp + "°F")
   var currentTemp = document.querySelector("#current-wind")
   currentTemp.textContent = ("Wind: " + data.wind.speed + "MPH")
   var currentTemp = document.querySelector("#current-humidity")
   currentTemp.textContent = ("Humidity: " + data.main.humidity + "%")
  });

  
//Set new city when search btn clicked
var searchBtn = document.querySelector(".searchbtn")
searchBtn.addEventListener("click", function(){
    var cityQuery = document.querySelector(".city-input")
    var cityValue = cityQuery.value
    localStorage.setItem("city", cityValue)
    city = cityValue
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
var todaysDate = moment().format("M/D/YY")
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.weather[0].icon)
    var weatherIcon = src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
    document.getElementById("weather-icon").src = weatherIcon;
    var cityNameDate = document.getElementById("cityNameDate");
   cityNameDate.textContent = (data.name +" ("+ todaysDate + ")"); 
   var currentTemp = document.querySelector("#current-temp")
   currentTemp.textContent = ("Temp: " + data.main.temp + "°F")
   var currentTemp = document.querySelector("#current-wind")
   currentTemp.textContent = ("Wind: " + data.wind.speed + "MPH")
   var currentTemp = document.querySelector("#current-humidity")
   currentTemp.textContent = ("Humidity: " + data.main.humidity + "%")
  });
})

var queryForcastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";

fetch(queryForcastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

 