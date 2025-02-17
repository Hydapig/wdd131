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

// create and show countdown timer for page redirect
let countdown = 5;

function updateTimer() {
    document.getElementById('timer').innerHTML = countdown + " seconds.";
    if (countdown === 0) {
        
        window.location.href = "index.html";
    } else {
        countdown--;
    }
}

setInterval(updateTimer, 1000);