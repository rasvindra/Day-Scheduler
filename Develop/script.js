
//Header displayed time
function showTheTime() {  
    var A = moment().format('[Today is ]dddd, MMMM Do YYYY, h:mm:ss a');    
    document.getElementById("currentDay").innerHTML = A;
}
showTheTime(); // load for the first time
setInterval(showTheTime, 250); // saw it was recomended to update it more than every second


// varaibles I though I might need
var day = moment().format("LLLL");
var momentTime = moment().startOf("day").add(7, "hour");
var hour = moment().format("H");

console.log(momentTime)//test
console.log(hour)//test


for (var i = 7; i < 21; i++) {
    var timeSlot = momentTime.add(1, "hour").format("HH:mm A");//
    var currentState;

    //supposed to change color of containers based on current time
    if (hour == i) {
        currentState = 'present';
    } else if (hour > i) {
        currentState = 'future';
    } else if (hour < i) {
        currentState = 'past';
    }

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







