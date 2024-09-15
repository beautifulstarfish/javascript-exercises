const removeFromArray = function(array, ...indexRemove) {
    let indices = [];
    for (let indexIndiv of indexRemove) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === indexIndiv) {
                indices.push(i);
            }
        }
    }
    for (let i = 0; i < indices.length; i++) {
        array.splice(indices[i], 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
