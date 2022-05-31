import { apiUrl, apiKey, weatherLoc } from '../../env/env.var.js';

const beApp = document.querySelector("#be-app");

async function getWeather() {
    let res = {};
    await fetch(`${apiUrl}/current.json?key=${apiKey}&q=${weatherLoc}`)
        .then(response => response.json())
        .then(data => res = data);

    beApp.innerHTML = 
        `
            <div class="weather-card">
                <div class="weather-card-inner">
                    <div class="weather-icon">
                        <img src="${res.current.condition.icon}" alt="${res.current.condition.text}" align="left" />
                    </div>
                    <div class="weather-text">
                        <div class="weather-localtime">${res.location.localtime}</div>
                        <div class="weather-current">Current weather</div> 
                        <span class="weather-current-text">${res.location.name}</span> <span class="weather-temp">${res.current.temp_f} °F / ${res.current.temp_c} °C</span>
                    </div>
                </div>
            </div>
        `
    ;
}

getWeather();