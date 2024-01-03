// console.log('heloo jiii');
// const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

async function showWeather(){

//  let latitude = 15.3333;
//  let longitude = 74.0833;

    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m" `);

    const  data = await response.json();
    console.log('weatherdata' , data);

   

}
showWeather();