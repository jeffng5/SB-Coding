/** product: calculate the product of an array of numbers. */
// 1,2,3,4,5,6

function product(nums) {
  let arr = [...nums]
for (let i=0 ; i < arr.length; i++){
  nums[0] * nums[i+1]
  nums.shift()
  nums[0] * product(nums[i+1])
  i++
return nums[0] * product(nums[i+1])  
  }}
 


/** longest: return the length of the longest word in an array of words. */
const lengthOfWords=[]
function longest(words) {
  
  for (let n of words) {
    if (Array.isArray(n)) {
      longest(n)}
    {
      
    lengthOfWords.push(n.toString.length)
      }
      return Math.max.apply(null, lengthOfWords);
    }

  }  



/** everyOther: return a string with every other letter. */

function everyOther(str) {
  listA=[]
  for (let i=0; i< str.length; i+=2)
  listA.push(str[i])
  return listA.join("")

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length == 2){
    return str[0] == str[1]
  }
  if (str.length % 2 == 0){
  let pal = str.slice(0, (str.length/2))
  return pal.split("").reverse().join("") == pal}
  else {
  let oddPal = str.slice(0, (Math.floor(str.length/2)+1))
  return oddPal.split("").reverse().join("") == oddPal
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
 for (i = 0; i < arr.length; i++){
  if( arr.slice(i,).includes(val)){
    return i}
  else { return -1

  }
  }
 } 


/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  return str.split("").reverse().join("")
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  stringElements=[]

  for (let ele in obj.values)
  {if (Array.isArray(ele)){
    gatherStrings(ele)
  
  } 
    if (ele.length == 1) {
      if (typeof ele === 'string')
      stringElement.push(ele)
      return stringElement  
    } 
    
    
  }

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {


}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
