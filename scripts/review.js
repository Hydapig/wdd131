const date = new Date();
let year = date.getFullYear();
const formattedDate = date.toLocaleString('en-US', {timeZoneName: 'short'});
document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = formattedDate

const reviewCounter = document.querySelector("#reviewCount");
let numReview = Number(window.localStorage.getItem("reviewCounter")) || 0;

numReview++;

localStorage.setItem("reviewCounter", numReview);

reviewCounter.textContent = `You have left ${numReview} reviews!`;