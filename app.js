var btnTranslate = document.querySelector("#btn");
var outputText = document.querySelector("#output");
var inputText = document.querySelector("textarea");
var url = "https://api.funtranslations.com/translate/minion.json"

function constructUrl(textInput) {
    return url + "?" + "text=" + textInput;
}
function errorHandling(error) {
    alert("something went wrong on server,please try again after sometime")
}
function handleEvent() {
    var textInput = inputText.value
    fetch(constructUrl(textInput))
        .then(response => response.json())
        .then(data => {
            outputText.innerText = (data.contents.translated)
        })
        .catch(errorHandling)
}
btn.addEventListener("click", handleEvent)