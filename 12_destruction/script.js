const API_KEY = 'YOUR_API_KEY_HERE';
const defaultCity = 'Kyiv';
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
let currentCity = '';

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(`content-${tab.id.split('-')[1]}`).classList.add('active');
    });
});

function getWeatherByCity(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
        currentCity = city;
        cityInput.value = city;
        displayCurrentWeather(data);
        getHourlyForecast(data.coord.lat, data.coord.lon);
        getNearbyCities(data.coord.lat, data.coord.lon);
    })
    .catch(error => console.error('Error fetching weather data:', error));
}

function getHourlyForecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
            .then(data => {
                displayHourlyForecast(data.list);
        })
    .catch(error => console.error('Error fetching hourly forecast:', error));
}

function getNearbyCities(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => {
            displayNearbyCities(data.list);
        })
        .catch(error => console.error('Error fetching nearby cities:', error));
}

function displayCurrentWeather(data) {
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    const dayLength = ((data.sys.sunset - data.sys.sunrise) / 3600).toFixed(2);
    document.getElementById('current-weather').innerHTML = `
        <h2>Current Weather</h2>
        <div class="weather-item">
            <strong>Date:</strong> ${new Date().toLocaleDateString()}
        </div>
        <div class="weather-item">
            <strong>Description:</strong> ${data.weather[0].description}
        </div>
        <div class="weather-item">
            <strong>Temperature:</strong> ${data.main.temp}°C
        </div>
        <div class="weather-item">
            <strong>Feels Like:</strong> ${data.main.feels_like}°C
        </div>
        <div class="weather-item">
            <strong>Sunrise:</strong> ${sunrise}
        </div>
        <div class="weather-item">
            <strong>Sunset:</strong> ${sunset}
        </div>
        <div class="weather-item">
            <strong>Day Length:</strong> ${dayLength} hours
        </div>`;
}

function displayHourlyForecast(list) {
    const hourlyHTML = list.slice(0, 5).map(item => {
    const time = new Date(item.dt * 1000).toLocaleTimeString();
    return `
        <div class="weather-item">
        <strong>Time:</strong> ${time}, 
        <strong>Temp:</strong> ${item.main.temp}°C,
        <strong>Feels Like:</strong> ${item.main.feels_like}°C,
        <strong>Wind:</strong> ${item.wind.speed} m/s</div>`;
            }).join('');
    document.getElementById('hourly-forecast').innerHTML = `<h2>Hourly Forecast</h2>${hourlyHTML}`;
}

function displayNearbyCities(cities) {
    const citiesHTML = cities.map(city => {
        return `
            <div class="weather-item">
            <strong>${city.name}:</strong> ${city.main.temp}°C
            </div>`;
    }).join('');
    document.getElementById('nearby-cities').innerHTML = `<h2>Nearby Cities</h2>${citiesHTML}`;
}

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) getWeatherByCity(city);
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        getWeatherByCity(`${position.coords.latitude},${position.coords.longitude}`);
    }, () => getWeatherByCity(defaultCity));
} else {
    getWeatherByCity(defaultCity);
}