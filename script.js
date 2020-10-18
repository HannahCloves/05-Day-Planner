$(document).ready(function (){

    //Sets time at top of page
    $("#currentDay").append(moment().format("MMMM Do YYYY"));

    //sets time of day for each row via moment, that can be used for the function
    $("#input8").attr("data-time", moment("8:00 am", "h:mm a").format("HH"));
    $("#input9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
    $("#input10").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
    $("#input11").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
    $("#input12").attr("data-time", moment("12:00 am", "h:mm a").format("HH"));
    $("#input1").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
    $("#input2").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
    $("#input3").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
    $("#input4").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
    $("#input5").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));

    //variable that stores current time
    let currentTime = parseInt(moment().format("HH"));

    //loops through each hour input, anything that is past the current hour turns to "past" class, the current time input will show the "present" class and the any upcoming hour will show the "future" class

    for (let i = 0; i <= 12; i++) {
        let schedulerHour = parseInt($("#input" + i).attr("data-time"));
        if (currentTime > schedulerHour) {
            $("#input" + i).addClass("past");
        }
        if (currentTime === schedulerHour) {
            $("#input" + i).addClass("present");
        }
        if (currentTime < schedulerHour) {
            $("#input" + i).addClass("future");
        }
    }

    const saveBtn = $(".saveBtn");
    saveBtn.on('click', function () {
        let value = $(this).siblings(".dataEntry").val();
        console.log(value)
        let time = $(this).siblings(".dataEntry").attr("id");
        console.log(time)
        localStorage.setItem(time, value)

    });

 $(".hour-8").val(localStorage.getItem("8"));
 $(".hour-9").val(localStorage.getItem("9"));
 $(".hour-10").val(localStorage.getItem("10"));
 $(".hour-11").val(localStorage.getItem("11"));
 $(".hour-12").val(localStorage.getItem("12"));
 $(".hour-1").val(localStorage.getItem("1"));
 $(".hour-2").val(localStorage.getItem("2"));
 $(".hour-3").val(localStorage.getItem("3"));
 $(".hour-4").val(localStorage.getItem("4"));
 $(".hour-5").val(localStorage.getItem("5"));
});



    /*saveEntry();
    showEntry();

   JSON.stringify(window.localStorage.setItem("Data Entry", entryText));
    function saveEntry(timeOfDay, entryText) {
        let storedEntries = JSON.parse(window.localStorage.getItem("#dataEntry")) || [];
        let myEntry = {
            time: timeOfDay,
            entry: entryText
        };
        storedEntries.push(myEntry);
        window.localStorage.setItem("#dataEntry", JSON.stringify(storedEntries))

    }

    function showEntry() {
        let storedEntries = JSON.parse(window.localStorage.getItem("#dataEntry")) || [];
        storedEntries.forEach(function () {
            myEntry.textContent = entryText;
            entryText.appendChild(myEntry);
        });

    }*/
