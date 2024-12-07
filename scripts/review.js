
const visitsDisplay = document.querySelector(".visits");
let numvisits = Number(window.localStorage.getItem("visitlist")) || 0;
if (numvisits !== 0) {
    visitsDisplay.textContent = numvisits;
} else {
    visitsDisplay.textContent = `This is your first review`;
}
numvisits++;

localStorage.setItem("visitlist", numvisits);

const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");


const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Alexandra Suárez, Bogotá - Colombia`;
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;
