///define current day and day of the week through Moment
var dateNow = moment().format("dddd, MMMM Do YYYY");
// dateNow=$("#currentDay")
//target "currentDay" id
var displayToday = document.getElementById("currentDay");
//assign date in jumbotron
displayToday.textContent = dateNow
//define the business hours as an array for comparison to surrentTime
var businessHours = ("#h"+["9","10","11","12","13","14","15","16","17"]);
//Define currenTime by the corresponding 24 hour clock in Moment
var currentTime = moment().format("H")
//Define oast, present, and future relative to currentTime
var past = (businessHours[""] < currentTime)
var present = (businessHours[""] === currentTime)
var future = (businessHours[""] > currentTime) 
//make an array targeting the ids in html
// var hour = [
//     {
//         $getElementsById(h9)
//         value: "9",
//     }
//     {
//         $getElementsById(h10)
//         value: "10",
//     }
//     {
//         $getElementsById(h11)
//         value: "11",
//     }
//     {
//         $getElementsById(h12)
//         value: "12",
//     }
//     {
//         $getElementsById(h13)
//         value: "13",
//     }
//     {
//         $getElementsById(h14)
//         value: "14",
//     }
//     {
//         $getElementsById(h15)
//         value: "15",
//     }
//     {
//         $getElementsById(h16)
//         value: "16",
//     }
//     {
//         $getElementsById(h17)
//         value: "17",
//     }
// ]

//Make sure everything loads in the page before save button is pressed
document.addEventListener('load', ()=>{
    document.getElementsById("#currentDay").display.innerHTML(dateNow)
    document.getElementsByClassName('.saveBtn').addEventListener('click', addUserInput());
});
//define the items to be retrieved as the items saved from class of description
let apptDetails = JSON.parse(localStorage.getItem("description"))

//runs the makeTimeSlot function over each business hour so that the time can be determined whether it is in the past present or future
for (let i = 0; i <= 8; i++) {
    makeTimeSlot(i);
}

//function for defining  past present and future
function makeTimeSlot(hour) {
    //make variable to govern background color
    var background;
    if (currentTime === hour){
        background = "present";
    } else if (currentTime > hour){
        background = "past";
    } else {
        background = "future"
    }
}

$("btn1").one("click", saveApt("#text9", "description"))
$("btn2").one("click", saveApt("#text10", "description"))
$("btn3").one("click", saveApt("#text11", "description"))
$("btn4").one("click", saveApt("#text12", "description"))
$("btn5").one("click", saveApt("#text13", "description"))
$("btn6").one("click", saveApt("#text14", "description"))
$("btn7").one("click", saveApt("#text15", "description"))
$("btn8").one("click", saveApt("#text16", "description"))
$("btn9").one("click", saveApt("#text17", "description"))

//function to save appointment information to local storage
function saveApt(event){
    event.preventDefault();
    addUserInput();
}

//function to save user input to local storage when saveBtn is clicked
function addUserInput(event){
    event.preventDefault();
    localStorage.setItem(inpKey1 && inpValue1, JSON.stringify);
    return(localStorage);
   }

// Set key/value pairs with class rel 9am
var inpKey1 = document.getElementsById("#9");
var inpValue1 = document.getElementById("#text9");
document.getElementById("#btn1").addEventListener("click", addUserInput1())
    
console.log("");

// console.log(addUserInput1());
//need for loop to collect all key and value pairs


        
// function displayDateandTime() {
//     if currentTime.value = time.value
        
// // }
console.log(currentTime);
// console.log(localStorage);
