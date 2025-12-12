const repeatString = function(word,num) {
    if (num < 0) return "ERROR";
    let newString = "";
    for (let i = 0; i < num; i++) {
        newString = newString + word;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
