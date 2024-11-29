const lastModifiedElement = document.getElementById("lastModified");
const currentYearElement = document.getElementById("year");


const currentYear = new Date().getFullYear();
currentYearElement.textContent = `© ${currentYear} Alexandra Suárez, Bogotá - Colombia`;

const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last modified: ${lastModifiedDate}`;


const mainnav = document.querySelector(".navList")
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Bogotá Colombia",
		location: "Bogotá, Distrito Capital",
		dedicated: "1999, Abril, 24",
		area: 53500,
		imageUrl: "images/bogota.jpg",
		//"https://churchofjesuschristtemples.org/bogota-colombia-temple/photographs/#Gallery-12"
	},
	{
		templeName: "Barranquilla Colombia",
		location: "Barranquilla Atlantico Colombia",
		dedicated: "2018, Diciembre, 9",
		area: 25349,
		imageUrl: "images/barranquillaTemple.jpg"
		//"https://churchofjesuschristtemples.org/barranquilla-colombia-temple/photographs/#Official-9"
	},
	{
		templeName: "Provo City Center",
		location: "Provo, Utah United States",
		dedicated: "2016, March, 20",
		area: 85084,
		imageUrl: "images/provoTemple.jpg"
		//"https://churchofjesuschristtemples.org/provo-city-center-temple/photographs/#Official-13"

	},
]

function dataTemples(items) {
	return `<figure>
				<img src="${items.imageUrl}" alt="${items.templeName}" width= 400, heigth= 250, loading"lazy" width="400"
                height="auto">
				<figcaption>
					<h3>${items.templeName}</h3>
					<p>Location: ${items.location}</p>
					<p>Dedicated: ${items.dedicated}</p>
					<p>Size: ${items.area}</p>
				</figcaption>
			</figure>`;

}

function rendersections(temples) {
	const html = temples.map(dataTemples);
	document.querySelector(".gallery").innerHTML = html.join(" ");

}

rendersections(temples);


const oldLink = document.getElementById("old");
oldLink.addEventListener('click', () => {
	const oldTemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.slice(0, 4));
		return year < 1900;
	});
	rendersections(oldTemples);
});

const newLink = document.getElementById("new");
newLink.addEventListener('click', () => {
	const newTemples = temples.filter(temple => {
		const year = parseInt(temple.dedicated.slice(0, 4));
		return year > 2000;
	});
	rendersections(newTemples);
});

const largeLink = document.getElementById("large");
largeLink.addEventListener('click', () => {
	const largeTemples = temples.filter(temple => {
		const size = temple.area > 90000;
		return size;
	});
	rendersections(largeTemples)

})
const smallLink = document.getElementById("small");
smallLink.addEventListener('click', () => {
	const smallTemples = temples.filter(temple => {
		const size = temple.area < 10000;
		return size;
	});
	rendersections(smallTemples)

})

const homeLink = document.querySelector(".active")
homeLink.addEventListener('click', () => {
	rendersections(temples);
});






