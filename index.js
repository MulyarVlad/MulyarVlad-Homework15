function removeElement(arr, element) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === element) {
        arr.splice(i, 1);
      }
    }
  }
  
  const array = ["n", "d", "f", "w", "m", "a", "l"];
  
  removeElement(array, "n");
  
  console.log(array);