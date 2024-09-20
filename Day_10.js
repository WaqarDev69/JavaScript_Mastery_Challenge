// Day_10 : find the second largest Number in the Array 


const findSecondLargestNum = (arr) => {

    let newArr = arr.sort((a, b) => b - a)
    console.log(newArr);
    return newArr[1]

}
console.log(findSecondLargestNum([6, 1, 2, 4, 5, 3, 10]))