const sumAll = function(num1,num2) {
    let total = 0;
    let n1 = 0;
    let n2 = 0;

    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    }

    if(num2>num1) {
        n1 = num1;
        n2 = num2;
    } else {
        n1 = num2;
        n2 = num1;
    }

    for (let i = n1; i <= n2; i++){
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
