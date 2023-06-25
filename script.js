var APIkey = "c24bcaaf215093ef948257cae4e3bd8a"

var URL = `https://api.openweathermap.org/data/2.5/forecast?q=cresskill&appid=${APIkey}`



async function weatherInfo () {
    let response = await fetch (URL);
    let data = await response.json();
    var temp1 = Math.round (data.list[0].main.temp-273);
    var humid1 = data.list[0].main.humidity;
    var wind1 = data.list[0].wind.speed;
    var date1 = data.list[0].dt_txt.split(" ")[0];
    var icon1 = data.list[0].weather[0].icon;



    var temp2 = Math.round (data.list[8].main.temp-273);
    var humid2 = data.list[8].main.humidity;
    var wind2 = data.list[8].wind.speed;
    var date2 = data.list[8].dt_txt.split(" ")[0];
    var icon2 = data.list[8].weather[0].icon;


    var temp3 = Math.round (data.list[16].main.temp-273);
    var humid3 = data.list[16].main.humidity;
    var wind3 = data.list[16].wind.speed;
    var date3 = data.list[16].dt_txt.split(" ")[0];
    var icon3 = data.list[16].weather[0].icon;


    var temp4 = Math.round (data.list[24].main.temp-273);
    var humid4 = data.list[24].main.humidity;
    var wind4 = data.list[24].wind.speed;
    var date4 = data.list[24].dt_txt.split(" ")[0];
    var icon4 = data.list[24].weather[0].icon;


    var temp5 = Math.round (data.list[32].main.temp-273);
    var humid5 = data.list[32].main.humidity;
    var wind5 = data.list[32].wind.speed;
    var date5 = data.list[32].dt_txt.split(" ")[0];
    var icon5 = data.list[32].weather[0].icon;


    console.log(data)
}

weatherInfo ();

//https://openweathermap.org/img/wn/10d@2x.png

