function addsUp(array, value) {
  positions = [];
  array.forEach((element, index) => {
    array.forEach((element2, index2) => {
      if (element + element2 === value) {
        positions.push([index, index2]);
      }
    });
  });
  for (let index = 0; index < positions.length; index++) {
    positions.splice(index + 1, 1);
  }
  return positions;
}

console.log(addsUp([2, 7, 11, 15, 2], 9));
