const sumAll = function(intA, intB) {
    const rangeArray = [];
    let finalSum;
    if (Number.isInteger(intA && intB)) {
        if (intA > intB) {
            for (i = intA; i <= intA; i--) {
                rangeArray.push(i);
            }
        } else {
            for (i = intA; i >= intA; i++) {
                rangeArray.push(i);
            }
        }
        for (i = 0; i < rangeArray.length; i++) {
            finalSum += rangeArray[i];
        }
    } else {
        return 'ERROR';
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
