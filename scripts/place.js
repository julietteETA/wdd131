//1. Get dynamic date in the footer tag

document.addEventListener("DOMContentLoaded", () => {
    // Get the current year
    const year = new Date().getFullYear();

    // Inject the year into the span element
    document.getElementById("currentyear").textContent = year;

    //Inject the last modified date into the paragraph element
    document.getElementById("lastmodified").textContent = `Last modification: ${document.lastModified}`;
});
//2. The wind chill formula (celcius): WC=13.12+0.6215⋅T−11.37⋅V0.16+0.3965⋅T⋅V0.16
//StepPart of FormulaWhat it Represents113.12Base constant (calibration offset)20.6215 * TAdjusts for the actual air temperature contribution311.37 * Math.pow(V, 0.16)Accounts for convective heat loss due to wind40.3965 * T * Math.pow(V, 0.16)Combined interaction of temperature and wind on skin heat loss
/** * Calculates the Wind Chill factor in Celsius. * * Formula: Wind Chill (°C) = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16 * Standard: Environment Canada / ISO Meteorological Standard * * @param {number} temperature  - Air temperature in degrees Celsius (T) * @param {number} windSpeed    - Wind speed in km/h (V), must be > 4.8 km/h * @returns {number}            - Wind chill temperature in °C (rounded to 2 decimals) * * NOTE: This formula is designed for temperatures <= 10°C and wind speeds > 4.8 km/h. * At higher temps (like DRC's 33°C), it still computes but the "feels like" model * for hot weather is the Heat Index formula instead. */

//function calculateWindChill(temperature, windSpeed) {
//    return parseFloat((13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2));
//}
// Recommended for DRC (hot climate): use feelslike_c from the API
//const feelsLike = weatherData.current.feelslike_c; // 27°C — already calculated for you
// Wind Chill is more relevant when temp drops below 10°C (e.g., night in highlands)
//if (temperature <= 10 && windSpeed > 4.8) {  const wc = calculateWindChill(temperature, windSpeed);  console.log(`Wind Chill: ${wc}°C`);} else {  console.log(`Feels Like (Heat Index): ${feelsLike}°C`);}