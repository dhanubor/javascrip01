//চ্যালেঞ্জ ১:
function sum(a, b) {
    return a+b;
}
console.log(sum(10, 15));
//চ্যালেঞ্জ 2
function student(name, age, id) {
    console.log(`I am `+ name + `. I am `+ age + ` years old.` + `id :`+ id);
}
student("dhanu", 22, 121)
student("dhanu", 22, 121)
//চ্যালেঞ্জ 3
function sumUpToN(n) {
    if (n===1) {
        return 1;
    }
    return n+ sumUpToN(n-1);
}
const n = 100;
console.log(`১ থেকে ${n} পর্যন্ত সংখ্যার যোগফল: ${sumUpToN(n)}`);
//চ্যালেঞ্জ 4
const digNumber = (a, b) => {
    if (a> b) {
        console.log("a is big number");
    } else {
        console.log("b is big number");
    }
}
 digNumber(10, 15);   
 //চ্যালেঞ্জ 5
 function total(arr) {
    let sum= 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum;
 }
 let number = [10, 12, 15, 20, 30, 40,50]
 console.log("অ্যারের যোগফল:",total(number));