const palindromes = function (string) {
    const allowed = "abcdefghijklmnopqrstuvwxyz1234567890"
    let newStr = string.toLowerCase().split("").filter((char => allowed.includes(char))).join("");
    if (newStr == (newStr.split("").reverse().join(""))) {
        return true;
    } else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
