var strEmpty = '', 
	str = 'This is a string', 
	obj = {},
	creditCard = "5196255216134695", 
	d = new Date(), 
	arr = [], 
	bool = true,
	fl = 22.5,
	integer = 23,
	reg = /abc/;


/*** Object Functions ***/
QUnit.test("isArray", function( assert ) {
	equal( isValid.isArray(arr), true, "Array is Array" );
	equal( isValid.isArray(obj), false, "Object is not Array" );
	equal( isValid.isArray(str), false, "String is not Array" );
	equal( isValid.isArray(d), false, "Date is not Array" );
	equal( isValid.isArray(bool), false, "Boolean is not Array" );
	equal( isValid.isArray(integer), false, "Number is not Array" );
	equal( isValid.isArray(reg), false, "Regexp is not Array" );
});

QUnit.test("isBoolean", function( assert ) {
	equal( isValid.isBoolean(bool), true, "Boolean is Boolean" );
	equal( isValid.isBoolean(arr), false, "Array is notBoolean" );
	equal( isValid.isBoolean(obj), false, "Object is not Boolean" );
	equal( isValid.isBoolean(str), false, "String is not Boolean" );
	equal( isValid.isBoolean(d), false, "Date is not Boolean" );
	equal( isValid.isBoolean(integer), false, "Number is not Boolean" );
	equal( isValid.isBoolean(reg), false, "Regexp is not Boolean" );
});

QUnit.test("isDate", function( assert ) {
	equal( isValid.isDate(d), true, "Date is Date" );
	equal( isValid.isDate(arr), false, "Array is not Date" );
	equal( isValid.isDate(obj), false, "Object is not Date" );
	equal( isValid.isDate(str), false, "String is not Date" );
	equal( isValid.isDate(bool), false, "Boolean is not Date" );
	equal( isValid.isDate(integer), false, "Number is not Date" );
	equal( isValid.isDate(reg), false, "Regexp is not Date" );
});

QUnit.test("isEmpty", function( assert ) {
	equal( isValid.isEmpty(strEmpty), true, "empty String is empty" );
	equal( isValid.isEmpty(str), false, "not empty String is not Empty" );
	equal( isValid.isEmpty(arr), true, "empty Array is Empty" );
	equal( isValid.isEmpty([1,2,3]), false, "not empty Array is not Empty" );
	equal( isValid.isEmpty(obj), true, "empty Object is Empty" );
	equal( isValid.isEmpty({'sarah': 'maximum', 1: 2}), false, "not empty Object is not Empty" );
});

QUnit.test("number.isEven", function( assert ) {
	var even = 2, noteven = 3;

	equal( isValid.number.isEven(even), true, "2 is Even" );
	equal( isValid.number.isEven(noteven), false, "3 is not Even" );
});

QUnit.test("number.isFloat", function( assert ) {
	equal( isValid.number.isFloat(fl), true, "22.5 is a float number" );
	equal( isValid.number.isFloat(integer), false, "23 is not a float number" );
});

QUnit.test("isFunction", function( assert ) {
	var func = function(){};

	equal( isValid.isFunction(func), true, "Function is Function" );
	equal( isValid.isFunction(d), false, "Date is not Function" );
	equal( isValid.isFunction(arr), false, "Array is not Function" );
	equal( isValid.isFunction(obj), false, "Object is not Function" );
	equal( isValid.isFunction(str), false, "String is not Function" );
	equal( isValid.isFunction(bool), false, "Boolean is not Function" );
	equal( isValid.isFunction(integer), false, "Number is not Function" );
	equal( isValid.isFunction(reg), false, "Regexp is not Function" );
});

QUnit.test("number.isInteger", function( assert ) {
	equal( isValid.number.isInteger(integer), true, "23 is an Integer" );
	equal( isValid.number.isInteger(fl), false, "22.5 is not an Integer" );
});

QUnit.test("number.isMultipleOf", function( assert ) {
	var ten = 10, eleven = 11;

	equal( isValid.number.isMultipleOf( ten, 5 ), true, "10 is multiple of 5" );
	equal( isValid.number.isMultipleOf( eleven, 5 ), false, "11 is not multiple of 5" );
});

QUnit.test("isNaN", function( assert ) {
	equal( isValid.isNaN(obj), true, "Object is not a number" );
	equal( isValid.isNaN(arr), true, "Array is not a number" );
	equal( isValid.isNaN(str), true, "String is not a number" );
	equal( isValid.isNaN(d), true, "Date is not a number" );
	equal( isValid.isNaN(bool), true, "Boolean is not a number" );
	equal( isValid.isNaN(integer), false, "Integer is a number" );
	equal( isValid.isNaN(fl), false, "Float is a number" );
	equal( isValid.isNaN(reg), true, "Regexp is not a number" );
});

