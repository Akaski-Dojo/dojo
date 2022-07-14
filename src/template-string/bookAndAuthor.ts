function bookAndAuthor(bookName: string, authorName: string, datePublished: { month: string; day: number; year: number }): string {
  return `---\n${bookName}\nby ${authorName}\n\n  Published: ${datePublished.month} ${datePublished.day}, ${datePublished.year}\n---`
}

console.log(bookAndAuthor(
  'Narnia la continuación, 100 años después del accidente',
  'Leonardo Jose Saturno Suarez',
  { month: 'Septiembre', day: 7, year: 1999 },
))

export { bookAndAuthor }
