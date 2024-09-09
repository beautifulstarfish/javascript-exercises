let finalString;

const repeatString = function(string, num) {
    let finalString = string;
    for (let i = 1; i <= num; i++) {
        return finalString += string; 
    }
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