QUnit.test("isNumber", function( assert ) {
	equal( isValid.isNumber(obj), false, "Object is not a number" );
	equal( isValid.isNumber(arr), false, "Array is not a number" );
	equal( isValid.isNumber(str), false, "String is not a number" );
	equal( isValid.isNumber(d), false, "Date is not a number" );
	equal( isValid.isNumber(bool), false, "Boolean is not a number" );
	equal( isValid.isNumber(integer), true, "Integer is a number" );
	equal( isValid.isNumber(fl), true, "Float is a number" );
	equal( isValid.isNumber(reg), false, "Regexp is not a number" );
});

QUnit.test("isObject", function( assert ) {
	equal( isValid.isObject(obj), true, "Object is Object" );
	equal( isValid.isObject(arr), false, "Array is not Object" );
	equal( isValid.isObject(str), false, "String is not Object" );
	equal( isValid.isObject(d), false, "Date is not Object" );
	equal( isValid.isObject(bool), false, "Boolean is not Object" );
	equal( isValid.isObject(integer), false, "Number is not Object" );
	equal( isValid.isObject(reg), false, "Regexp is not Object" );
});

QUnit.test("number.isOdd", function( assert ) {
	var even = 2, noteven = 3;

	equal( isValid.number.isOdd(noteven), true, "3 is Odd" );
	equal( isValid.number.isOdd(even), false, "2 is not Odd" );
});

QUnit.test("isOwnProperty", function( assert ) {
	var objProp = {};
	objProp.test = 541241;

	equal( isValid.isOwnProperty( objProp, 'test' ), true, "test is a property of objProp" );
	equal( isValid.isOwnProperty( objProp, 'comma' ), false, "comma is not a property of objProp" );
});

QUnit.test("isRegExp", function( assert ) {
	equal( isValid.isRegExp(reg), true, "Regexp is RegExp" );
	equal( isValid.isRegExp(arr), false, "Array is not RegExp" );
	equal( isValid.isRegExp(str), false, "String is not RegExp" );
	equal( isValid.isRegExp(d), false, "Date is not RegExp" );
	equal( isValid.isRegExp(bool), false, "Boolean is not RegExp" );
	equal( isValid.isRegExp(integer), false, "Number is not RegExp" );
	equal( isValid.isRegExp(obj), false, "Object is not RegExp" );
});

QUnit.test("isSameType", function( assert ) {
	equal( isValid.isSameType( reg, /eio/ ), true, "Regexp is same type RegExp" );
	equal( isValid.isSameType( arr, {} ), false, "Array is not type Object" );
	equal( isValid.isSameType( str, "hello world" ), true, "String is same type String" );
	equal( isValid.isSameType( d, {} ), false, "Date is not type Object" );
	equal( isValid.isSameType( bool, {} ), false, "Boolean is not type Object" );
	equal( isValid.isSameType( integer, {} ), false, "Number is not type Object" );
	equal( isValid.isSameType( obj, {} ), true, "Object is same type Object" );
});

QUnit.test("isString", function( assert ) {
	equal( isValid.isString(str), true, "String is String" );
	equal( isValid.isString(arr), false, "Array is not String" );
	equal( isValid.isString(reg), false, "Regexp is not String" );
	equal( isValid.isString(d), false, "Date is not String" );
	equal( isValid.isString(bool), false, "Boolean is not String" );
	equal( isValid.isString(integer), false, "Number is not String" );
	equal( isValid.isString(obj), false, "Object is not String" );
});

QUnit.test("isType", function( assert ) {
	equal( isValid.isType( str, "String" ), true, "String is type String" );
	equal( isValid.isType( arr, "String" ), false, "Array is not type String" );
	equal( isValid.isType( reg, "String" ), false, "Regexp is not type String" );
	equal( isValid.isType( d, "String" ), false, "Date is not type String" );
	equal( isValid.isType( bool, "String" ), false, "Boolean is not type String" );
	equal( isValid.isType( integer, "String" ), false, "Number is not type String" );
	equal( isValid.isType( obj, "String" ), false, "Object is not type String" );
});


/*** String Functions ***/
QUnit.test("string.isBlank", function( assert ) {
	equal( isValid.string.isBlank(strEmpty), true, "empty string is Blank" );
	equal( isValid.string.isBlank(str), false, "String is not Blank" );
});

