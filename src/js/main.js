let block1_1 = document.getElementById("block1_1"),
    block1_2 = document.getElementById("block1_2"),
    block2_1 = document.getElementById("block2_1"),
    block2_2 = document.getElementById("block2_2"),
    block3_1 = document.getElementById("block3_1"),
    block3_2 = document.getElementById("block3_2"),
    block4_1 = document.getElementById("block4_1"),
    block4_2 = document.getElementById("block4_2"),
    block5_1 = document.getElementById("block5_1"),
    block5_2 = document.getElementById("block5_2"),
    block6_1 = document.getElementById("block6_1"),
    block6_2 = document.getElementById("block6_2"),
    block7_1 = document.getElementById("block7_1"),
    block7_2 = document.getElementById("block7_2"),
    block8_1 = document.getElementById("block8_1"),
    block8_2 = document.getElementById("block8_2"),
    block9_1 = document.getElementById("block9_1"),
    block9_2 = document.getElementById("block9_2"),
    block10_1 = document.getElementById("block10_1"),
    block10_2 = document.getElementById("block10_2"),
    btn1 = document.getElementById("show-hide-btn1"),
    btn2 = document.getElementById("show-hide-btn2"),
    btn3 = document.getElementById("show-hide-btn3"),
    btn4 = document.getElementById("show-hide-btn4"),
    btn5 = document.getElementById("show-hide-btn5"),
    btn6 = document.getElementById("show-hide-btn6"),
    btn7 = document.getElementById("show-hide-btn7"),
    btn8 = document.getElementById("show-hide-btn8"),
    btn9 = document.getElementById("show-hide-btn9"),
    btn10 = document.getElementById("show-hide-btn10");


btn1.addEventListener("click", showHide1);
btn2.addEventListener("click", showHide2);
btn3.addEventListener("click", showHide3);
btn4.addEventListener("click", showHide4);
btn5.addEventListener("click", showHide5);
btn6.addEventListener("click", showHide6);
btn7.addEventListener("click", showHide7);
btn8.addEventListener("click", showHide8);
btn9.addEventListener("click", showHide9);
btn10.addEventListener("click", showHide10);

// 1
function showHide1() {
    block1_1.style.display = "none";
    block1_2.style.display = "none";
    if (block1_1.style.display === "none" & block1_2.style.display === "none") {
        block1_1.style.display = "flex";
        block1_2.style.display = "flex";
        btn1.style.display = "none";
        console.log('if block');
    }
}

// 2
function showHide2() {
    block2_1.style.display = "none";
    block2_2.style.display = "none";
    if (block2_1.style.display === "none" & block2_2.style.display === "none") {
        block2_1.style.display = "flex";
        block2_2.style.display = "flex";
        btn2.style.display = "none";
    }
}
// 3
function showHide3() {
    block3_1.style.display = "none";
    block3_2.style.display = "none";
    if (block3_1.style.display === "none" & block3_2.style.display === "none") {
        block3_1.style.display = "flex";
        block3_2.style.display = "flex";
        btn3.style.display = "none";
    }
}
// 4
function showHide4() {
    block4_1.style.display = "none";
    block4_2.style.display = "none";
    if (block4_1.style.display === "none" & block4_2.style.display === "none") {
        block4_1.style.display = "flex";
        block4_2.style.display = "flex";
        btn4.style.display = "none";
    }
}

// 5
function showHide5() {
    block5_1.style.display = "none";
    block5_2.style.display = "none";
    if (block5_1.style.display === "none" & block5_2.style.display === "none") {
        block5_1.style.display = "flex";
        block5_2.style.display = "flex";
        btn5.style.display = "none";
    }
}

// 6
function showHide6() {
    block6_1.style.display = "none";
    block6_2.style.display = "none";
    if (block6_1.style.display === "none" & block6_2.style.display === "none") {
        block6_1.style.display = "flex";
        block6_2.style.display = "flex";
        btn6.style.display = "none";
    }
}
// 7
function showHide7() {
    block7_1.style.display = "none";
    block7_2.style.display = "none";
    if (block7_1.style.display === "none" & block7_2.style.display === "none") {
        block7_1.style.display = "flex";
        block7_2.style.display = "flex";
        btn7.style.display = "none";
    }
}

// 8
function showHide8() {
    block8_1.style.display = "none";
    block8_2.style.display = "none";
    if (block8_1.style.display === "none" & block8_2.style.display === "none") {
        block8_1.style.display = "flex";
        block8_2.style.display = "flex";
        btn8.style.display = "none";
    }
}
// 9
function showHide9() {
    block9_1.style.display = "none";
    block9_2.style.display = "none";
    if (block9_1.style.display === "none" & block9_2.style.display === "none") {
        block9_1.style.display = "flex";
        block9_2.style.display = "flex";
        btn9.style.display = "none";
    }
}
// 10
function showHide10() {
    block10_1.style.display = "none";
    block10_2.style.display = "none";
    if (block10_1.style.display === "none" & block10_2.style.display === "none") {
        block10_1.style.display = "flex";
        block10_2.style.display = "flex";
        btn10.style.display = "none";
    }
}