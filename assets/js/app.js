// Declare variables
const day = document.getElementById('days');
const hour = document.getElementById('hours');
const min = document.getElementById('mins');
const secs = document.getElementById('secs');

// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.textContent = days;
  hour.textContent = hours;
  min.textContent = minutes;
  secs.textContent = seconds;
    
  if (distance < 0) {
    clearInterval(x);
    console.log('Expired');
  }
}, 1000);