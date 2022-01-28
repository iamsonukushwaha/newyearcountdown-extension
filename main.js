const timeLeft = document.getElementById("time-left");
const newDate = document.getElementById("date");

var nextYear = new Date().getFullYear() + 1;
var newYearDay = "01/01/";
newYearDay += nextYear;

let nextDate= new Date(newYearDay); 

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; // milliseconds
let timerId;

function countDown() {
  const today = new Date();
  const timeSpan = nextDate - today;

  if (timeSpan <= -day) {
    timeLeft.innerHTML = "Hope you had a nice Year!";
    clearInterval(timerId);
    return;
  } else if (timeSpan <= 0) {
    timeLeft.innerHTML = "Happy New Year!!!";
    clearInterval(timerId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeLeft.innerHTML =
    days +
    " days <br/>" +
    hours +
    " hours <br/>" +
    minutes +
    " minutes <br/>" +
    seconds +
    " seconds ";
}

function changeColor() {
  let color = timeLeft.style.color;
  // console.log(color)
  if (color == "") {
    timeLeft.style.color = "yellow";
  }
  if (color == "yellow") {
    timeLeft.style.color = "white";
    timeLeft.style.color = "";
  }
}

timerId = setInterval(countDown, second); // call every second

setInterval(changeColor, second);

