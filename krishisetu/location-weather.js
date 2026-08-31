// FARM LOCATION DATA

const locationData = {

    Maharashtra: {

        Solapur: {

            Barshi: [
                "Gadegaon",
                "Pangaon",
                "Agalgaon",
                "Bhalgaon",
                "Javale"
            ],

            Pandharpur: [
                "Karkamb",
                "Bhose",
                "Gopalpur",
                "Bardi",
                "Takali"
            ],

            Akkalkot: [
                "Dudhani",
                "Boroti",
                "Nagansur",
                "Hannur",
                "Chincholi"
            ],

            Mohol: [
                "Kamati",
                "Kurul",
                "Narkhed",
                "Lamboti",
                "Ardhanari"
            ],

            Malshiras: [
                "Akluj",
                "Natepute",
                "Velapur",
                "Mahalung",
                "Yashwantnagar"
            ]

        },


        Pune: {

            Haveli: [
                "Wagholi",
                "Manjari",
                "Mundhwa",
                "Kharadi",
                "Dhayari"
            ],

            Baramati: [
                "Malegaon",
                "Someshwar",
                "Dorlewadi",
                "Morgaon",
                "Undawadi"
            ],

            Junnar: [
                "Narayangaon",
                "Alephata",
                "Otur",
                "Manchar",
                "Belhe"
            ],

            Khed: [
                "Rajgurunagar",
                "Chakan",
                "Alandi",
                "Markal",
                "Pimpri"
            ]

        },


        Satara: {

            Karad: [
                "Karad",
                "Malkapur",
                "Masur",
                "Umbraj",
                "Vasantgad"
            ],

            Wai: [
                "Wai",
                "Dhom",
                "Menavali",
                "Bhuinj",
                "Kikali"
            ],

            Phaltan: [
                "Phaltan",
                "Lonand",
                "Girvi",
                "Nimbalak",
                "Sakharwadi"
            ]

        },


        Kolhapur: {

            Karvir: [
                "Kasaba Bawada",
                "Kandalgaon",
                "Kumbhoj",
                "Shiroli",
                "Ujlaiwadi"
            ],

            Panhala: [
                "Panhala",
                "Kodoli",
                "Kale",
                "Masai Pathar",
                "Waghave"
            ],

            Kagal: [
                "Kagal",
                "Sidhnerli",
                "Khasbaug",
                "Bachani",
                "Shendur"
            ]

        }

    }

};


// GET HTML ELEMENTS

const stateSelect =
    document.getElementById("state");

const districtSelect =
    document.getElementById("district");

const talukaSelect =
    document.getElementById("taluka");

const villageSelect =
    document.getElementById("village");

const locationForm =
    document.getElementById("locationForm");

const locationWeatherResults =
    document.getElementById(
        "locationWeatherResults"
    );


// STATE → DISTRICT

stateSelect.addEventListener(
    "change",
    function () {

        districtSelect.innerHTML =
            '<option value="">Select District</option>';

        talukaSelect.innerHTML =
            '<option value="">Select Taluka</option>';

        villageSelect.innerHTML =
            '<option value="">Select Village</option>';

        districtSelect.disabled = true;
        talukaSelect.disabled = true;
        villageSelect.disabled = true;

        const state =
            stateSelect.value;

        if (state !== "") {

            const districts =
                Object.keys(
                    locationData[state]
                );

            districts.forEach(
                function (district) {

                    districtSelect.innerHTML +=
                        `<option value="${district}">
                            ${district}
                        </option>`;

                }
            );

            districtSelect.disabled = false;

        }

    }
);


// DISTRICT → TALUKA

