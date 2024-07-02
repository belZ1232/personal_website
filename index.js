document.addEventListener('DOMContentLoaded', function() {
    // Display the current time in UTC
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    currentTimeUTC.textContent = new Date().toUTCString();
  
    // Display the current day of the week
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getDay();
    currentDay.textContent = days[currentDayIndex];
  });