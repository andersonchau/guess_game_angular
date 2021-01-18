# simple-date-picker
📅Just a simple date picker component.

## Usage

[Live demo](https://bbbbx.github.io/simple-date-picker/)

Firstly, add `simple-date-picker.css` to your HTML file:

```html
<link rel="stylesheet" href="./src/simple-date-picker.css" />
```

Second, Add `simple-date-picker.js` to your HTML body's bottom, and init a datepicker:

```html
<body>
<!-- assume you have an input with the "date" id -->
<input type="text" id="date"/>

<script type="text/javascript" src="./src/simple-date-picker.js"></script>
<script type="text/javascript">
  var $date = document.querySelector('#date');
  // initial datepicker with the input Node
  datepicker.init($date);
</script>
</body>
```

Ok, you done!

Your page should look like:

![example.gif](example.gif)

If you find any issues, please [submit](https://github.com/bbbbx/simple-data-picker/issues) &#9997; they to me.

Enjoy it~ &#9786;

## License

[MIT](LICENSE)

