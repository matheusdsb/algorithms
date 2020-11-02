const readline = require("readline");
const arrayHelper = require("./src/helpers/array-helper");
const binarySearch = require('./src/search/binary-search');
const insertionSort = require('./src/sort/insertion-sort');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let array = null;
let searchedValue = null;

function generateAndSortArray(size) {
    let array = generateArray(size);
    return sortArray(array);
}

function generateArray(size) {
    console.log('generationg a random array of', size, 'items...');
    const array = arrayHelper.generateRandomArrayOfNumbers(size);
    console.log('generated array:', array);
    return array;
}

function sortArray(array) {
    console.log('sorting the generated array...');
    insertionSort.sort(array);
    console.log('array afte sorting', array);
    return array;
}

function findIndexValueInArray(value, array) {
    const index = binarySearch.findIndexOfNumberInSortedArray(value, array);

    if(index >= 0) {
        console.log(value, 'found at index', index);
    } else {
        console.error(value, 'not found');
    }
}

doFirstQuestion = () => {
    rl.question("Lets create a random array. Please enter how many items it will have \n", function(arraySizeInput) {
    
        const arraySizeAsNumber = parseInt(arraySizeInput);      
        
        if(isNaN(arraySizeAsNumber)) {
            console.error(arraySizeInput, 'is not a valid number');
            rl.close();
        }
    
        array = generateAndSortArray(arraySizeAsNumber);
        doNextQuestion(); 
    });
}

doNextQuestion = () => {
    rl.question("\n\nEnter a number to be found in the array\n", function(searchedValueInput) {

        const searchedValueAsNumber = parseInt(searchedValueInput);

        if(isNaN(searchedValueAsNumber)) {
            console.error(searchedValueInput, 'is not a valid number');
            rl.close();
        }

        searchedValue = searchedValueAsNumber;        
        return rl.close();
    });  
}

rl.on("close", function() {

    if(array && searchedValue) {
        findIndexValueInArray(searchedValue, array);
    }

    console.log("\nBYE BYE !!!");
    process.exit(0);
});

doFirstQuestion();
