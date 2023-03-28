function insert(array, rightIndex, value) {
    for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }   
    array[j + 1] = value;
}
module.exports = class InsertionSort {
    static sort(array) {
        const start = new Date();
        for(var i = 1; i < array.length; i++) {
            insert(array, i -1, array[i]);
        }
        const end = new Date();
        const totalTime = end.getTime() - start.getTime();
        console.log(`insertion sort took ${totalTime} miliseconds`)
        return array;
    }
}