QUnit.test("string.isCC and string.isCreditCard", function( assert ) {
	equal( isValid.string.isCC(creditCard), true, "'5196255216134695' is a credit card number" );
	equal( isValid.string.isCC(str), false, "'This is a string' is not a credit card number" );
	equal( isValid.string.isCreditCard(creditCard), true, "'5196255216134695' is a credit card number" );
	equal( isValid.string.isCreditCard(str), false, "'This is a string' is not a credit card number" );
});

QUnit.test("string.isEmail", function( assert ) {
	equal( isValid.string.isEmail('test@email.com'), true, "'test@email.com' is an email" );
	equal( isValid.string.isEmail(str), false, "'This is a string' is not an email" );
});

QUnit.test("string.isLatLng and string.isLatLong", function( assert ) {
	var latlong = '63.548552, -127.529297';
	equal( isValid.string.isLatLong(latlong), true, "'63.548552, -127.529297' is a valid Latitude Longitude" );
	equal( isValid.string.isLatLong(str), false, "'This is a string' is not a latitude longitude" );
	equal( isValid.string.isLatLng(latlong), true, "'63.548552, -127.529297' is a valid Latitude Longitude" );
	equal( isValid.string.isLatLng(str), false, "'This is a string' is not a latitude longitude" );
});

QUnit.test("string.isPhone", function( assert ) {
	var ar1 = '1234-5678',
		au1 = '0491 570 156', 
		au2 = '+61 491 570 156', 
		ca1 = '613-555-0195', 
		ca2 = '1-613-555-0195', 
		fr1 = '03 7291 6437', 
		fr2 = '04.48.95.09.94', 
		is1 = '479 5406', 
		is2 = '438 7049', 
		uk1 = '01632 960483', 
		uk2 = '+44 1632 960483', 
		us1 = '202-555-0173', 
		us2 = '1-202-555-0173';

	equal( isValid.string.isPhone( ar1, 'ar' ), true, "'123-4564' is an AR phone number" );
	equal( isValid.string.isPhone( au1, 'au' ), true, "'0491 570 156' is an AU phone number" );
	equal( isValid.string.isPhone( au2, 'au' ), true, "'+61 491 570 156' is an AU phone number" );
	equal( isValid.string.isPhone( ca1, 'ca' ), true, "'613-555-0195' is a CA phone number" );
	equal( isValid.string.isPhone( ca2, 'ca' ), true, "'1-613-555-0195' is a CA phone number" );
	equal( isValid.string.isPhone( fr1, 'fr' ), true, "'03 7291 6437' is a FR phone number" );
	equal( isValid.string.isPhone( fr2, 'fr' ), true, "'04.48.95.09.94' is a FR phone number" );
	equal( isValid.string.isPhone( is1, 'is' ), true, "'01632 960483' is a IS phone number" );
	equal( isValid.string.isPhone( is2, 'is' ), true, "'+44 1632 960483' is a IS phone number" );
	equal( isValid.string.isPhone( uk1, 'uk' ), true, "'01632 960483' is a UK phone number" );
	equal( isValid.string.isPhone( uk2, 'uk' ), true, "'+44 1632 960483' is a UK phone number" );
	equal( isValid.string.isPhone( us1, 'us' ), true, "'202-555-0173' is a US phone number" );
	equal( isValid.string.isPhone( us2, 'us' ), true, "'1-202-555-0173' is a US phone number" );
});

