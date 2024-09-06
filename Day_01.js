//Day 01: Find the biggest Word in the string

//METHOD 1
const findLongestWord = (str) => {
    if (str.trim().length === 0) {
        return false
    }
    let words = str.split(' ').sort((a, b) => b.length - a.length)
    console.log(words.at(0));
}
findLongestWord('Waqar is the best Web Dev in the world')


//METHOD 2

const MethodTwo = (str) => {
    if (str.trim().length === 0) {
        return false
    }
    let word = str.split(' ')
    return word.reduce(
        (acc, currWord) => (
            acc.length > currWord.length ? acc : currWord

        ))

}
console.log(MethodTwo('This is the Method to get Biggest Word of the array'))