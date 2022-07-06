
//Header displayed today's time
function showTheTime() {  
    var A = moment().format('[Today is ]dddd, MMMM Do YYYY, h:mm:ss a');    
    document.getElementById("currentDay").innerHTML = A;
}
showTheTime(); // load for the first time
setInterval(showTheTime, 250); // saw it was recomended to update it more than every second


// varaibles I though I might need
var day = moment().format("LLLL");
var hour = moment().hours();
var momentTime = moment().startOf("day").add(7, "hour");


// each time-block is color coded to indicate whether it is in the past, present, or future
function timeBlockColor() {
    var hour = moment().hours();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).parent().attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
      // saves to Local Storage
$(".savetextBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log(value, time)

    localStorage.setItem(time, value);
});


// need to pull data from local storage into array or whatever then itterate through to get values. 


function filltimeinfo() {
    document.getElementById("ta7").innerHTML = localStorage.getItem("7")
    // will 
    document.getElementById("ta8").innerHTML = localStorage.getItem("8")
    // will 
    document.getElementById("ta9").innerHTML = localStorage.getItem("9")
    document.getElementById("ta10").innerHTML = localStorage.getItem("10")
    // will 
    document.getElementById("ta11").innerHTML = localStorage.getItem("11")
    // will 
    document.getElementById("ta12").innerHTML = localStorage.getItem("12")
    // will 
    document.getElementById("ta13").innerHTML = localStorage.getItem("13")
    // will 
    document.getElementById("ta14").innerHTML = localStorage.getItem("14")
    // will 
    document.getElementById("ta15").innerHTML = localStorage.getItem("15")
    // will 
    document.getElementById("ta16").innerHTML = localStorage.getItem("16")
    // will 
    document.getElementById("ta17").innerHTML = localStorage.getItem("17")
    // will 
    document.getElementById("ta18").innerHTML = localStorage.getItem("18")

}
//run function to check current time and update container with past present future styles
timeBlockColor()
// fill from local storage any values saved into appropriate time slot
filltimeinfo()




