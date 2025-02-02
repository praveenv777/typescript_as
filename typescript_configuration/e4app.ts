function sum(num1: number, num2: number, isPrint: boolean, msg: string){
    if(isPrint){
        let s = num1 + num2;
        console.log(msg + ' ' + s);
    }
    return num1 + num2;
}

let n1 = 10;
let n2 = 20;

console.log(sum(n1, n2, true, "Sum is = "));
