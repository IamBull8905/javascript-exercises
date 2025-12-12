const fibonacci = function(num) {
    let fibbNumber = Number(num);
    let final = null;
    if(fibbNumber < 0) {
        return "OOPS";
    } else if (fibbNumber === 0) {
        return 0;
    } else if (fibbNumber === 1) {
        return 1;
    } else {
        let previous = 0;
        let current = 1;
        for(let i = 2; i <= fibbNumber;i++) {
            final = current+previous;
            previous = current;
            current = final;
        }
        return final;
    }
};

// Do not edit below this line
module.exports = fibonacci;
