let block1 = document.getElementById("block1"),
    block2 = document.getElementById("block2"),
    btn = document.getElementById("show-hide-btn");

btn.addEventListener("click", showHide);

function showHide() {
    if (block1.style.display === "none" & block2.style.display === "none") {
        block1.style.display = "flex";
        block2.style.display = "flex";
        btn.style.display = "none";
    } else {
        block1.style.display = "none";
        block2.style.display = "none";
    }
}