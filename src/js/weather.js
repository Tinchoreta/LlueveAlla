const API_KEY = "ef6db81ac57f4d48fee6af442b8c8ddf";
const cities = document.querySelector('.city');
const temperature = document.querySelector('.temp');
const icon = document.querySelector('.icon');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');

/* WEATHER APP

    Selecciono una ciudad y me trae los datos del clima. 
    Utilizo:

 https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} 

 */

const getWeather = (city)=>{
    try {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+",AR-X&units=metric&appid="+API_KEY)
        .then((response)=> response.json())
        .then((info)=>this.displayWeather(info))
    } catch (error) {
        console.log(error)    
    }
} 

const displayWeather = (weatherInfo)=>{
    try {
        if (weatherInfo){
            const{name} = weatherInfo;
            const{icon, description} = weatherInfo.weather[0];
            const{speed} = weatherInfo.speed;
            const{temp, humidity} = weatherInfo.main;
            cities.textContent = "Clima en: " + name;
            icon.src = "https://openweathermap.org/img/wn/" + icon + ".png"
            temperature.textContent = temp;
            
        }
    } catch (error) {
        console.log(error)
    }
}

const options= {
    data:
    {
"Buenos Aires":null,
"Catamarca":null,
"Chaco":null,
"Chubut":null,
"Ciudad Autónoma de Buenos Aires":null,
"Corrientes":null,
"Córdoba":null,
"Entre Ríos":null,
"Formosa":null,
"Jujuy":null,
"La Pampa":null,
"La Rioja":null,
"Mendoza":null,
"Misiones":null,
"Neuquén":null,
"Río Negro":null,
"Salta":null,
"San Juan":null,
"San Luis":null,
"Santa Cruz":null,
"Santa Fe":null,
"Santiago del Estero":null,
"Tierra del Fuego":null,
"Tucumán":null
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.autocomplete');
    var instances = M.Autocomplete.init(elems, options);
  });

const botonBuscarClima = document.querySelector("btn");

botonBuscarClima.addEventListener('click',()=>{
    getWeather(cities)
})
