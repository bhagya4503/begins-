const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('serach-btn');
const weather_img = document.querySelector('.weather-img');
const temprature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

function checkWeather(city){
    const api_key = "af22b8204190f6b4f5b6d594f149ce5a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = fetch(`${url}`).then(response => response.json());

 temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
 description.innerHTML = `${weather_data.weather[0].description}`;
 humidity.innerHTML = `${weather_data.main.humidity}%`;
 wind_speed.innerHeight = `${weather_data.wind_speed}Km/H`;

 switch(weather_data.weather[0].main){
    case `Clouds`:
        weather_img.src = "download.jpg";
        break;
    case `Clouds`:
         weather_img.src = "2469994.png";   
         break;  
    case `Clouds`:
         weather_img.src = "download.jpg";
         break;
    case `Clouds`:
         weather_img.src = "download.jpg";     

 }

 console.log(weather_data);
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})