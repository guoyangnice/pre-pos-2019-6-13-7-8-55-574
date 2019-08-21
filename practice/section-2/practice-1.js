'use strict';
function countSameElements(collection) {
    var result = [];
    var map = new Map();
    for (let i = 0; i < collection.length; i++) {
        map.set(collection[i], map.get(collection[i]) == null ? 1 : map.get(collection[i]) + 1);
    }

    map.forEach(function (key, value) {
        result.push({ key: value, count: key })
    });

    return result;
}