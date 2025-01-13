const APIKEY = "5b802a633edb6c0fe741382dd26359e4"
const APIURL = "http://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(APIURL+city+`&appid=${APIKEY}`)
    const data = await response.json()
    console.log(data);

    if (response.status === 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/hr";

        if (data.weather[0].main === "Clouds"){
            weatherIcon.src = "IMGs/clouds.png";
        }else if (data.weather[0].main === "Clear"){
            weatherIcon.src = "IMGs/clear.png";
        }else if (data.weather[0].main === "Rain"){
            weatherIcon.src = "IMGs/rain.png";
        }else if (data.weather[0].main === "Drizzle"){
            weatherIcon.src = "IMGs/drizzle.png";
        }else if (data.weather[0].main === "Mist"){
            weatherIcon.src = "IMGs/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);
})