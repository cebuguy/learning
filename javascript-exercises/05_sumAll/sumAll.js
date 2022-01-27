const sumAll = function(num1,num2) {
    let num3, num4, sum = 0;
    if(num1 < 0 || num2 < 0 || typeof num1 !== 'number' || 
    typeof num2 !== 'number') {
        return 'ERROR';
    }

    if(num1 > num2) {
        num3 = num2;
        num4 = num1; 
    } else {
        num3 = num1;
        num4 = num2;
    }

    for(let i = num3; i <= num4; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
