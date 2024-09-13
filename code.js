var minute = '56';
var hour = '10';
var day_num = '21';
var day_state = 'Mid Morning';
var month = 'January'
var month_num = '1';
var year = '2024';


document.getElementById("time").innerText = hour + ":" + minute + " - " + day_state;
document.getElementById("date").innerText = day_num + " " + month + " " + year;


var current_task = "Nothing to do right now!"

document.getElementById("task").innerText = current_task;