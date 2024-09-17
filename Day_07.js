// Day_07 : arrange array in ascending order 

function sortAscending(arr) {
    return arr.sort((a, b) => a - b)
}
console.log(sortAscending([4, 2, 3, 1, 5]))