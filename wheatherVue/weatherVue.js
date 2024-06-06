let city = document.getElementById("city");
const APIKey = 'eb7cf9c11922f9087cbeb2edb4c3c0e7';

async function getWeather() {
    let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${APIKey}&q=${city.value}`;
    console.log(weatherAPI);
    const response = await fetch(weatherAPI);
    var data = await response.json();
    console.log(data);
    document.getElementById('cityRArea').innerHTML = data.name;
    document.getElementById('tempreture').innerHTML = Math.round(data.main.temp) + '&#176;C';
    document.getElementById('humidity').innerHTML = data.main.humidity + '%';
    document.getElementById('wind').innerHTML = Math.round(data.wind.speed) + ' Km/h';
    document.getElementById('description').innerHTML = data.weather[0].description;

    if(data.weather[0].icon === '01d') {
      document.getElementById('weatherImg').src = "./Assets/images/fullSun.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(185, 212, 235), rgb(253, 225, 100))";
    } else if (data.weather[0].icon === '04d' || data.weather[0].icon === '02d' || data.weather[0].icon === '03d') {
      document.getElementById('weatherImg').src = "./Assets/images/halfsun.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(185, 212, 235), rgb(253, 225, 100))";
    } else if (data.weather[0].icon === '09d' || data.weather[0].icon === '10d') {
      document.getElementById('weatherImg').src = "./Assets/images/purerain.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(150, 150, 150), rgb(230, 230, 230))";
    } else if (data.weather[0].icon === '11d') {
      document.getElementById('weatherImg').src = "./Assets/images/thunderstorm.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(150, 150, 150), rgb(230, 230, 230))";
    } else if (data.weather[0].icon === '13d') {
      document.getElementById('weatherImg').src = "./Assets/images/snowing.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(150, 150, 150), rgb(230, 230, 230))";
    } else if (data.weather[0].icon === '50d') {
      document.getElementById('weatherImg').src = "./Assets/images/haze.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(150, 150, 150), rgb(230, 230, 230))";
    } else if(data.weather[0].icon === '01n') {
      document.getElementById('weatherImg').src = "./Assets/images/moon.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(33, 12, 109), rgb(0, 69, 197))";
    } else if (data.weather[0].icon === '04n' || data.weather[0].icon === '02n' || data.weather[0].icon === '03n') {
      document.getElementById('weatherImg').src = "./Assets/images/halfmoon.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(33, 12, 109), rgb(0, 69, 197))";
    } else if (data.weather[0].icon === '09n' || data.weather[0].icon === '10n') {
      document.getElementById('weatherImg').src = "./Assets/images/purerain.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(33, 12, 109), rgb(0, 69, 197))";
    } else if (data.weather[0].icon === '11n') {
      document.getElementById('weatherImg').src = "./Assets/images/thunderstorm.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(33, 12, 109), rgb(0, 69, 197))";
    } else if (data.weather[0].icon === '13n') {
      document.getElementById('weatherImg').src = "./Assets/images/snowing.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(33, 12, 109), rgb(0, 69, 197))";
    } else if (data.weather[0].icon === '50n') {
      document.getElementById('weatherImg').src = "./Assets/images/haze.png";
      document.getElementById('weatherBox').style.background = "linear-gradient(to right, rgb(33, 12, 109), rgb(0, 69, 197))";
    }
  }