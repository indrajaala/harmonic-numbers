function generateCubes(columns, cubes = [1]) {
    if (columns > 0) {
        cubes.push(cubes[cubes.length - 1] * 3)
        columns -= 1
        return generateCubes(columns, cubes)
    } else {
        return cubes
    }
}

function generateSquaresOfCubes(rows, cubes, squares = [cubes]) {
    if (rows > 0) {
        squares.push(cubes.map((val, index) => val * 2))
        rows -= 1
        return generateSquaresOfCubes(rows, squares[squares.length - 1], squares)
    } else {
        return squares
    }
}

export function generateHarmonicNumbers(rows, columns) {
    const rowsData = generateCubes(columns);
    const columnsData = generateSquaresOfCubes(rows, generateCubes(columns))
    let numbers = [];
    let harmonicNumbers = [];
    for (let [indexX, column] of columnsData.entries()) {
        numbers.push(column.map((val, index) => {
            return {[rowsData[index]]: val}
        }))
    }

    for (let i = 1; i < numbers.length - 1; i++) {
        harmonicNumbers.push(Object.assign({}, ...numbers[i]))
    }
    return harmonicNumbers;
}

// console.log(generateHarmonicNumbers(10, 10))