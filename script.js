// Moment variables 
var currentTime = moment().format("h:mm:ss a")
var currentDay = moment().format("dddd")
var currentDayDate = moment().format("dddd MMM Do YYYY");

// variables for selection in html 
var displayDate = document.getElementById("currentDay");

// sets day and date at the top of the work day scheduler
displayDate.textContent = currentDayDate

$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");
        var activity = $(this).siblings(".description").val();
        localStorage.setItem(time, activity);
        console.log(time, activity);
    });
    function colorChange(event){
        var timeBlock = moment().hour();

        $(".time-block").each(function() {
            var blockHour =  parseInt($(this).attr("id").split("-")[1]);

            if (blockHour < timeBlock) {
                $(this).addClass("past");
            }
            else if (blockHour === timeBlock){
                $(this).removeClass("past");
                $(this).addClass("present");
            }else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }
   colorChange();
   
   $("#hour-9 .description").val(localStorage.getItem("hour-9"));
   $("#hour-10 .description").val(localStorage.getItem("hour-10"));
   $("#hour-11 .description").val(localStorage.getItem("hour-11"));
   $("#hour-12 .description").val(localStorage.getItem("hour-12"));
   $("#hour-13 .description").val(localStorage.getItem("hour-13"));
   $("#hour-14 .description").val(localStorage.getItem("hour-14"));
   $("#hour-15 .description").val(localStorage.getItem("hour-15"));
   $("#hour-16 .description").val(localStorage.getItem("hour-16"));
   $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});

