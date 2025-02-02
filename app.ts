/*console.log('Hello TypeScript World');
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
console.log(isGreater); */

/*********************************************
 * LECTURE 5: TYPE ASSIGNMENT & TYPE INFERANCE
 ********************************************/
/*function sum(num1: number, num2: number, isPrint: boolean, msg: string){
    if(isPrint){
        let s = num1 + num2;
        console.log(msg + ' ' + s);
    }
    return num1 + num2;
}

let n1 = 10;
let n2 = 20;

console.log(sum(n1, n2, true, "Sum is = "));*/

/*********************************************
 * LECTURE 6: OBJECT TYPE IN TYPESCRIPT
 ********************************************/
/*let person: {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    }
} = {
    name: 'John',
    age: 30,
    address: {
        city: 'london',
        country: 'UK'
    }
}

console.log(person.name);
console.log(person["age"]);*/

/*********************************************
 * LECTURE 8: TUPLES IN TYPESCRIPT
 ********************************************/

let employee:[number,string,number,boolean] = [100, 'mark', 2000, true]

employee=[200,'john', 200, false]