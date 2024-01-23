function showTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let period = "AM";
  
    if (hours >= 12) {
      period = "PM";
      hours = hours % 12;
    }
  
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
  
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("period").innerHTML = period;
  
    setTimeout(showTime, 1000); // Update every second
  }
  
  showTime(); // Run the function initially
  