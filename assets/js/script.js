var dateNow = moment().format("dddd, MMMM Do YYYY");
// var timeNow = 
//target "currentDay" id
var displayToday = document.getElementById("currentDay");
//assign date in jumbotron
displayToday.textContent = dateNow
var currentTime = moment().format("H")
var time = ("")
var past = (time < currentTime)
var present = (time === currentTime)
var future = (time > currentTime)        
        
// function displayDateandTime() {
//     if currentTime.value = time.value
        
// // }
console.log(currentTime);