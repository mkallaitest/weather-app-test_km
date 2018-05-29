var btnFahrenheit = document.querySelector(".btn-f");
var btnCelsius = document.querySelector(".btn-c");
var lat;
var lon;	

 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=c8caaf4215875f3ab13d4886fe940dac", function(json){
	   
    var icon = JSON.stringify(json.weather[0].icon).replace(/\"/g, "");

    document.querySelector(".location").textContent = JSON.stringify(json.name).replace(/\"/g, "");
	  document.querySelector(".status").textContent = JSON.stringify(json.weather[0].main).replace(/\"/g, "");
    document.querySelector(".temp").textContent = JSON.stringify(json.main.temp) + "°C";
    document.querySelector(".wind").textContent = JSON.stringify(json.wind.speed) + " km/h";
    
    if (icon === "01d") {
      document.querySelector(".icon").name = "sunny";
    } else if (icon === "01n") {
      document.querySelector(".icon").name = "moon";
    } else if (icon === "02d"|| "02n") {
      document.querySelector(".icon").name = "cloudy";
    } else if (icon === "03d" || "03n" || "04d" || "04n" || "09d" || "09n" || "10n" || "10d") {
      document.querySelector(".icon").name = "cloud";
    } else if (icon === "11d" || "11n"){
      document.querySelector(".icon").name = "thunderstorm";
    } else if (icon === "13d" || "50d"){
      document.querySelector(".icon").name = "snow";
    } 

  });

	btnFahrenheit.addEventListener("click", function(){

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=c8caaf4215875f3ab13d4886fe940dac", function(json){
    document.querySelector(".temp").textContent = JSON.stringify(json.main.temp) + "°F";
    document.querySelector(".btn-f").classList.add("btn-clicked");
    document.querySelector(".btn-c").classList.remove("btn-clicked");
    
  });

	});

	btnCelsius.addEventListener("click", function(){

	$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=c8caaf4215875f3ab13d4886fe940dac", function(json){
   	document.querySelector(".temp").textContent = JSON.stringify(json.main.temp) + "°C";
   	document.querySelector(".btn-c").classList.add("btn-clicked");
   	document.querySelector(".btn-f").classList.remove("btn-clicked");
    
  });

	});

});

 }

/*
ICONS

01d - <ion-icon name="sunny"></ion-icon>
01n - <ion-icon name="moon"></ion-icon>
02d - <ion-icon name="cloudy"></ion-icon>
02n - <ion-icon name="cloudy"></ion-icon>
03d - <ion-icon name="cloud"></ion-icon>
03n - <ion-icon name="cloud"></ion-icon>
04d - <ion-icon name="cloud"></ion-icon>
04n - <ion-icon name="cloud"></ion-icon>
09d - <ion-icon name="cloud"></ion-icon>
09n - <ion-icon name="cloud"></ion-icon>
10d - <ion-icon name="cloud"></ion-icon>
10n - <ion-icon name="cloud"></ion-icon>
11d - <ion-icon name="thunderstorm"></ion-icon>
11n - <ion-icon name="thunderstorm"></ion-icon>
13d - <ion-icon name="snow"></ion-icon>
50d - <ion-icon name="snow"></ion-icon>


document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";








*/
