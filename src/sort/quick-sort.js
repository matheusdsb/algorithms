function removeLesser(array, pivot) {
    const result = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] <= pivot) {
            const removedItem = array.splice(i, 1)[0]
            result.push(removedItem)
            i--;
        }
    }
    return result
}

function recursiveSort(array) {
    if(array.length < 2) {
        return array
    }
    const pivot = array.pop()
    const lesser = removeLesser(array, pivot);
    const greater = [...array]
    return [...recursiveSort(lesser), pivot, ...recursiveSort(greater)]
}

module.exports = class QuickSort {
    static sort(array) {
        const start = new Date();
        const result = recursiveSort(array)
        const end = new Date()
        const totalTime = end.getTime() - start.getTime();
        console.log(`quicksort took ${totalTime} miliseconds`)
        return result
    }
}