let values = []
let x = 0

function sumZero(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let index = 0; index < array.length; index++) {
            const element2 = array[index];
            if (element + element2 === 0) {
                values.push(element)
                values.push(element2)
                break
            }
        }
        break
    }
}
sumZero([5, 1, 2, 3])
console.log(values)