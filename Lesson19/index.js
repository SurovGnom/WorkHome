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
                City: ${data.name}
                Temperature: ${data.main.temp}°C
                Humidity: ${data.main.humidity}%
                Description: ${data.weather[0].description}
            `;
    document.getElementById('weather-info').innerText = weatherInfo;
}


window.onload = getWeather;



