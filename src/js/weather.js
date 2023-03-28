const API_KEY = "ef6db81ac57f4d48fee6af442b8c8ddf";
const cities = document.getElementById('autocomplete-input');
const temperature = document.querySelector('.temp');
const img = document.querySelector('.img');
const detalle = document.querySelector('.detalle');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');
const results = document.querySelector('.results');





/* WEATHER APP

    Selecciono una ciudad y me trae los datos del clima. 
    Utilizo:

 https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 

 */
let weatherResult = {

    getWeather: function (city) {
        try {
            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + ",AR&units=metric&lang=es&appid=" + API_KEY)
                .then((response) => response.json())
                .then((info) => this.displayWeather(info))

            console.log("https://api.openweathermap.org/data/2.5/weather?q=" + city + ",AR&units=metric&lang=es&appid=" + API_KEY)
        } catch (error) {
            console.log(error + " en fetch")
        }
        finally {
            console.log("https://api.openweathermap.org/data/2.5/weather?q=" + city + ",AR&units=metric&lang=es&appid=" + API_KEY)
        }
    }
    ,
    displayWeather: function (weatherInfo) {
        try {
            if (typeof(weatherInfo)!= 'undefined') {
                console.log(weatherInfo)
                city.textContent = "Clima en: ";
                img.src = "";
                detalle.textContent = "Detalle: ";
                temperature.textContent = "Temperatura: º";

                const { name } = weatherInfo;
                const { icon, description } = weatherInfo.weather[0];
                const { speed } = weatherInfo.wind;
                const { temp, humidity } = weatherInfo.main;
                city.textContent = "Clima en: " + name;
                img.src = "https://openweathermap.org/img/wn/" + icon + ".png"
                detalle.textContent = "Detalle: " + description.charAt(0).toUpperCase() + description.slice(1);
                temperature.textContent = "Temperatura: " + temp + "º";
                console.log(temp + " " + name + " icon.src: " + icon + " descr: " + description)

                results.style.display = "block";
            }
            else{
                results.style.display = "none";
            }
        } catch (error) {
            console.log(error + " en display")
        }
    }

}
document.addEventListener('DOMContentLoaded', function () {
    
    var instances = M.Autocomplete.init(cities, options);
});

const botonBuscarClima = document.getElementById('searchWeather');

botonBuscarClima.addEventListener('click', () => {

    if (cities.value) {
        weatherResult.getWeather(cities.value);
    }

});
const options = {
    data:
    {
        "Buenos Aires": null,
        "Catamarca": null,
        "Chaco": null,
        "Chubut": null,
        "Ciudad Autónoma de Buenos Aires": null,
        "Corrientes": null,
        "Córdoba": null,
        "Entre Ríos": null,
        "Formosa": null,
        "San Salvador de Jujuy": null,
        "La Pampa": null,
        "La Rioja": null,
        "Mendoza": null,
        "Misiones": null,
        "Neuquén": null,
        "Río Negro": null,
        "Salta": null,
        "San Juan": null,
        "San Luis": null,
        "Santa Cruz": null,
        "Santa Fe": null,
        "Santiago del Estero": null,
        "Ushuaia": null,
        "Tucumán": null
    }
}