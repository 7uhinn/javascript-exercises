const reverseString = function(text) {
    let textLength = text.length;
    let str = '';

    for (let i = textLength-1; i >= 0; i--) {
        str += text[i];
    }

    return str;
};

// Do not edit below this line
module.exports = reverseString;
