// 1. Writing a polyfill for Array.reject -> Google online what reject does and right a polyfill.

const arrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function findNotValue(char) {
    if (char % 2 != 0) {
        return char;
    }
}

Array.prototype.myReject = function myReject(callback) {
    var updatedArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            updatedArray.push(callback(this[i]));
        }
    }

    return updatedArray;
}

var newArray = arrData.myReject(findNotValue);
console.log(newArray);

