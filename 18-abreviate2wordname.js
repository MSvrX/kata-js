/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.*/
function abbrevName(name) {
  const words = name.split(" ");

  // Get the first character of each word and convert them to uppercase
  const initials = words.map((word) => word.charAt(0).toUpperCase());

  // Join the initials with a dot
  const initialsString = initials.join(".");

  return initialsString;
}
