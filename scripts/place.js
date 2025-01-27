const date = new Date();
let year = date.getFullYear();
const formattedDate = date.toLocaleString('en-US', {timeZoneName: 'short'});
document.getElementById('year').innerHTML = year
document.getElementById('lastModified').innerHTML = formattedDate

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=-34.6132&lon=-58.3772&units=metric&appid=5796abbde9106b7da4febfae8c44c232'; // Change this to the target URL


var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON(url,
    function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
        const currentTemp = ~~data.current.temp;
        const tempElement = document.getElementById('Temp');
            if (tempElement) {
                tempElement.innerHTML = `${currentTemp.toFixed(1)} °C`; // Add units for clarity
            } else {
                console.error('Element with ID "Temp" not found.');
            }
        
        const conditionList = data.current.weather[0];
        const condition = conditionList.description;
        const tempCondition = document.getElementById('Condition');
        if (tempCondition) {
            tempCondition.innerHTML = `${condition}`;
        } else {
            console.error('Element with ID "Condition" not found.');
        }
        
        const wind = data.current.wind_speed;
        console.log(wind);
        const windSpeed = wind * 3.6;
        const tempWindSpeed = document.getElementById('windSpeed');
        if (tempWindSpeed) {
            tempWindSpeed.innerHTML = `${windSpeed.toFixed(1)} km/h`;
        } else {
            console.error('Element with ID "Condition" not found.');
        }

        const calculateWindChill = (temperature, windSpeed) => {
            if (temperature <= 10 && windSpeed > 4.8) {
                     // Calculate the wind chill using the formula
                const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
            
                return windChill;
            } else {
                // Calculate the wind chill using the formula
                return "N/A";
            }
        };
        const windChill = calculateWindChill(currentTemp, windSpeed);
        console.log(windChill)
        const tempWindChill = document.getElementById('windChill');
        if (windChill === 'N/A') {
            tempWindChill.textContent = `N/A`;
        } else {
            tempWindChill.textContent = `${windChill.toFixed(1)} °C`;
        }
      }
    });


