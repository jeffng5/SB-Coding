function countZeroes(arr) {
    count = 0
    for (let i = 0; i<arr.length; i++){
        if (arr[i]==0) {
            count+=1
        }   
    } 
}

module.exports = countZeroes