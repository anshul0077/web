document.addEventListener('click', () => {
    let cityInput = document.querySelector("#city-input").value.trim()
    let getWeatherBtn = document.querySelector('#get-weather-btn')
    let weatherInfo = document.querySelector("#weather-info")
    let cityNameDisplay = document.querySelector("#city-name")
    let temperatureDisplay = document.querySelector("#temperature")
    let descriptionDisplay = document.querySelector("#description")
    let errorMessage = document.querySelector("#error-message")

    let apiKey = "79f003a2f166273ab173f7e0ba705932"
    getWeatherBtn.addEventListener('click', async () => {
        if (!cityInput) return

        // server/Database in another continent

        try {
            const weatherData = await fetchWeatherData(cityInput,apiKey)
            displayWeatherdata(weatherData)
        } catch (error) {
            showError()
        }


    })
    async function fetchWeatherData(cityInput,apiKey) {

        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
        
        if (!data.ok) {
            showError()
            
      

        }
        const respones = await data.json()
        return respones


    }
    function displayWeatherdata(data) {
        console.log(data);
        
let name=data.name
 let weather=data.weather[0].main
 let weatherSpeed=data.wind.speed
 cityNameDisplay.innerHTML=name
 temperatureDisplay.innerHTML=weatherSpeed
 descriptionDisplay.innerHTML=weather
 console.log(name,weather,weatherSpeed);
 
 weatherInfo.classList.remove("hidden")
 errorMessage.classList.add("hidden")

 
 
 

    }
    function showError() {
           weatherInfo.classList.add("hidden")
          errorMessage.classList.remove("hidden")
    
    }


})
