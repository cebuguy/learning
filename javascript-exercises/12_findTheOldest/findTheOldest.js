const findTheOldest = function(array) {
    array.sort( (previous,current) => {
        const currentYear = new Date();
        if(previous.yearOfDeath === undefined) previous.yearOfDeath = currentYear.getFullYear();
        if(current.yearOfDeath === undefined) current.yearOfDeath = currentYear.getFullYear();
        return (current.yearOfDeath - current.yearOfBirth) - (previous.yearOfDeath - previous.yearOfBirth)
    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
