const sumAll = function(intA, intB) {
    const rangeArray = [];
    let finalSum = 0;
    if (Number.isInteger(intA) && Number.isInteger(intB) && intA >= 0 && intB >= 0) {
        if (intA > intB) {
            for (i = intA; i >= intB; i--) {
                rangeArray.push(i);
            }
        } else {
            for (i = intA; i <= intB; i++) {
                rangeArray.push(i);
            }
        }
    } else {
        return 'ERROR';
    }
    for (i = 0; i < rangeArray.length; i++) {
        finalSum += rangeArray[i];
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
