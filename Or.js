function isArraysIdentical(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  function isArrayInArray(mainArr, checkArr) {
    for (let i = 0; i < mainArr.length; i++) {
      if (mainArr[i] === checkArr[0]) {
        if (isArraysIdentical(checkArr, mainArr.splice(i, checkArr.length)))
          return true;
      }
    }
    return false;
  }
  console.log(isArrayInArray([1, 2, -3, 4, 1, 8, 5], [1, 2, -3, 8]));