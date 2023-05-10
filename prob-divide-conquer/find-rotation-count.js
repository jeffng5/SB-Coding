function findRotationCount(arr) {
    for (let n=0; n<arr.length; n++){
        if (arr[n] == Math.min(...arr))
        {return n}
  
}
}

module.exports = findRotationCount