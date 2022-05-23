//GIVEN a weather dashboard with form inputs
//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city
//weather Api ending 8f22ad49c151f0bf1918e3b3dbe2b739
var userFormEl = document.querySelector("#user-form")
var cityNameInputEl = document.querySelector("#city-name");
var apiUrlCoordinates = "http://api.openweathermap.org/geo/1.0/direct?q=miami&limit=1&appid=8f22ad49c151f0bf1918e3b3dbe2b739"
var apiUrl = 
console.log(cityNameInputEl);

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log("submitted");
    $.get(apiUrl,function(data){
        console.log(data);
    })
}

var getCoordinates = function(cityName){
    var latitude = '' + cityName + '';
    var longitude = '' + cityName + '';
    $.get(apiUrlCoordinates,function(data){
        console.log(data)
        latitude = data.lat;
        longitude = data.lon;
    })
    return [latitude,longitude];
}


userFormEl.addEventListener("submit", formSubmitHandler); 