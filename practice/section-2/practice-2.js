'use strict';

function countSameElements(collection) {
  var result = []
  var map = new Map()
  var r,c
  for(var i = 0; i < collection.length;i++){
    if(collection[i].legnth == 1){//js可判断每个字符的长度
      if(map.get(collection[i]) == null){
        map.set(collection[i],1)
      }else{
        map.set(collection[i],map.get(collection[i])+1)
      }
    }else{
      r = collection[i][0]
      c = Number(collection[i][2])
      if(map.get(r) == null){
          map.set(r,c)
      }else{
          map.set(r,map.get(r)+c)
      }
    }
  }

  map.forEach(function(key,value){
    result.push({key:value,count:key})
  });

  return result;
}
