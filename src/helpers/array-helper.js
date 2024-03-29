module.exports = class ArrayHelper  {

    static getPrimeNumbersLessThan100() {
        return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
            41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    }

    static async generateRandomArrayOfNumbers(numberOfItems) {
        const randomArray = [];

        for(var i = 1; i <= numberOfItems; i++) {
            const randomNumber = Math.floor(Math.random() * 10 * numberOfItems); 
            randomArray.push(randomNumber);
        }

        return randomArray;
    }
}
