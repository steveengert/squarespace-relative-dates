/**********************************************************************************************
  Takes all Squarespace formatted dates and converts them to relative dates, in days.
  This assumes that there the dates are in a <time> element with the datetime attribute 
  formatted as YYYY-MM-DD. I assume this is the default for Squarespace, if you run intro
  trouble let me know and I'll rewrite it to accomodate more cases.

  Made in 2015 by Steve Engert
**********************************************************************************************/

$(document).ready(function() {
  makeDatesRelative();
});

function makeDatesRelative() {  
// date definitions
var today = new Date(); // today
var aMonth = Math.floor(365/12); // one month, in days
var aYear = 365; // one year , in days

// replaces the date for every time element
$("time").each(function() {

  // the post's date as a JS date
  var postDate = new Date(($(this).attr("datetime").substring(0,4)) + "-" + ($(this).attr("datetime").substring(5,7)) + "-" + ($(this).attr("datetime").substring(8,10)));

  // finding the difference between today and the post's date, in days
  var daysDiff = Math.floor((today - postDate)/1000/60/60/24);

  if(daysDiff < 0) { // impossible dates
    $(this).html("The future!");
  } else if(daysDiff == 0) { // when the dates are the same
    $(this).html("Today");
  } else if (daysDiff == 1) { // when the post's date is one day ago
    $(this).html("Yesterday");
  } else if ((daysDiff >= 1) && (daysDiff < 7)) { // within a week
    $(this).html(daysDiff + " days ago");
  } else if ((daysDiff >= 7) && (daysDiff < 14)) { // between one–two weeks
    $(this).html("last week");
  } else if ((daysDiff >= 14) && (daysDiff < aMonth)) { // multiple weeks
    $(this).html(Math.floor(daysDiff/7) + " weeks ago");
  } else if ((daysDiff >= aMonth) && (daysDiff < (aMonth*2))) { // between one–two months
    $(this).html("last month");
  } else if ((daysDiff >= (aMonth*2)) && (daysDiff < aYear)) { // multiple months
    $(this).html(Math.floor(daysDiff/(aMonth)) + " months ago");
  } else if ((daysDiff >= aYear) && (daysDiff < aYear*2)) { // between one–two years
    $(this).html("last year");
  } else if (daysDiff >= aYear*2) { // multiple years
    $(this).html(Math.floor(daysDiff/aYear) + " years ago");
  } 
});
}