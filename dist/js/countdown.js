let countDownDate = new Date("Jan 7, 2018 23:59:25").getTime();
let countDownDate2 = new Date("Jan 7, 2018 23:59:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {
    // Get todays date and time
    let now = new Date().getTime();
    // Find the distance between now an the count down date
    let distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"
    document.getElementsByClassName("days")[0].innerHTML = '0' + days;
    document.getElementsByClassName("hours")[0].innerHTML = hours;
    document.getElementsByClassName("minutes")[0].innerHTML = minutes;
    document.getElementsByClassName("seconds")[0].innerHTML = seconds;
    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

let y = setInterval(function() {
    // Get todays date and time
    let now2 = new Date().getTime();
    // Find the distance between now an the count down date
    let distance2 = countDownDate2 - now2;
    // Time calculations for days, hours, minutes and seconds
    let days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
    let hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
    let seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    // Display the result in the element with id="demo"

    document.getElementById("days2").innerHTML = '0' + days2;
    document.getElementById("hours").innerHTML = hours2;
    document.getElementById("minutes").innerHTML = minutes2;
    document.getElementById("seconds").innerHTML = seconds2;
    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(y);
    }
}, 1000);