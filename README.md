# next-is.js
is.js is a micro javascript library that helps you with conditions.
This fork of is.js is not poluting global scope.
It's able to work on both: NodeJS and Browser.

## Installation
`npm install --save next-is`


#### browser: `<script src="is.js"></script>`
is.js is available under window.is


#### require/amd (webpack)
`const is = require('next-is');`


### Examples:

```js
// Object functions:
var str = 'my string';
is.isString(str); // return true
is.isEmpty(str); // return false
is.isArray(str); // return false

is.string.isBlank(str);   // return false
is.string.isBlank('');    // return true
is.string.isBlank('   '); // return true

is.string.isEmail('this@email.com'); // return true
is.string.isCC('5156300575820365');  // return true
is.string.isCC( '5156300575820365', 'Visa' ) // return false

// also is.js have some core functions:
is.windows();
is.chrome();
is.mobile();
is.online();

if(is.isString(str)){
  // do stuffs here
}
if(is.desktop()){
  // do stuffs here
}
```

###How to use:
First of all you need to add is.js to your website, before your main javascript:
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>My homepage</title>
</head>
<body> <script src="next-is.js"></script> <!-- insert next-is.js -->
	<script src="main.js"></script>   <!-- your main javascript -->
</body>
</html>
```
After that you have already finished with the installation. Inside your main script you can already start using next-is.js!
```

## API reference
```
is = {
	chrome function()
	desktop function()
	firefox function()
	gecko function()
	ie function()
	ie10 function()
	ie11 function()
	ie6 function()
	ie7 function()
	ie8 function()
	ie9 function()
	isArray function(input)
	isBoolean function(input)
	isDate function(input)
	isEmpty function(input)
	isFunction function(input)
	isNaN function(input)
	isNumber function(input)
	isObject function(input)
	isOwnProperty function(input, prop)
	isRegExp function(input)
	isSameType function(input, obj)
	isString function(input)
	isType function(input, type)
	kindle function()
	linux function()
	mac function()
	mobile function()
	offline function()
	online function()
	opera function()
	safari function()
	tablet function()
	tv function()
	unix function()
	webkit function()
	windows function()
	date {
		isAfter function(input, date)
		isBefore function(input, date)
		isFuture function(input, date)
		isLeapYear function(input)
		isPast function(input, date)
		isValid function(input)
		isWeekday function(input)
		isWeekend function(input)
	}
	number {
		isEven function(input)
		isFloat function(input)
		isInteger function(input)
		isMultipleOf function(input, multiple)
		isOdd function(input)
	}
	string {
		isBlank function(input)
		isCC function(input, type)
		isCreditCard function(input, type)
			type:
				'any',
				'ae' || 'AmericanExpress',
				'Discover',
				'mc' || 'MasterCard',
				'Visa'
		isEmail function(input)
		isLatLng function(input)
		isLatLong function(input)
		isPhone function(input, country)
			country: 'ar': 'ar', 'au', 'ca', 'fr', 'is', 'uk', 'us'
		isZip function(input, country)
			country: 'us', 'se', 'pl', 'nl', 'jp', 'it', 'is', 'hu', 'gb', 'es',
					 'de', 'dk', 'ca', 'br', 'be', 'at', 'au', 'ar'
	}
}
```