const temp = document.getElementById("temp");
const getlocation = document.getElementById("real_location");
const temp_min = document.getElementById("temp_min");
const temp_max = document.getElementById("temp_max");


const getInfo = async() => {

    var lat = x.innerText;
    var long = y.innerText;
    console.log(lat, long);

    let url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&&appid=158e0d750780363dae6d4e77050a308b';

        const response = await fetch(url);
        console.log(response);
        const objData = await response.json();
        const arrData = [objData];
        temp.innerText = arrData[0].main.temp;
        getlocation.innerText = arrData[0].name;
        temp_min.innerText = arrData[0].main.temp_min;
        temp_max.innerText = arrData[0].main.temp_max;
    
}

getInfo();

