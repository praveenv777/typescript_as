function sum(num1, num2, isPrint, msg) {
    if (isPrint) {
        var s = num1 + num2;
        console.log(msg + ' ' + s);
    }
    return num1 + num2;
}
var n1 = 10;
var n2 = 20;
console.log(sum(n1, n2, true, "Sum is = "));
