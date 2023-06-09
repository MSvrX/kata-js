// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
  if (1 <= month && month <= 3) {
    return 1;
  } else if (4 <= month && month <= 6) {
    return 2;
  } else if (7 <= month && month <= 9) {
    return 3;
  } else if (10 <= month && month <= 12) {
    return 4;
  } else {
    return undefined;
  }
};
