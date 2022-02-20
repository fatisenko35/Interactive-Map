const titleBlue = document.querySelector(".title-blue");
const titleRed = document.querySelector(".title-red");
const titleGreen = document.querySelector(".title-green");
const titleYellow = document.querySelector(".title-yellow");
const titlePink = document.querySelector(".title-pink");
const mapAttribute = document.querySelector("#map");

titleBlue.addEventListener("mouseover", ()=>{
    mapAttribute.src = './images/map-blue.png';
});

titleBlue.addEventListener("mouseout", ()=>{
    mapAttribute.src =  './images/map-original.png';
});

titleRed.addEventListener("mouseover", ()=>{
    mapAttribute.src = './images/map-red.png';
});
titleRed.addEventListener("mouseout", ()=>{
    mapAttribute.src = './images/map-original.png';
});
titleGreen.addEventListener("mouseover", ()=>{
    mapAttribute.src = './images/map-green.png';
});
titleGreen.addEventListener("mouseout", ()=>{
    mapAttribute.src = './images/map-original.png';
});
titleYellow.addEventListener("mouseover", ()=>{
    mapAttribute.src = './images/map-yellow.png';
});
titleYellow.addEventListener("mouseout", ()=>{
    mapAttribute.src = './images/map-original.png';
});
titlePink.addEventListener("mouseover", ()=>{
    mapAttribute.src = './images/map-pink.png';
});
titlePink.addEventListener("mouseout", ()=>{
    mapAttribute.src = './images/map-original.png';
});

