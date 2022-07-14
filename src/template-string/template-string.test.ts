import { describe, expect, it } from 'vitest'
import { bookAndAuthor } from './bookAndAuthor'

describe('template-string', () => {
  it('bookAndAuthor()', () => {
    /// dates below don't reflect the actual date books were published
    const [bookOne, authorOne, dateOne] = ['The Great Gatsby', 'F. Scott Fitzgerald', { month: 'May', day: 17, year: 2013 }]
    const [bookTwo, authorTwo, dateTwo] = ['The Hobbit', 'J. R. R. Tolkien', { month: 'September', day: 21, year: 1937 }]
    const [bookThree, authorThree, dateThree] = ['The Catcher in the Rye', 'J. D. Salinger', { month: 'August', day: 22, year: 1951 }]
    const [bookFour, authorFour, dateFour] = ['The Lord of the Rings', 'J. R. R. Tolkien', { month: 'December', day: 17, year: 1954 }]
    const [bookFive, authorFive, dateFive] = ['The Grapes of Wrath', 'John Steinbeck', { month: 'November', day: 15, year: 1939 }]

    const outputOne = bookAndAuthor(bookOne, authorOne, dateOne)
    const outputTwo = bookAndAuthor(bookTwo, authorTwo, dateTwo)
    const outputThree = bookAndAuthor(bookThree, authorThree, dateThree)
    const outputFour = bookAndAuthor(bookFour, authorFour, dateFour)
    const outputFive = bookAndAuthor(bookFive, authorFive, dateFive)

    const expectedOne = `---
The Great Gatsby
by F. Scott Fitzgerald

  Published: May 17, 2013
---`

    const expectedTwo = `---
The Hobbit
by J. R. R. Tolkien

  Published: September 21, 1937
---`

    const expectedThree = `---
The Catcher in the Rye
by J. D. Salinger

  Published: August 22, 1951
---`

    const expectedFour = `---
The Lord of the Rings
by J. R. R. Tolkien

  Published: December 17, 1954
---`

    const expectedFive = `---
The Grapes of Wrath
by John Steinbeck

  Published: November 15, 1939
---`

    expect(outputOne).toEqual(expectedOne)
    expect(outputTwo).toEqual(expectedTwo)
    expect(outputThree).toEqual(expectedThree)
    expect(outputFour).toEqual(expectedFour)
    expect(outputFive).toEqual(expectedFive)
  })
})
