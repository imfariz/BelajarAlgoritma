const array = [14, 33, 27, 10, 35, 19, 42, 44];

console.log(array);

// Sorting Algorithm
const selectionSort = (array, ascending) => {
    for(let index = 0; index < array.length; index++) {
        let temporaryNumber = array[index];
        let lowerIndex = index;
        for(let innerIndex = index+1; innerIndex < array.length; innerIndex++) {
            if(!ascending) {
                if(array[innerIndex] < temporaryNumber) {
                    lowerIndex = innerIndex;
                }
            } else {
                if(array[innerIndex] > temporaryNumber) {
                    lowerIndex = innerIndex;
                }
            }
        }
        array[index] = array[lowerIndex];
        array[lowerIndex] = temporaryNumber;
    }
    return array;
}

const bubbleSort = (array, ascending) => {
    for (let index = 0; index < array.length; index++) {
        for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
            let temporaryNumber = array[innerIndex];
            if(!ascending) {
                if (array[innerIndex] > array[innerIndex+1]) {
                    array[innerIndex] = array[innerIndex+1];  
                    array[innerIndex+1] = temporaryNumber;
                }
            } else {
                if (array[innerIndex] < array[innerIndex+1]) {
                    array[innerIndex] = array[innerIndex+1];  
                    array[innerIndex+1] = temporaryNumber;
                }
            }
        }
    }
    return array;
}

const insertionSort = (array, ascending) => {
    for(let index = 0; index < array.length; index++) {
        let temporaryNumber = array[index];
        if(!ascending) {
            if (temporaryNumber > array[index+1]) {
                array[index] = array[index+1];
                array[index+1] = temporaryNumber;
                for (let innerIndex = index; innerIndex > 0; innerIndex--) {
                    let innerTemporaryNumber = array[innerIndex];
                    if (array[innerIndex-1] > innerTemporaryNumber) {
                        array[innerIndex] = array[innerIndex-1];
                        array[innerIndex-1] = innerTemporaryNumber;
                    }
                }
            }
        } else {
            if (temporaryNumber < array[index+1]) {
                array[index] = array[index+1];
                array[index+1] = temporaryNumber;
                for (let innerIndex = index; innerIndex > 0; innerIndex--) {
                    let innerTemporaryNumber = array[innerIndex];
                    if (array[innerIndex-1] < innerTemporaryNumber) {
                        array[innerIndex] = array[innerIndex-1];
                        array[innerIndex-1] = innerTemporaryNumber;
                    }
                }
            }
        }
    }
    return array;
}

console.log(insertionSort(array));