const apiKey ='e501730d39ce652f32678ca46b60eabd'
const apiUrl= `https://api.openweathermap.org/data/2.5/weather`;


async function getWeather() {
    const city = document.getElementById('city').value;
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric&lang=uk`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            document.getElementById('weather-info').innerHTML = 'Не вдалося отримати дані про погоду.';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('weather-info').innerHTML = 'Помилка при отриманні даних.';
    }
}


function displayWeather(data) {
    const weatherInfo = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}


window.onload = getWeather;