QUnit.test("string.isZip", function( assert ) {
	var ar = '2403',
		au = '2440',
		at = '2413',
		be = '5142',
		br = '18044-280',
		ca = 'M8V 3B6',
		dk = '1131',
		de = '45128',
		es = '29611',
		gb = 'EC1A 1BB',
		hu = '9012',
		is = '371',
		it = '25049',
		jp = '541-5472',
		nl = '9446',
		pl = '61-324',
		se = '587 42',
		us = '60603'

	equal( isValid.string.isZip( ar, 'ar' ), true, "'2403' is an AR Zip Code" );
	equal( isValid.string.isZip( au, 'au' ), true, "'2440' is an AU Zip Code" );
	equal( isValid.string.isZip( at, 'at' ), true, "'2413' is an AT Zip Code" );
	equal( isValid.string.isZip( be, 'be' ), true, "'5142' is a BE Zip Code" );
	equal( isValid.string.isZip( br, 'br' ), true, "'18044-280' is a BR Zip Code" );
	equal( isValid.string.isZip( ca, 'ca' ), true, "'M8V 3B6' is a CA Zip Code" );
	equal( isValid.string.isZip( dk, 'dk' ), true, "'1131' is a DK Zip Code" );
	equal( isValid.string.isZip( de, 'de' ), true, "'45128' is a DE Zip Code" );
	equal( isValid.string.isZip( es, 'es' ), true, "'29611' is a ES Zip Code" );
	equal( isValid.string.isZip( gb, 'gb' ), true, "'EC1A 1BB' is a GB Zip Code" );
	equal( isValid.string.isZip( hu, 'hu' ), true, "'9012' is a HU Zip Code" );
	equal( isValid.string.isZip( is, 'is' ), true, "'371' is a IS Zip Code" );
	equal( isValid.string.isZip( it, 'it' ), true, "'25049' is a IT Zip Code" );
	equal( isValid.string.isZip( jp, 'jp' ), true, "'541-5472' is a JP Zip Code" );
	equal( isValid.string.isZip( nl, 'nl' ), true, "'8031' is a NL Zip Code" );
	equal( isValid.string.isZip( pl, 'pl' ), true, "'61-324' is a PL Zip Code" );
	equal( isValid.string.isZip( se, 'se' ), true, "'587 42' is a SE Zip Code" );
	equal( isValid.string.isZip( us, 'us' ), true, "'60603' is a US Zip Code" );
});


/*** Date Functions ***/
QUnit.test("date.isAfter and date.isFuture", function( assert ) {
	var newDate = new Date();

	equal( isValid.date.isFuture(d), false, d+" isnt in the Future" );
	ok   ( isValid.date.isAfter( newDate, d ), newDate + " is After of "+ d );
	equal( isValid.date.isAfter( d, newDate ), false, d + " is not After of "+ newDate );
	ok   ( isValid.date.isFuture( newDate, d ), newDate + " is Future of "+ d );
	equal( isValid.date.isFuture( d, newDate ), false, d + " is not Future of "+ newDate );
});

QUnit.test("date.isBefore and date.isPast", function( assert ) {
	var newDate = new Date();

	equal( isValid.date.isPast(d), false, d + " is in the past" );
	ok   ( isValid.date.isPast( d, newDate ), d + " is Past of "+ newDate );
	equal( isValid.date.isPast( newDate, d ), false, newDate + " is not Past of "+ d );
	ok   ( isValid.date.isBefore( d, newDate ), d + " is Before of "+ newDate );
	equal( isValid.date.isBefore( newDate, d ), false, newDate + " is not Before of "+ d );
});

QUnit.test("date.isLeapYear", function( assert ) {
	ok( isValid.date.isLeapYear(d), "Is this year a Leap Year?" );
});

QUnit.test("date.isValid", function( assert ) {
	ok( isValid.date.isValid(d), "Date is a valid date" );
});

QUnit.test("date.isWeekend and date.isWeekday", function( assert ) {
	ok( isValid.date.isWeekend(d), "Is today a Weekend?" );
	ok( isValid.date.isWeekday(d), "Then today is a Weekday." );
});


/*** Core Functions ***/
QUnit.test("Browser check", function( assert ) {
	ok( isValid.ie(), "I am currently using Internet Explorer (any version)" );
	ok( isValid.firefox(), "I am currently using Firefox" );
	ok( isValid.gecko(), "I am currently using Gecko" );
	ok( isValid.opera(), "I am currently using Opera" );
	ok( isValid.safari(), "I am currently using Safari" );
	ok( isValid.chrome(), "I am currently using Google Chrome" );
	ok( isValid.webkit(), "I am currently using a WebKit browser" );
});

QUnit.test("Device check", function( assert ) {
	ok( isValid.mobile(), "I am currently using a Mobile Browser" );
	ok( isValid.tablet(), "I am currently using a Tablet" );
	ok( isValid.desktop(), "I am currently using a Computer" );
	ok( isValid.kindle(), "I am currently using a Kindle" );
	ok( isValid.tv(), "I am currently using a TV" );
});

QUnit.test("Online / Offline Check", function( assert ) {
	ok( isValid.online(), "Am I online?" );
	ok( isValid.offline(), "Then I am offline." );
});

QUnit.test("OS Check", function( assert ) {
	ok( isValid.windows(), "I am using Windows" );
	ok( isValid.mac(), "I am using MAC" );
	ok( isValid.unix(), "I am using UNIX" );
	ok( isValid.linux(), "I am using LINUX" );
});