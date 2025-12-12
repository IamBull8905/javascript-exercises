const removeFromArray = function(arr,removableItem, ...otherItems) {
    otherItems.push(removableItem); // loop through this array and check if we need to remove items]
    let newArray = [];
    for (const item of arr) {
        if (otherItems.includes(item) === false) {
            newArray.push(item);
        }
    }
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
