# About

Implementation of classList attribute (<a href="http://www.w3.org/TR/dom/#domtokenlist">DOMTokenList</a> interface). Depends on <a href="https://github.com/plusdude/array-generics">Array Generics</a>.

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

## Usage

Just include into your document:

``` html
<script src="path_to/array.generics.min.js"></script>
<script src="path_to/element.classlist.min.js"></script>
```

## Notes

* Browsers that natively supports classList does not pass all tests (at least at the moment). 
* This shim does not work in Internet Explorer versions less than 8.
