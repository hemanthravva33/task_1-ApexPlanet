let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval); 

  
  const input = document.getElementById("eventDate").value;
  const eventTime = new Date(input).getTime();

 
  if (!input || eventTime < Date.now()) {
    alert("Please select a valid future date and time.");
    return;
  }

  
  countdownInterval = setInterval(() => {
    const now = Date.now();
    const timeLeft = eventTime - now;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").innerHTML = "<h2>🎉 It's Time!</h2>";
      return;
    }

    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}
