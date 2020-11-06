function average(array) {
    x = 0
    array.forEach(element => {
        x += element
    });
    return (x/array.length)
}

console.log(average([1,2,3]))


function median(array) {
    if (array.length % 2 === 0){
        return (array[(array.length)/2 -1] + array[(array.length)/2 ]) / 2
    }
    else {
        return array[(array.length +1) / 2 -1]
    }
}

console.log(median([1,2,3,4]))

function mode(array) {
    counter = {}
    x = 0
    y = 0
    array.forEach(element => {
        if (counter[element] > 0){
            counter[element] += 1
        }
        else counter[element] = 1
    });
    for (const key in counter) {
        if (counter.hasOwnProperty(key)) {
            const element = counter[key];
            if (element > x){
                x = element
                y = key
            }
        }
    }
    return y
}

console.log(mode([1,1,2,3]))