districtSelect.addEventListener(
    "change",
    function () {

        talukaSelect.innerHTML =
            '<option value="">Select Taluka</option>';

        villageSelect.innerHTML =
            '<option value="">Select Village</option>';

        talukaSelect.disabled = true;
        villageSelect.disabled = true;

        const state =
            stateSelect.value;

        const district =
            districtSelect.value;

        if (district !== "") {

            const talukas =
                Object.keys(
                    locationData[state][district]
                );

            talukas.forEach(
                function (taluka) {

                    talukaSelect.innerHTML +=
                        `<option value="${taluka}">
                            ${taluka}
                        </option>`;

                }
            );

            talukaSelect.disabled = false;

        }

    }
);


// TALUKA → VILLAGE

talukaSelect.addEventListener(
    "change",
    function () {

        villageSelect.innerHTML =
            '<option value="">Select Village</option>';

        villageSelect.disabled = true;

        const state =
            stateSelect.value;

        const district =
            districtSelect.value;

        const taluka =
            talukaSelect.value;

        if (taluka !== "") {

            const villages =
                locationData[state]
                [district]
                [taluka];

            villages.forEach(
                function (village) {

                    villageSelect.innerHTML +=
                        `<option value="${village}">
                            ${village}
                        </option>`;

                }
            );

            villageSelect.disabled = false;

        }

    }
);


// SAVE FARM LOCATION

function saveFarmLocation() {

    const state =
        stateSelect.value;

    const district =
        districtSelect.value;

    const taluka =
        talukaSelect.value;

    const village =
        villageSelect.value;


    if (
        state === "" ||
        district === "" ||
        taluka === "" ||
        village === ""
    ) {

        alert(
            "Please select all farm location details."
        );

        return;

    }


    const farmLocation =
        `${village}, ${taluka}, ${district}, ${state}`;


    // Save location in browser
    localStorage.setItem(
        "farmLocation",
        farmLocation
    );


    // Hide location form
    locationForm.style.display =
        "none";


    // Show location and weather cards
    locationWeatherResults.style.display =
        "grid";


    // Display selected location
    document.getElementById(
        "savedLocationText"
    ).innerText =
        farmLocation;


    // Update weather
    updateWeather(village);

}


// CHANGE LOCATION

function changeFarmLocation() {

    // Show form
    locationForm.style.display =
        "block";


    // Hide results
    locationWeatherResults.style.display =
        "none";

}


// WEATHER DATA

function updateWeather(village) {

    const weatherData = {

        "Gadegaon": {
            temperature: "28°C",
            condition: "Partly Cloudy",
            icon: "🌦️"
        },

        "Pangaon": {
            temperature: "30°C",
            condition: "Sunny",
            icon: "☀️"
        },

        "Agalgaon": {
            temperature: "27°C",
            condition: "Cloudy",
            icon: "☁️"
        },

        "Javale": {
            temperature: "29°C",
            condition: "Clear Sky",
            icon: "☀️"
        },

        "Karkamb": {
            temperature: "31°C",
            condition: "Sunny",
            icon: "☀️"
        },

        "Default": {
            temperature: "29°C",
            condition: "Partly Cloudy",
            icon: "🌤️"
        }

    };


    const weather =
        weatherData[village] ||
        weatherData["Default"];


    document.getElementById(
        "weatherTemperature"
    ).innerText =
        weather.temperature;


    document.getElementById(
        "weatherCondition"
    ).innerText =
        weather.condition;


    document.getElementById(
        "weatherIcon"
    ).innerText =
        weather.icon;


    document.getElementById(
        "weatherLocation"
    ).innerText =
        "📍 " + village;

}


// LOAD SAVED LOCATION

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const savedLocation =
            localStorage.getItem(
                "farmLocation"
            );


        if (savedLocation) {

            const village =
                savedLocation
                .split(",")[0]
                .trim();


            // Hide form
            locationForm.style.display =
                "none";


            // Show result cards
            locationWeatherResults.style.display =
                "grid";


            // Show location
            document.getElementById(
                "savedLocationText"
            ).innerText =
                savedLocation;


            // Show weather
            updateWeather(village);

        }

    }
);