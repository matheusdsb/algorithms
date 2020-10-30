const readline = require("readline");
const arrayHelper = require("./src/helpers/array-helper");
const binarySearch = require('./src/search/binary-search');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const recursiveQuestion = () => {
    rl.question("Please enter a valid prime number less than 100 ", function(input) {
       
        const inputAsNumber = parseInt(input);        

        if(!isNaN(inputAsNumber)) {
            const array = arrayHelper.getPrimeNumbersLessThan100();
            const index = binarySearch.findIndexOfNumberInSortedArray(inputAsNumber, array);

            if(index >= 0) {
                console.log(inputAsNumber, ' found at index ', index);
            } else {
                console.error(inputAsNumber, ' is not a valid prime number between 0 and 100');
            }

            return rl.close();
        }        
        
        recursiveQuestion();
    });
}


recursiveQuestion();

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});