// Day_09 

const findUniqueChar = (str) => {
    let uniqueChars = []
    let lowerStr = str.toLowerCase()
    for (let char of lowerStr) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char)
        }
    }
    return uniqueChars
}
console.log(findUniqueChar("hello"))



