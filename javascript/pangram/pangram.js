//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  const hash = {}
  str.toLowerCase().split("").forEach(char => {
    if (!hash[char]) {
      hash[char] = true
    }
  })

  for (let char of alphabets) {
    if (!hash[char]) {
      return false
    }
  }

  return true
};
