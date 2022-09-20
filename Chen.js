function isArrayInsideArray(arr1,arr2) {
    for(let i=0; i<arr1.length; i++){
        if(arr2[0] == arr1[i]){
            for(let j=0; j<arr2.length; j++){
                if(arr2[j] !== arr1[i+j]){
                    break
                }
                else if(arr[j] == arr1[i+j] && j === arr2.length-1){
                    return true
                }
            }
        }
    }return false
}
console.log(isArrayInsideArray([0,5,8,4,2,1],[8,4,2]))