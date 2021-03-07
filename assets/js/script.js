///define current day and day of the week through Moment
var dateNow = moment().format("dddd, MMMM Do YYYY");
// dateNow=$("#currentDay")
//target "currentDay" id
var displayToday = document.getElementById("currentDay");
//assign date in jumbotron
displayToday.textContent = dateNow
//define the business hours as an array for comparison to surrentTime
var businessHours = ("#hour-"+["9","10","11","12","13","14","15","16","17"]);
//Define currenTime by the corresponding 24 hour clock in Moment
var currentTime = moment().format("H")
//Define oast, present, and future relative to currentTime
var past = (businessHours[""] < currentTime)
var present = (businessHours[""] === currentTime)
var future = (businessHours[""] > currentTime) 
//define the items to be retrieved as the items saved from class of description
let apptDetails = JSON.parse(localStorage.getItem("description"))

//runs the makeTimeSlot function over each business hour so that the time can be determined whether it is in the past present or future
for (let i = 9; i <= 17; i++) {
    $currentTime.append(makeTimeSlot(i));
}

//function for defining  past present and future
function makeTimeSlot(hour) {
    var background;
    if (currentTime === hour){
        background = "present";
    } else if (currentTime > hour){
        background = "past";
    } else {
        background = "future"
    }
}

//define makeTimeSlot function
function makeTimeSlot(hour){

}
//make variable to govern background color


//Set key/value pairs with class rel 9am
// var inpKey1 = document.getElementsById("#9");
// var inpValue1 = document.getElementById("#text9");
// document.getElementById("#btn1").addEventListener("click", addUserInput1(){
//     console.log(addUserInput1);
// });

// console.log(addUserInput1());
//need for loop to collect all key and value pairs

//Make sure everything loads in the page before save button is pressed
document.addEventListener('load', ()=>{
    document.getElementsById("#currentDay").display.innerHTML(dateNow)
    document.getElementsByClassName('.saveBtn').addEventListener('click', addUserInput());
});

//function to save user input to local storage when saveBtn is clicked
function addUserInput1(event){
 event.preventDefault();
 localStorage.setItem(inpKey1 && inpValue1, JSON.stringify);
 return(localStorage);
}
        
// function displayDateandTime() {
//     if currentTime.value = time.value
        
// // }
console.log(currentTime);
console.log(localStorage);
