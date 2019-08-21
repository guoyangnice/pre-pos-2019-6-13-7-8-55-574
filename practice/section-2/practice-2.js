'use strict';

function countSameElements(collection) {
  var result = [];
  var map = new Map();
  var c;
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].length == 1) {
      map.set(collection[i], map.get(collection[i]) == null ? 1 : map.get(collection[i]) + 1);
    } else {
      //这里不能用，因为取的数字不是number,是字符串,转一下就行了
      //map.set(collection[i][0], map.get(collection[i][0]) == null ? 1 : map.get(collection[i][0]) + collection[i][2]);
      //map.set(collection[i][0], collection[i][2]);
      c = Number(collection[i][2]);
      map.set(collection[i][0], map.get(collection[i][0]) == null ? c : map.get(collection[i][0]) + c);
    }
  }

  map.forEach(function (key, value) {
    result.push({ key: value, count: key })
  });

  return result;
}
