function getTimeUntilNewYear() {
  let now = new Date();
  let newYear = new Date(now.getFullYear() + 1, 0, 1);  // Jan 1st of the next year

  let timeDifference = newYear - now;  // Difference in milliseconds

  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
  let seconds = Math.floor((timeDifference / 1000) % 60);

  return `Time until New Year: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

console.log(getTimeUntilNewYear());