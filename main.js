var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var favourite_place = ['Dubai', 'Canada', 'islamabad', 'bhawalpur', 'lahore'];
console.log("original   " + favourite_place);
console.log("copy   " + __spreadArray([], favourite_place, true).sort());
console.log("original   " + favourite_place);
console.log("copy  " + __spreadArray([], favourite_place, true).sort().reverse());
console.log("original " + favourite_place);
console.log("copy  " + __spreadArray([], favourite_place, true).sort());
