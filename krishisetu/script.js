// ========================================
// KRISHISETU - COMPLETE JAVASCRIPT
// ========================================


// ========================================
// SCROLL TO DASHBOARD
// ========================================

function scrollToDashboard() {

    const dashboard =
        document.getElementById("dashboard");

    if (dashboard) {

        dashboard.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/// ========================================
// DARK MODE
// ========================================

// Load saved dark mode when page opens

document.addEventListener("DOMContentLoaded", function () {

    const savedDarkMode =
        localStorage.getItem("darkMode");

    if (savedDarkMode === "enabled") {

        document.body.classList.add(
            "dark-mode"
        );

    }

});


// Dark mode button

const darkModeBtn =
    document.getElementById("darkModeBtn");

if (darkModeBtn) {

    darkModeBtn.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            // Save dark mode setting

            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                localStorage.setItem(
                    "darkMode",
                    "enabled"
                );

            } else {

                localStorage.setItem(
                    "darkMode",
                    "disabled"
                );

            }

        }
    );

}


// ========================================
// CROP SEARCH
// ========================================

const searchBox =
    document.getElementById("cropSearch");

const cropCards =
    document.querySelectorAll(".crop-card");

if (searchBox) {

    searchBox.addEventListener(
        "keyup",
        function () {

            const searchText =
                searchBox.value.toLowerCase();

            cropCards.forEach(
                function (card) {

                    const cropName =
                        card.innerText.toLowerCase();

                    if (
                        cropName.includes(searchText)
                    ) {

                        card.style.display =
                            "block";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}


// ========================================
// FARM LOCATION DATA
// ========================================

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
            ],

            Indapur: [
                "Bhigwan",
                "Nimgaon Ketki",
                "Natepute",
                "Lasurne",
                "Reda"
            ]

        },

        Ahmednagar: {

            Nagar: [
                "Kedgaon",
                "Savedi",
                "Wadgaon Gupta",
                "Bhingar",
                "Burhan Nagar"
            ],

            Rahata: [
                "Loni",
                "Shirdi",
                "Kolhar",
                "Nimgaon",
                "Dhanore"
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
            ]

        }

    }

};


// ========================================
// LOCATION DROPDOWNS
// ========================================

const stateSelect =
    document.getElementById("state");

const districtSelect =
    document.getElementById("district");

const talukaSelect =
    document.getElementById("taluka");

const villageSelect =
    document.getElementById("village");


if (
    stateSelect &&
    districtSelect &&
    talukaSelect &&
    villageSelect
) {

    // STATE TO DISTRICT

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

            const selectedState =
                stateSelect.value;

            if (selectedState !== "") {

                const districts =
                    Object.keys(
                        locationData[selectedState]
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


    // DISTRICT TO TALUKA

    districtSelect.addEventListener(
        "change",
        function () {

            talukaSelect.innerHTML =
                '<option value="">Select Taluka</option>';

            villageSelect.innerHTML =
                '<option value="">Select Village</option>';

            talukaSelect.disabled = true;
            villageSelect.disabled = true;

            const selectedState =
                stateSelect.value;

            const selectedDistrict =
                districtSelect.value;

            if (selectedDistrict !== "") {

                const talukas =
                    Object.keys(
                        locationData[selectedState]
                        [selectedDistrict]
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


    // TALUKA TO VILLAGE

    talukaSelect.addEventListener(
        "change",
        function () {

            villageSelect.innerHTML =
                '<option value="">Select Village</option>';

            villageSelect.disabled = true;

            const selectedState =
                stateSelect.value;

            const selectedDistrict =
                districtSelect.value;

            const selectedTaluka =
                talukaSelect.value;

            if (selectedTaluka !== "") {

                const villages =
                    locationData[selectedState]
                    [selectedDistrict]
                    [selectedTaluka];

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

}

// ========================================
// WEATHER DATA
// ========================================

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

        "Wagholi": {
            temperature: "31°C",
            condition: "Sunny",
            icon: "☀️"
        },

        "Manjari": {
            temperature: "30°C",
            condition: "Sunny",
            icon: "☀️"
        },

        "Kharadi": {
            temperature: "29°C",
            condition: "Partly Cloudy",
            icon: "🌤️"
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


    const weatherTemperature =
        document.getElementById(
            "weatherTemperature"
        );

    const weatherCondition =
        document.getElementById(
            "weatherCondition"
        );

    const weatherIcon =
        document.getElementById(
            "weatherIcon"
        );

    const weatherLocation =
        document.getElementById(
            "weatherLocation"
        );


    if (weatherTemperature) {

        weatherTemperature.innerText =
            weather.temperature;

    }


    if (weatherCondition) {

        weatherCondition.innerText =
            weather.condition;

    }


    if (weatherIcon) {

        weatherIcon.innerText =
            weather.icon;

    }


    if (weatherLocation) {

        weatherLocation.innerText =
            village;

    }

}


// ========================================
// SAVE FARM LOCATION
// ========================================

function saveFarmLocation() {

    if (
        !stateSelect ||
        !districtSelect ||
        !talukaSelect ||
        !villageSelect
    ) {

        return;

    }


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


    localStorage.setItem(
        "farmLocation",
        farmLocation
    );


    const locationForm =
        document.getElementById(
            "locationForm"
        );

    const savedLocationCard =
        document.getElementById(
            "savedLocationCard"
        );

    const savedLocationText =
        document.getElementById(
            "savedLocationText"
        );


    if (locationForm) {

        locationForm.style.display =
            "none";

    }


    if (savedLocationCard) {

        savedLocationCard.style.display =
            "block";

    }


    if (savedLocationText) {

        savedLocationText.innerText =
            farmLocation;

    }


    updateWeather(village);

}


// ========================================
// CHANGE FARM LOCATION
// ========================================

function changeFarmLocation() {

    const locationForm =
        document.getElementById(
            "locationForm"
        );

    const savedLocationCard =
        document.getElementById(
            "savedLocationCard"
        );


    if (locationForm) {

        locationForm.style.display =
            "block";

    }


    if (savedLocationCard) {

        savedLocationCard.style.display =
            "none";

    }

}


// ========================================
// MORE TOOLS DROPDOWN
// ========================================

const toolsBtn =
    document.getElementById(
        "toolsBtn"
    );

const toolsDropdown =
    document.getElementById(
        "toolsDropdown"
    );


if (toolsBtn && toolsDropdown) {

    toolsBtn.addEventListener(
        "click",
        function () {

            toolsDropdown.classList.toggle(
                "show"
            );

        }
    );


    const toolLinks =
        toolsDropdown.querySelectorAll(
            "a"
        );


    toolLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    toolsDropdown.classList.remove(
                        "show"
                    );

                }
            );

        }
    );

}


// ========================================
// PAGE LOAD
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // LOAD SAVED FARM LOCATION

        const savedLocation =
            localStorage.getItem(
                "farmLocation"
            );


        if (savedLocation) {

            const village =
                savedLocation
                .split(",")[0]
                .trim();


            const locationForm =
                document.getElementById(
                    "locationForm"
                );

            const savedLocationCard =
                document.getElementById(
                    "savedLocationCard"
                );

            const savedLocationText =
                document.getElementById(
                    "savedLocationText"
                );


            if (locationForm) {

                locationForm.style.display =
                    "none";

            }


            if (savedLocationCard) {

                savedLocationCard.style.display =
                    "block";

            }


            if (savedLocationText) {

                savedLocationText.innerText =
                    savedLocation;

            }


            updateWeather(village);

        }


        // LOGIN

        const farmerName =
            localStorage.getItem(
                "farmerName"
            );

        const loginNavBtn =
            document.getElementById(
                "loginNavBtn"
            );

        const dropdownMenu =
            document.getElementById(
                "dropdownMenu"
            );

        const dropdownFarmerName =
            document.getElementById(
                "dropdownFarmerName"
            );

        const logoutBtn =
            document.getElementById(
                "logoutBtn"
            );


        if (
            farmerName &&
            loginNavBtn
        ) {

            loginNavBtn.innerHTML =
                "👨‍🌾 " +
                farmerName +
                " ▾";


            if (dropdownFarmerName) {

                dropdownFarmerName.innerText =
                    farmerName;

            }


            if (dropdownMenu) {

                loginNavBtn.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();

                        dropdownMenu.classList.toggle(
                            "show"
                        );

                    }
                );

            }


            if (logoutBtn) {

                logoutBtn.addEventListener(
                    "click",
                    function () {

                        localStorage.removeItem(
                            "farmerName"
                        );

                        alert(
                            "You have been logged out successfully."
                        );

                        window.location.href =
                            "login.html";

                    }
                );

            }

        }

    }
);


// ========================================
// FERTILIZER CALCULATOR
// ========================================

function calculateFertilizer() {

    const cropElement =
        document.getElementById(
            "fertilizerCrop"
        );

    const areaElement =
        document.getElementById(
            "farmArea"
        );


    if (!cropElement || !areaElement) {

        return;

    }


    const crop =
        cropElement.value;

    const area =
        Number(
            areaElement.value
        );


    // ========================================
    // VALIDATION
    // ========================================

    if (
        crop === "" ||
        !area ||
        area <= 0
    ) {

        alert(
            "Please select a crop and enter a valid farm area."
        );

        return;

    }


    // ========================================
    // CROP DATA
    // All values are demo estimates per acre
    // ========================================

    const cropData = {


        // ========================================
        // FIELD CROPS
        // ========================================

        soybean: {

            name: "🌱 Soybean",

            urea: 20,

            dap: 50,

            mop: 20,

            cropCare:
                "Use healthy seeds and maintain proper plant spacing. Check regularly for weeds and pests.",

            irrigation:
                "Soybean needs moderate irrigation. Avoid waterlogging and irrigate during dry periods.",

            fertilizer:
                "Use balanced fertilizer according to soil requirements. Split application can improve nutrient use.",

            important:
                "Avoid excessive nitrogen fertilizer. Always consider soil testing before fertilizer application."

        },


        wheat: {

            name: "🌾 Wheat",

            urea: 60,

            dap: 50,

            mop: 20,

            cropCare:
                "Use good quality seeds, maintain proper spacing and keep the field free from weeds.",

            irrigation:
                "Provide timely irrigation, especially during important growth stages.",

            fertilizer:
                "Apply recommended fertilizer in split doses for better crop growth.",

            important:
                "Avoid excessive irrigation because it can affect root health."

        },


        sugarcane: {

            name: "🎋 Sugarcane",

            urea: 100,

            dap: 80,

            mop: 60,

            cropCare:
                "Maintain proper spacing, remove weeds regularly and perform earthing up.",

            irrigation:
                "Sugarcane requires regular irrigation, especially during dry periods and active growth stages.",

            fertilizer:
                "Apply nitrogen fertilizer in split doses for better nutrient efficiency.",

            important:
                "Avoid waterlogging and monitor the crop regularly for pests and diseases."

        },


        cotton: {

            name: "🌿 Cotton",

            urea: 50,

            dap: 40,

            mop: 25,

            cropCare:
                "Maintain proper plant spacing and monitor regularly for pest attacks.",

            irrigation:
                "Provide irrigation according to soil moisture and avoid excess watering.",

            fertilizer:
                "Use balanced NPK fertilizer and avoid excessive nitrogen application.",

            important:
                "Regular pest monitoring is important for healthy cotton production."

        },


        // ========================================
        // VEGETABLES
        // ========================================

        tomato: {

            name: "🍅 Tomato",

            urea: 40,

            dap: 60,

            mop: 30,

            cropCare:
                "Use healthy seedlings, provide support to plants and remove damaged leaves.",

            irrigation:
                "Provide regular but controlled irrigation. Avoid waterlogging.",

            fertilizer:
                "Apply balanced fertilizer in split doses during plant growth.",

            important:
                "Check regularly for pests and diseases and avoid excessive watering."

        },


        cucumber: {

            name: "🥒 Cucumber",

            urea: 35,

            dap: 50,

            mop: 25,

            cropCare:
                "Maintain proper spacing and provide support for healthy vine growth.",

            irrigation:
                "Keep soil moisture consistent and provide regular irrigation during dry conditions.",

            fertilizer:
                "Use balanced fertilizer during different growth stages.",

            important:
                "Do not allow the soil to become completely dry."

        },


        onion: {

            name: "🧅 Onion",

            urea: 40,

            dap: 60,

            mop: 30,

            cropCare:
                "Keep the field weed-free and maintain loose, well-drained soil.",

            irrigation:
                "Provide light and regular irrigation. Reduce irrigation before harvesting.",

            fertilizer:
                "Avoid excessive nitrogen because it can reduce bulb quality.",

            important:
                "Do not allow waterlogging because onion roots are sensitive to excess moisture."

        },


        potato: {

            name: "🥔 Potato",

            urea: 50,

            dap: 60,

            mop: 40,

            cropCare:
                "Use healthy seed potatoes and maintain loose, well-drained soil.",

            irrigation:
                "Maintain proper soil moisture and avoid excessive watering.",

            fertilizer:
                "Apply balanced fertilizer before planting and during important growth stages.",

            important:
                "Avoid waterlogging because excess moisture can damage tubers."

        },


        brinjal: {

            name: "🍆 Brinjal",

            urea: 45,

            dap: 55,

            mop: 30,

            cropCare:
                "Use healthy seedlings and maintain proper plant spacing.",

            irrigation:
                "Provide regular irrigation according to soil moisture.",

            fertilizer:
                "Apply balanced fertilizer in split doses for continuous growth.",

            important:
                "Monitor regularly for shoot and fruit pests."

        },


        // ========================================
        // FRUITS
        // ========================================

        mango: {

            name: "🥭 Mango",

            urea: 30,

            dap: 25,

            mop: 20,

            cropCare:
                "Use healthy grafted plants and maintain proper spacing between trees.",

            irrigation:
                "Young mango plants need regular watering. Mature trees need less frequent irrigation.",

            fertilizer:
                "Apply fertilizer around the root zone according to tree age and soil conditions.",

            important:
                "Avoid waterlogging and maintain good drainage around the tree."

        },


        pomegranate: {

            name: "🍎 Pomegranate",

            urea: 35,

            dap: 30,

            mop: 25,

            cropCare:
                "Maintain good drainage and prune trees regularly for healthy growth.",

            irrigation:
                "Provide controlled irrigation and avoid excess watering.",

            fertilizer:
                "Apply balanced nutrients according to tree growth and fruiting stage.",

            important:
                "Proper pruning and pest monitoring can improve fruit quality."

        },


        banana: {

            name: "🍌 Banana",

            urea: 80,

            dap: 50,

            mop: 60,

            cropCare:
                "Maintain proper spacing and remove dry or damaged leaves.",

            irrigation:
                "Banana requires regular irrigation and consistent soil moisture.",

            fertilizer:
                "Apply nutrients in split doses because banana has a high nutrient requirement.",

            important:
                "Avoid waterlogging and provide good drainage."

        }

    };


    // ========================================
    // GET SELECTED DATA
    // ========================================

    const data =
        cropData[crop];


    if (!data) {

        alert(
            "Crop data is not available."
        );

        return;

    }


    // ========================================
    // CALCULATE FERTILIZER
    // ========================================

    const urea =
        data.urea * area;

    const dap =
        data.dap * area;

    const mop =
        data.mop * area;


    // ========================================
    // GET RESULT SECTION
    // ========================================

    const fertilizerResults =
        document.getElementById(
            "fertilizerResults"
        );


    // ========================================
    // DISPLAY RESULTS
    // ========================================

    document.getElementById(
        "selectedCropTitle"
    ).innerText =
        data.name +
        " Fertilizer Plan";


    document.getElementById(
        "selectedAreaText"
    ).innerText =
        "Recommended estimate for " +
        area +
        " acre(s) of farmland";


    document.getElementById(
        "ureaAmount"
    ).innerText =
        urea +
        " kg";


    document.getElementById(
        "dapAmount"
    ).innerText =
        dap +
        " kg";


    document.getElementById(
        "mopAmount"
    ).innerText =
        mop +
        " kg";


    document.getElementById(
        "cropName"
    ).innerText =
        data.name;


    // ========================================
    // DISPLAY TIPS
    // ========================================

    document.getElementById(
        "cropCareTip"
    ).innerText =
        data.cropCare;


    document.getElementById(
        "irrigationTip"
    ).innerText =
        data.irrigation;


    document.getElementById(
        "fertilizerTip"
    ).innerText =
        data.fertilizer;


    document.getElementById(
        "importantTip"
    ).innerText =
        data.important;


    // ========================================
    // SHOW RESULT
    // ========================================

    fertilizerResults.style.display =
        "block";


    fertilizerResults.scrollIntoView({
        behavior: "smooth"
    });

}


// ========================================
// IRRIGATION ADVISER
// ========================================
// ========================================
// IRRIGATION ADVISER
// ========================================

function getIrrigationAdvice() {

    const cropElement =
        document.getElementById(
            "irrigationCrop"
        );

    const soilElement =
        document.getElementById(
            "soilType"
        );

    const result =
        document.getElementById(
            "irrigationResult"
        );

    const frequency =
        document.getElementById(
            "irrigationFrequency"
        );

    const message =
        document.getElementById(
            "irrigationMessage"
        );

    const title =
        document.getElementById(
            "adviceTitle"
        );


    if (
        !cropElement ||
        !soilElement ||
        !result ||
        !frequency ||
        !message ||
        !title
    ) {

        alert(
            "Irrigation Adviser elements are missing."
        );

        return;

    }


    const crop =
        cropElement.value;

    const soil =
        soilElement.value;


    if (
        crop === "" ||
        soil === ""
    ) {

        alert(
            "Please select Crop and Soil Type."
        );

        return;

    }


    // ========================================
    // CROP DATA
    // ========================================

    const irrigationData = {


        // FIELD CROPS

        soybean: {

            name: "🌱 Soybean",

            sandy: 2,
            black: 4,
            clay: 5,

            default:
                "Check soil moisture regularly. Avoid waterlogging."

        },


        wheat: {

            name: "🌾 Wheat",

            sandy: 3,
            black: 5,
            clay: 6,

            default:
                "Provide irrigation at important crop growth stages."

        },


        sugarcane: {

            name: "🎋 Sugarcane",

            sandy: 2,
            black: 4,
            clay: 5,

            default:
                "Sugarcane requires regular irrigation, especially during active growth."

        },


        cotton: {

            name: "🌿 Cotton",

            sandy: 3,
            black: 5,
            clay: 6,

            default:
                "Avoid excessive irrigation and maintain proper soil moisture."

        },


        // VEGETABLES

        tomato: {

            name: "🍅 Tomato",

            sandy: 2,
            black: 3,
            clay: 4,

            default:
                "Provide regular but controlled irrigation. Avoid waterlogging."

        },


        cucumber: {

            name: "🥒 Cucumber",

            sandy: 1,
            black: 2,
            clay: 3,

            default:
                "Keep soil consistently moist, especially during hot weather."

        },


        onion: {

            name: "🧅 Onion",

            sandy: 2,
            black: 3,
            clay: 4,

            default:
                "Provide light and regular irrigation. Reduce watering before harvesting."

        },


        potato: {

            name: "🥔 Potato",

            sandy: 2,
            black: 4,
            clay: 5,

            default:
                "Maintain adequate soil moisture and avoid excessive water."

        },


        brinjal: {

            name: "🍆 Brinjal",

            sandy: 2,
            black: 3,
            clay: 4,

            default:
                "Provide regular irrigation and avoid water stress."

        },


        // FRUITS

        mango: {

            name: "🥭 Mango",

            sandy: 4,
            black: 7,
            clay: 8,

            default:
                "Young plants need more regular watering. Mature trees need irrigation mainly during dry periods."

        },


        pomegranate: {

            name: "🍎 Pomegranate",

            sandy: 3,
            black: 5,
            clay: 6,

            default:
                "Use controlled irrigation and avoid excessive water around the roots."

        },


        banana: {

            name: "🍌 Banana",

            sandy: 2,
            black: 3,
            clay: 4,

            default:
                "Banana requires regular irrigation and consistent soil moisture."

        }

    };


    // ========================================
    // GET CROP DATA
    // ========================================

    const data =
        irrigationData[crop];


    if (!data) {

        alert(
            "Irrigation data is not available."
        );

        return;

    }


    // ========================================
    // CALCULATE DAYS BASED ON SOIL
    // ========================================

    let days;


    if (soil === "sandy") {

        days =
            data.sandy;

    }

    else if (soil === "black") {

        days =
            data.black;

    }

    else if (soil === "clay") {

        days =
            data.clay;

    }

    else {

        days = 3;

    }


    // ========================================
    // CREATE ADVICE
    // ========================================

    const advice =
        data.default;


    // ========================================
    // SHOW RESULT
    // ========================================

    title.textContent =
        data.name +
        " Irrigation Advice";


    frequency.textContent =
        "💧 Recommended irrigation: Every " +
        days +
        " days";


    message.textContent =
        advice;


    result.style.display =
        "block";


    result.scrollIntoView({

        behavior:
            "smooth",

        block:
            "center"

    });

}
// ========================================
// CROP / FRUIT / VEGETABLE RECOMMENDATION
// ========================================

function getCropRecommendation() {

    const category =
        document.getElementById(
            "recommendCategory"
        ).value;

    const soil =
        document.getElementById(
            "recommendSoil"
        ).value;

    const season =
        document.getElementById(
            "recommendSeason"
        ).value;

    const water =
        document.getElementById(
            "waterAvailability"
        ).value;


    // ========================================
    // CHECK ALL INPUTS
    // ========================================

    if (
        category === "" ||
        soil === "" ||
        season === "" ||
        water === ""
    ) {

        alert(
            "Please select all farm details."
        );

        return;

    }


    // ========================================
    // GET RESULT ELEMENTS
    // ========================================

    const result =
        document.getElementById(
            "recommendationResult"
        );

    const title =
        document.getElementById(
            "recommendationTitle"
        );

    const name =
        document.getElementById(
            "recommendedName"
        );

    const reason =
        document.getElementById(
            "recommendationReason"
        );

    const growingPeriod =
        document.getElementById(
            "growingPeriod"
        );

    const waterRequirement =
        document.getElementById(
            "waterRequirement"
        );

    const tips =
        document.getElementById(
            "recommendationTips"
        );

    const note =
        document.getElementById(
            "recommendationNote"
        );


    // ========================================
    // DEFAULT DATA
    // ========================================

    let recommendation = {

        title:
            "Recommended Option",

        name:
            "Soybean 🌱",

        reason:
            "This crop is generally suitable for your selected farm conditions.",

        growing:
            "90 - 120 days",

        water:
            "Medium",

        tips: [

            "Use good quality seeds.",

            "Maintain proper plant spacing.",

            "Check soil moisture regularly.",

            "Monitor the crop for pests."

        ],

        note:
            "Always consider local weather and soil conditions before final planting."

    };


    // ========================================
    // FIELD CROPS
    // ========================================

    if (category === "crop") {


        // SOYBEAN

        if (
            season === "kharif" &&
            water === "low"
        ) {

            recommendation = {

                title:
                    "Recommended Field Crop",

                name:
                    "🌱 Soybean",

                reason:
                    "Soybean is suitable for Kharif season and can be a good option when water availability is low to medium.",

                growing:
                    "90 - 120 days",

                water:
                    "Low to Medium",

                tips: [

                    "Use healthy and good quality seeds.",

                    "Avoid waterlogging in the field.",

                    "Maintain proper spacing between plants.",

                    "Check regularly for pest and leaf damage."

                ],

                note:
                    "Excess nitrogen fertilizer should be avoided."

            };

        }


        // COTTON

        else if (
            season === "kharif" &&
            water === "medium"
        ) {

            recommendation = {

                title:
                    "Recommended Field Crop",

                name:
                    "🌿 Cotton",

                reason:
                    "Cotton can be suitable during Kharif season when moderate water is available.",

                growing:
                    "150 - 180 days",

                water:
                    "Medium",

                tips: [

                    "Use well-prepared and weed-free soil.",

                    "Maintain recommended plant spacing.",

                    "Monitor the crop regularly for pests.",

                    "Avoid excessive irrigation."

                ],

                note:
                    "Early pest monitoring can help protect the crop."

            };

        }


        // SUGARCANE

        else if (
            water === "high"
        ) {

            recommendation = {

                title:
                    "Recommended Field Crop",

                name:
                    "🎋 Sugarcane",

                reason:
                    "Sugarcane can be suitable where sufficient water is available.",

                growing:
                    "10 - 12 months",

                water:
                    "High",

                tips: [

                    "Provide regular irrigation.",

                    "Keep the field free from weeds.",

                    "Apply fertilizer in split doses.",

                    "Monitor regularly for pests and diseases."

                ],

                note:
                    "Avoid waterlogging even when water availability is high."

            };

        }


        // WHEAT

        else if (
            season === "rabi"
        ) {

            recommendation = {

                title:
                    "Recommended Field Crop",

                name:
                    "🌾 Wheat",

                reason:
                    "Wheat is a suitable crop for the Rabi season with proper irrigation management.",

                growing:
                    "120 - 150 days",

                water:
                    "Medium",

                tips: [

                    "Use certified seeds.",

                    "Provide irrigation at important growth stages.",

                    "Keep the field weed-free.",

                    "Avoid excessive irrigation."

                ],

                note:
                    "Timely irrigation can improve crop growth."

            };

        }

    }


    // ========================================
    // FRUITS
    // ========================================

    else if (category === "fruit") {


        // MANGO

        if (
            soil === "black" ||
            soil === "red"
        ) {

            recommendation = {

                title:
                    "Recommended Fruit",

                name:
                    "🥭 Mango",

                reason:
                    "Mango can grow well in well-drained soil and warm climatic conditions.",

                growing:
                    "3 - 5 years for initial fruit production",

                water:
                    "Medium",

                tips: [

                    "Choose healthy grafted plants.",

                    "Provide proper spacing between trees.",

                    "Avoid waterlogging near roots.",

                    "Prune damaged branches regularly."

                ],

                note:
                    "Fruit trees require long-term care and proper maintenance."

            };

        }


        // POMEGRANATE

        else if (
            water === "low" ||
            water === "medium"
        ) {

            recommendation = {

                title:
                    "Recommended Fruit",

                name:
                    "🍎 Pomegranate",

                reason:
                    "Pomegranate can be suitable for areas with low to medium water availability.",

                growing:
                    "2 - 3 years for initial fruit production",

                water:
                    "Low to Medium",

                tips: [

                    "Use healthy planting material.",

                    "Ensure good drainage.",

                    "Avoid excess watering.",

                    "Monitor regularly for pests and diseases."

                ],

                note:
                    "Proper pruning can improve fruit quality."

            };

        }

    }


    // ========================================
    // VEGETABLES
    // ========================================

    else if (category === "vegetable") {


        // TOMATO

        if (
            season === "rabi" ||
            season === "summer"
        ) {

            recommendation = {

                title:
                    "Recommended Vegetable",

                name:
                    "🍅 Tomato",

                reason:
                    "Tomato can be a suitable vegetable for the selected season with proper water management.",

                growing:
                    "90 - 120 days",

                water:
                    "Medium",

                tips: [

                    "Use healthy seedlings.",

                    "Provide regular but controlled irrigation.",

                    "Use staking for better plant support.",

                    "Check regularly for pests and diseases."

                ],

                note:
                    "Avoid waterlogging because excess water can damage tomato roots."

            };

        }


        // CUCUMBER

        else if (
            season === "summer"
        ) {

            recommendation = {

                title:
                    "Recommended Vegetable",

                name:
                    "🥒 Cucumber",

                reason:
                    "Cucumber grows well during warm conditions with sufficient moisture.",

                growing:
                    "45 - 60 days",

                water:
                    "Medium to High",

                tips: [

                    "Provide regular watering.",

                    "Maintain good plant spacing.",

                    "Use healthy seeds.",

                    "Check leaves for pests and diseases."

                ],

                note:
                    "Do not allow the soil to become completely dry."

            };

        }


        // ONION

        else if (
            season === "rabi"
        ) {

            recommendation = {

                title:
                    "Recommended Vegetable",

                name:
                    "🧅 Onion",

                reason:
                    "Onion is a good vegetable option during Rabi season with well-managed irrigation.",

                growing:
                    "120 - 150 days",

                water:
                    "Medium",

                tips: [

                    "Use well-drained soil.",

                    "Provide light and regular irrigation.",

                    "Keep the field weed-free.",

                    "Reduce irrigation before harvesting."

                ],

                note:
                    "Avoid waterlogging because onion roots are sensitive."

            };

        }


        // POTATO

        else if (
            season === "rabi"
        ) {

            recommendation = {

                title:
                    "Recommended Vegetable",

                name:
                    "🥔 Potato",

                reason:
                    "Potato can be suitable during cool Rabi season conditions.",

                growing:
                    "90 - 120 days",

                water:
                    "Medium",

                tips: [

                    "Use healthy seed potatoes.",

                    "Maintain loose and well-drained soil.",

                    "Provide irrigation according to soil moisture.",

                    "Protect the crop from pests and diseases."

                ],

                note:
                    "Avoid excessive moisture in the field."

            };

        }


        // BRINJAL

        else {

            recommendation = {

                title:
                    "Recommended Vegetable",

                name:
                    "🍆 Brinjal",

                reason:
                    "Brinjal is a suitable vegetable option under warm conditions with moderate water availability.",

                growing:
                    "100 - 140 days",

                water:
                    "Medium",

                tips: [

                    "Use healthy seedlings.",

                    "Maintain proper plant spacing.",

                    "Remove weeds regularly.",

                    "Monitor for pests and diseases."

                ],

                note:
                    "Regular crop monitoring can improve vegetable quality."

            };

        }

    }


    // ========================================
    // DISPLAY RESULT
    // ========================================

    title.textContent =
        recommendation.title;


    name.textContent =
        recommendation.name;


    reason.textContent =
        recommendation.reason;


    growingPeriod.textContent =
        recommendation.growing;


    waterRequirement.textContent =
        recommendation.water;


    note.textContent =
        "⚠️ " +
        recommendation.note;


    // ========================================
    // ADD TIPS
    // ========================================

    tips.innerHTML = "";


    recommendation.tips.forEach(
        function (tip) {

            const li =
                document.createElement("li");

            li.textContent =
                tip;

            tips.appendChild(li);

        }
    );


    // ========================================
    // SHOW RESULT
    // ========================================

    result.style.display =
        "block";


    result.scrollIntoView({

        behavior:
            "smooth",

        block:
            "center"

    });

}

// ========================================
// KRISHISETU GOVERNMENT SCHEMES
// ========================================


// ========================================
// SEARCH SCHEMES
// ========================================

const schemeSearch =
    document.getElementById("schemeSearch");

const schemeCards =
    document.querySelectorAll(".scheme-card");


if (schemeSearch) {

    schemeSearch.addEventListener(
        "keyup",
        function () {

            const searchText =
                schemeSearch.value
                .toLowerCase();


            schemeCards.forEach(
                function (card) {

                    const schemeName =
                        card.innerText
                        .toLowerCase();


                    if (
                        schemeName.includes(
                            searchText
                        )
                    ) {

                        card.style.display =
                            "block";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}