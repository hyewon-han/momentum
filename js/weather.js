const API_KEY = "02102e3ccced740ad0260c330ad7fcd7";

function onGeoOk(position) {
  let lat = position.coords.latitude; //위도
  let lon = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `🌈날씨 : ${data.weather[0].main}\n🌡️기온 : ${data.main.temp}\n`;
      city.innerText = `🌏위치 : ${data.name}`;
    });
}

function onGeoError() {
  alert("날씨를 찾을 수 없어..! 위치를 허용해 줘!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
