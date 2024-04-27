let weather;
let width = 375, height = innerHeight;
let r = 0, g = 0, b = 0;
let hazeImg, thunderStormImg, heavyRainImg, grassImg, errorImg, snowfallImg, snowfallImg2, moonImg, mist, drizzleImg, lightRain, tornado;
let  arrowImg, haze, windImg, movingTrees, flyingLeaves, lighteningImg, sunImg, cloudImg, blackCloudImg, wall;
let backImg;
let angle = 0;
let sunx = 150, suny = 150;

function preload() {
    arrowImg = loadImage('./gifs/3o7aDfn97oAOuLTUOc.webp');
    wall = loadImage('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAFCCAMAAAAzJUSUAAAAOVBMVEUBDQ0BDg4GEBAgKSobJCQRGRoWHh8ACgoJExMSGxwZICEMFRUiLC0NFBUdJCUQFxgpMjMRHBwvNzk7ZrmQAAAA1klEQVR4nO3SSW7DMAwFUA3WYFl24t7/sK2TTYEewAH6nghQCy0+KIYYY4jhQ31ssI91fWY0NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/rGW3q21695f7arr3K2tM6ew97rUtR+P+hitHaUs6SjL7ena7KG2nOc+R05zfeZlbPuxP8cs9e50LY+6/oTL7Ti/Sq557aOWo+YytvP9JL7qFn05rwH1kGIubUslhdJTCSGFaxtjvDFb+LX36c83fgNQhwOnSDxD1QAAAABJRU5ErkJggg==');
    grassImg = loadImage('grass.png');  
    errorImg = loadImage('./gifs/WQOIEQRgiK722l3PQT.webp');
    snowfallImg = loadImage('./gifs/5WWU.gif');
    snowfallImg2 = loadImage('./gifs/2yqT.gif');
    moonImg = loadImage('./gifs/XVoD.gif');
    mist = loadImage('./gifs/UTHFuyuMENren9AI9b.gif');
    drizzleImg = loadImage('./gifs/3ohhwutQL0CDTq3kKA.gif');
    lightRain = loadImage('./gifs/1pX9.gif');
    tornado = loadImage('./gifs/iGjYHsBHD9E3pQxCAQ.gif');
    haze = loadImage('./gifs/xT9IgqjmZ870vakg4E.gif');
    windImg = loadImage('./gifs/24159SfYDapvvi7lKk.gif');
    movingTrees = loadImage('./gifs/5UFKKOQMNkdJMiKaOo.gif');
    flyingLeaves = loadImage('./gifs/PhfMmMOGMOpAK5YNrD.gif');
    lighteningImg = loadImage('./gifs/4TnYyp9q5J1tUkjRL3.gif');
    sunImg = loadImage('./gifs/ZFoIEu7kLVZlSpEo9A.gif');
    cloudImg = loadImage('./gifs/iIATYVzvV7lHiQbh0T.gif');
    blackCloudImg = loadImage('./gifs/Oupd.gif');
    hazeImg = loadImage('./gifs/3ov9jEvKwFU8Io6Oic.gif');
    heavyRainImg = loadImage('./gifs/Wmp1EOzVybWd13s5DB.gif');
    normalRain = loadImage('./gifs/81ibCJOlpBtnO.gif');
}


function setup() {
    createCanvas(width, height);
    angleMode(DEGREES);
    // loadJSON('http://api.openweathermap.org/data/2.5/weather?lat=51.50&lon=-0.19&units=metric&appid=43047219b2dc29840bd6ea54e88002e9', loadData);

    getLocation();

}

