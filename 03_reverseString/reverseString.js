const reverseString = function(string) {
    let stringLett = string.split('');
    let reverseLett = stringLett.reverse();
    return reverseLett.join('');
};

// Do not edit below this line
module.exports = reverseString;
