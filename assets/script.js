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
    // console.log(data.weather[0].icon)
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

  var queryForcastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";

fetch(queryForcastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].wind.speed);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[3]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Wind: " + data.list[i*8-1].wind.speed + " MPH")
    }
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].main.temp);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[2]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Temp: " + data.list[i*8-1].main.temp + "°F")
    }
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].main.humidity);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[4]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Humidity: " + data.list[i*8-1].main.humidity + "%")
    }

    for (var i = 1; i <= 5; i ++){
        var futureDate = moment().add(i, "days").format("M/D/YY")
        // console.log(futureDate)
        var futureDayDate = (document.body.children[2].children[1].children[i-1].children[0]); 
        // console.log(futureDayDate)
        futureDayDate.textContent = (futureDate)
        }

        for (var i = 1; i <= 5; i ++){
            var weatherIcon = src = "http://openweathermap.org/img/wn/" + data.list[i*8-1].weather[0].icon + ".png";
            document.body.children[2].children[1].children[i-1].children[1].src = weatherIcon;   
        }

    
  });



  
//Set new city when search btn clicked
var searchBtn = document.querySelector(".searchbtn")
searchBtn.addEventListener("click", function(){
    var cityQuery = document.querySelector(".city-input")
    var cityValue = cityQuery.value
    city = cityValue
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
var todaysDate = moment().format("M/D/YY")
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    localStorage.setItem("city", data.name)
    // console.log(data.weather[0].icon)
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

  var queryForcastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";

fetch(queryForcastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].wind.speed);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[3]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Wind: " + data.list[i*8-1].wind.speed + " MPH")
    }
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].main.temp);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[2]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Temp: " + data.list[i*8-1].main.temp + "°F")
    }
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].main.humidity);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[4]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Humidity: " + data.list[i*8-1].main.humidity + "%")
    }

   
         
        var weatherIcon = src = "http://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png";
        document.getElementById("weather-icon1").src = weatherIcon; 
        console.log(weatherIcon);
    

    for (var i = 1; i <= 5; i ++){
    var futureDate = moment().add(i, "days").format("M/D/YY")
    // console.log(futureDate)
    var futureDayDate = (document.body.children[2].children[1].children[i-1].children[0]); 
    // console.log(futureDayDate)
    futureDayDate.textContent = (futureDate)
    }

    for (var i = 1; i <= 5; i ++){
        var weatherIcon = src = "http://openweathermap.org/img/wn/" + data.list[i*8-1].weather[0].icon + ".png";
        document.body.children[2].children[1].children[i-1].children[1].src = weatherIcon;   
    }






var cityInput = document.querySelector('.city.input');
var btnContainer = document.getElementById('btncontainer');
var renderCityBtn = document.createElement('button');
if(!citySearchHistory.includes(city)){    
renderCityBtn.textContent = city;
btnContainer.appendChild(renderCityBtn);}

var cityPull = localStorage.getItem("city")

if(cityPull != null && !citySearchHistory.includes(cityPull) && cityPull != "undefined"){
citySearchHistory.push(cityPull)
}

localStorage.setItem("citySearchHistory", JSON.stringify(citySearchHistory));

    

  });
})

var cityPull = localStorage.getItem("city")

if(localStorage.getItem("citySearchHistory") === null){
    citySearchHistory = []
} else{
citySearchHistory=JSON.parse(localStorage.getItem("citySearchHistory"));
}

if(cityPull != null && !citySearchHistory.includes(cityPull) && cityPull != "undefined"){
citySearchHistory.push(cityPull)
}

localStorage.setItem("citySearchHistory", JSON.stringify(citySearchHistory));

console.log(citySearchHistory)

for (var i = 0; i < citySearchHistory.length; i++) {
    var cityBtn = citySearchHistory[i];
    var btnContainer = document.getElementById('btncontainer');
    var renderCityBtn = document.createElement('button');
    renderCityBtn.className = "cityHistoryBtn"
    renderCityBtn.textContent = cityBtn;
    renderCityBtn.value = cityBtn;
    btnContainer.appendChild(renderCityBtn);
}  







// Search City when city history btn clicked
var searchCityHistoryBtn = document.querySelector("#btncontainer");
console.log(searchCityHistoryBtn)
searchCityHistoryBtn.addEventListener("click", function(event){
    console.log(event.target)
    // var cityBtnValue = document.querySelector(search)
    var cityValue = event.target.value
    city = cityValue
    console.log(cityValue)
var querycityhistoryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
var todaysDate = moment().format("M/D/YY")
fetch(querycityhistoryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    localStorage.setItem("city", data.name)
    // console.log(data.weather[0].icon)
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

  var queryForcastURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";

fetch(queryForcastURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].wind.speed);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[3]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Wind: " + data.list[i*8-1].wind.speed + " MPH")
    }
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].main.temp);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[2]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Temp: " + data.list[i*8-1].main.temp + "°F")
    }
    for (var i = 1; i <= 5; i ++){
        // console.log(data.list[i*8-1].main.humidity);
        var foreCastWeatherId = (document.body.children[2].children[1].children[i-1].children[4]); 
        // console.log(foreCastWeatherId)
        foreCastWeatherId.textContent = ("Humidity: " + data.list[i*8-1].main.humidity + "%")
    }

   
         
        var weatherIcon = src = "http://openweathermap.org/img/wn/" + data.list[7].weather[0].icon + ".png";
        document.getElementById("weather-icon1").src = weatherIcon; 
        console.log(weatherIcon);
    

    for (var i = 1; i <= 5; i ++){
    var futureDate = moment().add(i, "days").format("M/D/YY")
    // console.log(futureDate)
    var futureDayDate = (document.body.children[2].children[1].children[i-1].children[0]); 
    // console.log(futureDayDate)
    futureDayDate.textContent = (futureDate)
    }

    for (var i = 1; i <= 5; i ++){
        var weatherIcon = src = "http://openweathermap.org/img/wn/" + data.list[i*8-1].weather[0].icon + ".png";
        document.body.children[2].children[1].children[i-1].children[1].src = weatherIcon;   
    }



console.log(citySearchHistory)  
  });
})
 
