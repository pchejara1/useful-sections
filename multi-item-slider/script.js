var count =0;
var increment = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider-width")[0];
var itemDisplay = 0;
if(screen.width>990){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-desktop");
    margin = itemDisplay*5;
 }
 if(screen.width > 700 && screen.width < 990){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-tab");
    margin = itemDisplay*10;
 }
 if(screen.width > 200 && screen.width < 700){
    itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-mobile");
    margin = itemDisplay*20;
 }
// console.log(itemDisplay);

var item = document.getElementsByClassName("item");
var itemLeft = item.length % itemDisplay;
var itemSlide = Math.floor(item.length / itemDisplay) -1;
for(let i=0; i<item.length; i++){
    item[i].style.width = (screen.width / itemDisplay) - margin + "px";
}

function next(){
    if(increment !== itemSlide +itemLeft){
        if(increment === itemSlide){
            increment = increment + itemLeft;
            count = count - (screen.width / itemDisplay) * itemLeft
        }
        else{
            increment++;
            count = count - screen.width;
        }
    }
    slider.style.left = count + "px";
}

function previous(){
    if(increment !== 0){
        if(increment === itemLeft){
            increment = increment - itemLeft;
            count = count + (screen.width / itemDisplay) * itemLeft
        }
        else{
            increment--;
            count = count + screen.width;
        }
    }
    slider.style.left = count + "px";
}