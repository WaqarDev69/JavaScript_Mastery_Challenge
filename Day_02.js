// Day 02 : Convert the first letter of every word in to Capital Letter , and add # in the starting


let generateHash = (str) => {
    if (str.trim().length === 0 || str.length > 280) {
        return false
    }

    let word = str.split(' ')
    let firstWord = word.map((currElem) => {
        return currElem.replace(currElem[0], currElem[0].toUpperCase())
    })

    console.log(`#${firstWord.join('')}`); //Result
}

generateHash('my Name is waqar khan')