function changeBackground() {
    var gender = document.getElementById("gender").value;
    if (gender === "homme") {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "#df4adf";
    }
}
