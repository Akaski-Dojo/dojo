## About
In these katas the main purpose is to get use to the string template syntax. You can read about this in the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

**Rules**:
- Do not use the legacy concatenation syntax `"string" + variable + number + "string"`
- Do not use any special characters as such `\n` nor other to add a line jump

---

### #1 - Book and Author
We have a client that needs to print a book's title with its author's name, and date of publication. He expects the following format:

```
---
[Book Title]
by [Author Name]

  Published: [Month] [Day], [Year]
---
```

Implement the `bookAndAuthor()` function that returns a string with the given format.
