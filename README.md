# About
Implementation of classList attribute (DOMTokenList interface). Relies on <a href="https://github.com/plusdude/array-generics">Array Generics</a>

## Examples
```javascript
var element = document.documentElement;

// add class
element.classList.add("root");

// remove class
element.classList.remove("root");

// toggle class
element.classList.toggle("root");

// test class
element.classList.contains("root");
```
