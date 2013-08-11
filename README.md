# About
Implementation of classList attribute (<a href="http://www.w3.org/TR/dom/#domtokenlist">DOMTokenList</a> interface). Depends on <a href="https://github.com/plusdude/array-generics">Array Generics</a>

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
Browsers that natively supports classList does not pass all tests (at least at the moment). The provided examples works across most browsers, except Internet Explorer 7 and below.
