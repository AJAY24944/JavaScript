function showWeather() {
    let input = document.getElementById("input");
    let city = input.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    getWeather(city);
}

async function getWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;

    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a5a39c9ca0mshf101a143bb30462p1e979cjsn42fdefce8cb5',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

let container = document.getElementById("weather");
let plantStatus = document.getElementById("plantStatus");
container.innerHTML = `<p class="placeholder">Loading weather data...⏳</p>`;
plantStatus.textContent = "Checking plant mood";


    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // console.log(result);

        if (!result.main) {
            document.getElementById("weather").innerHTML = `
                <h3>Weather data not found</h3>
                <p>${result.message || "Invalid city name or API error"}</p>
            `;
            plantStatus.textContent = "Plant status unavailable";
            return;
        }

        changeThemeByTemperature(result.main.temp);
    updatePlantStatus(result.main.temp);
        showdata(result);
    } catch (error) {
        console.error("Error fetching weather:", error);
        container.innerHTML = `
      <div class="error">
        <h3>Something went wrong</h3>
        <p>Unable to fetch weather data. Please try again.</p>
      </div>
    `;
    plantStatus.textContent = "Plant status unavailable";
    }
}

function changeThemeByTemperature(temp) {
  document.body.classList.remove("cold", "cool", "warm", "hot");

  if (temp <= 15) {
    document.body.classList.add("cold");
  } else if (temp <= 25) {
    document.body.classList.add("cool");
  } else if (temp <= 35) {
    document.body.classList.add("warm");
  } else {
    document.body.classList.add("hot");
  }
}

function updatePlantStatus(temp) {
  let plantStatus = document.getElementById("plantStatus");

  if (temp <= 15) {
    plantStatus.textContent = "Plant mood";
  } else if (temp <= 25) {
    plantStatus.textContent = "Plant mood";
  } else if (temp <= 35) {
    plantStatus.textContent = "Plant mood";
  } else {
    plantStatus.textContent = "Plant mood";
  }
}

function showdata(data) {
    let container = document.getElementById("weather");

    container.innerHTML = `
    <h2 class="city-name">${data.name}, ${data.sys.country}</h2>
    <div class="weather-grid">
      <div class="weather-item">
        <h4>🌡 Temperature</h4>
        <p>${data.main.temp}°C</p>
      </div>
      <div class="weather-item">
        <h4>💧 Humidity</h4>
        <p>${data.main.humidity}%</p>
      </div>
      <div class="weather-item">
        <h4>☁ Weather</h4>
        <p>${data.weather[0].description}</p>
      </div>
      <div class="weather-item">
        <h4>🌬 Wind Speed</h4>
        <p>${data.wind.speed} m/s</p>
      </div>
    </div>
  `;
}