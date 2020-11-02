module.exports = class InsertionSort {

    static insert(array, rightIndex, value) {
        for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
            array[j + 1] = array[j];
        }   
        array[j + 1] = value;
    }

    static sort(array) {
        for(var i = 1; i < array.length; i++) {
            this.insert(array, i -1, array[i]);
        }
        return array;
    }
}