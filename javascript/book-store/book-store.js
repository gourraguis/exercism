//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const fiveDiscount = (books) => {
  if (books.every(b => b > 0)) {
    const toPay = 8 * 5 * .75
    const booksLeft = books.map(b => b - 1)

    return { toPay, booksLeft }
  }

  return null
}

const twoDiscount = (quantityPerBook, price = 0) => {
  if (quantityPerBook[0] && quantityPerBook[1]) {
    const newQuantityPerBook = [
      ...quantityPerBook.slice(0, 2).map(n => n - 1),
      ...quantityPerBook.slice(2)
    ].sort((a, b) => b - a)

    return twoDiscount(newQuantityPerBook, price + 800 * 2 * .95)
  }

  return { quantityPerBook, price }
}

export const cost = (books) => {
  const quantityPerBook = [0, 0, 0, 0, 0]
  books.forEach(book => {
    quantityPerBook[book - 1] += 1
  })
  quantityPerBook.sort((a, b) => b - a)

  const withTwoDiscount = twoDiscount(quantityPerBook)
  
  // no discounts available
  const booksCount = withTwoDiscount.quantityPerBook.reduce((acc, val) => acc + val)
  return booksCount * 800 + withTwoDiscount.price
};
