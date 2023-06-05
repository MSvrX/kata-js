// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  // Calculate the total milliseconds for hours, minutes, and seconds
  const hoursInMs = h * 60 * 60 * 1000;
  const minutesInMs = m * 60 * 1000;
  const secondsInMs = s * 1000;

  // Calculate the total milliseconds since midnight
  const totalMs = hoursInMs + minutesInMs + secondsInMs;

  return totalMs;
}
