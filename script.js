// Moment variables 
var currentDayDate = moment().format("dddd MMM Do YYYY");

// variables for selection in html 
var displayDate = document.getElementById("currentDay");

// sets day and date at the top of the work day scheduler
displayDate.textContent = currentDayDate

$(document).ready(function(){
    $(".clearBtn").on("click", function(event){
        localStorage.clear();
        location.reload();
    });
    
    $(".saveBtn").on("click", function(){
        var time = $(this).parent().attr("id");
        var activity = $(this).siblings(".description").val();
        localStorage.setItem(time, activity);
        console.log(time, activity);
    });
    function colorChange(event){
        var timeBlock = moment().hour();

        $(".time-block").each(function() {
            var blockHour =  parseInt($(this).attr("id"));
            console.log(blockHour);

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
   
   $("#9 .description").val(localStorage.getItem("9"));
   $("#10 .description").val(localStorage.getItem("10"));
   $("#11 .description").val(localStorage.getItem("11"));
   $("#12 .description").val(localStorage.getItem("12"));
   $("#13 .description").val(localStorage.getItem("13"));
   $("#14 .description").val(localStorage.getItem("14"));
   $("#15 .description").val(localStorage.getItem("15"));
   $("#16 .description").val(localStorage.getItem("16"));
   $("#17 .description").val(localStorage.getItem("17"));

});

