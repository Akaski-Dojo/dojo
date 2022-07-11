import { describe, expect, it } from 'vitest'
import { hello } from './index'

describe('hello()', () => {
  it('should return the word hello followed by the string given as an argument', () => {
    const input = 'Shinobi'
    const output = hello(input)
    const expected = `Hello ${input}`

    expect(output).toEqual(expected)
  })
})
