//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n === 0) {
    return []
  }

  if (n === 1) {
    return [[1]]
  }

  const res = []
  for (let row = 1; row <= n; row++) {
    const arr = []
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1)
      } else {
        arr.push(res[row - 2][col - 1] + res[row - 2][col])
      }
    }
    res.push(arr)
  }

  return res
};
