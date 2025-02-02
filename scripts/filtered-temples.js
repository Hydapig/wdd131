const date = new Date();
let year = date.getFullYear();
const formattedDate = date.toLocaleString('en-US', {timeZoneName: 'short'});
document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = formattedDate

const mainnav = document.querySelector('.navigation');
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
		templeName: "Mesa Arizona",
		location: "Mesa, Arizona, United States",
		dedicated: "1927, October, 23",
		area: "75,000",
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_news_conference.jpeg"
	  },
	  {
		templeName: "Logan Utah",
		location: "Logan, Utah, United States",
		dedicated: "1884, May, 17",
		area: 119619,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
	  },
	  {
		templeName: "Buenos Aires Argentina",
		location: "Buenos Aires, Argentina",
		dedicated: "1986, January, 17",
		area: 30659,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
	  },
  ];

  function renderTemples(temples) {
	const container = document.getElementById('gallery');
	container.innerHTML = "";

	temples.forEach(temple => {
		const card = document.createElement('div');
		card.classList.add('temple-card');

		const header = document.createElement('h2');
		header.textContent = temple.templeName;

		const location = document.createElement('p');
		location.textContent = `Location: ${temple.location}`;

		const dedicated = document.createElement('p');
		dedicated.textContent = `Dedicated: ${temple.dedicated}`;

		const size = document.createElement('p');
		size.textContent = `Size: ${temple.area} sq ft`;

		const image = document.createElement('img');
		image.src = temple.imageUrl;
		image.alt = `${temple.templeName} Temple`;
		image.loading = `lazy`;
		image.width = 400;
		image.height = 250;

		card.appendChild(header);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(size);
		card.appendChild(image);

		container.appendChild(card);
	});
}

renderTemples(temples);

const homeLink = document.querySelector("#home")
const oldTemplesLink = document.querySelector("#old");
const newTemplesLink = document.querySelector("#new");
const largeTemplesLink = document.querySelector("#large");
const smallTemplesLink = document.querySelector("#small");

homeLink.addEventListener('click', () => {
	renderTemples(temples);
});

oldTemplesLink.addEventListener('click', () => {
	renderTemples(temples.filter(temple => {
		const yearBuilt = parseInt(temple.dedicated.split(",")[0]);
		return yearBuilt < 1900;
	}));
});

newTemplesLink.addEventListener('click', () => {
	renderTemples(temples.filter(temple => {
		const yearBuilt = parseInt(temple.dedicated.split(",")[0]);
		return yearBuilt > 2000;
	}));
});

largeTemplesLink.addEventListener('click', () => {
	renderTemples(temples.filter(temple => temple.area > 90000));
})

smallTemplesLink.addEventListener('click', () => {
	renderTemples(temples.filter(temple => temple.area < 10000));
})
