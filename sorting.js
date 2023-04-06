const array = [14, 33, 27, 10, 35, 19, 42, 44, 75];

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

const mergeSort = (array, ascending) => {

    if (array.length <= 1) return array;

    const midPoint = Math.floor(array.length/2);

    // Rekursif
    let leftArray = mergeSort(array.slice(0, midPoint), ascending);
    let rightArray = mergeSort(array.slice(midPoint), ascending);

    return mergeArray(leftArray, rightArray, ascending);
}

// Helper Function

const mergeArray = (leftArray, rightArray, ascending) => {
    let sortedArray = [];

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] < rightArray[0] && !ascending) {
            sortedArray.push(leftArray.shift());
        }  else {
            sortedArray.push(rightArray.shift());
        }
    }
    return [ ... sortedArray, ... leftArray, ... rightArray ];
}

// Recursive Exercise

const factorial = number => {
    if (number < 1)  return 1;
    return number * factorial(number-1);
}

const fibonacci = (number, nilaiPertama, nilaiKedua) => {
    if (number == 1) return nilaiPertama;
    if (number == 2) return nilaiKedua;

    return fibonacci(number-1, nilaiPertama, nilaiKedua) + fibonacci(number-2, nilaiPertama, nilaiKedua);
}

console.log(fibonacci(8, 4, 7));