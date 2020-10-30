module.exports = class BinarySearch {

    static getMiddleIndex(min, max) {
        const average = (min + max) / 2;
        return Math.floor(average);
    }

    static findIndexOfNumberInSortedArray(searchedValue, array){

        let minIndex = 0;
        let maxIndex = array.length - 1;
        let guessedIndex;
        let attempts = 0;

        while(maxIndex >= minIndex) {
            guessedIndex = this.getMiddleIndex(minIndex, maxIndex);
            const guessedValue = array[guessedIndex];
            attempts++;

            console.info('guessing at index ', guessedIndex);

            if(guessedValue === searchedValue) {
                console.info('found attempting ', attempts, ' times');
                return guessedIndex;
            }

            if(guessedValue > searchedValue) {
                maxIndex = guessedIndex -1;
            } else {
                minIndex = guessedIndex + 1;
            }
        }

        return -1;
    }
}