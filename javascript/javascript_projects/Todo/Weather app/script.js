document.addEventListener('click',()=>{
    let cityInput=document.querySelector("#city-input").value.trim()
    let getWeatherBtn= document.querySelector('#get-weather-btn')
    let  weatherInfo= document.querySelector("#weather-info")
    let  cityNameDisplay= document.querySelector("#city-name")
    let  temperatureDisplay= document.querySelector("#temperature")
    let  descriptionDisplay= document.querySelector("#description")
    let  errorMessage= document.querySelector("#error-messag")

    let apiKey="79f003a2f166273ab173f7e0ba705932"
      getWeatherBtn.addEventListener('click',async()=>{
       if  (!cityInput) return
       
          // server/Database in another continent

          try {
               const weatherData  =  await fetchWeatherData(cityInput)
                displayWeatherdata(weatherData)
          } catch (error) {
               showError()
          }


      })
     async function fetchWeatherData(cityInput,apiKey){
        


      }
      function displayWeatherdata(){

      }
      function showError(){

      }

    
})
