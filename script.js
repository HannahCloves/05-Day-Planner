
//Sets time at top of page
$("#currentDay").append(moment().format("MMMM Do YYYY"));



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