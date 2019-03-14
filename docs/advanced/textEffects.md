In this chapter you will learn about the following properties:

- text-overflow
- word-wrap
- word-break
- writing-mode

### text-overflow

The CSS text-overflow property specifies how overflowed content that is not displayed should be signaled to the user. For this the overflow property should be hidden.

```css
p.test1 {
  white-space: nowrap; 
  width: 200px; 
  border: 1px solid #000000;
  overflow: hidden;
  text-overflow: clip; 
}

p.test2 {
    white-space: nowrap; 
    width: 200px; 
    border: 1px solid #000000;
    overflow: hidden;
    text-overflow: ellipsis; 
}
```

### word-wrap

The CSS word-wrap property allows long words to be able to be broken and wrap onto the next line.

```css
p {
  word-wrap: break-word;
}
```

### word-break

The CSS word-break property specifies line breaking rules. It is different from word-wrap. It tells when to break the line where as word-wrap tell to break a word if and only if it is too long and doesn't fit the line.

```css
p.test1 {
  word-break: keep-all;
}

p.test2 {
  word-break: break-all;
}
```

### writing-mode

The CSS writing-mode property specifies whether lines of text are laid out horizontally or vertically.

```css
p.test1 {
  writing-mode: horizontal-tb; 
}

span.test2 {
  writing-mode: vertical-rl; 
}

p.test2 {
  writing-mode: vertical-rl; 
}
```


