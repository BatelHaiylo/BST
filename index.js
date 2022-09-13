const getNumIndexFromDefendingArray = (sortedNumArray,num) => {
    const midIndex =(Math.floor((sortedNumArray.length)/2))
    
    if(sortedNumArray.length == 1)return false;
    const leftArr = sortedNumArray.slice(0,midIndex)
    const rightArr = sortedNumArray.slice(midIndex)
    console.log(midIndex)
    console.log(leftArr)
    console.log(rightArr)

    if(sortedNumArray[midIndex] === num) return true
    if(num < sortedNumArray[midIndex])
      return  getNumIndexFromDefendingArray(leftArr,num)
      return getNumIndexFromDefendingArray(rightArr,num)

     
}
const givenArr = [3,5,7,12,17,24]
console.log(getNumIndexFromDefendingArray(givenArr,4))
