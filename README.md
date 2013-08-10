# About
Implementation of classList attribute (DOMTokenList interface). Relies on **[[Array Generics | https://github.com/plusdude/array-generics]]**

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
