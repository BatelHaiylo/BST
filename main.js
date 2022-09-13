const getIsSecondArrayIncludesInFirstArray = (firstArr,secondArr) =>{
    let testArr = []
    if(secondArr.length != 0){
        for(i=0; i<firstArr.length; i++){
            if(firstArr[i] == secondArr[0]){
                testArr = firstArr.slice(1)
                return getIsSecondArrayIncludesInFirstArray(testArr,secondArr.slice(1))
            }
            if(testArr == secondArr){
                return true
            }
        }
    }
    return false
}

console.log(getIsSecondArrayIncludesInFirstArray([1,2,-3,4,1,8,5], [1,8]))
console.log(getIsSecondArrayIncludesInFirstArray([1,2,-3,4,-1,8,5], [1,8]))