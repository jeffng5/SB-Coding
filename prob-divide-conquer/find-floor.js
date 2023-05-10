function findFloor(arr, x) {
    leftIdx=0
    rightIdx = arr.length - 1
    while (leftIdx <=rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx)/2)
        let middleVal = arr[middleIdx]
        if (middleVal < val){
            leftIdx = middleIdx +1;
        } else if (middleVal > val) {
            rightIdx= middleIdx -1; 
        } else {
            return arr[middleIdx]
        }

    }    
    return -1
  
}

module.exports = findFloor