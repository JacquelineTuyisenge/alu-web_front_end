function divideBy(firstNumber){
    return function (secondNumber){
        return secondNumber / firstNumber;
    }
}
function addBy (firstNumber){
    return function (secondNumber){
        return firstNumber + secondNumber;
    }
}

// addBy100, that uses the function addBy with the number 100
const addBy100 = addBy(100);
console.log(addBy100(20)); // returned 120
// addBy1000, that uses the function addBy with the number 1000
const addBy1000 = addBy(1000);
// divideBy10, that uses the function divideBy with the number 10
const divideBy10 = divideBy(10);
// divideBy100, that uses the function divideBy with the number 100
const divideBy100 = divideBy(100);