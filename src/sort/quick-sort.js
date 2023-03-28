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

function getRandomIndex(arrayLength) {
    const randomNumber = Math.random() * arrayLength
    const numberRoundedFlor = Math.floor(randomNumber)
    const limit = arrayLength -1
    return numberRoundedFlor < limit ? numberRoundedFlor : limit
}

async function recursiveSort(array) {
    if(array.length < 2) {
        return array
    }
    const pivotIndex = getRandomIndex(array.length)
    const pivot = array.splice(pivotIndex, 1)[0]
    const lesser = removeLesser(array, pivot);
    return [...await recursiveSort(lesser), pivot, ...await recursiveSort(array)]
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