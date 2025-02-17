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

const guides = [
    {
        name: 'Parts Guide',
        id: 1001,
    },
    {
        name: 'Buying Guide',
        id: 1002,
    },
    {
        name: 'Building on a Budget',
        id: 1003,
    },
    {
        name: 'Assembly Guide',
        id: 1004,
    },
    {
        name: 'Compatability Guide',
        id: 1005,
    }
];

function guideList(guides) {
    const list = document.getElementById("guide");
    
    guides.forEach(guide => {
        const name = document.createElement("option");
        name.textContent = guide.name;
        name.value = name;
        
        list.appendChild(name);
    })
}

guideList(guides);

function toggleText() {
    const showText = document.getElementById("yesRadio");
    const textInput = document.getElementById("userQuestions");

    if (showText.checked) {
        textInput.style.display = "block";  // Show the input
    } else {
        textInput.style.display = "none";   // Hide the input
    }
}

toggleText();

function trackGuides() {
    // Get the current visit count from localStorage, default to 0 if not set
    let guideCount = localStorage.getItem('guidesDownloaded') || 0;

    // Increment the count by 1
    guideCount++;

    // Store the updated count in localStorage
    localStorage.setItem('guidesDownloaded', guideCount);

    // Display the updated visit count on the page
    document.getElementById("visitCountDisplay").innerText = "This page has been visited " + guideCount + " times.";
}

// Display the initial visit count when the page loads
window.onload = function() {
    trackGuides();
};