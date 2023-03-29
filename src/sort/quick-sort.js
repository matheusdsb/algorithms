function switchValues(array, indexA, indexB) {
    const temp = array[indexA]
    array[indexA] = array[indexB]
    array[indexB] = temp
}

async function removeLesser(array, pivotValue) {
    const result = []
    let i = array.length - 1;
    while(i >= 0) {
        if(array[i] <= pivotValue) {
            const lastIndex = array.length - 1
            switchValues(array, lastIndex, i)
            const removedItem = array.pop()
            result.push(removedItem)
        }        
        i--
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
    const lastIndex = array.length - 1
    const pivotIndex = getRandomIndex(array.length)
    const pivotValue = array[pivotIndex]
    switchValues(array, lastIndex, pivotIndex)

    const pivot = array.pop()
    const lesser = await removeLesser(array, pivotValue);
    return [...await recursiveSort(lesser), pivot, ...await recursiveSort(array)]
}

module.exports = class QuickSort {
    static async sort(array) {
        const start = new Date();
        const result = await recursiveSort(array)
        const end = new Date()
        const totalTime = end.getTime() - start.getTime();
        console.log(`quicksort took ${totalTime} miliseconds`)
        return result
    }
}