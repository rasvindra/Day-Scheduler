function showTheTime() {
    var A = moment().format('[Today is ]dddd, MMMM Do YYYY, h:mm:ss a');    
    document.getElementById("currentDay").innerHTML = A;
}

showTheTime(); // for the first load
setInterval(showTheTime, 250); // I saw it was recomended to update it more than every second