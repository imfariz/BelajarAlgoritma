// Helper to giving mystery number randomly from 1 to 100
const mysteryNumber = Math.floor(Math.random() * 100) + 1;

const binarysearch = (min, max, mysteryNumber) => {
    // Guess Number automation with average of range
    let guessNumbers = Math.floor((min+max)/2);

    if(guessNumbers > mysteryNumber) {
        console.log("Mystery Number less than " + guessNumbers);
        binarysearch(min, guessNumbers, mysteryNumber);
    }
    else if(guessNumbers < mysteryNumber) {
        console.log("Mystery Number more than " + guessNumbers);
        binarysearch(guessNumbers, max, mysteryNumber);
    } else {
        console.log("Your Guessed Right. The mystery number is " + mysteryNumber)
        return mysteryNumber
    }
}

binarysearch(1, 100, mysteryNumber);