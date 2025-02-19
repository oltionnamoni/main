var wakeuptime;
var dstime;
var sleeptime;
var noon=12;

function showCurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime= new Date();

    var hours= currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();

    var meridan="AM";

    if(hours >= noon){
        meridan="PM";
    }

    var clockTime=hours + ":" + minutes + ":" +seconds + " " + meridan;
    clock.innerText=clockTime;
    changeImage();

};

var oneSecond=1000;

setInterval(showCurrentTime,oneSecond);

function changeImsge(){
    var time=new Date().getHours;
    console.log(time);

    var image= "ds_clock.png";
    var imageHTML=document.getElementById("timeImage");

    if(time == wakeuptime){
        image="morning.gif";
        console.log("morning");
    }

    else if(time == dstime){
        image="class.gif";
    }
    
    else if(time == sleeptime){
        image="night.gif"
    }

    imageHTML.src=image;
    console.log(imageHTML.src);
}


function updateClock(){
    var wakeUpTimeSelector=document.getElementByld('wakeUpTimeSelector');

    wakeuptime=wakeUpTimeSelector.value;

    var dsTimeSelector=document.getElementByld('dsTimeSelector');
    
    dstime=dsTimeSelector.value;

    dstime=dsTimeSelector=document.getElementByld('sleepTimeSelector');

    var sleepTimeSelector=document.getElementById('sleepTimeSelector');

    sleeptime=sleepTimeSelector.value;
}

var saveButton=document.getElementById("saveButton");
saveButton.addEventListener("click", updateClock);
    
