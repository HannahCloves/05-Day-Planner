// JS runs as page loads
$(document).ready(function () {

    //Sets time at top of page
    $("#currentDay").append(moment().format("MMMM Do YYYY"));

    // variables for functions
    const saveBtn = $(".saveBtn");
    let currentTime = parseInt(moment().format("HH"));

    // loops through the current time vs the time on the planner and assigns classes depending on the outcome
    $(".dataEntry").each(function () {
        let schedulerHour = parseInt($(this).attr("id"));
        if (currentTime > schedulerHour) {
            $(this).addClass("past");
        }
        if (currentTime === schedulerHour) {
            $(this).addClass("present").removeClass("past");
        }
        if (currentTime < schedulerHour) {
            $(this).addClass("future").removeClass("present").removeClass("past");
        }
    })

    // When save button is clicked, input entries and time are stored in local storage
    saveBtn.on('click', function () {
        let value = $(this).siblings(".dataEntry").val();
        console.log(value)
        let time = $(this).siblings(".dataEntry").attr("id");
        console.log(time)
        localStorage.setItem(time, value)

    });

    // Stored items are shown in the input 
    $(".hour-8").val(localStorage.getItem("8"));
    $(".hour-9").val(localStorage.getItem("9"));
    $(".hour-10").val(localStorage.getItem("10"));
    $(".hour-11").val(localStorage.getItem("11"));
    $(".hour-12").val(localStorage.getItem("12"));
    $(".hour-1").val(localStorage.getItem("13"));
    $(".hour-2").val(localStorage.getItem("14"));
    $(".hour-3").val(localStorage.getItem("15"));
    $(".hour-4").val(localStorage.getItem("16"));
    $(".hour-5").val(localStorage.getItem("17"));
});

