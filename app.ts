console.log('Hello TypeScript World');
//1. STRING DATATYPE
const str1 = 'This is a string created ${str2} using single quotes';
const str2 = "this is a string created using double quotes";
const str3 = `This is a string created
                using back ticks ${str1}
                this is another line`;

console.log(str1);
console.log(str3);

//2. NUMBER TYPE
let num = 12; //12.0
const pi = 3.14;

//3. BOOLEAN TYPE
let isEligible = true;
let isEqual = false;

console.log(Boolean(null));
console.log(Boolean('Hello'));

//0, '', null, undefined

let isGreater = 10 < 15;
console.log(isGreater);