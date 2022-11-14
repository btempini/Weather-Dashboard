var input = document.querySelector(".input");
var inputBtn = document.querySelector(".search");
var mainCityEl = document.querySelector(".mainCityEl")
var mainTempEl = document.querySelector(".mainTempEl")
var mainWindEl = document.querySelector(".mainWindEl")
var mainHumidityEl = document.querySelector(".mainHumidityEl")
var date1El = document.querySelector(".date1")
var date2El = document.querySelector(".date2")
var date3El = document.querySelector(".date3")
var date4El = document.querySelector(".date4")
var date5El = document.querySelector(".date5")
var temp1El = document.querySelector(".temp1")
var temp2El = document.querySelector(".temp2")
var temp3El = document.querySelector(".temp3")
var temp4El = document.querySelector(".temp4")
var temp5El = document.querySelector(".temp5")
var wind1El = document.querySelector(".wind1")
var wind2El = document.querySelector(".wind2")
var wind3El = document.querySelector(".wind3")
var wind4El = document.querySelector(".wind4")
var wind5El = document.querySelector(".wind5")
var humidity1El = document.querySelector(".humidity1")
var humidity2El = document.querySelector(".humidity2")
var humidity3El = document.querySelector(".humidity3")
var humidity4El = document.querySelector(".humidity4")
var humidity5El = document.querySelector(".humidity5")

var state;


inputBtn.addEventListener("click", function(event){
  event.preventDefault();
  var state = input.value;
  var stateUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + state + "&appid=7011eb953ba72b23086bac978cab66f6";
  fetch(stateUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    var lat = data[0].lat
    var lon = data[0].lon
    data = {
      lat: lat,
      lon: lon,
    }
    var coordinateUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + data.lat + "&lon=" + data.lon + "&appid=7011eb953ba72b23086bac978cab66f6&units=imperial"
    fetch(coordinateUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      var futuresArr = []
      for (var i = 0; i < data.list.length; i++) {
        futuresArr = futuresArr.concat(data.list[i].dt_txt)
      }
      var city = data.city.name
      var mainTemp = data.list[0].main.temp
      var mainWind = data.list[0].wind.speed
      var mainHumidity = data.list[0].main.humidity
      var date1 = futuresArr[7]
      var date2 = futuresArr[15]
      var date3 = futuresArr[23]
      var date4 = futuresArr[31]
      var date5 = futuresArr[39]
      var temp1 = data.list[7].main.temp
      var temp2 = data.list[15].main.temp
      var temp3 = data.list[23].main.temp
      var temp4 = data.list[31].main.temp
      var temp5 = data.list[39].main.temp
      var wind1 = data.list[7].wind.speed
      var wind2 = data.list[15].wind.speed
      var wind3 = data.list[23].wind.speed
      var wind4 = data.list[31].wind.speed
      var wind5 = data.list[39].wind.speed
      var humidity1 = data.list[7].main.humidity
      var humidity2 = data.list[15].main.humidity
      var humidity3 = data.list[23].main.humidity
      var humidity4 = data.list[31].main.humidity
      var humidity5 = data.list[39].main.humidity
      wind1El.append(wind1 + "mph")
      wind2El.append(wind2 + "mph")
      wind3El.append(wind3 + "mph")
      wind4El.append(wind4 + "mph")
      wind5El.append(wind5 + "mph")
      humidity1El.append(humidity1 + "%")
      humidity2El.append(humidity2 + "%")
      humidity3El.append(humidity3 + "%")
      humidity4El.append(humidity4 + "%")
      humidity5El.append(humidity5 + "%")
      temp1El.append(temp1 + " F")
      temp2El.append(temp2 + " F")
      temp3El.append(temp3 + " F")
      temp4El.append(temp4 + " F")
      temp5El.append(temp4 + " F")
      date1El.append(date1)
      date2El.append(date2)
      date3El.append(date3)
      date4El.append(date4)
      date5El.append(date5)
      mainCityEl.append(city)
      mainTempEl.append(mainTemp + " F")
      mainWindEl.append(mainWind + "mph")
      mainHumidityEl.append(mainHumidity + "%")
      console.log(data)
    })
  })
});