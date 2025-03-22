//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  message = message.trim()
  if (message === '') {
    return 'Fine. Be that way!'
  }

  const isQuestion = message[message.length - 1] === '?'
  const isYelling = message.toUpperCase() === message && /[A-Z]/.test(message)
  if (isQuestion && isYelling) {
    return "Calm down, I know what I'm doing!"
  }
  if (isYelling) {
    return "Whoa, chill out!"
  }
  if (isQuestion) {
    return "Sure."
  }
  return "Whatever."
};
