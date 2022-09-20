function arrSearch(array1, array2) {
    //setting variables
    let similarCounter = 0;
    let lastIndex = 0;
    let lastI = 0;
    //looping through big array
    for (let i = 0; i < array1.length; i++) {
        //compering arrays origins
      if (array1[i] === array2[lastIndex]) {
        //every time they match raise counter & last index variables
        similarCounter++;
        lastIndex++;
        // nesting if statement checking if counter equals small array length => means array is included
        if (similarCounter === array2.length) return true;
        //else when counter is not equals to small array length => means array is not fully included
      } else {
        //resetting counter & last index variables => cus were gonna loop again 
        //reducing the counter variable => so we wont miss a check
        i -= similarCounter;
        similarCounter = 0;
        lastIndex = 0;
      }
    }
    return false;
  } //[1,2,3,4,1,1,1,2,3,4,5],[1,1,2,3,4,5]