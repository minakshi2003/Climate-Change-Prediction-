const getWeather = async (city) => {
    try {
        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2d238793b6msh28f90a94de6a7cep16b815jsn1edc98cfa8af',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
            }
        };

        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        // Assuming these elements exist in your HTML
        //cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        temp2.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        humidity2.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_speed2.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        sunrise.innerHTML = data.sunrise;
        sunset.innerHTML = data.sunset;

    } catch (error) {
        console.error(error);
    }
};

async function fetchData() {
    try {
        // Invoke the getWeather function with a default city
        await getWeather("Delhi");
    } catch (error) {
        console.error(error);
    }
}

fetchData();

const submit = document.getElementById("submit"); // Assuming there is an element with id "submit"
const cityInput = document.getElementById("city"); // Assuming there is an input element with id "city"

submit.addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent form submission
    const city = cityInput.value;
    await getWeather(city);
});
