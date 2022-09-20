// const isArrayIncludeArray = (firstArray,secondArray) => {
//     let sameLengthArray=[]
//     for(i=0; i<firstArray.length; i++){
//         if(secondArray[0] == firstArray[i]){
//             sameLengthArray =firstArray.slice(i)
//             i=0
//             if(sameLengthArray[i] == secondArray[i]){
//                 isArrayIncludeArray((sameLengthArray.slice(1)),(secondArray.slice(1)))
//             }
//         }
//     }return false
// }
const givenArr = [3,5,7,12,17,24]
// console.log(isArrayIncludeArray(givenArr,[1,2,3,4]))
console.log(isArrayIncludeArray(givenArr,[17,24]))
// console.log(isArrayIncludeArray(givenArr,[7,17,24]))


let num = 0
function isArrayIncludeArray(firstArray,secondArray){
    let tempArr = []
    if(secondArray.length<firstArray.length){
        for(i=0; i<firstArray.length; i++){
            if(secondArray[0] == firstArray[i]){
                tempArr =firstArray.slice(i)
                const someFunc=()=>{
                    if(num<secondArray.length){
                    if(tempArr[num]==secondArray[num]){
                        if(num==secondArray.length-1){
                            return true
                        }
                        num++
                        someFunc()
                    }
                }
                }
            }
        }

    }else{return false}
}