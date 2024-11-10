

const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");


const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Alexandra Suárez, Bogotá - Colombia`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Última modificación: ${lastModifiedDate}`;

