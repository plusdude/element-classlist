# About
Implementation of classList attribute (<a href="http://www.w3.org/TR/dom/#domtokenlist">DOMTokenList</a> interface). Relies on <a href="https://github.com/plusdude/array-generics">Array Generics</a>

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
## Notes
Browsers that natively supports classList not passed all tests (at least at the moment). The basic functionality (see examples) will work across most browsers, except Internet Explorer 7 and below.
