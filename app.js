const API_KEY = `45b790002bcc31276d485ec2ce088e9c`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather =document.querySelector("#weather")


const getWeather = async(city) => {  /* asyn function wait for synconize*/
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url); /*await is use to wait for sec */
    const data = await response.json()
    console.log(data)
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404"){
        weather.innerHTML =`<h2>City Not Found</h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" height="70px">
        </div>
        <div>
            <h2>${data.main.temp}°C</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();  /*It stop for reloading page */
    }
)