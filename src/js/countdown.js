// Countdown digital clock function
let countDownDate = new Date("Jan 10, 2024 00:00:00").getTime();

let demo = document.getElementById("demo");

let daysSection = document.getElementById("days");
let hoursSection = document.getElementById("hours");
let minutesSection = document.getElementById("minutes");
let secondsSection = document.getElementById("seconds");

// Update the count down every 1 second
let updateTime = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the countdown date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the results seperately for styling
  daysSection.innerHTML = days;
  hoursSection.innerHTML = hours;
  minutesSection.innerHTML = minutes;
  secondsSection.innerHTML = seconds;
    
  // If the count down is over
  if (distance < 0) {
    clearInterval(updateTime);

    //CSS: due to space-between is default
    demo.style.justifyContent = "center"; 

    // Then write this text
    demo.innerHTML = "Discount is over! Stay Tuned for the next one!";
  }
}, 1000);