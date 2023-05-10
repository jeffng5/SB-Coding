function sortedFrequency(arr, n) {
    count=0
    for (let ele of arr) { 
        if (ele == n) {count+=1}

    }
    return count
}

module.exports = sortedFrequency