// so calender based on 9-5 work day
// iterated through the current hour colors that box red if true
// past hours are grey
// upcoming hours green
// save icon
// current day and time at top of the planner
// saves user input into local storage
// uhhhhh think thats it tbh...

// window.onload = function (){

//     let today = new Date();
//     let date = moment().format('LL');
//     #('#currentDay').html(date);

// }

// // set up the schedule from 9-5
// let scheduleHours = ['9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM'];
// let $container = $('.container');

















// check to assign 'AM' or 'PM' to what tables are what colors
// since we are doing 9am-5pm we make an if statement to loop through and it will be easier to say that 5pm = 18:00 

// function colorChange(hours){}


function amPm(){
let am = ' AM';
let pm = ' PM';

if (hours > 12){
hours = hours + pm
} else {
 hours = hours + am

}
return hours;

}