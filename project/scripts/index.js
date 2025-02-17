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

// funtion for clicking a div container link
function setDivClickEvent(divID, href) {
	const div = document.getElementById(divID);
	
	div.addEventListener('click', function() {
		window.location.href = href;
	});
}

// opens corresponding html when clicking on div container
setDivClickEvent('componentDiv', 'components.html');
setDivClickEvent('guideDiv', 'guides.html');
setDivClickEvent('platformDiv', 'platform.html');
