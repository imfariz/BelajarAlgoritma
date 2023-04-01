const array = [14, 33, 27, 10, 35, 19, 42, 44];

console.log(array);

// Sorting Algorithm
const selection = (array, ascending) => {
    for(let index = 0; index < array.length; index++) {
        for(let innerIndex = index+1; innerIndex < array.length; innerIndex++) {
            let temporaryNumber = array[index];
            if(ascending) {
                if(array[innerIndex] < temporaryNumber) {
                    array[index] = array[innerIndex];
                    array[innerIndex] = temporaryNumber;
                }
            } else {
                if(array[innerIndex] > temporaryNumber) {
                    array[index] = array[innerIndex];
                    array[innerIndex] = temporaryNumber;
                }
            }
        }
    }
    return array;
}

console.log(selection(array, false));