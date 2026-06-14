# ¿Allá Llueve? 🌦️

Consultor de clima en tiempo real para ciudades argentinas. Ingresás el nombre de cualquier ciudad del país y obtenés al instante la temperatura, descripción del tiempo, humedad, viento y sensación térmica.

**[Ver demo →](https://tinchoreta.github.io/LlueveAlla/)**

---

## Características

- **Búsqueda con autocompletado** — más de 560 ciudades argentinas disponibles
- **Temperatura animada** — contador animado con efecto neon al cargar los datos
- **Datos completos** — temperatura, descripción, humedad, velocidad del viento y sensación térmica
- **Diseño futurista** — glassmorphism, orbes de luz animados y partículas flotantes
- **Responsive** — funciona en mobile y desktop

## Tecnologías

| Herramienta | Uso |
|---|---|
| [OpenWeatherMap API](https://openweathermap.org/api) | Datos meteorológicos en tiempo real |
| [Materialize CSS](https://materializecss.com/) | Componente de autocompletado |
| [SweetAlert2](https://sweetalert2.github.io/) | Alertas de error |
| [Google Fonts](https://fonts.google.com/) | Orbitron + Exo 2 |

## Cómo correr el proyecto

No tiene build ni dependencias de runtime. Alcanza con servir el directorio raíz:

```bash
python3 -m http.server 8000
# o
npx http-server .
```

Luego abrís `http://localhost:8000` en el navegador.

> Requiere conexión a internet para consultar la API de OpenWeatherMap.

## Estructura

```
/
├── index.html          # Punto de entrada único
├── src/
│   ├── css/
│   │   ├── style.css           # Estilos personalizados
│   │   └── materialize.min.css # Framework CSS (vendored)
│   ├── js/
│   │   ├── weather.js          # Toda la lógica de la app
│   │   ├── materialize.min.js  # Framework JS (vendored)
│   │   └── sweetalert2.all.min.js
│   └── JSON/                   # Datasets de referencia (no usados en runtime)
└── favicon.ico
```

## API

Los datos provienen del endpoint `/weather` de OpenWeatherMap con los parámetros:
- `q={ciudad},AR` — limita la búsqueda a Argentina
- `units=metric` — temperatura en Celsius
- `lang=es` — descripciones en español

La API key está incluida en el código fuente (`weather.js` línea 1) — es una key pública de desarrollo.

## Licencia

MIT
