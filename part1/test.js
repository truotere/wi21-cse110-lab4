
/*
if (2 == true) {
    console.log('Hello!');
} else if (2) {
    console.log('How are you?');
} else {
    console.log('Goodbye');
}
*/

/*
function modifyArray(array, callback) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], function(x) {
            return x * 2;
        }));
    }
    return newArr;
}

function doSomething(num, callback) {
    return callback(num + 2);
}

console.log(modifyArray([1,2,3],doSomething));
*/

/*
function printNums() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}

printNums();
*/