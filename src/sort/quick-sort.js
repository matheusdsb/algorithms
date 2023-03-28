module.exports = class QuickSort {
    static sort(array) {
        if(array.length < 2) {
            return array
        }
        const pivot = array.pop()
        const lesser = this.removeLesser(array, pivot);
        const greater = [...array]
        return [...this.sort(lesser), pivot, ...this.sort(greater)]
    }

    static removeLesser(array, pivot) {
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
}