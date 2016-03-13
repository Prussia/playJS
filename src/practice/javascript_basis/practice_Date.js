//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
// 'use strict';

console.log("**************************************************************");
console.log("Date object");
console.log("**************************************************************");

var Xmas95 = new Date("December 25, 1995");
console.log(Xmas95);
var today = new Date();
console.log(today);
var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month

endYear.setFullYear(today.getFullYear()); // Set year to this year
var msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
console.log(msPerDay);
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
console.log(daysLeft);
var daysLeft = Math.round(daysLeft); //returns days left in the year
console.log(daysLeft);


