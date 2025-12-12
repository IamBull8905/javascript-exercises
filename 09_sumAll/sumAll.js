const sumAll = function(bottom,top) {
    if ((bottom % 1 !== 0 || bottom < 0 || typeof bottom !== "number") || (top % 1 !== 0 || top < 0 || typeof top !== "number")) { 
        return "ERROR";
    }
    let numbers = [];
    if (bottom > top) {
        [bottom, top] = [top, bottom];
    }
    for (let i = bottom; i<top+1;i++) {
        numbers.push(i);
    }
    const sumOfAll = numbers.reduce((total, currentItem) => {return total += currentItem});

    return sumOfAll;
};

// Do not edit below this line
module.exports = sumAll;
