const array1 = [1,2,-3,4,1,8,5]
const array2 = [1,8]
const array3 = [1,2,-3]
const array4 = [1,2,-3,8]

const arrSearch = (arr1,arr2) => {

    for(let i=0; i<arr2.length; i++){
        if(sliceArr(arr1,arr2)[i] == arr2[i]){
            return true
        }
        else{arrSearch(sliceArr(arr1.slice(arr2.length),arr2))}
    }
}

const sliceArr = (arr1,arr2) => {
    let tempArr;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] == arr2 [0]){
            tempArr = arr1.slice(i,arr2.length)
            // console.log( "temp arr:", tempArr)
            // console.log("arr1:" ,arr1)
            // sliceArr((arr1.slice(arr2.length)),arr2)
            return tempArr
        }else{return false}
    }
}
// console.log(arrSearch(array1,array4))
// console.log(sliceArr(array1,array3))

