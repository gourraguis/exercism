//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const newDate = new Date(date.getTime())
  newDate.setSeconds(newDate.getSeconds() + 1_000_000_000)

  return newDate
};
