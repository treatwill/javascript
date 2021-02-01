console.log("time to start the timer!");


let seconds = 0;
let minutes = 0;
let displaySeconds = 0;
let interval = null
let status = false;

function counter() {

    seconds++;

    if(seconds / 60 == 1){
        seconds = 0;
        minutes++;
    }

    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    document.getElementById('timer').innerHTML = minutes + ":" + displaySeconds;
}


function start() {

    if(status === false) {
        interval = window.setInterval(counter, 1000);
        document.getElementById("start-button").innerHTML = "Start";
        status = true;
    }
}

function stop() {

    if(status === false) {
        window.clearInterval(interval);
        document.getElementById("stop-button").innerHTML = "Stop";
        status = false;
    }

}

function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById('timer').innerHTML = "0:00";
}