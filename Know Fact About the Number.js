let inputEl = document.getElementById("userInput");
let paraEl = document.getElementById("fact");

function searching() {
    if (event.key === "Enter") {
        if (inputEl.value === "") {
            alert("Enter a number");
        } else {
            let url = "https://apis.ccbp.in/numbers-fact?number=" + String(inputEl.value);
            let options = {
                method: "GET"
            };
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })
                .then(function(jsonData) {
                    paraEl.textContent = jsonData.fact;
                })
        }
    }
}
inputEl.addEventListener("keydown", searching);
