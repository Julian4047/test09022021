function send() {
    let arrayText = [];
    let lnText = document.getElementById("lnText").value;
    if (lnText != "") {
        arrayText.push(lnText);
    }
    console.log(arrayText);
    localStorage.setItem("lastname", arrayText);
}