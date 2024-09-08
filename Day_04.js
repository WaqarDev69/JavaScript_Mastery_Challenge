//Day_04 : check the type of triangles

const checkTriangleType = (a, b, c) => {
    if (a === b && b === c) {
        return 'Equilateral'
    } else if (a === b || b === c || c === a) {
        return 'Isoceles'

    } else {
        return 'Scalene'
    }

}
console.log(checkTriangleType(4, 4, 4)) //if all sides are same 
console.log(checkTriangleType(4, 5, 4)) //if Two sides are same 
console.log(checkTriangleType(4, 5, 6)) //if None of the sides are same