# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Allá Llueve?** is a client-side weather app for Argentine cities. It has no build system, no test framework, and no linter — it is a static HTML/CSS/JS site served directly from the filesystem.

## Running Locally

There is no build step. Serve the root directory with any static HTTP server:

```bash
python -m http.server 8000
# or
npx http-server .
```

Then open `http://localhost:8000` in a browser. The app requires an internet connection to reach the OpenWeatherMap API.

Dependencies (Materialize CSS, SweetAlert2) are vendored locally under `src/js/` and `src/css/` — `npm install` is not required to run the app, only to manage package versions.

## Architecture

All application logic lives in two files:

- **`index.html`** — single-page entry point; defines the DOM structure and loads scripts in order: Materialize → SweetAlert2 → `weather.js`
- **`src/js/weather.js`** — all app logic (~170 lines):
  - Top-level DOM references (lines 2–12) are grabbed once at load time
  - `weatherResult` object (lines 25–100) encapsulates the two key methods:
    - `getWeather(city)` — builds and fires a `fetch` to the OpenWeatherMap `/weather` endpoint with `?q={city},AR&units=metric&lang=es`
    - `displayWeather(weatherInfo)` — parses the JSON response, updates DOM text/image, and adjusts Materialize grid classes based on `window.innerWidth`
  - `options.data` (lines 115–677) is a large hardcoded object of ~560 Argentine city names used to initialize the Materialize autocomplete widget on `DOMContentLoaded`
  - Error state: a `cod == "404"` response triggers a SweetAlert2 modal; other errors are only logged to console

## Key Conventions

- **Language:** Variables, comments, and UI strings are in Spanish (e.g., `ciudad`, `clima`, `detalle`, `temperatura`)
- **Async style:** Promise chaining via `.then()` — not `async/await`
- **No modules:** Everything is global; there is no bundler or import/export
- **Responsive layout:** Materialize 12-column grid — column sizes are toggled programmatically in `displayWeather()` rather than via CSS media queries alone
- **API key:** `API_KEY` is hardcoded at line 1 of `weather.js` and exposed in client-side code — do not treat it as secret

## Data Files

`src/JSON/Cities.json`, `src/JSON/Countries.json`, and `src/JSON/ciudades-ar.csv` exist in the repo but are **not loaded at runtime**. The active city list is the inline `options.data` object in `weather.js`.