function draw() {
    background(color(r, g, b)); 

    if(weather) {
        
        date = getDate();
        // console.log(weather.main.temp);

        // console.log("Sunrise : " + getDate().getSunrise.hour + " : " + getDate().getSunrise.minute);
        // console.log("Sunset : " + getDate().getSunset.hour + " : " + getDate().getSunset.minute);

        initiateDay();

        if(weather.cod != 200) {
            image(errorImg, 0, 0, width, height);
        } else {

            if(weather.weather[0].id == (701 || 751 || 731 || 761 || 762)) {
                initiateMist();
            } else if(weather.weather[0].id == (711 || 721 || 741 || 771 || 761) ) {
                initiateHazyDay();
            } else if(weather.weather[0].id == (200) ) {
                initiateThunderStorm();
                initiateLightRain();
                initiateClouds();
            } else if(weather.weather[0].id == (201 || 202 )) {
                initiateThunderStorm();
                initiateLightRain();
                initiateClouds();
            } else if(weather.weather[0].id == (210 || 211) ) {
                initiateClouds();
                initiateThunderStorm();
            } else if(weather.weather[0].id == (212 || 221) ) {
                initiateClouds();
                initiateHeavyRain();
            } else if(weather.weather[0].id == (230 || 231 ) ) {
                initiateThunderStorm();
                initiateDrizzle();
            } else if(weather.weather[0].id == (232)) {
                initiateThunderStorm();
                initiateDrizzle();
                initiateClouds();
            } else if(weather.weather[0].id == (300 || 301) ) {
                initiateDrizzle();
                initiateClouds();
            } else if(weather.weather[0].id == (302 || 310 || 311 || 312 || 313 || 314 || 321) ) {
                initiateDrizzle();
                initiateClouds();
            } else if(weather.weather[0].id == (500 || 501) ) {
                initiateLightRain();
                initiateNormalRain();
                initiateClouds();
            } else if(weather.weather[0].id == (502 || 503 || 504 || 520 || 521 || 522 || 531) ) {
                // initiateLightRain();
                initRain();
                initiateNormalRain();
                initiateClouds(); 
            } else if(weather.weather[0].id == (511)) {
                initiateSnowfall();
                initiateClouds();
            } else if(weather.weather[0].id >= 600 && weather.weather[0].id <= 622) {
                initiateSnowfall();
            } else if(weather.weather[0].id == 800) {
    
            } else {
                // image(errorImg, 0, 0, width, height);
            }
            
            if(weather.clouds.all >= 35) {
                initiateClouds();
            } 
    
            if( (weather.wind.speed > 3 && weather.wind.speed <= 13.6) || (weather.wind.gust >= 1 && weather.wind.gust <= 15) ) {
                initWindyDay();
            } else if((weather.wind.speed < 3 )) {
                // just do nothing
            } else {
                initWindyDay();
                initiateTornado();
            }
            
            overlay();

            displayInfo();
            // initiateTornado();
            
            getMouseLocation();
        }
    }
    
}

function getMouseLocation() {
    push();
    textSize(14);
    fill(0);
    text(mouseX.toFixed(1) + " | " + mouseY.toFixed(1), mouseX - 100, mouseY);
    pop();
}


function displayInfo() {
    fill(255);
    textSize(64);
    text(weather.main.temp + " C", width/2-120, height/2-200);
    textSize(32);
    text(weather.main.temp_min, width/2-100, height/2-260);
    text(weather.main.temp_max, width/2-50, height/2-260);       

    text(weather.weather[0].main + " : " + weather.weather[0].description + "y Day", width/2-120, height/2-170);
    // text("Humidity : " + weather.main.humidity, width/2-120, height/2-140);
    text("Humidity : " + weather.main.humidity, width/2-120, height/2-140);        
    // text("Humidity : " + weather.main.humidity, width/2-120, height/2-110);   

    textSize(40);
    if( isNaN( weather.wind.gust)) {
        text("Wind : " + weather.wind.speed * 3.6.toFixed(0) + "kph", width/2 - 170, height/2 - 0);
    } else {
        text("Wind : " + weather.wind.gust * 3.6.toFixed(0) + "kph", width/2 - 170, height/2 - 0);
    }

    // setArrow();
    
}

// function setArrow() {

//     date = new Date();

//     push();
//     translate(300/2, 600/2);
//     rotate(date.getMilliseconds());
//     image(arrowImg, 0, 0, 100, 100);
//     pop();
// }

function initiateSnowfall() {
    image(snowfallImg, 0, 0, width, height);
    image(snowfallImg2, 0, 0, width, height);
}

function overlay() {
    push();
    tint(255, 100);
    image(wall, 0, 0, width, height);
    pop();
}

function initWindyDay() {
    image(movingTrees, 0, height/2, width, 400);
    image(windImg, 0, height/2+100, width, 200);
    image(flyingLeaves, 0, height/2-200, width, 400);
    initiateGrass();
}

function initiateGrass() {
    image(grassImg, 0, height-60, width, 100);
}

//getting time and dates----------------------------
function getDate() {
    let date = new Date(weather.dt * 1000);
    let sunriseTemp = new Date(weather.sys.sunrise * 1000);
    let sunsetTemp = new Date(weather.sys.sunset * 1000);

    let time = {
        hours : date.getHours(), 
        minutes : date.getMinutes(), 
        seconds : date.getSeconds(),
        getSunset : {
            hour : sunsetTemp.getHours(), 
            minute : sunsetTemp.getMinutes(),
        },
        getSunrise : {
            hour : sunriseTemp.getHours(), 
            minute : sunriseTemp.getMinutes(), 
        }, 

    }

    return time;
}

