const removeFromArray = function(array, ...indexRemove) {
    for (let indexIndiv of indexRemove) {
        for (let i = 0; i < array.length; i++) {
            if (i === indexIndiv) {
                let indexNum = array.indexOf(indexIndiv);
                array.splice(indexNum, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
