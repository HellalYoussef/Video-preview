console.log("page loaded...");

function pause(){
    var x = document.getElementById("myVideo").paused;
}

function play(){
    var x = document.getElementById("myVideo");
    document.getElementById("demo").innerHTML = "Start: " + x.played.start(0)
    + " End: " + x.played.end(0)
}
