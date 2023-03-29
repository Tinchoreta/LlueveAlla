const API_KEY = "ef6db81ac57f4d48fee6af442b8c8ddf";
const cities = document.getElementById('autocomplete-input');
const temperature = document.querySelector('.temp');
const img = document.querySelector('.img');
const detalle = document.querySelector('.detalle');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const city = document.querySelector('.city');
const results = document.querySelector('.results');

const detalleParent = detalle.parentNode;
const imgParent = img.parentNode;

// import Swal from 'sweetalert2';
// const Swal = require('sweetalert2')

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
            if (typeof (weatherInfo) != 'undefined' && weatherInfo.cod != "404") {
                // Selecciona los elementos HTML

                 console.log(weatherInfo);   

                // Aplica las clases dependiendo del tipo de dispositivo
                if (window.innerWidth > 600) { // Pantalla grande
                    detalleParent.classList.remove('s9');
                    detalleParent.classList.add('s6');
                    imgParent.classList.remove('s3');
                    imgParent.classList.add('s6');
                } else { // Pantalla pequeña
                    detalleParent.classList.remove('s6');
                    detalleParent.classList.add('s9');
                    imgParent.classList.remove('s6');
                    imgParent.classList.add('s3');
                }
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
            else {
                results.style.display = "none";

                if(weatherInfo.cod == "404") 
                {
                    Swal.fire({
                        title: 'Ciudad no encontrada!',
                        text: 'Lamentablemente no encontramos la ciudad',
                        icon: 'warning',
                        confirmButtonText: 'OK'
                  });

                  cities.value = "";
                  cities.focus();
                }
              
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
        weatherResult.getWeather(cities.value.trim());
    }

});
const options = {
    data:
    {
        "Buenos Aires": null,
        "Córdoba": null,
        "Rosario": null,
        "Comodoro Rivadavia": null,
        "San Miguel de Tucumán": null,
        "Mar del Plata": null,
        "Salta": null,
        "San Juan": null,
        "Lanús": null,
        "Florencio Varela": null,
        "Santa Fe": null,
        "Corrientes": null,
        "San Salvador de Jujuy": null,
        "Bahía Blanca": null,
        "Resistencia": null,
        "Posadas": null,
        "Santiago del Estero": null,
        "Paraná": null,
        "Merlo": null,
        "González Catán": null,
        "Neuquén": null,
        "Quilmes": null,
        "Banfield": null,
        "Formosa": null,
        "José C. Paz": null,
        "La Plata": null,
        "Godoy Cruz": null,
        "Isidro Casanova": null,
        "La Rioja": null,
        "Berazategui": null,
        "San Luis": null,
        "José María Ezeiza": null,
        "San Nicolás de los Arroyos": null,
        "Catamarca": null,
        "Río Cuarto": null,
        "San Miguel": null,
        "Concordia": null,
        "Rafael Castillo": null,
        "Florencio Varela": null,
        "San Justo": null,
        "Ituzaingó": null,
        "Temperley": null,
        "Ramos Mejía": null,
        "San Martín": null,
        "Tandil": null,
        "Puerto Madryn": null,
        "Mendoza": null,
        "San Carlos de Bariloche": null,
        "Lomas de Zamora": null,
        "Villa Mercedes": null,
        "Bernal": null,
        "Esteban Echeverría": null,
        "Gualeguaychú": null,
        "San Rafael": null,
        "Castelar": null,
        "La Banda": null,
        "Santa Rosa": null,
        "Berisso": null,
        "Libertad": null,
        "Morón": null,
        "Burzaco": null,
        "Zárate": null,
        "Río Gallegos": null,
        "Caseros": null,
        "Villa Luzuriaga": null,
        "Trelew": null,
        "Ciudad General Belgrano": null,
        "Rafaela": null,
        "San Francisco Solano": null,
        "Pergamino": null,
        "Campana": null,
        "Olavarría": null,
        "Monte Chingolo": null,
        "Junín": null,
        "Presidencia Roque Sáenz Peña": null,
        "Luján": null,
        "General Roca": null,
        "Remedios de Escalada": null,
        "Pilar": null,
        "Gobernador Gálvez": null,
        "Necochea": null,
        "Ezpeleta": null,
        "Villa María": null,
        "Venado Tuerto": null,
        "San Ramón de la Nueva Orán": null,
        "Concepción del Uruguay": null,
        "Goya": null,
        "Bella Vista": null,
        "Lomas del Mirador": null,
        "Reconquista": null,
        "Las Heras": null,
        "Oberá": null,
        "Wilde": null,
        "Santo Tomé": null,
        "Villa Carlos Paz": null,
        "Villa Domínico": null,
        "San Francisco": null,
        "Los Polvorines": null,
        "Tartagal": null,
        "Sarandí": null,
        "Chajarí": null,
        "Viedma": null,
        "San Pedro": null,
        "Punta Alta": null,
        "Rafael Calzada": null,
        "General Pico": null,
        "Ushuaia": null,
        "Azul": null,
        "Chivilcoy": null,
        "Mercedes": null,
        "Cruz del Eje": null,
        "Caleta Olivia": null,
        "El Talar de Pacheco": null,
        "Villaguay": null,
        "Libertador General San Martín": null,
        "Alta Gracia": null,
        "La Reja": null,
        "San Lorenzo": null,
        "Longchamps": null,
        "San Pedro": null,
        "Villa Constitución": null,
        "Tres Arroyos": null,
        "Río Tercero": null,
        "Pinamar": null,
        "San Isidro": null,
        "Esperanza": null,
        "Gualeguay": null,
        "Villa Alsina": null,
        "José Mármol": null,
        "Balcarce": null,
        "Aristóbulo del Valle": null,
        "Haedo": null,
        "Granadero Baigorria": null,
        "Esquel": null,
        "Nueve de Julio": null,
        "Dock Sur": null,
        "Munro": null,
        "Cutral-Có": null,
        "Villa Adelina": null,
        "Casilda": null,
        "Chacabuco": null,
        "Centenario": null,
        "Bell Ville": null,
        "Chilecito": null,
        "Bragado": null,
        "Plottier": null,
        "La Calera": null,
        "Zapala": null,
        "Rawson": null,
        "Jesús María": null,
        "Río Grande": null,
        "Mercedes": null,
        "Victoria": null,
        "Villa Ángela": null,
        "Villa Regina": null,
        "Villa Celina": null,
        "Villa Gesell": null,
        "Capitán Bermúdez": null,
        "Cañada de Gómez": null,
        "Baradero": null,
        "Villa Allende": null,
        "Adrogue": null,
        "San Martín de los Andes": null,
        "Marcos Juárez": null,
        "Dolores": null,
        "Firmat": null,
        "Colón": null,
        "Lincoln": null,
        "Avellaneda": null,
        "Coronel Suárez": null,
        "Tapiales": null,
        "Veinticinco de Mayo": null,
        "Tunuyán": null,
        "San Justo": null,
        "Deán Funes": null,
        "El Calafate": null,
        "Chascomús": null,
        "Laboulaye": null,
        "Brandsen": null,
        "General Martín Miguel de Güemes": null,
        "Vera": null,
        "Charata": null,
        "Lobos": null,
        "Coronda": null,
        "General Juan Madariaga": null,
        "Veinticinco de Mayo": null,
        "Eldorado": null,
        "Ayacucho": null,
        "Santa María": null,
        "Federación": null,
        "San Antonio Oeste": null,
        "Villa del Rosario": null,
        "Villa Paranacito": null,
        "Carmen de Areco": null,
        "San Cristóbal": null,
        "Puerto Deseado": null,
        "Añatuya": null,
        "La Quiaca": null,
        "San Javier": null,
        "Frías": null,
        "Joaquín V. González": null,
        "Chos Malal": null,
        "Rosario del Tala": null,
        "San Salvador": null,
        "Junín de los Andes": null,
        "La Carlota": null,
        "Malargüe": null,
        "Cafayate": null,
        "Oliva": null,
        "Coronel Dorrego": null,
        "Cerrillos": null,
        "Monte Quemado": null,
        "Humahuaca": null,
        "Belén": null,
        "Villa La Angostura": null,
        "Sarmiento": null,
        "Benito Juárez": null,
        "San José de Feliciano": null,
        "Choele Choel": null,
        "Castelli": null,
        "Chamical": null,
        "Helvecia": null,
        "San Julián": null,
        "Santa Rosa de Río Primero": null,
        "Carhué": null,
        "Rinconada": null,
        "Ingeniero Guillermo N. Juárez": null,
        "Villa Cura Brochero": null,
        "Chepes": null,
        "Villa Huidobro": null,
        "General Conesa": null,
        "San Antonio de los Cobres": null,
        "Macachín": null,
        "Loncopué": null,
        "Perito Moreno": null,
        "Aluminé": null,
        "Gobernador Gregores": null,
        "Abra Pampa": null,
        "Victorica": null,
        "Puerto Santa Cruz": null,
        "La Paz": null,
        "Comandante Fontana": null,
        "Concepción": null,
        "Valcheta": null,
        "Piedra del Águila": null,
        "Tafí del Valle": null,
        "San Agustín": null,
        "Picún Leufú": null,
        "Pampa del Infierno": null,
        "Chumbicha": null,
        "Maquinchao": null,
        "Añelo": null,
        "Buta Ranquil": null,
        "San Francisco del Chañar": null,
        "Melincué": null,
        "José de San Martín": null,
        "Trancas": null,
        "Alto Río Senguer": null,
        "Sierra Colorada": null,
        "Villa Tulumba": null,
        "El Huecú": null,
        "San Carlos": null,
        "Salsacate": null,
        "Paso de Indios": null,
        "Tecka": null,
        "Las Lajas": null,
        "Susques": null,
        "Las Coloradas": null,
        "Pilcaniyeu": null,
        "Rodeo": null,
        "Gastre": null,
        "Tinogasta": null,
        "Telsen": null,
        "Las Plumas": null,
        "Olivos": null,
        "General San Martín": null,
        "Hurlingham": null,
        "Banda del Río Salí": null,
        "Villa Nueva": null,
        "Chimbas": null,
        "Tigre": null,
        "Santa Lucía": null,
        "Belén de Escobar": null,
        "Guernica": null,
        "Rivadavia": null,
        "Bernardo de Irigoyen": null,
        "Yerba Buena": null,
        "Ensenada": null,
        "Villa Krause": null,
        "Mar del Tuyú": null,
        "General Rodríguez": null,
        "Maipú": null,
        "San Fernando": null,
        "Junín": null,
        "Marcos Paz": null,
        "San Isidro de Lules": null,
        "Tafí Viejo": null,
        "Palpalá": null,
        "El Carmen": null,
        "Villa Aberastain": null,
        "San Vicente": null,
        "Aguilares": null,
        "Famaillá": null,
        "Cosquín": null,
        "Dolores": null,
        "San José": null,
        "Nueve de Julio": null,
        "Concepción": null,
        "Monteros": null,
        "Capilla del Señor": null,
        "San Isidro": null,
        "Monte Hermoso": null,
        "Cañuelas": null,
        "Puerto Rico": null,
        "Villa Alberdi": null,
        "Leandro N. Alem": null,
        "Apóstoles": null,
        "Alba Posse": null,
        "Campo Grande": null,
        "San Ignacio": null,
        "Ramallo": null,
        "Fernández": null,
        "Puerto Esperanza": null,
        "San Javier": null,
        "Santa Ana": null,
        "Termas de Río Hondo": null,
        "Rivadavia": null,
        "Bella Vista": null,
        "Capitán Sarmiento": null,
        "San Antonio de Areco": null,
        "San Cosme": null,
        "Luján de Cuyo": null,
        "Colón": null,
        "Miramar": null,
        "Simoca": null,
        "San Martín": null,
        "Arrecifes": null,
        "Bella Vista": null,
        "El Soberbio": null,
        "Montecarlo": null,
        "Quitilipi": null,
        "Chicoana": null,
        "Salto": null,
        "San Andrés de Giles": null,
        "Santa Lucía": null,
        "General Las Heras": null,
        "La Cocha": null,
        "Villa San Isidro": null,
        "San Antonio": null,
        "Las Rosas": null,
        "Diamante": null,
        "Clorinda": null,
        "Santa Rosa del Conlara": null,
        "Monte Caseros": null,
        "Tupungato": null,
        "San Bernardo": null,
        "Sastre": null,
        "Las Breñas": null,
        "Concepción de la Sierra": null,
        "San Miguel del Monte": null,
        "Machagai": null,
        "Saladillo": null,
        "Puerto Tirol": null,
        "Itatí": null,
        "Campo Largo": null,
        "Saladas": null,
        "Rojas": null,
        "Suipacha": null,
        "Magdalena": null,
        "Navarro": null,
        "Vedia": null,
        "Burruyacú": null,
        "Salliqueló": null,
        "Colonia Elisa": null,
        "La Paz": null,
        "Paso de los Libres": null,
        "General Arenales": null,
        "La Leonesa": null,
        "General Belgrano": null,
        "Corzuela": null,
        "San Pedro": null,
        "Alberti": null,
        "Ranchos": null,
        "Mburucuyá": null,
        "Pehuajó": null,
        "Santo Tomé": null,
        "Gobernador Ingeniero Valentín Virasoro": null,
        "Carlos Casares": null,
        "Makallé": null,
        "Nogoyá": null,
        "Roque Pérez": null,
        "Trenque Lauquen": null,
        "Tres Isletas": null,
        "General Viamonte": null,
        "La Caldera": null,
        "Margarita Belén": null,
        "General Pinedo": null,
        "General José de San Martín": null,
        "Rosario de Lerma": null,
        "Villa Media Agua": null,
        "Empedrado": null,
        "Bañado de Ovanta": null,
        "Graneros": null,
        "Concarán": null,
        "Esquina": null,
        "Metán": null,
        "San Roque": null,
        "Coronel Vidal": null,
        "Tres Lomas": null,
        "Realicó": null,
        "Pirané": null,
        "San Luis del Palmar": null,
        "Las Flores": null,
        "San Carlos de Bolívar": null,
        "Villa Berthet": null,
        "Arraga": null,
        "Tilcara": null,
        "Aimogasta": null,
        "Villa del Totoral": null,
        "Verónica": null,
        "Henderson": null,
        "Pigüé": null,
        "Santa Sylvina": null,
        "Nuestra Señora del Rosario de Caa Catí": null,
        "Rosario de la Frontera": null,
        "Herrera": null,
        "Brea Pozo": null,
        "Presidencia de la Plaza": null,
        "Caucete": null,
        "Curuzú Cuatiá": null,
        "Ameghino": null,
        "Espinillo": null,
        "Intendente Alvear": null,
        "Federal": null,
        "San Francisco de Laishí": null,
        "Villa Atamisqui": null,
        "Daireaux": null,
        "General Pinto": null,
        "Hermoso Campo": null,
        "General Villegas": null,
        "Villa Santa Rosa": null,
        "Coronel Pringles": null,
        "Alvear": null,
        "La Candelaria": null,
        "General Enrique Mosconi": null,
        "La Merced": null,
        "Castelli": null,
        "Maipú": null,
        "Santa Clara": null,
        "Andalgalá": null,
        "General Lavalle": null,
        "Lobería": null,
        "Los Telares": null,
        "La Viña": null,
        "San Miguel": null,
        "Quemú Quemú": null,
        "Sauce": null,
        "Rauch": null,
        "Ituzaingó": null,
        "La Toma": null,
        "Berón de Astrada": null,
        "Pellegrini": null,
        "General Alvear": null,
        "General Alvear": null,
        "Tornquist": null,
        "Médanos": null,
        "González Chaves": null,
        "Aminga": null,
        "Villa del Salvador": null,
        "Carlos Tejedor": null,
        "Bandera": null,
        "Catriló": null,
        "Laprida": null,
        "La Consulta": null,
        "Nueva Esperanza": null,
        "Toay": null,
        "San Cayetano": null,
        "Garza": null,
        "Esquiú": null,
        "San Antonio": null,
        "San Pedro": null,
        "Trenel": null,
        "La Cañada": null,
        "Eduardo Castex": null,
        "Guaminí": null,
        "Winifreda": null,
        "San Blas de los Sauces": null,
        "Santa Victoria": null,
        "Sumampa": null,
        "Pozo Hondo": null,
        "Puan": null,
        "Olta": null,
        "Guatraché": null,
        "Cachí": null,
        "Villa Ojo de Agua": null,
        "Carmen de Patagones": null,
        "Valle Grande": null,
        "Tapalqué": null,
        "San Francisco del Monte de Oro": null,
        "General La Madrid": null,
        "Villa de María": null,
        "La Puerta": null,
        "La Cruz": null,
        "Quimilí": null,
        "Suncho Corral": null,
        "Selva": null,
        "Saujil": null,
        "Parera": null,
        "Milagro": null,
        "Sañogasta": null,
        "Santa Rosa": null,
        "Tostado": null,
        "El Alto": null,
        "Molinos": null,
        "Iruya": null,
        "General Lavalle": null,
        "San José de Jáchal": null,
        "Leleque": null,
        "Campo Gallo": null,
        "Famatina": null,
        "San Agustín de Valle Fértil": null,
        "Libertador General San Martín": null,
        "Tumbaya": null,
        "Ancasti": null,
        "General Conesa": null,
        "San Carlos": null,
        "Rivadavia": null,
        "Bernasconi": null,
        "General Guido": null,
        "Andacollo": null,
        "General Acha": null,
        "Guachipas": null,
        "Malanzán": null,
        "Laguna Yema": null,
        "Pila": null,
        "Villa Unión": null,
        "Ulapes": null,
        "Gaimán": null,
        "Santa Catalina": null,
        "Río Colorado": null,
        "Tama": null,
        "Patquía": null,
        "Charadai": null,
        "Villa Unión": null,
        "Villa General Roca": null,
        "Buena Esperanza": null,
        "Santa Isabel": null,
        "La Poma": null,
        "Tamberías": null,
        "Villa Castelli": null,
        "El Cuy": null,
        "Vinchina": null,
        "Algarrobo del Águila": null,
        "Ñorquinco": null,
        "Camarones": null,
        "Puelches": null,
        "Limay Mahuida": null,
        "Antofagasta de la Sierra": null,
        "Cuchillo Có": null
    }
}