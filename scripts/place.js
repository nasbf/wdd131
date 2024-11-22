const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");


const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Alexandra Suárez, Bogotá - Colombia`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;



let result = document.getElementById("windchill");


function calculateWindchill(temp, wind) {
    let windchill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
    return windchill.toFixed(2);
}

let temp = 13;
let wind = 3;
result.textContent = `Windchill: ${calculateWindchill(temp, wind)}℃`;