//Creating Atmospheres--------------------------------------
function initiateDay() {
    let time_2 = new Date();
    sunx = time_2.getHours()*(15.625);
    
//     console.log(time_2.getHours() + ":" + time_2.getMinutes() + ":" + time_2.getSeconds());
    
    if(time_2.getHours() >= getDate().getSunrise.hour && time_2.getHours() < getDate().getSunset.hour) {
        if(time_2.getHours() >= 18) {
            r = 107;
            g = 110;
            b = 140;
        } else {
            r = 249;
            g = 231;
            b = 159;
            image(sunImg, sunx-50, 0, 150, 150);
        }
    } else {
        if(time_2.getHours() < getDate().getSunrise.hour) {
            r = 20;
            g = 20;
            b = 20;
            image(moonImg, sunx*6-50, 0, 150, 150);
        } else {
            r = 33;
            g = 47;
            b = 60;
            image(moonImg, sunx/6-50, 0, 150, 150);
        }
    }

    
}

function initiateNormalRain() {
    image(normalRain, 0, 0, width, height);
}

function initiateMist() {
    push();
    translate(width/2, height/2);
    scale(1.9);
    tint(255, 20);
    image(mist, -width/2, -height/2, width, height);
    pop();

}

function initiateHeavyRain() {
    image(lighteningImg, 0, 0, width, height);
    image(cloudImg, 0, 0, 200, 200);
    image(cloudImg, 150, 30, 300, 200);
    image(cloudImg, 100, 70, 200, 200);
    image(heavyRainImg, 0, 0, 375, 812);
    image(normalRain, 0, 600, width, 200);
}

function initiateHazyDay() {
    // image(sunImg, 0, 0, 100, 100);
    image(cloudImg, -30, 0, 200, 200);
    image(cloudImg, 30, 0, 200, 200);
    image(cloudImg, 150, -50, 200, 200);
    image(windImg, 0, 400, width, 200 );
    image(flyingLeaves, 0, height/2-200, width, 300);
    
    push();
    translate(width/2, height/2);
    // rotate(270);
    tint(255, 100);
    scale(50);
    // haze.blend(0, 0, height, width, 0, 0, height, width, MULTIPLY);
    // image(haze, -height/2, -width/2, height, width);
    image(haze, -width/2, -height/2, width, height);
    pop();
}

function initiateTornado() {
    push();
    tint(255, 50);
    // tornado.blend(0, 0, width, height, 0, 0, width, height, ADD);
    image(tornado, 0, 0, width, height);
    pop();
}

function initiateHaze() {
    push();
    translate(width/2, height/2);
    scale(50);
    tint(255, 50);
    image(haze, -width/2, -height/2, width, height);
    pop();
}

function initiateThunderStorm() {
    push();
    tint(255, 200);
    image(blackCloudImg, 220, 40, 160, 180);
    pop();
    image(lighteningImg, 0, 0, width, height);
    push();
    tint(255, 200);
    image(blackCloudImg, 100, 30, 200, 130);
    pop();
    
    image(cloudImg, 50, 60, 350, 230);
    image(cloudImg, 0, 0, 200, 200);
    initiateHaze();
}

function initiateLightRain() {
    image(lightRain, 0, 0, width, height);
    image(normalRain, 0, height/2+100, width, 300);
}

function initiateDrizzle() {
    image(drizzleImg, 0, 0, width, height);
    image(normalRain, 0, height/2+100, width, 300);
}

function initiateClouds() {
    image(cloudImg, 0, 0, 200, 300);
    image(cloudImg, 150, -70, 300, 400);
    image(cloudImg, -100, -150, 400, 350);
    image(cloudImg, 150, -70, 300, 400);
    image(cloudImg, 200, -170, 300, 400);
}

function initRain() {
    image(heavyRainImg, 0, 0, width, height);
}



//API data fetching---------------------------
function loadData(data) {
//     console.log(data);

    weather = data;
}

//Location------------------- 
function getLocation() {
    navigator.geolocation.getCurrentPosition(getPosition, catchError);

    function getPosition(position) {
        createSpan("<br>Latitude &deg : " + position.coords.latitude);
        createSpan("<br>Longitude &deg : " + position.coords.longitude);
    
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        loadJSON('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=43047219b2dc29840bd6ea54e88002e9', loadData);
    }
    
    function catchError(error) {
//         console.log("Error : " + error);
    }

    // return location;
}
