console.log('Hello TypeScript World');
//1. STRING DATATYPE
var str1 = 'This is a string created ${str2} using single quotes';
var str2 = "this is a string created using double quotes";
var str3 = "This is a string created\n                using back ticks ".concat(str1, "\n                this is another line");
console.log(str1);
console.log(str3);
//2. NUMBER TYPE
var num = 12; //12.0
var pi = 3.14;
//3. BOOLEAN TYPE
var isEligible = true;
var isEqual = false;
console.log(Boolean(null));
console.log(Boolean('Hello'));
//0, '', null, undefined
var isGreater = 10 < 15;
console.log(isGreater);
