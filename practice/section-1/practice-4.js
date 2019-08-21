'use strict';

function collectSameElements(collectionA, collectionB) {
    var result = [];
    var collectionC = collectionB.value;
    var collectionD =[]
    for(let i = 0; i < collectionA.length;i++){
        collectionD.push(collectionA[i].key);
    }

    //第一种方法
    result = collectionD.filter(function(v){
        return collectionC.indexOf(v)!==-1 // 利用filter方法来遍历是否有相同的元素
    })
    
    return result;
}