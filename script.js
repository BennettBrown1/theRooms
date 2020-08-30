var path = window.location.pathname;
var page = path.split("/").pop();

function roomChange() {
    if (page == "room0.html" || page == "room1.html" || page == "room2.html") {
        step1();
        hidden1();
    } else if (page == "room3.html" || page == "room4.html" || page == "room5.html") {
        step2();
        hidden2();
    } else if (page == "room6.html" || page == "room7.html") {
        step3();
        hidden3();
    }
}

roomChange();

function step1(){
    document.getElementById("up").href = "room" + (Math.ceil(Math.random()*3)+2) + ".html";

    document.getElementById("down").href = "room" + Math.ceil(Math.random()*2) + ".html";
}

function step2(){
    document.getElementById("down").href = "room" + (Math.ceil(Math.random()*2)+5) + ".html";

    document.getElementById("up").href = "room" + Math.ceil(Math.random()*2) + ".html";
}

function step3(){
    document.getElementById("up").href = "room8.html";

    document.getElementById("down").href = "room" + Math.ceil(Math.random()*2) + ".html";
}

function hidden1() {
    document.getElementById("p").addEventListener("click", function () {
        document.getElementById("p").innerHTML = "Good job finding this. Throughout the rooms there will be hidden clues to help you along your way, but be wary, some are harder to find than others. I'll give you this first one for free, chose the top option first.";
    });
}

function hidden2() {
    document.getElementById("hr").addEventListener("click", function () {
        document.getElementById("up").innerHTML = "ENTER";
        document.getElementById("up").href = "hiddenRoom.html";
    });
}

function hidden3() {
    document.getElementById("h1").addEventListener("dblclick", function () {
        console.log("Third clue. Very good job finding this one, it's quite an evil spot.");
        console.log("It's a bird! It's a plane! It's a UFO!!!!")
    });
}