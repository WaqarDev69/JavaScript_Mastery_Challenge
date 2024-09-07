// Day_03 : Find the Count of a specific charector

const totalCount = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();
    totalcount = word.split('').reduce((acc, currChar) => {
        if (currChar === char) {
            acc++
        }
        return acc
    }, 0)

    return totalcount
}
console.log(totalCount('helloworld', 'L')) // output: 3