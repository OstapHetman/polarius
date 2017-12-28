function showHide() {
    var e = document.getElementById("myDiv");
    var e2 = document.getElementById("myDiv2");
    var btn = document.getElementById("show-hide-btn");
    if (e.style.display === "none") {
        e.style.display = "flex";
        btn.style.display = "none";
    } else {
        e.style.display = "none";
    }
    if (e2.style.display === "none") {
        e2.style.display = "flex";
        btn.style.display = "none";
    } else {
        e2.style.display = "none";
    }
}