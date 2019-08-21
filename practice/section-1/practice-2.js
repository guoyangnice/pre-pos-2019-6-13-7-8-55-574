'use strict';

function collectSameElements(collectionA, collectionB) {
    var collectionC = [];
    var result = [];
    collectionC = collectionB[0];
    for(let i = 0; i< collectionA.length;i++){
        for(let j = 0; j < collectionC.length;j++){
            if(collectionA[i]==collectionC[j]){
                result.push(collectionA[i]);
            }
        }
    }
    return result
}