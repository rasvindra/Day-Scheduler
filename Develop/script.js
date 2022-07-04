
//Header displayed time
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
        var currHour = .row.attr("id"));
console.log(parseInt($(this)))

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};


    // supposed to save to local sotage 
$(".savetextBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

    //supposed to pull from local storage into appropriate time slot
for (var i = 7; i < 21; i++) {
    $(`.hour-${i}`).val(localStorage.getItem(`hour-${i}`));
}



timeBlockColor()



