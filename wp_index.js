const apiKey = "905373fd8fc00e4312f586374bfd544d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const serachBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon');
searchButton.addEventListener('click', ()=>{
    checkWeather(serachBox.value);
});

async function checkWeather(city) {
  const queryParams = new URLSearchParams({
    units: 'metric',
    q: city,
    appid: apiKey,
  });
  const response = await fetch(apiUrl + '?' + queryParams);
  if (response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  else{
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +'°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity+'%';
    document.querySelector(".wind").innerHTML = data.wind.speed+'km/h';
    
    if (data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear"){
      weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  
  }
  }
