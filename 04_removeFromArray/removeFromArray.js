const removeFromArray = function(array, indexRemove) {
    let indexNum = array.indexOf(indexRemove);
    array.splice(indexNum, 1);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
