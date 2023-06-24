var APIkey = "c24bcaaf215093ef948257cae4e3bd8a"

var URL = `https://api.openweathermap.org/data/2.5/forecast?q=cresskill&appid=${APIkey}`



async function weatherInfo () {
    let response = await fetch (URL);
    let data = await response.json();
    var temp = data.list[0].main.temp;
    temp -= 273;
   
    console.log(temp)

    console.log(data)
}

weatherInfo ();
