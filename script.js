
//Sets time at top of page
$("#currentDay").append(moment().format("MMMM Do YYYY"));

//sets time of day for each row via moment, that can be used for the function
$("#input8").attr("data-time", moment("8:00 am", "h:mm a").format("HH"));
$("#input9").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));




let currentTime = parseInt(moment().format("HH"));

for (let i = 0; i <= 11; i++) {
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
let timeOfDay = $("#hour")
let entryText = $('#dataEntry')


saveBtn.on('click', function () {

    window.localStorage.setItem("Data Entry", JSON.stringify(entryText))


    console.log(localStorage)
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
})