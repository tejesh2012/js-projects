console.log('heloo jiii');
const API_KEY = "29c018a52a547ce0cb2a1651aa50d497";

async function showWeather(){

 let latitude = 15.3333;
 let longitude = 74.0833;

    const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid={API key}`);

    const  data = await response.json();
    console.log('weatherdata' , data);

   

}
showWeather();