//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.matrix = str.split("\n").map(row => row.split(" ").map(Number))
  }

  get rows() {
    return this.matrix
  }

  get columns() {
    const reversed = []
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[i].length; j++) {
        if (reversed[j]) {
          reversed[j].push(this.matrix[i][j])
        } else {
          reversed[j] = [this.matrix[i][j]]
        }
      }
    }

    return reversed
  }
}
