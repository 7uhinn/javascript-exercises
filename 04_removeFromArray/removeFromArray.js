const removeFromArray = function(arr, ...args) {
    let finalArray = [];

    for (const item of arr) {
        if(!args.includes(item)){
            finalArray.push(item);
        }
    }

    return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
