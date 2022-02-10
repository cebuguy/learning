const palindromes = function (string) {
    //take away spaces/punctuation and make lower case in newString copy
    let newString = string.replaceAll(' ','').replaceAll('!','').replaceAll('.','').replaceAll(',','').toLowerCase();
    
    //split into array
    let array = newString.split('');

    //reverse array and combine into a string
    let reverseString = [...array].reverse().join('');
    
    if(newString === reverseString) return true;
    else return false;

};

// Do not edit below this line
module.exports = palindromes;
