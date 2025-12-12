const findTheOldest = function(arr) {
    let oldestPerson = arr.reduce((currentOldest,person) => {
        let oldestAge = (currentOldest.yearOfDeath ||new Date().getFullYear())  - currentOldest.yearOfBirth;
        let currentAge = (person.yearOfDeath ||new Date().getFullYear()) - person.yearOfBirth;
        if (currentAge > oldestAge) {
            return person;
        } else {
            return currentOldest;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
